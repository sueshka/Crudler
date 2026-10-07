import {MaterialIcons} from '@expo/vector-icons';

const Icons ={};

const Add = () => <MaterialIcons name="add" size={16} color="#f1e9e9"/>;
const Delete = () => <MaterialIcons name="delete" size={16} color="#241515"/>;
const Edit = () => <MaterialIcons name="edit" size={16} color="#f0e5e5"/>;

Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;  

export default Icons;