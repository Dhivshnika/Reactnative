const { StyleSheet } = require("react-native");
const { default: colors } = require("../../utils/colors");

const styles = StyleSheet.create({
    mainHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
        marginLeft: 20,
        marginTop: 20,
    },
    headingView: {
        backgroundColor: colors.cream,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 10,
        height: 30,
        borderWidth: 1,
        borderColor: colors.grey
    },
    headingText: {
        fontSize: 20,
        color: colors.grey,
        marginRight: 10,
        textAlign: 'center'
    },
    subContainer: {
        marginLeft: 30,
        borderRadius: 10,
        height: 200,
        width: 310,
        marginTop: 20,
        marginRight: 10
    },
    name: {
        fontSize: 20,
        color: colors.white,
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold',
        marginRight: 10
    },
    price: {
        fontSize: 18,
        color: colors.white,
        marginLeft: 20,
        marginTop: 10,
    },
    image: {
        height: 150,
        width: 150,
        marginTop: 50,
        alignSelf: 'center',
        position: 'absolute',

    }

})
export default styles;