import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/Buttons/IconButton";
import CustomButton from "../components/Buttons/CustomButton";
import { useExpenseContext } from "../contex-store/Expense-app-Context";

const ManageExpensesScreen = ({ route }) => {

  const { addExpense, updateExpense, deleteExpense } = useExpenseContext();

  const navigation = useNavigation();

  const expenseId = route.params?.expenseId;
  const editExpense = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editExpense ? "Edit this Expense" : "Create an Expense",
    });
  }, [navigation, editExpense]);

  const deleteExpenseHandler = () => {
    deleteExpense(expenseId)
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmExpenseHandler = () => {

    const expenseData = {
      description: "Test Expense",
      amount: 100,
      date: new Date().toISOString()
    };

        if (editExpense) {
      updateExpense(expenseId, expenseData);
    } else {
      addExpense(expenseData);
    }


    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      

      <View style={styles.actions}>
        <CustomButton onPress={cancelHandler}>Cancel</CustomButton>

        <CustomButton danger onPress={confirmExpenseHandler}>
          {editExpense ? "Edit Expense" : "Add Expense"}
        </CustomButton>
      </View>

      {editExpense && (
        <View style={styles.deleteContainer}>
        <Text style={styles.text}>Delete Expense</Text>
          <IconButton
            icon="trash"
            color="white"
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  deleteContainer: {
    marginTop: 32,
    alignItems: "center",
    justifyContent:"center",
   
    backgroundColor:"#c30000",
    flexDirection:"row",
    padding:8,
    borderRadius:8,

  },
  text:{
    fontWeight:"bold",
    color:"white"
  }
});
