import { StyleSheet} from 'react-native';
import Icons from '../../UI/Icons.js';
import { useState } from 'react';
import Form from '../../UI/Form.js';
import useLoad from '../../API/useLoad.js';

const defaultModule = {
  ModuleID: null, 
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleYearID: null,
  ModuleLeaderID: null,
  ModuleImageURL: null 
};

export default function ModuleForm({origModule,onSubmit, onCancel}) {
    defaultModule.ModuleID = Math.floor(100000+ Math.random() * 900000);
    defaultModule.ModuleImageURL = "https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg";
    const yearsEndpoint = 'https://api.unibase.kuapps.uk/api/years';
    const staffEndpoint = 'https://api.unibase.kuapps.uk/api/users/staff';
    const [module, setModule] = useState(origModule || defaultModule);
    const [years, , isYearsLoading ,yearsLoad] = useLoad(yearsEndpoint); 
    const [leaders, , isLeadersLoading ,leaderLoad] = useLoad(staffEndpoint); 
    

    const handleChange = (field,value) => setModule({...module, [field]: value});
    const handleSubmit = () => onSubmit(module);

    const submitLabel = origModule ? 'Modify' : 'Add';
    const submitIcon = origModule ? <Icons.Edit/> : <Icons.Add/>;

    const cohorts = years.map((year) => ({value: year.YearID, label: year.YearName}));
    const staff = leaders.map((leader) => ({value: leader.UserID, label: `${leader.UserFirstname} ${leader.UserLastname}`}));

  

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
        <Form.InputSelect label="Module Cohort" prompt="Select Module Cohort" options={cohorts} isLoading = {isYearsLoading} value={module.ModuleYearID} onChange={(value) => handleChange("ModuleYearID", value)}/> 
        <Form.InputSelect label="Module Leader" prompt="Select Module Leader" options={staff} isLoading = {isLeadersLoading} value={module.ModuleLeaderID} onChange={(value) => handleChange("ModuleLeaderID", value)}/>           
        <Form.InputText label="Module Image URL" value={module.ModuleImageURL} onChange={(value) => handleChange("ModuleImageURL", value)}/>      
    </Form>

);
};

const styles = StyleSheet.create({});