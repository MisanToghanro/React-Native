import { FlatList } from "react-native"
import { StyleSheet,View } from "react-native"
import LocationCard from "./LocationCard"


const LocationList = ({locations, onSelect}) => {

    if(!locations || locations.length === 0){
        return null
    }

    return(
        <View style={styles.container}>
                 <FlatList
        data={locations} 
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <LocationCard
             title={item.title}
             address={item.address}
             onPress={() => onSelect(item.id)}
            />
        )}
        />
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default LocationList