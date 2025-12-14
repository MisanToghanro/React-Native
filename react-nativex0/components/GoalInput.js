import { View, TextInput, Button , StyleSheet, Text, Image, Pressable} from "react-native"
import { useState } from "react";
import goalLogo from "../assets/goalLogo.jpg"

const GoalInput = ({addGoalHandler, closeModal}) => {

    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");

    const inputHandler = (text) => {
    setMessage("")
    setUserInput(text);}

    const buttonHandler = () => {

    if (userInput.trim() === "") {
       setMessage("Please type in a goal");
       return;
    }

    addGoalHandler(userInput);
    setUserInput("")
  }


return (
  <View style={styles.componentContainer}>
    {/* Logo */}
    <View style={styles.logoContainer}>
      <Image source={goalLogo} style={styles.logo} />
    </View>

    {/* Input */}
    <TextInput
      placeholder='Type in a Goal...'
      placeholderTextColor="#6b7280" 
      style={styles.textInput}
      onChangeText={inputHandler}
      value={userInput}
    />

    {/* Buttons */}
    <View style={styles.buttonContainer}>
      <Pressable onPress={closeModal} style={[styles.button, styles.closeButton]}>
        <Text style={styles.buttonText}>Close</Text>
      </Pressable>

      <Pressable onPress={buttonHandler} style={[styles.button, styles.addButton]}>
        <Text style={styles.buttonText}>Add Goal</Text>
      </Pressable>

    </View>

    {/* Error Message */}
    {message.length > 0 && (
      <View style={styles.message}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    )}
  </View>
);

}

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderColor: "#0f766e",
    color:"white",
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10, 
  },

  button: {
    flex: 1, 
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  addButton: {
    backgroundColor: "#14b8a6",
  },

  closeButton: {
    backgroundColor: "#8b5cf6",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  message: {
    backgroundColor: "#ef4444",
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },

  messageText: {
    color: "white",
    fontWeight: "600",
  },
});


export default GoalInput;