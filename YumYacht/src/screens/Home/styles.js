import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    whole: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputContainer: {
        borderRadius: 20,
        width: '85%',
        marginLeft: 25,
        marginTop: 20,
        backgroundColor: colors.search_grey,
        flexDirection: 'row'
    },
    menu: {
        marginLeft: 20,
        marginTop: 20
    },
    home: {
        color: colors.black,
        fontSize: 25,
        marginLeft: 100,
        marginTop: 15
    },
    bag: {
        marginLeft: 100,
        marginTop: 20
    },
    search: {
        marginTop: 10,
        marginLeft: 10
    },
    input: {
        width: '75%',
        marginLeft: 10,
        color: colors.black,
        fontSize: 18
    },
    filter: {
        margin: 21,
        marginRight: 5
    },
    title1: {
        color: colors.black,
        fontSize: 15,
        marginLeft: 20
    },
    title2: {
        color: colors.black,
        fontSize: 15,
        marginLeft: 17
    },
    title3: {
        color: colors.black,
        fontSize: 15,
        marginLeft: 17
    },
    title4: {
        color: colors.black,
        fontSize: 15,
        marginLeft: 17
    },
    title5: {
        color: colors.black,
        fontSize: 15,
        marginLeft: 17
    }
});
export default styles;