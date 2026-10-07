import { StyleSheet, Text, View, Pressable} from 'react-native';

export const ModuleItem = ({module, onSelect}) => {
  return (
    <Pressable onPress={() => onSelect(module)}>
        <View style={styles.item}>
            <Text style={styles.text}>
                {module.ModuleCode} {module.ModuleName}
            </Text>
         </View>
    </Pressable>
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
});

export default ModuleItem;