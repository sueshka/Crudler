import { StyleSheet} from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView.js';
import { useState } from 'react';

export default function ModuleViewScreen({navigation, route}) {
  const { module, onDelete, onModify } = route.params;
  const goToModifyScreen = () => navigation.replace('ModuleModify', {module, onModify});
  const [imageURL, setImageURL] = useState(module.ModuleImageURL);
  const onCapture = setImageURL;
  const goToCameraScreen = () => navigation.navigate('CameraScreen', {onCapture});
  return (
   <Screen>
      <ModuleView imageURL = {imageURL} module={module} onDelete={onDelete} onModify={goToModifyScreen} onCamera={goToCameraScreen} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  
}); 