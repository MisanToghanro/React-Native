import { Pressable, StyleSheet } from "react-native"
import {Ionicons} from "@expo/vector-icons"

const CustomIcon = ({icon, size, color, onPress}) => {

    return (
        <Pressable onPress={onPress} style= {({pressed}) => [
            styles.iconView,
            pressed && styles.pressed
        ]}>
            <Ionicons name={icon} size={size} color={color} />

        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconView:{
      padding: 8,
      justifyContent:"center",
      alignItems:"center"
    },
    pressed:{
        opacity: 0.7
    }
})

export default CustomIcon;