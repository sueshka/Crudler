import { LogBox,StyleSheet } from 'react-native';
import { useState } from 'react';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';


export default function ModuleListScreen({navigation}) {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
    let [modules, setModules] = useState(initialModules); //Delete only works if its let , const gives a read-only error
    const handleSelect = (module) => navigation.navigate('ModuleView', {module, onDelete, onModify});
    const handleDelete = (module) => {
      setModules(modules = modules.filter((item) => item.ModuleID !== module.ModuleID));};
    const onDelete = (module) =>{
      handleDelete(module);
      navigation.goBack();};
    const handleAdd = (module) => setModules([...modules, module]);
    const onAdd = (module) => {
      handleAdd(module);
      navigation.goBack();
    }
    const goToAddModule = () => navigation.navigate('ModuleAdd', {onAdd});

    const handleModify = (updateModule) => setModules(
      modules.map((module) => (module.ModuleID == updateModule.ModuleID) ? updateModule : module)
    );

    const onModify = (module) => {
      handleModify(module);
      // navigation.navigate('ModuleListScreen');
      // navigation.popToTop();
      navigation.replace('ModuleView', {module, onDelete, onModify});
    };

  return (
   <Screen>
    <ButtonTray>
      <Button label = "Add" icon={<Icons.Add/>} onClick={goToAddModule}/>
      </ButtonTray>
        <ModuleList modules={modules} onSelect={handleSelect}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {},
    
});
