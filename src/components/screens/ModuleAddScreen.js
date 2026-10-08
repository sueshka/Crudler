import { StyleSheet, Text, TextInput , View} from 'react-native';
import Screen from '../layout/Screen';
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';
import { useState } from 'react';


const defaultModule = {
  ModuleID: null, 
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null 
};

export default function ModuleAddScreen({ navigation, route }) {

  const [module, setModule] = useState(defaultModule);
  const {onAdd} = route.params;
  const handleAdd = () => onAdd(module);
  defaultModule.ModuleID = Math.floor(100000+ Math.random() * 900000);
  defaultModule.ModuleImage = "https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg";
  const handleCancel = () => navigation.goBack();
  const handleChange = (field,value) => setModule({...module, [field]: value});
 return (
    <Screen>
      <View style={styles.item}>
          <Text style={styles.itemLabel}>Module Code</Text>
          <TextInput 
            style={styles.itemTextInput} 
            value={module.ModuleCode}
            onChangeText = {(value) => handleChange("ModuleCode", value)}
          />
      </View>
       <View style={styles.item}>
          <Text style={styles.itemLabel}>Module Name</Text>
          <TextInput 
            style={styles.itemTextInput} 
            value={module.ModuleName}
            onChangeText = {(value) => handleChange("ModuleName", value)}
          />
      </View>
       <View style={styles.item}>
          <Text style={styles.itemLabel}>Module Level</Text>
          <TextInput 
            style={styles.itemTextInput} 
            value={module.ModuleLevel}
            onChangeText = {(value) => handleChange("ModuleLevel", value)}
          />
      </View>
       <View style={styles.item}>
          <Text style={styles.itemLabel}>Module Leader ID</Text>
          <TextInput 
            style={styles.itemTextInput} 
            value={module.ModuleLeaderID}
            onChangeText = {(value) => handleChange("ModuleLeaderID", value)}
          />
      </View>
       <View style={styles.item}>
          <Text style={styles.itemLabel}>Module Leader Name</Text>
          <TextInput 
            style={styles.itemTextInput} 
            value={module.ModuleLeaderName}
            onChangeText = {(value) => handleChange("ModuleLeaderName", value)}
          />
      </View>
       <View style={styles.item}>
          <Text style={styles.itemLabel}>Module Image</Text>
          <TextInput 
            style={styles.itemTextInput} 
            value={module.ModuleImage}
            onChangeText = {(value) => handleChange("ModuleImage", value)}
          />
      </View>
       
        <ButtonTray>
             <Button label = "Add" icon={<Icons.Add/>} onClick={handleAdd}/>
             <Button label = "Cancel" icon={<Icons.Close/>} onClick={handleCancel}/>
             </ButtonTray>
     </Screen>
   );
 }
 
 const styles = StyleSheet.create({
    itemLabel:{
      color: 'gray',
      fontSize: 16,
      marginBottom: 5,
    },
    itemTextInput:{
      height: 40,
      paddingLeft: 10,
      fontSize: 16,
      backgroundColor: '#f5f5f5',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#ccc',
    },
 });

