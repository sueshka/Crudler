import { StyleSheet} from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView.js';

export default function ModuleViewScreen({navigate, route}) {
  const { module, onDelete } = route.params;
  return (
   <Screen>
      <ModuleView module={module} onDelete={onDelete} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  
}); 