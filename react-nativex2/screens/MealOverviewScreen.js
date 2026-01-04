import { View,Text, StyleSheet, ScrollView, Image } from "react-native"
import { useRoute } from "@react-navigation/native";
import MealCard from "../components/MealCard";
import { MEALS } from "../data/data";

const MealOverviewScreen = () => {

    const route  = useRoute();
    const id = route.params.categoryId;   
    const displayMeals = MEALS.filter((meal) => (
        meal.categoryIds.includes(id)
    ))

    return(
        <View style={styles.ViewContainer}>
          <ScrollView>{displayMeals.map((meal)=> (

        <MealCard key={meal.id} meal={meal} />
          ))}</ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    ViewContainer:{
        flex:1,
        padding:16
    }
})

export default MealOverviewScreen