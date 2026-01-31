import {
    fetchExpenses,
    addExpense as addExpenseToFirebase,
    deleteExpense as deleteExpenseFromFirebase,
    updateExpense as updateExpenseInFirebase,
} from "../fireBase/https"
import { useEffect, useState } from "react";
import { createContext, useContext, useReducer } from "react";



const ExpenseContext = createContext({
    expenses:[],
    addExpense: () => {},
    deleteExpense:() => {},
    updateExpense:() => {},
    fetchingExpenses: false
});

const expenseReducer = (state, action) => {

    switch (action.type) {
   
        case "SET" :
            return action.payload;

        case "ADD" :  
        return [ action.payload, ...state];

        case "DELETE": return state.filter((expense) => expense.id !== action.payload);

        case "UPDATE":
  return state.map(expense =>
    expense.id === action.payload.id
      ? { ...expense, ...action.payload.expenseData}
      : expense
  );

  default: return state
            

    }

}
export const ExpenseContextProvider = ({children}) => {

    const [expensesState, dispatch] = useReducer (
        expenseReducer,
        []
    )
    const [fetchingExpenses, setFetchingExpenses] = useState(true)

    useEffect(() => {
        const loadExpenses = async () => {
          setFetchingExpenses(true)
           try {
      const expenses = await fetchExpenses();
      dispatch({ type: "SET", payload: expenses });
    } catch (error) {
      console.log("Failed to fetch expenses:", error);
    }finally{
      setFetchingExpenses(false)
    }
        };
        loadExpenses();
    },[]);



    const addExpense = async (expenseData) => {
  const id = await addExpenseToFirebase(expenseData);

  dispatch({
    type: "ADD",
    payload: { ...expenseData, id },
  });
};


const deleteExpense = async (id) => {
  await deleteExpenseFromFirebase(id);

  dispatch({
    type: "DELETE",
    payload: id,
  });
};


const updateExpense = async (id, expenseData) => {
  await updateExpenseInFirebase(id, expenseData);

  dispatch({
    type: "UPDATE",
    payload: { id, expenseData },
  });
};

    return(
        <ExpenseContext.Provider value={{
            expenses:expensesState,
            fetchingExpenses,
            addExpense,
            deleteExpense,
            updateExpense
        }}>
        {children}
        </ExpenseContext.Provider>
    )
}

export const useExpenseContext = () => {

    return(
        useContext(ExpenseContext)
    )

}
