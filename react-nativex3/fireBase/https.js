


//These are Firestore helper functions. Each one maps to a database action
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import {db} from "./firebase"


const EXPENSE_COLLECTION = "expenses";

export const fetchExpenses = async() => {
    
    const snapshot = await getDocs(collection(db , EXPENSE_COLLECTION));

    // convert Firebase documents to  plain JS objects
    const expenses = [];

    //loop through each doc(expenses)
    snapshot.forEach((docSnap) => {

        expenses.push({
            id: docSnap.id,
            ...docSnap.data(),
            date: docSnap.data().date.toDate()

        })
    })

    return expenses;
}

//Now create firebase helper functions to add, update and delete expenses

 export const addExpense = async (expenseData) => {
    const addDocExpense = await addDoc(collection(db, EXPENSE_COLLECTION), expenseData);

    return addDocExpense.id;
};

export const deleteExpense = async (id) => {

    await deleteDoc(doc(db,EXPENSE_COLLECTION, id))
};

export const updateExpense = async (id,expenseData) => {
    await updateDoc(doc(db, EXPENSE_COLLECTION, id), expenseData)
}
