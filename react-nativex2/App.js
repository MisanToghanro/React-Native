import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CATEGORIES } from './data/data';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavScreen from './screens/FavouritesScreen';
import { Ionicons } from "@expo/vector-icons";
import { FavContextProvider } from './store/context/addFavContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator()

const TabNavigation = () => {
  return(<Tabs.Navigator screenOptions={{
    tabBarActiveTintColor:"#556B2F",
     tabBarInactiveTintColor:"gray"
  }}>
    <Tabs.Screen name='Categories' component={CategoryScreen} options={{
        headerStyle: {backgroundColor: "#556B2F"},
        headerTintColor: "white",
        title:"Available categories",
        tabBarIcon:({color,size}) => (
          <Ionicons name="grid" color={color} size={size}/>
        )
    }}/>
    <Tabs.Screen name='Favourites' component={FavScreen} options={{
              tabBarIcon:({color,size}) => (
          <Ionicons name="heart" color={color} size={size}/>
              ),
              tabBarActiveTintColor:"#3945ceff",
            title:" Your Favorites",
            headerStyle:{ backgroundColor: "#3945ceff" },
            headerTintColor: "white"

    }} />
  </Tabs.Navigator>)
}

export default function App() {
  return (
    <GestureHandlerRootView>
    <SafeAreaProvider>
         <StatusBar style="light" />
         <FavContextProvider>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: "#556B2F"},
        headerTintColor: "white",
        contentStyle: {
        backgroundColor: "#F0F4E8", },
        }}>
          <Stack.Screen name='MealCategories' component={TabNavigation} options={{
            headerShown:false
            }}/>

          <Stack.Screen name='MealOverview' component={MealOverviewScreen} options={({route}) => {
            const mealCategory = route.params.categoryId;
            const selectedCategory = CATEGORIES.find(
              (category) => category.id === mealCategory
            )
           return(
            {title: selectedCategory.title,
              headerStyle:{
                backgroundColor: selectedCategory.color
              },
              headerTintColor:"white"
            }
           )
          }}/>

          <Stack.Screen name='MealDetails' component={MealDetailsScreen}/>
        </Stack.Navigator>
        
      </NavigationContainer>
      </FavContextProvider>
      <Toast/>
    </SafeAreaProvider>
     </GestureHandlerRootView>
  );
}

