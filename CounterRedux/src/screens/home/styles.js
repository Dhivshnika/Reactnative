import { StyleSheet, Dimensions } from "react-native";

const percentToDP = (percent) => {
    const screenWidth = Dimensions.get('window').width;
    console.log(screenWidth);
    return (percent * screenWidth) / 100;
};
const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        justifyContent: 'center', // This centers buttonWrapperView vertically.
        alignItems: 'center',     // This centers buttonWrapperView horizontally.
    },
    heading: {
        fontSize: percentToDP(7),
        textAlign: 'center',
        marginTop: percentToDP(5),
    },
    output: {
        fontSize: percentToDP(6),
        textAlign: 'center',
        marginTop: percentToDP(6),
    },
    buttonWrapperView: {
        flexDirection: 'row',
        marginTop: percentToDP(1),
        marginRight: percentToDP(10),
        alignItems: 'center',
        justifyContent: 'center',   // This centers the buttons horizontally within the buttonWrapperView.
        backgroundColor: 'pink'
    },
    buttonInc: {
        fontSize: percentToDP(4),
        marginLeft: percentToDP(10),
    },
    buttonDec: {
        fontSize: percentToDP(4),
        marginLeft: percentToDP(9),
    }
})


export default styles;