import { StyleSheet, Text, View} from 'react-native';
import Selector from '../../UI/Selectors';
import Favorite from '../../UI/Favorite';

export const ModuleItem = ({module, onSelect,onFav}) => {
    const handleSelect = () => onSelect(module);
    const handleFav = () => onFav(module);
  return (
     <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
      <View style={styles.item}>
        <Favorite isFavourite={module.ModuleFavourite} onSelect={handleFav}/>
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
        flexDirection:'row'
    },
    text: {
        fontSize: 15,
        paddingLeft:10,
    },
    pressedItem:{
        backgroundColor: '#6c5a68',
    }
});

export default ModuleItem;