import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen';
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';

const defaultMoudule = {
  ModuleID: Math.floor(100000+ Math.random() * 900000),
  ModuleCode: 'CI330',
  ModuleName: 'Mobile Application Development',
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: 'Graeme JONES',
  ModuleImage: "https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg"
};

export default function ModuleAddScreen({ navigation, route }) {

  const {onAdd} = route.params;
  const handleAdd = () => onAdd(defaultMoudule);
  const handleCancel = () => navigation.goBack();
 return (
    <Screen>
       <Text>Add Module</Text>
        <ButtonTray>
             <Button label = "Add" icon={<Icons.Add/>} onClick={handleAdd}/>
             <Button label = "Cancel" icon={<Icons.Close/>} onClick={handleCancel}/>
             </ButtonTray>
     </Screen>
   );
 }
 
 const styles = StyleSheet.create({});;
