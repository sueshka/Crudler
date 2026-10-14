import { StyleSheet, Text, View} from 'react-native';
import Selector from './Selectors';

export const Button = ({label, onClick, styleLabel, styleButton,icon}) => {

    return(
        <Selector
      onPress={onClick}
      style={[styles.button, styleButton]}
      pressedStyle={styles.pressedButton}
    >
      {icon ? icon : null}
      <Text style={[styles.label, styleLabel]}>{label}</Text>
    </Selector>
    );
};

export const ButtonTray = ({children}) => {
    return(
        <View style={styles.buttonTray}>
            {children}
        </View>

    );
};

const styles = StyleSheet.create({
    buttonTray:{
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#020102',
        backgroundColor: '#593c5e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        flex: 1,
        flexDirection: 'row',
        gap: 5,
    },

    label:{
        fontSize: 15,
        color: '#f5f5f5',
    },
    pressedButton:{
        backgroundColor: '#1e0d1b',
        elevation:5,
    }
});
