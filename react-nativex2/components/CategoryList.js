import {FlatList, View} from "react-native"
import { CATEGORIES } from "../data/data"
import CategoryCard from "./CategoryCard"
import {useNavigation} from "@react-navigation/native"


const CategoriesList = () => {
 const navigation = useNavigation();

const navigateHandler = (categoryId) => {
    navigation.navigate('MealOverview', {
        categoryId: categoryId
    } )
    
}

    return(
      <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <CategoryCard
        title={item.title}
        color={item.color}
        onNavigate = {() => {navigateHandler(item.id)}}
        />
      )}
      numColumns={2}
      />
    )
}

export default CategoriesList