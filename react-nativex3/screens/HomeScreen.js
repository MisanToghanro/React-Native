import {View,StyleSheet, Text} from  "react-native"
import ExpenseOutput from "../components/ExpenseOutputs/ExpenseOutput"
import { getLast7DaysExpenses } from "../components/date"
import { useExpenseContext } from "../contex-store/Expense-app-Context"
import LoadingSpinner from "../components/LoadingSpinner"

const HomeScreen = () => {


    const {expenses, fetchingExpenses} = useExpenseContext();
    const recentExpenses = getLast7DaysExpenses(expenses)

  if (fetchingExpenses) {

    return(
      <LoadingSpinner/>
    )
  }
    return(
        <View style={styles.container}>
            <ExpenseOutput expenses={recentExpenses} periodName="Last 7 Days"/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen

