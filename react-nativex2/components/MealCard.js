import { Image, View , Text, Pressable, StyleSheet, Platform} from "react-native"
import { useNavigation } from "@react-navigation/native"

const MealCard = ({meal}) => {
    
      const { title, imageUrl, duration, complexity, affordability, id } = meal;
    const navigation = useNavigation();

    const navigateHandler = () => {
        navigation.navigate("MealDetails", {meal:meal, mealId: id});
        
    }

    return(
        <View style={styles.cardContainer}>
    <Pressable 
    onPress={navigateHandler}
         android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.content}>

          <Text style={styles.title}>{title}</Text>

          <View style={styles.details}>
            <Text>{duration}min</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>

          </View>


        </View>
      </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
       margin:10,
       borderRadius:12,
       backgroundColor: "white",
       elevation:4,
     // iOS shadow
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    overflow:Platform.OS === "android" ? "hidden" : "visible"
    },
      pressed: {
    opacity: 0.7,
  },
    content:{
    padding:12
    },
    details:{
     flexDirection: "row",
    justifyContent: "space-around",
    }, 
    image:{
    width: "100%",
    height: 200,
    },
      title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
})
export default MealCard;