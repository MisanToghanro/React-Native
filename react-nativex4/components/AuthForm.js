import { useState } from "react";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native"
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";


const Form = ({title, buttonText, onSubmit}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  const emailAuth = () => {
    if(email.trim() === "") {
      setError(" Please type in a valid Email");
      return false
    }
    return true;
  }
  const passwordAuth = () =>{
    if ( password.length <8) {
      setError("Password must be up to 8 characters")
      return false
    }
    return true;
  }
  const submitHandler = () => {
     setError(null)
    const isEmailValid = emailAuth();
    const isPasswordValid = passwordAuth();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    onSubmit({ 
  email: email.trim(),
  password: password.trim(),
     });
      }
    return(
      <View>
        {error && (
               <View style={styles.error}><Text style={styles.errorText}>{error}</Text></View>
        )}
  
 
<View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

<TextInput
  placeholder="Email"
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}  
  style={styles.input}
  value={email}
  onChangeText={setEmail}
/>


<TextInput
  placeholder="Password"
  secureTextEntry={true}
  style={styles.input}
  value={password}
  onChangeText={setPassword}
/>


      <Pressable style={styles.button} onPress={submitHandler}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
      </View>

    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical:24,
    elevation:4,
    backgroundColor:"white",
    borderRadius:8
   
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 14,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  error:{
  backgroundColor: "#fdecea",
  borderLeftWidth: 4,
  borderLeftColor: "#e53935",
  paddingVertical: 10,
  paddingHorizontal: 12,
  borderRadius: 6,
  marginBottom: 16,
  },
  errorText:{
      color: "#b71c1c",
  fontSize: 14,
  lineHeight: 20,
  }
});

export default Form;
