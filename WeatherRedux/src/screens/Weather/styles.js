import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        height: '100%',
        width: '100%'
    },
    headerConatiner: {
        flexDirection: 'row'
    },
    input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.white,
        padding: 5,
        marginTop: 30,
        width: '85%',
        height: 50,
        borderRadius: 50,
        marginLeft: 30,
        backgroundColor: colors.white
    },
    inputText: {
        color: colors.black,
        fontSize: 15
    },
    search: {
        marginTop: 5,
        marginLeft: 85
    },
    searchMain: {
        marginTop: 5,
        marginLeft: 125
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 5,
        borderRadius: 100
    },
    forecast: {
        color: colors.grey,
        fontSize: 25,
        marginLeft: 10
    },
    currentTemp: {
        fontSize: 80,
        marginLeft: 30,
        marginTop: '50%',
        color: colors.white,
    },
    currentDesc: {
        color: colors.white,
        fontSize: 25,
        marginLeft: 35
    },
    hourlyItem: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    hourlyContainer: {
        marginTop: '25%',
        opacity: .6,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10
    },
    locationHeading: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 30,
        marginLeft: 30
    },
    locationSubHeading: {
        color: colors.grey,
        fontSize: 15,
        marginTop: 3,
        marginLeft: 40
    },
    timeText: {
        textAlign: 'center',
        marginBottom: 5,
        color: colors.white,
    },
    tempText: {
        marginLeft: 10,
        marginBottom: 5,
        color: colors.white,
    },
    umbrellaBox: {
        flexDirection: 'row',
        marginTop: '50%',
        backgroundColor: colors.black,
        opacity: .6,
        width: '100%',
        marginLeft: 20,
        borderRadius: 20,
        height: '15%'
    },
    snowmanBox: {
        flexDirection: 'row',
        marginTop: '10%',
        backgroundColor: colors.black,
        opacity: .6,
        width: '100%',
        marginLeft: 20,
        borderRadius: 20,
        height: '15%'
    },
    umbrellaImage: {
        height: 30,
        width: 30,
        marginLeft: 20
    },
    umbrellaText: {
        fontSize: 15,
        color: colors.white,
        marginLeft: 15,
        marginTop: 5
    },
    snowmanImage: {
        height: 20,
        width: 20,
        marginLeft: 20,
        marginTop: 7
    },
    snowmanText: {
        fontSize: 15,
        color: colors.white,
        marginLeft: 20,
        marginTop: 6
    },
    video: {
        width: 320,
        height: 240,
    },
    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.white,
        alignSelf: 'center',
    },
    text2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 10
    },
    text3: {
        fontSize: 15,
        color: colors.grey,
        alignSelf: 'center',
        marginTop: 20
    },
    text4: {
        fontSize: 15,
        color: colors.grey,
        alignSelf: 'center',
        marginTop: 10
    },
    mainImage: {
        height: 280,
        width: 350,
        marginTop: 100,
        alignSelf: 'center'
    }
});

export default styles;