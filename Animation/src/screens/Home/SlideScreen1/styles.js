import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const style = StyleSheet.create({
    container: {
        //backgroundColor: colors.white,
        width: 385,
        height: 390,
        justifyContent: 'center',
        alignItems: 'center'
    },
    desc: {
        fontSize: 20,
        color: colors.black,
        textAlign: 'center'

    },
    image: {
        height: '70%',
        width: '50%',
        alignSelf: 'center',
        marginTop: 20,

    },
})
export default style;