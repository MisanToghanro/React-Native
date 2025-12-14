import { FlatList, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const GoalList = ({goals, handleDelete}) => {

    return(
              <FlatList 
              data={goals}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                
                 <View  style={styles.goalItemsView} >
                 <Text style={styles.goalItemsViewText} >{item.text}</Text>
                 
              <Pressable onPress={() => handleDelete(item.id)}>
              <Ionicons name="trash-outline" size={25} color="#ff4f4f" />
              </Pressable>
                </View> 
                

    
              )}/>
                
    )

    
}

const styles = StyleSheet.create({
 goalItemsView: {
flexDirection: "row",
alignItems:"center",
justifyContent:"space-between",
  marginVertical: 8,
  padding: 14,
  borderWidth: 2,
  borderColor: "#0f766e",
  borderRadius: 8,
  elevation: 3, 
  shadowColor: "#000", 
  shadowOpacity: 0.2,
  shadowRadius: 4,
  },
  goalItemsViewText:{
   color:"white",
   fontSize: 16,
    fontWeight:"500"
  },
})

export default GoalList;
