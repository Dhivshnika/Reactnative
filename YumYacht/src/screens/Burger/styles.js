import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    burgerMain: {
        height: 185,
        width: 300,
        borderRadius: 10,
        marginLeft: 29,
        marginTop: 10,
        marginBottom: 20
    },
    burgerItem: {
        padding: 16,
        marginLeft: 15,
        backgroundColor: colors.wheat,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 11,
        width: '10%',
        elevation: 5
    },
    burgerImage: {
        height: 130,
        width: 120,
        borderRadius: 15,
        alignSelf: 'center'
    },
    burgerName: {
        color: colors.black,
        textAlign: 'center',
        marginTop: 10
    },
    burgerPrice: {
        color: colors.black,
        marginLeft: 5,
        marginTop: 5
    },
    burgerDescription: {
        color: colors.grey,
        marginLeft: 5,
        marginTop: 5,
    },
    food: {
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 5,

    },
    foodType: {
        color: colors.grey
    }
});
export default styles;