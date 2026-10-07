import { LogBox,StyleSheet } from 'react-native';
import { useState } from 'react';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';
import RenderCount from '../UI/RenderCount.js';



export default function ModuleListScreen({navigation}) {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
    let [modules, setModules] = useState(initialModules); //Delete only works if its let , const gives a read-only error
    const handleSelect = (module) => navigation.navigate('ModuleView', {module, onDelete});
    const handleDelete = (module) => {
      setModules(modules = modules.filter((item) => item.ModuleID !== module.ModuleID));};
    const onDelete = (module) =>{
      handleDelete(module);
      navigation.goBack();};

  return (
   <Screen>
    <RenderCount />
        <ModuleList modules={modules} onSelect={handleSelect}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {},
    
});
