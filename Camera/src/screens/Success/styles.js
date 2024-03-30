import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    successContainer: {
        backgroundColor: "#3E6975",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    successItems: {
        backgroundColor: "#B7E5E4",
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        height: 240,
        width: 280,
        borderRadius: 15,
        gap: 10,
    },
    successfulText: {
        color: "#3E6975",
        fontSize: 20,
        fontWeight: "600"
    },
    successImage: {
        width: 56,
        height: 56,
        marginTop: 20,
    },
    successText: {
        color: "#7698A1",
        fontSize: 15,
        fontWeight: "400",
        textAlign: "center",
    },
    BackContainer: {
        backgroundColor: "#3E6975",
        fontSize: 14,
        fontWeight: "400",
        marginTop: 10,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 5,
        marginBottom: 20,
    },
})
export default styles;