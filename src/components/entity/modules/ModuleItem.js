import { StyleSheet, Text, View} from 'react-native';
import Selector from '../../UI/Selectors';

export const ModuleItem = ({module, onSelect}) => {
    const handleSelect = () => onSelect(module);
  return (
     <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
      </View>
    </Selector>
        );
      };

const styles = StyleSheet.create({
    item: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#824b85',
    },
    text: {
        fontSize: 15,
    },
    pressedItem:{
        backgroundColor: '#6c5a68',
    }
});

export default ModuleItem;