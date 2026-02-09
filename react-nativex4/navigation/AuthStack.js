
import WelcomeScreen from "../screens/WelcomeScreen"
import SignUpScreen from "../screens/SignUpScreen"
import LogInScreen from "../screens/LoginScreen"

import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator();

const AuthStack = () => {

    return(
        
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
                   <Stack.Screen name='Welcome' component={WelcomeScreen}/>
                   <Stack.Screen name='SignUp' component={SignUpScreen}/>
                   <Stack.Screen name='LogIn' component={LogInScreen}/>
            </Stack.Navigator>
       
    )
};

export default AuthStack;