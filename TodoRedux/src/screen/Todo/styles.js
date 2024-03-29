import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        color: 'green',
        textAlign: 'center'
    },
    input: {
        fontSize: 20,
        //textAlign: 'center',
        marginTop: 20,
        color: 'black',
        flex: 1,
        //flexWrap: 'wrap',
        backgroundColor: 'yellow',
        marginLeft: 10,
        marginRight: 10
    },
    whole: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 20,
    },
    button: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20,
        marginRight: 10,
        marginLeft: 5
    },
    output: {
        color: 'green',
        marginTop: 10,
        marginLeft: 5,
        width: '85%',
        marginBottom: 10,
        fontSize: 20
    },
    container: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    remove: {
        color: 'red',
        fontSize: 20,
        marginLeft: 5,
        marginTop: 10,
    },
    edit: {
        color: 'green',
        marginLeft: 5,
        width: '80%',
        fontSize: 20
    },
    save: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        marginRight: 10,
        marginLeft: 5
    },
})
export default styles;
