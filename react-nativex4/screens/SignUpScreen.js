import { View, StyleSheet, Text, Pressable} from "react-native";
import Form from "../components/AuthForm";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
const navigator = useNavigation()
  const [message , setMessage]  = useState("");
 const [loading, setLoading] = useState(false)

  const submitHandler = async ({email, password}) => {

    setLoading(true);
    setMessage("");
    try {
      await createUserWithEmailAndPassword(auth , email, password);
      setMessage("Success, Account created!");
      console.log("Sign in success")
    } catch (error) {
      if (error.code === "auth/email-already-in-use"){
          setMessage("This email is already registered. Try logging in instead.");
      }else if (error.code === "auth/weak-password") {
          setMessage("Password should be at least 8 characters.");
      } else {
          setMessage("Something went wrong. Please try again.");
      }
      
    }finally{
      setLoading(false)
    }
    
  };

  if (loading) {
    return(<LoadingSpinner/>)
  }

  return (
    <View style={styles.container}>
      {message && (
        <View style={styles.message}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}
      <Form
        title="Create Account"
        buttonText="Sign In"
        onSubmit={submitHandler}
      />

       <View style={styles.buttonContainer}>
      <Pressable onPress={() => navigator.navigate("Welcome")}>
         <View style={styles.buttonView}>
          <Text style={styles.viewText}>Go back</Text>
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
     paddingHorizontal:24,
    backgroundColor: "#f2f4f7",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
    message:{
    backgroundColor:"#a281f0",
    padding:8,
    borderRadius:8,
    marginBottom:10
  },
  messageText:{
    color:"white"
  },
  buttonContainer:{
   marginVertical: 25
  },
  buttonView:{
    backgroundColor:"#a281f0",
    padding:9,
    borderRadius:6,
    justifyContent:"center",
    alignItems:"center"
  },
  viewText:{
   color:"white"
  }
});


export default SignUpScreen;

