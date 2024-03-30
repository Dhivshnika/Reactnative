import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    heading: {
        color: colors.black,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    inputTextBox: {
        backgroundColor: colors.white,
        height: '50%',
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 20,
        elevation: 5
    },
    inputText: {
        marginLeft: 20,
        color: colors.black
    },
    speak: {
        backgroundColor: colors.black,
        borderRadius: 10,
        width: '30%',
        padding: 10,
        marginLeft: 30,
        marginTop: 30,
        alignItems: 'center'
    },
    speakText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    stop: {
        backgroundColor: colors.red,
        borderRadius: 10,
        width: '30%',
        padding: 10,
        marginLeft: 30,
        marginTop: 30,
        alignItems: 'center'
    },
    stopText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    clear: {
        backgroundColor: colors.black,
        borderRadius: 10,
        width: '80%',
        padding: 10,
        marginLeft: 40,
        marginTop: 30,
        alignItems: 'center'
    },
    clearText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 25
    },
    loader: {
        marginLeft: 55,
        marginRight: 40,
        marginTop: 30
    }
})
export default styles;