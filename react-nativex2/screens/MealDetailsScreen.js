import { Text, View } from "react-native"
import MealDetail from "../components/MealDetail"
import { useRoute } from "@react-navigation/native"
import { MEALS } from "../data/data"
import FavIcon from "../components/FavouritesIcon"
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"

const MealDetailsScreen = () => {
      const route = useRoute();
      const selectedMeal =
  route.params.meal || MEALS.find((meal) => meal.id === route.params.mealId);

      const navigation = useNavigation();

      useLayoutEffect(() => {
         if (!selectedMeal) return;

       navigation.setOptions({
        title: selectedMeal.title,
        headerRight: () => {
          return(
            <FavIcon  meal={selectedMeal}/>
          )
        }
       })
      }, [navigation, selectedMeal])

   
      
      if (!selectedMeal) {
        return (
            <View>
                <Text>Meal Details not found...</Text>
            </View>
        )
      }
    return(
        <MealDetail
 
        title={selectedMeal.title}
      imageUrl={selectedMeal.imageUrl}
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}
      ingredients={selectedMeal.ingredients}
      steps={selectedMeal.steps}
        />
    )
}

export default MealDetailsScreen