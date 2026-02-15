import {  View } from "react-native"

import Form from "../components/Locations/Form";

const AddLocationScreen = () => {


    const createLocationHandler =(locationData) => {
           console.log(locationData)
    }

 
    return(
        <View>
            <Form onCreateLocation={createLocationHandler}/>
        </View>
    )
}

export default AddLocationScreen;