import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';
import RenderCount from '../UI/RenderCount.js';


export default function ModuleListScreen() {
    let [modules, setModules] = useState(initialModules); //Delete only works if its let , const gives a read-only error
    const handleDelete = (module) => {
      setModules(modules = modules.filter((item) => item.ModuleID !== module.ModuleID));
        
     
    };
  return (
   <Screen>
    <RenderCount />
        <ModuleList modules={modules} onSelect={handleDelete}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {},
    
});
