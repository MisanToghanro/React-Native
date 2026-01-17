import { Pressable, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, children, danger }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        danger && styles.danger,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};



const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#3e04c3",
    alignItems: "center",
    marginVertical: 8,

  },
  danger: {
    backgroundColor: "green",
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomButton;