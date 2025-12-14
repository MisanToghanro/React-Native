import { View, Text, StyleSheet, useWindowDimensions,Dimensions } from "react-native";
import Button from "../components/Button";
import { useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
 import { Ionicons, MaterialIcons } from "@expo/vector-icons";
{/*Phone Generates a random number*/}
    const generateRandomNumber = (min,max,realNumber) => {

    if (min === max) {
    return min;
  }


    const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;

    if(randomNumber === realNumber) {
        return generateRandomNumber(min,max,realNumber);
    }
    return randomNumber;
  }



export default function GameScreen({ userInput , onGameOver}) {

    {/*Phones first guess*/}
  const firstGuess = generateRandomNumber(1,100,userInput);

  const [currentGuess, setCurrentGuess] = useState(firstGuess);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [guessCount, setGuessCount] = useState(1);

  const minNumber = useRef(1);
  const maxNumber = useRef(100)

  const nextGuessHandler = (guess) => {
        setMessage("");

    if((guess ==="lower" && currentGuess < userInput) || (guess ==="higher" && currentGuess > userInput) ) {
      setMessage("Don't lie!, You know that’s wrong 😅");
      return;   }

       setLoading(true);
        
    setTimeout(() => {
    // Update min/max boundaries
    if (guess === "lower") {
      maxNumber.current = currentGuess;
    } else {
      minNumber.current = currentGuess + 1;
    }

    // Generate next guess
    const newGuess = generateRandomNumber(
      minNumber.current,
      maxNumber.current,
      currentGuess
    );

     const updatedGuessCount = guessCount + 1;

    setCurrentGuess(newGuess);
    setGuessCount(updatedGuessCount)
    
    if (newGuess === userInput) {
      onGameOver(updatedGuessCount);
      return;
    }
    setLoading(false);
  }, 800); // delay for effect
  }

return (
  <View style={styles.container}>
    <View style={styles.guessContainer}>
      
        <MaterialIcons name="smartphone" size={50} color="#ddb52f" />
      
      <Text style={styles.text}>Guessing your number...</Text>

        {loading ? (
        <ActivityIndicator size="large" color="white" />
        ) : (
        <Text style={styles.number}>{currentGuess}</Text>
          )}
    </View>

    <View style={styles.controlsContainer}>
      <Text style={styles.subText}>Lower or Higher </Text>

      <View style={styles.buttonContainer}>
        <Button disabled={loading} onPress={() => nextGuessHandler("lower")}>
               <Ionicons name="arrow-down" size={22} color="white" />
        </Button>
        <Button disabled={loading} onPress={() => nextGuessHandler("higher")}>
          <Ionicons name="arrow-up" size={22} color="white" />
        </Button>
      </View>
    </View>
    {message.length > 0 && (
      <View style={styles.messageContainer}>
        <Text style={styles.errorText}>{message}</Text>
      </View>
    )}
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  guessContainer: {
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  number: {
    fontSize: 40,
    color: "#ddb52f",
    fontWeight: "bold",
    marginTop: 12,
    textAlign: "center",
  },

  controlsContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  subText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },

  messageContainer: {
    backgroundColor: "#3f0522",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },

  errorText: {
    color: "#ff6961",
    fontWeight: "500",
    textAlign: "center",
  },
});


