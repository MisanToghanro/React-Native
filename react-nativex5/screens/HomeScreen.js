import { View, Text, StyleSheet, Pressable } from "react-native";
import CustomButton from "../components/UI/CustomButton";
import { DUMMY_LOCATIONS } from "../data/dummy-loactions";
import LocationList from "../components/Locations/LocationList";

const HomeScreen = ({ navigation }) => {

    const selectLocationHandler = (id) => {
      navigation.navigate("LocationDetails", {
        locationID: id
      })
    }
  return (
    <View style={styles.container}>
      <LocationList 
      locations={DUMMY_LOCATIONS}
      onSelect={selectLocationHandler}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
        flex: 1,
  },

});
