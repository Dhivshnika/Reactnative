import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    whole: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        position: 'absolute',
        height: '47%',
        width: '100%',
        marginTop: 45,
        marginLeft: 15,
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    headingView: {
        marginTop: '120%'
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        color: 'grey',
        marginTop: 20,
    },
    button: {
        backgroundColor: colors.brown,
        height: '7%',
        width: '50%',
        borderRadius: 50,
        marginTop: 50,
        alignContent: 'center',
        marginLeft: 85
    },
    start: {
        fontSize: 25,
        marginLeft: 25,
        marginTop: 8,
        color: '#fff'
    }
});
export default styles;