import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGame from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import imgbg from "./assets/images/gamebg.jpg"
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import {SafeAreaView} from "react-native-safe-area-context"
import GameOver from './screens/GameOver';


export default function App() {

  const [userInput, setUserInput] = useState(null)
  const [gameOver, setGameOver] = useState(false);
  const [guessCount, setGuessCount] = useState(0);


  const handleGameOver = (numOfGuess) =>{
   setGameOver(true);
   setGuessCount(numOfGuess)
  };

  const restartGameHandler = () => {
  setUserInput(null);
  setGuessCount(0);
  setGameOver(false)
};
  const startGame = (text) => {
      setUserInput(text);
      setGameOver(false)
  }

  let screen = <StartGame onScreenChange={startGame}/>

  if (userInput) {
     screen = <GameScreen 
     userInput={userInput} 
     onGameOver={handleGameOver}
     />
  }

  if (gameOver && userInput) {
     screen = <GameOver 
     userInput={userInput} 
     guessCount={guessCount}
     onRestartGame={restartGameHandler}/>
  }
  

  return (
    <LinearGradient style={styles.container} colors={["#72063c","#ddb52f" ]}>
      <ImageBackground 
      source={imgbg}
       resizeMode="cover" 
       style={styles.container}
       imageStyle={styles.imagebg}
       >
        <SafeAreaView style={{ flex: 1 }}>
            {screen}
        </SafeAreaView>
          
      </ImageBackground>
<StatusBar style="auto" />
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
   flex:1
  },
  imagebg:{
    opacity:0.13
  }
});
