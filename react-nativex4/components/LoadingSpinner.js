import { View , ActivityIndicator, StyleSheet} from "react-native"


const LoadingSpinner = () => {

    return(
        <View style={styles.centered}>
           <ActivityIndicator size="large" color="#a281f0"/>
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