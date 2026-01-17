import { View,Text, StyleSheet, Pressable } from "react-native"
import { GlobalStyles } from "../../constants/styles";

const ExpenseCard = ({description,amount,date, onPress}) => {

    
    const formattedDate = new Date(date).toLocaleDateString();


  return (
    <Pressable onPress={onPress} 
    style={({pressed}) => [styles.container, pressed && styles.pressed]}>
         <View >
      <View style={styles.row}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.amount}>₦{amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.date}>{formattedDate}</Text>
    </View>
    </Pressable>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 8,
    elevation: 4,
  },
    pressed: {
    opacity: 0.75,
    color: GlobalStyles.colors.primary500
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e7d32",
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    color: "gray",
  },
});

export default ExpenseCard;
