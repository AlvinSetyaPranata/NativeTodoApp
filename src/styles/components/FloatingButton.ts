import { StyleSheet } from "react-native"


const DIMENSION = 60


const style = StyleSheet.create({
    container: {
        width: DIMENSION,
        height: DIMENSION,
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: DIMENSION / 2,
        justifyContent: "center",
        alignItems: "center",
        top: 550,
        right: 40,
    },

    title: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold"
    }
})

export default style