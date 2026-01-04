import { View, Text } from "react-native"
import { useFavContext } from "../store/context/addFavContext";
import { FlatList } from "react-native-gesture-handler";
import MealCard from "../components/MealCard";



const FavScreen = () => {
const {favMeal} = useFavContext();

if (favMeal.length === 0) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No favorites yet. Add some meals you love!</Text>
    </View>
  );
}
    return(
     <FlatList
     data={favMeal}
     keyExtractor={(item) => item.id}
     renderItem={({item}) => (
        <MealCard meal={item}/>
     )}
     contentContainerStyle={{padding:10}}
     />
    )
}

export default FavScreen;