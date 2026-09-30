import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator InitialRouteName="ModuleList" screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white'}}>
       
        <Stack.Screen 
        name="ModuleList" 
        component={ModuleListScreen} 
        options={{ title: 'Module List' }} 
        />

         <Stack.Screen 
        name="ModuleView" 
        component={ModuleViewScreen} 
        options={{ title: 'Module View' }} 
        />

         <Stack.Screen 
        name="ModuleModify" 
        component={ModuleModifyScreen} 
        options={{ title: 'Module Modify' }}    
        />

         <Stack.Screen 
        name="ModuleAdd" 
        component={ModuleAddScreen} 
        options={{ title: 'Module Add' }} 
        />

      </Stack.Navigator>
   </NavigationContainer>
  );
};

