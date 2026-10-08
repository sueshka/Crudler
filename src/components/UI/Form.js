import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, ButtonTray } from './Button.js';
import { Picker } from '@react-native-picker/picker';
import Icons from './Icons.js';

 export const Form = ({children, onSubmit, onCancel, submitLabel, submitIcon}) => {

    return (
        <KeyboardAvoidingView
            style={styles.formContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.formItems}>
                {children}
            </ScrollView>
            <ButtonTray>
                <Button label = {submitLabel} icon={submitIcon} onClick={onSubmit}/>
                <Button label = "Cancel" icon={<Icons.Close/>} onClick={onCancel}/>
            </ButtonTray>
        </KeyboardAvoidingView>
    );
};

export const InputText = ({label,value,onChange}) => {
    return(
        <View>
            <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <TextInput 
                style={styles.itemTextInput} 
                value={value}
                onChangeText = {onChange}/>
            </View>
        </View>
    );
};

export const InputSelect = ({label,prompt,options,value,onChange}) => {
    return(
        <View>
            <Text style={styles.itemLabel}>{label}</Text>
            <Picker
                selectedValue={value}
                onValueChange={onChange}
                style={styles.itemPickerStyle}
                itemStyle={styles.itemPickerItemStyle}
            >
                <Picker.Item label={prompt} value={null}/>
                {options.map((option, index) => (<Picker.Item key = {index} value={option.value} label={option.label} />))}
            </Picker>
        </View>
    );
};

Form.InputText = InputText;
Form.InputSelect = InputSelect;


const styles = StyleSheet.create({
    formContainer:{
        gap:10,
    },
     formItems:{
        gap:5,
    },
    itemLabel:{
      color: 'gray',
      fontSize: 16,
      marginBottom: 5,
    },
    itemTextInput:{
      height: 40,
      paddingLeft: 10,
      fontSize: 16,
      backgroundColor: '#f5f5f5',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    itemPickerStyle:{
        height: 50,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    itemPickerItemStyle:{
        height: 50,
        fontSize: 16,
        color: 'black',
    }
});

export default Form;