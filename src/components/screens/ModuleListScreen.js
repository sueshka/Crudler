import { Alert, LogBox,StyleSheet,Text } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList.js';
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';
import useLoad from '../API/useLoad.js';
import API from '../API/API.js';


export default function ModuleListScreen({navigation}) {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
    const modulesEndpoint = 'https://api.unibase.kuapps.uk/api/modules';
    const [modules, setModules,isLoading, loadModules] = useLoad(modulesEndpoint);
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
    <ButtonTray>
      <Button label = "Add" icon={<Icons.Add/>} onClick={goToAddModule}/>
      </ButtonTray>
        {isLoading && <Text>Loading...</Text>}
        <ModuleList modules={modules} onSelect={handleSelect}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {},
    
});
