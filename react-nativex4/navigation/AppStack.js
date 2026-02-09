
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet,Pressable} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, You are logged in 🎉</Text>

<View style={styles.buttonContainer}>
          <Pressable onPress={() => signOut(auth)}>
        <View style={styles.buttonView}>
            <Text style={styles.viewText}>Logout</Text>
        </View>
      </Pressable>
</View>

    </View>
  );

};

const AppStack = () => {

    return( 
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
    )

}

  const styles = StyleSheet.create({
container:{
flex: 1,
 justifyContent: "center", 
 alignItems: "center" 
},
text:{
fontWeight:"bold",
fontSize:15
},
buttonContainer:{
    marginVertical: 10
},
  buttonView:{
    backgroundColor:"#a281f0",
    padding:9,
    borderRadius:6,
  },
  viewText:{
   color:"white"
  },
  })
export default AppStack;