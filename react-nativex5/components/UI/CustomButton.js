import { Pressable, View, Text, StyleSheet } from "react-native"
import { Colors } from "../../constants/colors";
const CustomButton = ({onPress, children}) => {

    return(
        <Pressable onPress={onPress} style={({pressed}) => [
            styles.button,
            pressed && styles.pressed
        ]}>
            <View>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary700,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal:24,
    elevation: 3,
  },
  pressed:{
    opacity:0.7
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default CustomButton