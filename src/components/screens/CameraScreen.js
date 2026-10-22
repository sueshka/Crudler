import { StyleSheet, Text, View } from 'react-native';   
import Screen from '../layout/Screen';                    
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, ButtonTray } from '../UI/Button';
import { useState , useRef} from 'react';
import Icons from '../UI/Icons';
import FullWidthImage from 'react-native-fullwidth-image';

const CameraScreen = ({ navigation, route }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedURI, setCapturedURI] = useState(null);
  const cameraRef = useRef(null); 
  const {onCapture} = route.params;
  const handleGrab = async () => {
    const picture = await cameraRef.current.takePictureAsync();
    setCapturedURI(picture.uri);
  };

  const handleDiscard = () => setCapturedURI(null);
  const handleCapture = () =>{
    onCapture(capturedURI);
    navigation.goBack();
  };

  if (!permission) {
    return (
      <Screen>
        <Text>Checking permissions ...</Text>
      </Screen>
    );
  }

  if (!permission.granted) {
    return (
      <Screen>
        <View style={styles.permission}>
          <Text>Permission is required to use the camera.</Text>
          <ButtonTray>
            <Button label='Grant permission' onClick={requestPermission} />
          </ButtonTray>
        </View>
      </Screen>
    );
  }

       return (
    <Screen>
      <View style={styles.container}>
        {capturedURI ? (
          <>
            <ButtonTray>
              <Button icon={<Icons.Check />} label='Proceed' onClick={handleCapture}/>
              <Button icon={<Icons.Close />} label='Discard' onClick={handleDiscard} />
            </ButtonTray>
            <FullWidthImage source={{ uri: capturedURI }} style={styles.image} />
          </>
        ) : (
          <>
            <ButtonTray>
              <Button icon={<Icons.Camera />} label='Grab picture' onClick={handleGrab} />
            </ButtonTray>
            <CameraView ref={cameraRef} style={styles.camera} facing='back' />
          </>
        )}
      </View>
    </Screen>
  );



};

const styles = StyleSheet.create({
  permission: {
    flex: 1,
    gap: 15,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    gap: 15,
    marginBottom: 32,
  },
  camera: {
    flex: 1,
    borderRadius: 7
  },
   image: {
    borderRadius: 7
  },
});

export default CameraScreen;  
