import { Image, View , Text} from "react-native"
import CustomButton from "../UI/CustomButton";
import * as ImagePicker from "expo-image-picker"
import { useState } from "react";
import { StyleSheet } from "react-native";
import Card from "../UI/Card";
import { Colors } from "../../constants/colors";

const ImagePickerComp = ({onTakeImage}) => {

    const [permission, setPermission] = useState("");
    //const [pickedImage, setPickedImage] = useState(null);
      const [pickedMedia, setPickedMedia] = useState(null);


    const takeImageHandler = async () => {

       // const permissionRequest = await ImagePicker.requestCameraPermissionsAsync();
       const permissionRequest = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!permissionRequest.granted) {
            //setPermission("Camera permission is required to take pictures.");
            setPermission("Permission to access the media library is required.")
            return;
        }
        
        const media = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ['images', 'videos'],
          allowsEditing:true,
          aspect: [4, 5],
          quality: 1,
        })

        if(!media.canceled){
           const mediaUri = media.assets[0].uri;
           setPickedMedia(mediaUri);
           onTakeImage(mediaUri)
        }
       // const image = await ImagePicker.launchCameraAsync({
          //  allowsEditing: true,
           // aspect:[16,9],
            //quality:0.5
       // });
        
       // if (!image.canceled) {
          // const imageUri = image.assets[0].uri;
          // setPickedImage(imageUri) ;
          // onTakeImage(imageUri) }

    }

return (
  <Card style={styles.container}>
     
    {permission && (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>{permission}</Text>
      </View>
    )}

    <View style={styles.imagePreview}>
      {pickedMedia ? (
        <Image
          source={{ uri: pickedMedia }}
          style={styles.image}
        />
      ) : (
        <Text style={styles.placeholderText}>
         Pick an image from your gallery
        </Text>
      )}
    </View>

    <CustomButton onPress={takeImageHandler}>
      Open Gallery
    </CustomButton>
  
  </Card>

);

};
const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },

  permissionContainer: {
    backgroundColor: "#cf3e3e",
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
  },

  permissionText: {
    color: "white",
    textAlign: "center",
  },

  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor:"#ccc",
  backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  placeholderText: {
    color: Colors.primary200,
    fontSize: 14,
  },
});

export default ImagePickerComp;
