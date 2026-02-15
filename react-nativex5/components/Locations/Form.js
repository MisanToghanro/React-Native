import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native"
import CustomButton from "../UI/CustomButton";
import { StyleSheet } from "react-native";
import ImagePickerComp from "./ImagePicker";
import LocationPickerComp from "./LocationPicker";
import Card from "../UI/Card";
import { Colors } from "../../constants/colors";


const Form = ({onCreateLocation}) => {

    const [title, setTitle] = useState("");
    const [address , setAddress] = useState("");
    const [mediaUri, setMediaUri] = useState(null);
    const [userLocation, setUserLocation] = useState(null);


    const submithandler = () => {
        const locationData ={
            title,address, mediaUri, userLocation
        }

        onCreateLocation(locationData)
    }

    const takeImageHandler = (uri) => {
       setMediaUri(uri)
    }

    const pickLocationHandler = (pickedLocation) => {
       setUserLocation(pickedLocation)
    }

    return (
  <ScrollView keyboardShouldPersistTaps="handled">
    <View style={styles.screen}>
      <Card style={{backgroundColor:Colors.primary50, marginBottom:24}}>
        {/* Title */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter location title"
            placeholderTextColor={Colors.primary50}
            value={title}
            onChangeText={setTitle}
          />
        </View>

        {/* Address */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            placeholderTextColor={Colors.primary50}
            value={address}
            onChangeText={setAddress}
            multiline
          />
        </View>

        {/* Image */}
        <View style={styles.section}>
          <ImagePickerComp onTakeImage={takeImageHandler} />
        </View>

        {/* Location */}
        <View style={styles.section}>
          <LocationPickerComp onPickLocation={pickLocationHandler} />
        </View>

        {/* Submit */}
        <View style={styles.actions}>
          <CustomButton onPress={submithandler}>
            Save location
          </CustomButton>
        </View>
      </Card>
    </View>
  </ScrollView>
);

}

const styles = StyleSheet.create({
  screen: {
    padding: 16,
  },

  inputContainer: {
    marginBottom: 16,
  },

  label: {
     color: Colors.primary700,
    fontWeight: "600",
    marginBottom: 6,
    fontSize: 14,
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
      borderColor: Colors.primary800,
  backgroundColor: Colors.primary700,
    color: "white",
    fontSize: 15,
  },

  section: {
    marginVertical: 12,
  },

  actions: {
    marginTop: 16,
  },
});



export default Form;