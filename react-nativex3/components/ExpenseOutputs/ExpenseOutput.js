
import { Text, View,StyleSheet } from "react-native"
import ExpenseSummary from "./ExpenseSummary"
import ExpenseList from "./ExpenseList"


const ExpenseOutput = ({expenses,periodName}) => {

    return(
       
            
            <View style={styles.container}>
                <ExpenseSummary expenses={expenses} period={periodName}/>
                
                <ExpenseList expenses={expenses}/>
            </View>
       
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ExpenseOutput