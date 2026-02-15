import { View ,Text,Pressable , StyleSheet} from "react-native"

const LocationCard = ({title,address,onPress}) => {

    return(
       <Pressable onPress={onPress} style={({pressed}) => [
        styles.card,
        pressed && styles.pressed
       ]}>

        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
       </Pressable>
    )
}

const styles = StyleSheet.create({

      card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
})

export default LocationCard;