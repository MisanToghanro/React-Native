import { Text, View,StyleSheet, Dimensions, useWindowDimensions  } from "react-native"
import Button from "../components/Button";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const GameOver = ({userInput, guessCount, onRestartGame}) => {

    const { width, height } = useWindowDimensions();

    return (
  <View style={styles.screen}>
    <View style={[styles.container, {width:width < 400 ? "90%" : "70%" }]}>
      
     <Ionicons name="trophy" size={60} color="#ddb52f" style={{ marginBottom: 10 }} />

      <Text style={styles.title}>Game Over!</Text>

      <View style={styles.highlightContainer}>
        
        <View style={styles.row}>
            <MaterialIcons name="analytics" size={24} color="white" />
            <Text style={styles.summaryText}>Number of guesses: {guessCount}</Text>
        </View>
        <View style={styles.row}>
             <Ionicons name="person" size={24} color="white" />
             <Text style={styles.summaryText}>Your Number: {userInput}</Text>
        </View>
        
        
      </View>

      <Button onPress={onRestartGame}>
        Start a New Game
        <Ionicons name="refresh" size={18} color="white" />
        </Button>
    </View>
  </View>
);
}
const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    backgroundColor: "#4e0329",
    padding: 30,
    borderRadius: 12,
    alignItems: "center",
    maxWidth: 350,

    // Shadow/Elevation
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ddb52f",
  },
  highlightContainer: {
    alignItems: "center",
    marginVertical: 25,
  },
  summaryText: {
    fontSize: 18,
    color: "white",
    marginVertical: 4,
  },
  
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    gap:8
  },
});


export default GameOver;