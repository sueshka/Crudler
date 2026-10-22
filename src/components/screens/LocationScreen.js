import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getCurrentPositionAsync, useForegroundPermissions } from 'expo-location';
import Screen from '../layout/Screen';
import { Button, ButtonTray } from '../UI/Button';
import Icons from '../UI/Icons';

const LocationScreen = ({ navigation, route }) => {

  const [permission, requestPermission] = useForegroundPermissions();
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    const location = await getCurrentPositionAsync();
    setLocation(location);
  };

  const {onLocate} = route.params;
  const handleLocate = () => {
    onLocate(location.coords);
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
          <Text>Permission is required to access your location.</Text>
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
        <ButtonTray>
          {!location ? (
            <Button icon={<Icons.Location />} label="Get location" onClick={getLocation} />
          ) : (
            <>
              <Button icon={<Icons.Check />} label="Proceed"  onClick={handleLocate}/>
              <Button icon={<Icons.Refresh />} label="Refresh" onClick={getLocation} />
            </>
          )}
        </ButtonTray>
        <View style={styles.location}>
          <Text style={styles.boldText}>Current location</Text>
          <Text style={styles.text}>Latitude: {location && location.coords.latitude}</Text>
          <Text style={styles.text}>Longitude: {location && location.coords.longitude}</Text>
          <Text style={styles.text}>
            Accuracy: {location && Math.round(location.coords.accuracy)} metres
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    marginBottom: 32,
  },
  permission:{
    flex: 1,
    gap: 15,
    justifyContent: 'center',
  },
  location:{
    padding:15,
    borderWidth:1,
    borderColor:'lightgrey',
    backgroundColor:'whitesmoke',
    borderRadius:7,
    gap:8
  },
  boldText:{
    fontSize:16,
    fontWeight:'bold',
  }
});

export default LocationScreen;
