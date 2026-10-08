import { StyleSheet, Text, TextInput , View} from 'react-native';
import Icons from '../../UI/Icons.js';
import { useState } from 'react';
import Form from '../../UI/Form.js';

const defaultModule = {
  ModuleID: null, 
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null 
};

export default function ModuleForm({onSubmit, onCancel}) {
    defaultModule.ModuleID = Math.floor(100000+ Math.random() * 900000);
    defaultModule.ModuleImage = "https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg";

    const [module, setModule] = useState(defaultModule);

    const handleChange = (field,value) => setModule({...module, [field]: value});
    const handleSubmit = () => onSubmit(module);

    const submitLabel = 'Add';
    const submitIcon = <Icons.Add/>;

    const levels = [
        {value: 3, label: 'Level 3 (Foundation)'},
        {value: 4, label: 'Level 4 (First Year)'},
        {value: 5, label: 'Level 5 (Second Year)'},
        {value: 6, label: 'Level 6 (Final Year)'},
        {value: 7, label: 'Level 7 (Masters)'},
    ]
return (
    <Form onSubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel} submitIcon={submitIcon}>
        <Form.InputText label="Module Code" value={module.ModuleCode} onChange={(value) => handleChange("ModuleCode", value)}/>
        <Form.InputText label="Module Name" value={module.ModuleName} onChange={(value) => handleChange("ModuleName", value)}/>
        <Form.InputSelect label="Module Level" prompt="Select Module Level" options={levels} value={module.ModuleLevel} onChange={(value) => handleChange("ModuleLevel", value)}/>
        <Form.InputText label="Module Leader ID" value={module.ModuleLeaderID} onChange={(value) => handleChange("ModuleLeaderID", value)}/>      
        <Form.InputText label="Module Leader Name" value={module.ModuleLeaderName} onChange={(value) => handleChange("ModuleLeaderName", value)}/>      
        <Form.InputText label="Module Image" value={module.ModuleImage} onChange={(value) => handleChange("ModuleImage", value)}/>      
    </Form>



);
};

const styles = StyleSheet.create({});