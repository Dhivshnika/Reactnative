import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        color: colors.black,
        textAlign: 'center',
        marginTop: 50,
        fontWeight: 'bold',
        marginBottom: 20
    },
    container: {
        backgroundColor: colors.wheat,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 10,
        width: '85%',
        elevation: 5,
    },
    image: {
        height: 100,
        width: 100,
        margin: 20,
        borderRadius: 10
    },
    name: {
        color: colors.black,
        marginRight: 20,
        marginTop: 25,
        fontWeight: 'bold'
    },
    itemDetail: {
        width: '60%'
    },
    price: {
        color: colors.black,
        marginTop: 5,
    },
    foodContainer: {
        flexDirection: 'row',
        marginTop: 9
    },
    food: {
        color: colors.grey
    },
    countContainer: {
        flexDirection: 'row',
        marginTop: 5,
        width: '80%'
    },
    countText: {
        color: colors.black,
        fontSize: 17,
        marginLeft: 4,
        marginRight: 4
    },
    countImage: {
        marginTop: 5
    },
    remove: {
        backgroundColor: colors.brown,
        height: '125%',
        width: '25%',
        left: 80,
        //top: 5,
        // marginTop: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        //position: 'absolute'
    },
    bin: {
        alignSelf: 'center',
        marginTop: 8
    },
    emptyCart: {
        height: 350,
        width: 400,
        alignSelf: 'center',
        marginTop: 100
    },
    text1: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black
    },
    text2: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.grey
    },
    box: {
        marginTop: 20
    },
    browseBox: {
        backgroundColor: colors.light_brown,
        alignSelf: 'center',
        paddingRight: 12,
        paddingLeft: 12,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 15,
        marginTop: 40
    },
    browseText: {
        fontSize: 20,
        color: colors.brown,
        fontWeight: 'bold'
    },
    subtotalBox: {
        flexDirection: 'row',
    },
    subtotalText: {
        color: colors.grey,
        fontSize: 15,
        width: '66%',
    },
    subtotalTotal: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right',
        width: '30%'
    },
    delivaryFeeBox: {
        flexDirection: 'row',
        marginTop: 10,
        //marginLeft: 30
    },
    delivaryFeeText: {
        color: colors.grey,
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
        borderStyle: 'dashed',
    },
    feeline: {
        width: '66%',
    },
    delivaryFeeTotal: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right',
        width: '30%',
    },
    part1: {
        marginLeft: 20,
        paddingBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: colors.light_grey,
        borderStyle: 'dashed',
        marginRight: 30,
        width: '90%'
    },
    part2: {
        marginLeft: 20,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: colors.light_grey,
        borderStyle: 'dashed',
        marginRight: 30,
        width: '90%'
    },
    part3: {
        marginLeft: 20,
        paddingBottom: 30,
        marginRight: 30,
        width: '90%'
    },
    bill: {
        marginTop: 20,
        marginLeft: 5,
        backgroundColor: '#fff',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 20
    },
    billHeading: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 30,
        marginTop: 60
    },
    payText: {
        color: colors.black,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
    },
    payTotal: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right',
        width: '30%',
        marginTop: 10
    },
    checkoutBox: {
        backgroundColor: colors.brown,
        width: '85%',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,
        marginBottom: 20
    },
    checkoutText: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',

    },
    moreItemBox: {
        backgroundColor: '#fff',
        width: '84.5%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 5,
        borderRadius: 10,
        marginLeft: 30,
        flexDirection: 'row',
        elevation: 5
    },
    moreItemText: {
        color: colors.grey,
    },
    moreItemImage: {
        marginLeft: '55%'
    },
    deleteBack: {
        backgroundColor: colors.brown,
        height: 45,
        width: 45,
        borderRadius: 100,
        position: 'absolute',
        left: 290,
        top: 20
    },
    deleteImage: {
        alignSelf: 'center',
        marginTop: 10
    }
});
export default styles;