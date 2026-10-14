import { Text } from "react-native";
import Icons from "./Icons";
import Selector from "./Selectors";

const Favorite = ({isFavourite,onSelect, style}) =>{

    return(
        <Selector onPress={onSelect} style={style}>
        <Text>{isFavourite ? <Icons.Favourite/> : <Icons.NotFavourite/>}</Text>
        </Selector>
    );
};


export default Favorite;