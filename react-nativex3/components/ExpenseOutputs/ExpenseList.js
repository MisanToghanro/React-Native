
import { FlatList } from "react-native"
import ExpenseCard from "./ExpenseCard"
import { useNavigation } from "@react-navigation/native"


const ExpenseList = ({expenses}) => {

    const navigation = useNavigation();
    
    const navigateHandler = (id) => {
        navigation.navigate("ManageExpense", {
            expenseId: id
        })
}
    return(
       
            <FlatList 
            contentContainerStyle={{ paddingBottom: 16 }}
            data={expenses} 
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <ExpenseCard
                description={item.description}
                amount={item.amount}
                date={item.date}
                onPress={() => navigateHandler(item.id)}
                />
            )}/>
        
    )
}

export default ExpenseList