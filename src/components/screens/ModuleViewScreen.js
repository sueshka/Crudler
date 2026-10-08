import { StyleSheet} from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView.js';

export default function ModuleViewScreen({navigation, route}) {
  const { module, onDelete, onModify } = route.params;
  const goToModifyScreen = () => navigation.replace('ModuleModify', {module, onModify});
  return (
   <Screen>
      <ModuleView module={module} onDelete={onDelete} onModify={goToModifyScreen} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  
}); 