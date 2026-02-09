
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import Form from "../components/AuthForm";
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../firebase/firebaseConfig";
import LoadingSpinner from "../components/LoadingSpinner";

const LogInScreen = () => {
       const [message , setMessage]  = useState("");
        const [loading, setLoading] = useState(false)

      const submitHandler = async ({email, password}) => {
        setLoading(true);
        setMessage("");

        try {
          await signInWithEmailAndPassword(auth,email, password);
          setMessage("Success, Logged in!");
           console.log("Login success")
        } catch (error) {
         if (error.code === "auth/invalid-credential") {
              setMessage("Invalid email or password.");
          } else if (error.code === "auth/user-not-found") {
           setMessage("No account found with this email.");
         } else {
          setMessage("Unable to log in. Please try again.");}
        }finally{
          setLoading(false)
        }
  };

  if (loading) {
    return(
      <LoadingSpinner/>
    )
  }

  return (
    <View style={styles.container}>
            {message && (
              <View style={styles.message}>
                <Text style={styles.messageText}>{message}</Text>
              </View>
            )}
      <Form
        title="Welcome Back"
        buttonText="Login"
      onSubmit={submitHandler}
      />
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
  message:{
    backgroundColor:"#a281f0",
    padding:8,
    borderRadius:8,
    marginBottom:10
  },
  messageText:{
    color:"white"
  }

});

export default LogInScreen;


