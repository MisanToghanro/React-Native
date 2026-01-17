import {View,StyleSheet} from  "react-native"
import ExpenseOutput from "../components/ExpenseOutputs/ExpenseOutput"
import { getLast7DaysExpenses } from "../components/date"
import { useExpenseContext } from "../contex-store/Expense-app-Context"

const HomeScreen = () => {


    const {expenses} = useExpenseContext();
    const recentExpenses = getLast7DaysExpenses(expenses)
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

