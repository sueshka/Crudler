import { MaterialIcons } from '@expo/vector-icons';

const Icons = {};

const Add = () => <MaterialIcons name='add' size={16} />;
const Camera = () => <MaterialIcons name='photo-camera' size={16} />;
const Check = () => <MaterialIcons name='check' size={16} />;
const Close = () => <MaterialIcons name='close' size={16} />;
const Delete = () => <MaterialIcons name='delete' size={16} />;
const Edit = () => <MaterialIcons name='edit' size={16} />;
const Submit = () => <MaterialIcons name='check' size={16} />;
const Favourite = () => <MaterialIcons name='favorite' size ={18} color='crimson'/>
const NotFavourite = () => <MaterialIcons name='favorite-border' size ={18} color='grey'/>
const Location = () => <MaterialIcons name='location-on' size={16} />;
const Refresh = () => <MaterialIcons name='refresh' size={16} />;

// Compose
Icons.Add = Add;
Icons.Camera = Camera;
Icons.Close = Close;
Icons.Check = Check;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Submit = Submit;
Icons.Favourite = Favourite;
Icons.NotFavourite = NotFavourite;
Icons.Location = Location;
Icons.Refresh = Refresh;

export default Icons;
