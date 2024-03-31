import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
const styles = StyleSheet.create({
    // imageView: {
    //     height: '40%',
    //     width: '90%',
    //     marginTop: 50,
    //     alignSelf: 'center',
    //     borderRadius: 15,
    //     backgroundColor: 'pink'
    // },
    image: {
        height: '35%',
        width: '70%',
        marginTop: 50,
        //marginBottom: 30,
        alignSelf: 'center',
        borderRadius: 15,
    },
    namePrice: {
        flexDirection: 'row',
        marginLeft: 20,
        width: '85%',
        //backgroundColor: 'pink'
    },
    name: {
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold',
        width: '74%'
    },
    price: {
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        //backgroundColor: 'red',
        width: '30%'
    },
    description: {
        color: colors.black,
        fontSize: 15,
        marginTop: 20,
        textAlign: 'left',
        width: '85%',
        marginLeft: 20
    },
    timeBox: {
        flexDirection: 'row',
        marginTop: '20%',
        marginLeft: 20,
        marginBottom: '20%'
    },
    minute: {
        color: colors.grey,
        fontSize: 19,
        textAlign: 'right',
        width: '50%'
    },
    clockText: {
        color: colors.black,
        fontSize: 19
    },
    add: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20
    },
    number: {
        color: colors.black,
        fontSize: 35
    },
    cartBox: {
        backgroundColor: colors.brown,
        width: '50%',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 25
    },
    cart: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10
    },
    shopBox: {
        marginLeft: 20,
        marginBottom: 15,
        flexDirection: 'row'
    },
    shopText: {
        color: colors.black,
        fontSize: 15,
        marginTop: 22,
        width: '70%'
    },
    star: {
        bottom: 5,
        //backgroundColor: 'pink'
        position: 'absolute',
        top: 0,
        left: 240
    }
})
export default styles;