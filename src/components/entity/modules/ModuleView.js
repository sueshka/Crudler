import { Alert,StyleSheet, Text, View} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import  {Button, ButtonTray}  from '../../UI/Button.js';
import Icons from '../../UI/Icons.js';

export const ModuleView = ({module, onDelete, onModify}) => {
  const handleDelete = () => onDelete(module);

  const requestDelete = () => Alert.alert(
    "Delete Module",
    `Are you sure you want to delete ${module.ModuleCode} ${module.ModuleName}?`,
    [
      {text: "Cancel",},
      {text: "Delete", onPress: handleDelete }
    ]
  );

  return (
    <View style={styles.container}>
        <FullWidthImage source={{uri: module.ModuleImage}} style={styles.image}/>
        <View style={styles.infoTray}>
          <Text style ={styles.boldText}>{module.ModuleCode} {module.ModuleName}</Text>
          <Text style ={styles.text}>Level: {module.ModuleLevel}</Text>
          <Text style ={styles.text}>{module.ModuleLeaderName} <Text style ={styles.dimText}>(Module Leader)</Text></Text>

          <ButtonTray>
          <Button icon= {<Icons.Edit/>} label= 'Modify' onClick={onModify}/>
          <Button icon= {<Icons.Delete/>} label= 'Delete' styleButton={{backgroundColor: '#c34747'}} styleLabel={{color: '#4d0e0e'}} onClick={requestDelete}/>
          </ButtonTray>
          </View>
          </View>

  );};

const styles = StyleSheet.create({
    container: {
    gap:15,
  },
  image: {
    borderRadius: 3,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 17,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dimText: {
    color: 'gray',
  },
});

export default ModuleView;