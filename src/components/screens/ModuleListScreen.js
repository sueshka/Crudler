import { ActivityIndicator, Alert, LogBox,StyleSheet,Text, View } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList.js';
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';
import useLoad from '../API/useLoad.js';
import API from '../API/API.js';
import useStore from '../store/useStore.js';


export default function ModuleListScreen({navigation}) {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const loggedinUserKey = 'loggedinUser';
    
    const modulesEndpoint = 'https://api.unibase.kuapps.uk/api/modules';
    const [modules, ,isLoading, loadModules] = useLoad(modulesEndpoint);
    const [loggedinUser, saveLoggedinUser] = useStore(loggedinUserKey, null);
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
          <ModuleList modules={modules} onSelect={handleSelect}/>
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
