import { StyleSheet, View,Text } from "react-native"
import CustomButton from "../UI/CustomButton";
import { useState } from "react";
import * as Location from "expo-location"
import Card from "../UI/Card";
import { Colors } from "../../constants/colors";



const LocationPickerComp = ({onPickLocation}) => {
const [pickedLocation, setPickedLocation] = useState(null);
const [permissionStatus, setPermissionStatus] = useState(null);
const [errorMsg, setErrorMsg] = useState("")

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



         const location = await Location.getCurrentPositionAsync();

             const coordinates = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };

    setPickedLocation(coordinates);
    onPickLocation(coordinates)

    
    }


    const pickMapLocation = () => {

    }
    return (
        <Card style={styles.container}>
            {errorMsg && (
                <View style={[styles.msgContainer,
                permissionStatus === "granted" ? styles.success : styles.error]}>
                    <Text style={styles.msgText}>{errorMsg}</Text>
            </View>
            )}

            <View style={styles.preview}>

                {pickedLocation ? (
          <View>
         <Text style={styles.placeholderText}>
            Lat: {pickedLocation.lat.toFixed(4)} | Lng:{" "}
            {pickedLocation.lng.toFixed(4)}
          </Text>
         </View>
                ) : (
                    <Text style={styles.placeholderText}>No location chosen yet</Text>
                )}
        </View>

            <View>

               {permissionStatus !== "denied" && (
          <CustomButton onPress={getCurrentLocation}>
           Get Current Location
           </CustomButton>
              )}

                <CustomButton onPress={pickMapLocation}>Pick a Loaction</CustomButton>
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
    backgroundColor: "#4bda6c",
  },

  msgText: {
    color: "white",
    textAlign: "center",
  },
})

export default LocationPickerComp;