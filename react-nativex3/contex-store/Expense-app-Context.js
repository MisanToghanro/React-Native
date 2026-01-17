import { createContext, useContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../data/dummy-expenses";


const ExpenseContext = createContext({
    expenses:[],
    addExpense: (expenseData) => {},
    deleteExpense:(id) => {},
    updateExpense:(id,expenseData) => {}
});

const expenseReducer = (state, action) => {

    switch (action.type) {
   
        case "ADD" :  
        const id =  Date.now().toString()
        return [ {...action.payload, id: id}, ...state];

        case "DELETE": return state.filter((expense) => expense.id !== action.payload);

        case "UPDATE":
  return state.map(exp =>
    exp.id === action.payload.id
      ? { ...exp, ...action.payload.expenseData}
      : exp
  );

  default: return state
            

    }

}
export const ExpenseContextProvider = ({children}) => {

    const [expensesState, dispatch] = useReducer (
        expenseReducer,
        DUMMY_EXPENSES
    )

    const addExpense = (expenseData) => {
      dispatch({type:"ADD", payload:expenseData})
    };

    const deleteExpense = (id) => {
     dispatch({type:"DELETE", payload:id})
    }

    const updateExpense = (id, expenseData) => {
        dispatch({
            type:"UPDATE",
            payload: {id, expenseData}
        })
    }
    return(
        <ExpenseContext.Provider value={{
            expenses:expensesState,
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
