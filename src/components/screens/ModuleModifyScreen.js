import { StyleSheet, Text} from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm';

export default function ModuleModifyScreen({navigation, route}) {
  const {module,onModify} = route.params;
  const handleCancel = () => navigation.goBack();
  return (
   <Screen>
      <ModuleForm origModule ={module} onSubmit={onModify} onCancel={handleCancel} />
    </Screen>
  );
}

const styles = StyleSheet.create({});