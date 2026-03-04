import {  View } from "react-native"
import { useRoute } from "@react-navigation/native";
import Form from "../components/Locations/Form";

const AddLocationScreen = () => {

    const route = useRoute();
    const pickedLocation = route.params?.pickedLocation

    const createLocationHandler =(locationData) => {
           console.log(locationData)
    }

 
    return(
        <View>
            <Form onCreateLocation={createLocationHandler} pickedLocation={pickedLocation}/>
        </View>
    )
}

export default AddLocationScreen;