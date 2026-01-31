import { useState } from "react";
import { Text, TextInput, View } from "react-native"
import CustomButton from "./Buttons/CustomButton";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";


const ExpenseForm = ({currentValue, onsubmit, submitLabel, onCancel, submitting}) => {

   
    const [userInput, setUserinput] = useState({
        description: currentValue?.description || "",
        amount: currentValue?.amount?.toString() || "",
        date: currentValue?.date
            ? currentValue.date.toISOString().slice(0, 10) : "",
    });
    const [error, setError] = useState("");

   const inputChangeHandler = (inputLabel, enteredValue) => {
        
        setUserinput((inputs) => ({...inputs,
            [inputLabel] :enteredValue
        }));

    }
    
     const SubmitHandler = () => {

    const amountIsValid = !isNaN(userInput.amount) && +userInput.amount > 0;
   const dateIsValid = new Date(userInput.date).toString() !== "Invalid Date";
    const descriptionIsValid = userInput.description.trim().length > 0;


  if (!amountIsValid || !dateIsValid || !descriptionIsValid) {

    setError("Invalid input, Please check your input values");

    return;
  }
        const expenseData = {
            description: userInput.description.trim(),
            amount: +userInput.amount,
            date: new Date (userInput.date)
        }

        onsubmit(expenseData)
     }

    return(
        <View>

    {error &&   <View style={styles.errorView}>
       <Text style={styles.errorText}>{error}</Text>
      </View>}

    <View style={styles.form}>

      {/* Amount + Date */}
      <View style={styles.row}>
        <View style={[styles.inputGroup, styles.flex]}>
            {/*Amount*/}
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            keyboardType="decimal-pad"
            value={userInput.amount}
            onChangeText={inputChangeHandler.bind(this, "amount")}
          />
        </View>
        
        {/*Date*/}
        <View style={[styles.inputGroup, styles.flex]}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            maxLength={10}
            value={userInput.date}
            onChangeText={inputChangeHandler.bind(this, "date")}
          />
        </View>
      </View>

            {/* Description */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
            multiline
         numberOfLines={4}
          textAlignVertical="top" 
          value={userInput.description}
          onChangeText={inputChangeHandler.bind(this, "description")}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <CustomButton onPress={onCancel} disabled={submitting}>Cancel</CustomButton>
        <CustomButton onPress={SubmitHandler} danger="green" disabled={submitting}>
          {submitting ? "Saving" : submitLabel}
        </CustomButton>
      </View>
    </View>

        </View>


    )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 16,
    borderRadius:8,
    elevation:4,
    backgroundColor:"white",
    padding:12
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:10
  },

  flex: {
    flex: 1,
  },

  inputGroup: {
    marginBottom: 12,
    marginHorizontal: 4,
  },

  label: {
    fontSize: 15,
    color: GlobalStyles.colors.gray700,
    marginBottom: 4,
    fontWeight:"bold"
  },

  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
  textArea: {
  minHeight: 100,
  paddingTop: 10,
},

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  errorText: {
    color:GlobalStyles.colors.error50,
    marginHorizontal:8,
    marginVertical:8,
    textAlign: "center",
    fontWeight:"semibold"
  },
  errorView:{
    backgroundColor:GlobalStyles.colors.error500,
    marginBottom:10,
    padding:6,
    borderRadius:8
  }
});

export default ExpenseForm;


