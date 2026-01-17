import {View, Text} from "react-native"
import ExpenseOutput from "../components/ExpenseOutputs/ExpenseOutput"
import { useExpenseContext } from "../contex-store/Expense-app-Context"

const ExpenseHistoryScreen = () => {

    const {expenses} = useExpenseContext();
    return(
        <View style={{flex:1}}>
            <ExpenseOutput expenses={expenses} periodName="Total Expenses"/>

        </View>
    )
}
export default ExpenseHistoryScreen
