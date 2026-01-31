import { View , ActivityIndicator, StyleSheet} from "react-native"
import { GlobalStyles } from "../constants/styles"

const LoadingSpinner = () => {

    return(
        <View style={styles.centered}>
           <ActivityIndicator size="large" color={GlobalStyles.colors.primary200}/>
        </View>
    )
}

const styles = StyleSheet.create({
centered: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
})
export default LoadingSpinner;