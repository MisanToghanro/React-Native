import { View,TextInput, Text, Dimensions, useWindowDimensions} from "react-native"
import { StyleSheet } from "react-native"
import Button from "../components/Button"
import { useState } from "react"
 import {Ionicons} from "@expo/vector-icons"
const StartGame = ({onScreenChange}) => {
    
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");

    const inputHandler = (text) => {
        setMessage("");
        setUserInput(text)
    }

    const resetInputHandler = () => {
        setUserInput("")
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(userInput)

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {

            setMessage("Invalid number! Number must be between 1 and 99.");
        }else{
            setMessage("Number is valid!✅");
             onScreenChange(chosenNumber);
        }
        
        
    }
const {width, height} = useWindowDimensions()

    return(
        <View style={styles.container}>
            <Text style={{color:"white", fontSize:25, fontWeight:"600"}}>Guess the Number</Text>
            <TextInput
            keyboardType="number-pad"
            placeholder="Type in a number..."
             placeholderTextColor="#ddb52f" 
             maxLength={2}
            style={styles.textInput}
            value={userInput}
            onChangeText={inputHandler}
            />

           
            <View style={styles.buttons}>
                <Button onPress={resetInputHandler}>Reset?</Button>

                <Button  onPress={confirmInputHandler} style={{flexDirection:"row", gap:6}}>
                   <Text >
                    Play
                   </Text>
                   <Ionicons name="play" size={15}/>
                    </Button>
            </View>

            {message.length > 0 && (
                <View style={styles.messageContainer}>
                    <Text style={{color:"white", textAlign:"center",fontWeight:"400"}}> {message}</Text>
                </View>
            )}


        </View>
    )

}

const deviceHeight = Dimensions.get("window").height
const styles = StyleSheet.create ({
container:{
    padding:20,
    marginTop: deviceHeight < 400 ? 40 : 100,
    marginHorizontal:20,
    justifyContent:"center",
    alignItems:"center",
    elevation:9,
    shadowColor:"black",
    backgroundColor:"#72063c",
    borderRadius:9
},
buttons:{
    flexDirection:"row",
    gap:10
},
textInput:{
    width:"50%",
    color:"#ddb52f",
    fontWeight:"bold",
    fontSize:15,
    borderBottomColor:"#ddb52f",
    borderBottomWidth:2,
    marginVertical: 20,
    textAlign:"center"
},
messageContainer: {
    backgroundColor:"#3f0522ff",
    padding:8,
    marginTop:10,
    borderRadius:8
}
})
export default StartGame;

