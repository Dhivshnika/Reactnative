import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    pizzaMain: {
        height: 185,
        width: 300,
        borderRadius: 10,
        marginLeft: 29,
        marginTop: 10,
        marginBottom: 20
    },
    pizzaItem: {
        padding: 16,
        marginLeft: 15,
        backgroundColor: colors.wheat,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 11,
        width: '10%',
        elevation: 5
    },
    pizzaImage: {
        height: 130,
        width: 120,
        borderRadius: 15,
        alignSelf: 'center'
    },
    pizzaName: {
        color: colors.black,
        textAlign: 'center',
        marginTop: 10
    },
    pizzaPrice: {
        color: colors.black,
        marginLeft: 5,
        marginTop: 5
    },
    pizzaDescription: {
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