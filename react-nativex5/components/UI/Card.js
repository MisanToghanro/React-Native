import { View , StyleSheet} from "react-native"
import { Colors } from "../../constants/colors";
const Card = ({children, style}) => {

    return (
        <View style={[styles.card, style]}>
            {children }
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary500,
    borderRadius: 12,
    padding: 16,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 6,
  },
});


export default Card;