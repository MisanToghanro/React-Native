import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { useFavContext } from "../store/context/addFavContext";



const FavIcon = ({meal}) => {
const {toggleFav, addedFav} = useFavContext()
const isFav = addedFav(meal.id);

   

    return(
        <Pressable onPress={()=> (toggleFav(meal))} style= {({pressed}) => [
            pressed && styles.pressed
        ]}>
             <Ionicons 
             name={isFav ? "heart" : "heart-outline"} size={25} 
             color={isFav ? "red" : "white"} />
        </Pressable>
    )
}

const styles = StyleSheet.create({

    pressed:{
        opacity: 0.6
    }
})
export default FavIcon;