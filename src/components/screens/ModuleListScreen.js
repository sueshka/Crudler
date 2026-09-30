import { StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';


export default function ModuleListScreen() {
    const modules = initialModules;
    const handleSelect = () => alert('Module selected');
  return (
   <Screen>
    <ScrollView style={styles.container}>
      {modules.map((module) => {
        return (
            <Pressable onPress={handleSelect}>
            <View key={module.ModuleCode} style={styles.item}>
                <Text style={styles.text}>
                    {module.ModuleCode} {module.ModuleName}
                </Text>
            </View>
            </Pressable>
        );
      })}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {},
    item: {
        padding: 10,
        borderTopWidth: 1.5,
        borderColor: '#824b85',
    },
    text: {
        fontSize: 15,
    },
});
