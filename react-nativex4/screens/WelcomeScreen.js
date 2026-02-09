
import { View, Text, Pressable, StyleSheet } from "react-native";
import {useNavigation} from "@react-navigation/native"

const WelcomeScreen = () => {

    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>

     <View style={styles.buttonContainer}>
          <Pressable  onPress={() => navigation.navigate("SignUp")}>
        <View style={styles.buttonView}>
            <Text style={styles.viewText}>Sign Up</Text>
        </View>
      </Pressable>
 
       <Pressable onPress={() => navigation.navigate("LogIn")} >
        <View style={styles.buttonView}>
            <Text style={styles.viewText}>
                Login
            </Text>
        </View>
       </Pressable>

     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
     gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer:{
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap: 16
  },
  buttonView:{
    backgroundColor:"#a281f0",
    padding:9,
    borderRadius:6,
  },
  viewText:{
   color:"white"
  },
  pressed:{
    opacity:0.7
  }
});

export default WelcomeScreen;


