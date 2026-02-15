
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddLocationScreen from "../screens/AddLocationScreen";
import MapScreen from "../screens/MapScreen";
import LocationDetailsScreen from "../screens/LocationDetailsScreen";
import { Colors } from "../constants/colors";
import CustomIcon from "../components/UI/CustomIcon";
import { useNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator()

const AppStack = () => {
const navigation = useNavigation()
    return(
       <Stack.Navigator screenOptions={{

        headerStyle:{
            backgroundColor:Colors.primary500
        },
        headerTintColor:"white",
        contentStyle:{
            backgroundColor:Colors.gray700
        }
       }}>
        <Stack.Screen name="Home"  component={HomeScreen} options={{
            headerRight: () => {
                return(<CustomIcon icon="add" color="white" size={24} onPress={() => navigation.navigate("AddLocation")}/>)
            }
        }}/>

        <Stack.Screen 
        name="AddLocation" 
        component={AddLocationScreen} 
        options={{title:"Add a Location"}}/>

        <Stack.Screen
        name="LocationDetails"
        component={LocationDetailsScreen}
        options={{ title: "Location Details" }}/>

       <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Map" }}/>
       </Stack.Navigator>
    )
}

export default AppStack;
