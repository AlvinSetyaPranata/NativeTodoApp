import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 120,
        borderRadius: 10,   
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderWidth: 1
    },

    textTitle: {
        fontWeight: "500",
        fontSize: 16,
        color: "black"
    },
    
    textDate: {
        fontWeight: "500",
        color: "black",
        fontSize: 14
    }
})

export default style