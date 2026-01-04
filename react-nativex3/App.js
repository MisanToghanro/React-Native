
//import {createDrawerNavigator} from "@react-navigation/drawer"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from "@react-navigation/native";
import {StatusBar} from"react-native"

//const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light"/>
           <Tabs.Navigator screenOptions={{
             headerStyle:{backgroundColor: "#6611b5ff"},
             headerTintColor:"white",
             drawerActiveTintColor:"white"
           }}>
    <Tabs.Screen name="Home" component={HomeScreen} options={{
      drawerActiveBackgroundColor:"#8a3ad4ff"
    }}/>
    <Tabs.Screen name="Profile" component={ProfileScreen} options={{
      headerStyle:{backgroundColor:"#3945ceff"},
      drawerActiveBackgroundColor:"#5865f9ff"
    }}/>
   </Tabs.Navigator>
    </NavigationContainer>

  );
}



