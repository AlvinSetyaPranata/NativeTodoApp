import { StyleSheet } from "react-native"


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    fieldContainer: {
        justifyContent: "center",
        rowGap: 60
    },

    buttonContainer: {
        flexDirection: "row",
        columnGap: 20,
        marginTop: 40,
    },

    cancelButton: {
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderRadius: 10,
        backgroundColor: "red"
    },
    
    okButton: {
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderRadius: 10,
        backgroundColor: "blue",
    },

    actionTextButton: {
        color: "white",
        fontWeight: "600",
        fontSize: 18
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "black",
        marginBottom: 40
    },

})



export default style