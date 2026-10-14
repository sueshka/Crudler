import { ActivityIndicator, Alert, LogBox,StyleSheet,Text, View } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList.js';
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';
import useLoad from '../API/useLoad.js';
import API from '../API/API.js';
import useStore from '../store/useStore.js';
import { useEffect } from 'react';


export default function ModuleListScreen({navigation}) {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const loggedinUserKey = 'loggedinUser';
    const favouritesKey = 'moduleFavourites';
    
    const modulesEndpoint = 'https://api.unibase.kuapps.uk/api/modules';
    const [modules, setModules, isLoading, loadModules] = useLoad(modulesEndpoint);
    const [loggedinUser] = useStore(loggedinUserKey, null);
    const [favourites, saveFavourites] = useStore(favouritesKey,[]);

    const agumentModulesWithFavourites = () =>{
      const modifyModule= (module) => ({
        ...module, ModuleFavourite: favourites.includes(module.ModuleID),
      })
      const augmentedModules = modules.map(modifyModule);
      augmentedModules.length > 0 && setModules(augmentedModules);
    }

    useEffect (() => {
      agumentModulesWithFavourites();
    }, [isLoading, favourites]);

    const handleFavourite = (module) => {
        // Update the module state
        const isFavourite = !module.ModuleFavourite;
        const updateModule = (item) =>
          item.ModuleID === module.ModuleID ? { ...item, ModuleFavourite: isFavourite } : item;
        const updatedModuleList = modules.map(updateModule);
        setModules(updatedModuleList);

        // save the new favourites
        const updatedFavouritesList = updatedModuleList
          .filter((item) => item.ModuleFavourite)
          .map((item) => item.ModuleID);
        saveFavourites(updatedFavouritesList);
    };


    const handleSelect = (module) => navigation.navigate('ModuleView', {module, onDelete, onModify});
    
    const onDelete = async(module) => {
      const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
      const result = await API.delete(deleteEndpoint, module);
      if(result.isSuccess){
        loadModules(modulesEndpoint);
        navigation.goBack();
      }
      else{
         Alert.alert(result.message);
      }
    }

  
    const onAdd = async(module) => {
      const result = await API.post(modulesEndpoint, module);
      if(result.isSuccess){
        loadModules(modulesEndpoint);
        navigation.goBack();
      }
      else{
         Alert.alert(result.message);
      }
        
    };
    const goToAddModule = () => navigation.navigate('ModuleAdd', {onAdd});

    const onModify = async(module) => {
      const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
      const result = await API.put(putEndpoint, module);
      if(result.isSuccess){
        loadModules(modulesEndpoint);
        navigation.replace('ModuleView', { module, onDelete, onModify });
      }
      else{
         Alert.alert(result.message);
      }
    };

  return (
   <Screen>
    {loggedinUser && <Text style={styles.welcome}>Hi there {loggedinUser.UserFirstname}</Text>}
    <View style={styles.container}>
    <ButtonTray>
      <Button label = "Add" icon={<Icons.Add/>} onClick={goToAddModule}/>
      </ButtonTray>
        {isLoading && (
            <View style={styles.loading}>
              <Text>Retrieving records from {modulesEndpoint}</Text>
              <ActivityIndicator size="large" />
            </View>
          )}
          <ModuleList modules={modules} onSelect={handleSelect} onFav={handleFavourite}/>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    welcome:{
      marginTop:5,
      marginBottom:5
    },

    container: {
      gap:15
    },

    loading: {
      height:100,
      gap:20,
      justifyContent:'center',
      alignItems:'center',
    },

    
});
