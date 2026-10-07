import {Pressable, StyleSheet, Text, View} from 'react-native';



export const Button = ({label, onClick, styleLabel, styleButton,icon}) => {
    return(
        <Pressable onPress={onClick} style={[styles.button, styleButton]}>
            {icon ? icon : null}
            <Text style ={[styles.label, styleLabel]}>{label}</Text>
        </Pressable>
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
    }
});
