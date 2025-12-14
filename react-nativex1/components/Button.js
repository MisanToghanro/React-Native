import { Pressable, Text, StyleSheet, View } from "react-native";

const Button = ({ children, onPress }) => {
  return (
    <View style={style.buttonContainer} >
      <Pressable 
        style={style.button} 
        onPress={onPress}
        android_ripple={{ color: "#967405ff" }}
        >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    borderRadius: 9,
    overflow: "hidden", 
    margin: 4,
  },
  button: {
    backgroundColor: "#ddb52f",
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 4,
    
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
    textAlign: "center"
  }
});

export default Button;

