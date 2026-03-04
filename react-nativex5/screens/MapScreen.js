import { useEffect, useLayoutEffect, useState } from "react"
import { StyleSheet, View, Text} from "react-native"
import MapView ,{Marker} from "react-native-maps"
import CustomIcon from "../components/UI/CustomIcon"
import * as Location from "expo-location"
import LoadingSpinner from "../components/UI/Spinner"

const MapScreen = ({ navigation, route }) => {
  
  const {onPickLocation} = route.params || {}
  const initialLocation = route.params?.initialLocation;

  const [selectedMapLocation, setSelectedMapLocation] = useState(null);
  const [alert, setAlert] = useState("");
  const [mapRegion, setMapRegion] = useState(null);

  const selectMapLocationHandler = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    const addressResponse = await Location.reverseGeocodeAsync({
      longitude,
      latitude
    });

    if (!addressResponse || addressResponse.length === 0) {
  return;}

    const addressObj = addressResponse[0];

    const address = [
  addressObj.name,
  addressObj.street,
  addressObj.city,
  addressObj.country,
]
  .filter(Boolean)
  .join(", ");



    setSelectedMapLocation({
      lat: latitude,
      lng: longitude,
      address:address
    });
  };

  const savePickedLocationHandler = () => {
    if (!selectedMapLocation) {
      setAlert("No location picked, please tap a desired location on the map");

      setTimeout(() => {
        setAlert("");
      }, 3000);

      return;
    }

    if(onPickLocation ){
      onPickLocation(selectedMapLocation)
    }
  navigation.goBack()
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomIcon
          icon="save"
          color="white"
          size={24}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, selectedMapLocation]);

  useEffect(() => {
    const getUserLocation = async () => {
      // If coming with an existing location
      if (initialLocation) {
        const region = {
          latitude: initialLocation.lat,
          longitude: initialLocation.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };

        setMapRegion(region);

        // set marker
        setSelectedMapLocation(initialLocation);

        return;
      }

      const permission =
        await Location.requestForegroundPermissionsAsync();

      if (permission.status !== "granted") {
        setMapRegion({
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
        return;
      }

       const location = await Location.getCurrentPositionAsync();

const coords = {
  lat: location.coords.latitude,
  lng: location.coords.longitude,
};

const addressResponse = await Location.reverseGeocodeAsync({
  latitude: coords.lat,
  longitude: coords.lng,
});

if (!addressResponse || addressResponse.length === 0) {
  return;
}

const addressObj = addressResponse[0];

const address = [
  addressObj.name,
  addressObj.street,
  addressObj.city,
  addressObj.country,
]
  .filter(Boolean)
  .join(", ");

setMapRegion({
  latitude: coords.lat,
  longitude: coords.lng,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
});

setSelectedMapLocation({
  ...coords,
  address: address,
});

    };

    getUserLocation();
  }, []);

  if (!mapRegion) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <MapView
        onPress={selectMapLocationHandler}
        style={styles.map}
        region={mapRegion}
      >
        {selectedMapLocation && (
          <Marker
            coordinate={{
              latitude: selectedMapLocation.lat,
              longitude: selectedMapLocation.lng,
            }}
            title="Picked Location"
          />
        )}
      </MapView>

      {alert ? (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{alert}</Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  alertContainer: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal:10
  },
  alertText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});

export default MapScreen