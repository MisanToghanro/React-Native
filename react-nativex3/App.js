

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ExpenseHistoryScreen from './screens/ExpenseHistoryScreen';
import { NavigationContainer } from "@react-navigation/native";
import {StatusBar} from"react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ManageExpensesScreen from './screens/ManageExpensesScreen';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from "@expo/vector-icons";
import IconButton from './components/Buttons/IconButton';
import { useNavigation } from '@react-navigation/native';
import { ExpenseContextProvider } from './contex-store/Expense-app-Context';

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const TabsNavigation = () => {
  const navigation = useNavigation()
  return(
    <Tabs.Navigator screenOptions={{
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500 },
      headerTintColor:"white",
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerRight: () => (
        <IconButton icon="add" color="white" onPress={() => navigation.navigate("ManageExpense")}/>
      )
    }}>
      <Tabs.Screen name="RecentExpenses" component={HomeScreen} options={{
        title:"Home",
        tabBarIcon:({color,size}) => (
          <Ionicons name="home" color={color} size={size}/>
        )
      }}/>
      <Tabs.Screen name="AllExpenses" component={ExpenseHistoryScreen} options={{
        title:"Expenses",
        tabBarIcon: ({color,size}) => (
          <Ionicons name="list" color={color} size={size}/>
        )
      }}/>
    </Tabs.Navigator>
  )
}
export default function App() {
  return (
    <ExpenseContextProvider>
    <NavigationContainer>
      <StatusBar style="light"/>
       <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor:"white"
       }}>
        <Stack.Screen name='Home' component={TabsNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name='ManageExpense' component={ManageExpensesScreen } options={{
          presentation:"modal",
              animation:"slide_from_bottom"
        }}/>
       </Stack.Navigator>
    </NavigationContainer>
    </ExpenseContextProvider>

  );
}



