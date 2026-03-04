import { StyleSheet, View,Text } from "react-native"
import { useRoute } from "@react-navigation/native";
import CustomButton from "../UI/CustomButton";
import { useState } from "react";
import * as Location from "expo-location"
import Card from "../UI/Card";
import { Colors } from "../../constants/colors";
import MapPreview from "./MapPreview";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const LocationPickerComp = ({onPickLocation}) => {

const navigation = useNavigation();
const route = useRoute();

const [pickedLocation, setPickedLocation] = useState(null);
const [permissionStatus, setPermissionStatus] = useState(null);
const [errorMsg, setErrorMsg] = useState("")


  useEffect(() => {
  if (route.params?.pickedLocation) {
    setPickedLocation(route.params.pickedLocation);
    onPickLocation(route.params.pickedLocation);
  }
}, [route.params]);


    const getCurrentLocation = async () => {
        setErrorMsg("")
         const permission = await Location.requestForegroundPermissionsAsync();
         if (permission.status !== "granted") {
            setPermissionStatus("denied")
             setErrorMsg("Permission to access location was denied");
             return;
         }

         setPermissionStatus("granted");
          setErrorMsg("Permission granted!")

          setTimeout(() => {
            setErrorMsg("")
          }, 3000);



         const location = await Location.getCurrentPositionAsync();

      const coordinates = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };

    setPickedLocation(coordinates);
    console.log(location);
    onPickLocation(coordinates)

    
    }


    const pickMapLocation = () => {
      navigation.navigate("Map", {
        initialLocation: pickedLocation,
        onPickLocation: onPickLocation
      });
    }
    
    return (
        <Card style={styles.container}>

            {errorMsg && (
                <View style={[styles.msgContainer,
                permissionStatus === "granted" ? styles.success : styles.error]}>
                    <Text style={styles.msgText}>{errorMsg}</Text>
            </View> )}

            <View style={styles.preview}>

                {pickedLocation ? (
                   <View style={{ flex: 1, width: "100%" }}>
                    <MapPreview location={pickedLocation} />
                    {pickedLocation.address && (
                      <Text style={styles.addressText}>{pickedLocation.address}</Text>
                    )}
                    </View>
        
                ) : (
                    <Text style={styles.placeholderText}>No location chosen yet</Text>
                )}
               </View>


            <View>       
          <CustomButton onPress={getCurrentLocation}>Get Current Location</CustomButton>
              
          <CustomButton onPress={pickMapLocation}>Open Map</CustomButton>
            </View>

        </Card>
    )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  preview:{
height:200,
overflow:"hidden",
justifyContent:"center",
alignItems:"center",
borderWidth:1,
borderColor:"#ccc",
backgroundColor: "#2a2a2a",
borderRadius:6,
marginBottom:12
  },
    placeholderText: {
    color: Colors.primary200,
    fontSize: 14,
  },
    msgContainer: {
    backgroundColor: "#cf3e3e",
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
  },
    success: {
    backgroundColor: "#46cf66",
  },

  msgText: {
    color: "white",
    textAlign: "center",
    fontWeight:"semibold"
  },
    addressText: {
    color: "black",
    textAlign: "center",
    fontWeight:"semibold"
  },
})

export default LocationPickerComp;