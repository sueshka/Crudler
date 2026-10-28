import { useState } from 'react';
import { getCurrentPositionAsync, useForegroundPermissions } from 'expo-location';

const useLocation = () => {

    const [permission, requestPermission] = useForegroundPermissions();
    const [location, setLocation] = useState(null);
    const [isLocating, setisLocating] = useState(false);

    const getLocation = async () => {
        setisLocating(true);
        const location = await getCurrentPositionAsync();
        setLocation(location);
        setisLocating(false);
    };

    return[permission,requestPermission,location, isLocating, getLocation];

}


export default useLocation;