import { Text, View, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants/styles";

const ExpenseSummary = ({expenses, period}) => {

    const totalAmount = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)
    
    return(
        <View style={styles.container}>
      <Text style={styles.period}> Expenses: {period}</Text>
      <Text style={styles.amount}>₦{totalAmount.toFixed(2)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    gap:8,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal:8,
    margin:12,

  },
  period: {
    color: "white",
    fontSize: 14,
  },
  amount: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default ExpenseSummary