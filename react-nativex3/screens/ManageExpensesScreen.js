import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/Buttons/IconButton";
import CustomButton from "../components/Buttons/CustomButton";
import { useExpenseContext } from "../contex-store/Expense-app-Context";
import ExpenseForm from "../components/ExpenseForm";
import LoadingSpinner from "../components/LoadingSpinner";

const ManageExpensesScreen = ({ route }) => {

  const { addExpense, updateExpense, deleteExpense, expenses } = useExpenseContext();
   const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null)
  const navigation = useNavigation();

  const expenseId = route.params?.expenseId;
  const editExpense = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editExpense ? "Edit this Expense" : "Create an Expense",
    });
  }, [navigation, editExpense]);

  const deleteExpenseHandler = () => {
    setSubmitting(true)
    deleteExpense(expenseId)
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

const confirmExpenseHandler = async (expenseData) => {
  setSubmitting(true);
  setError(null);

  try {
    if (editExpense) {
      await updateExpense(expenseId, expenseData);
    } else {
      await addExpense(expenseData);
    }

    navigation.goBack();
  } catch (error) {
    setError("Could not save expense. Please try again.");
    setSubmitting(false);
  }
};


if (submitting) {
  return (
   <LoadingSpinner/>
  );
}

const exisitingExpense = expenses.find(
  (expense) => expense.id === expenseId
);

  return (
    <View style={styles.container}>

      <ExpenseForm
      onsubmit={confirmExpenseHandler}
      onCancel={cancelHandler}
      submitLabel={editExpense ? "Edit Expense" : "Add Expense"}
      currentValue={exisitingExpense}
      submitting={submitting}
      />


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
