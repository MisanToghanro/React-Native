
import {  StyleSheet, Text, View, Modal, Pressable, StatusBar } from 'react-native';
import { useState } from 'react';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {
 
  const [goals, setGoals] = useState([]);
  const [modalScreen, setModalScreen] = useState(false);

  const openModal = () => {
    setModalScreen(true);
  }
  const closeModal = () => {
    setModalScreen(false);
  } 
  
  const addGoal = ( newGoal) => {
    setGoals(currentGoals => [ {text: newGoal, id: Math.random().toString()}, ...currentGoals] )
  }

  const deleteGoal = (id) => {
        setGoals(currentGoals => currentGoals.filter(
          goal =>  goal.id !== id
        ))
  }

return (
  <View style={styles.appContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

    {/* Add Goal Button */}
    <Pressable onPress={openModal} style={styles.addGoalButton}>
      <Text style={styles.addGoalButtonText}>Add a New Goal</Text>
    </Pressable>

    {/* Modal */}
    <Modal animationType="slide" visible={modalScreen} >
      
        <View style={styles.modalContainer}>
          <GoalInput addGoalHandler={addGoal} closeModal={closeModal} />
        </View>
    </Modal>

    {/* Goals List */}
    <View style={styles.goalsView}>
      <Text style={styles.goalsTitle}>Goals:</Text>
      <GoalList goals={goals} handleDelete={deleteGoal} />
    </View>

  </View>
);

}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1f2937",
  },

  addGoalButton: {
    backgroundColor: "#14b8a6",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },

  addGoalButtonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },

  goalsView: {
    flex: 1,
    marginTop: 20,
  },

  goalsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#e2e8f0",
  },

modalContainer: { 
  flex: 1,  
  padding: 20,
   backgroundColor: "#1f2937" },
});


