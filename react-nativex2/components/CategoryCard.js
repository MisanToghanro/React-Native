import { Pressable, View,Text,StyleSheet, Platform } from "react-native"


const CategoryCard = ({title,color, onNavigate}) => {

    return(
        <View style={styles.cardContainer}>
            <Pressable android_ripple={{color:"#ccc"}}
            onPress={onNavigate}
            style={({pressed}) => pressed ? [styles.pressable, styles.pressed] : styles.pressable }
            >
            <View style={[styles.innerContainer, {backgroundColor:color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>

            </Pressable>  
          
        </View>

    )
}


const styles = StyleSheet.create({
    cardContainer: {
        flex:1,
        margin:10,
        borderRadius:12,
        elevation:4,
        height:150,

     backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

     overflow: Platform.OS === "android" ? "hidden" : "visible"
        
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
    },
      title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
    pressable: {
    flex: 1,
  },
    pressed: {
    opacity: 0.7,
  }
})
export default CategoryCard;