
import MapView , {Marker} from "react-native-maps"
import Card from "../UI/Card";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const MapPreview = ({location}) => {

    if (!location) {
        return(
            <View style={styles.fallback}>
        <Text style={styles.fallbackText}>No location preview</Text>
      </View>

        )
    }
    return(
        
                   <MapView
            style={styles.map}
            region={{
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 0.0122,
                longitudeDelta: 0.0121,
            }}
            >
                <Marker 
                coordinate={{
                    latitude: location.lat,
                    longitude: location.lng
                }} 
                title="Picked Location" />
            </MapView>

       
    )
}

const styles = StyleSheet.create({

map: {
  width: "100%",
  height: "100%",
},
  fallback: {
    backgroundColor: Colors.gray700,
    flex:1,
      justifyContent: "center",
    alignItems: "center",
  },
    fallbackText: {
    color: Colors.primary200,
    fontSize: 14,
  }
});

export default MapPreview;