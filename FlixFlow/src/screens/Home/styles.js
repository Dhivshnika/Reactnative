import colors from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: colors.black,
    //     flex: 1,
    // },
    heading: {
        fontSize: 25,
        color: colors.white,
        textAlign: 'center',
        marginTop: 25,
        fontWeight: 'bold',
        marginLeft: 100
    },
    icon: {
        marginTop: 25,
        marginLeft: 20,
        height: 30,
        width: 30
    },
    searchBox: {
        flexDirection: 'row',
        backgroundColor: colors.black,
        width: "90%",
        marginLeft: 23,
        marginTop: 20,
        borderRadius: 50,
        // borderWidth: 1,
        // borderColor: colors.pink
    },
    searchInput: {
        width: '75%',
        fontSize: 18,
        marginLeft: 20
    },
    search: {
        marginTop: 10,
        marginLeft: 15
    },
    menus: {
        marginTop: 20,
        marginRight: 30,
        height: 60,

    },
    menusTitle: {
        color: colors.white,
        backgroundColor: colors.black,
        borderWidth: 1,
        borderColor: colors.pink,
        width: '100%',
        marginLeft: 20,
        marginBottom: 20,
        textAlign: 'center',
        height: '55%',
        fontSize: 20,
        borderRadius: 20,
    },
    videoBox: {
        flexDirection: 'row',
        backgroundColor: colors.black,
        marginBottom: 20,
        marginLeft: 20,
        borderRadius: 10,
        marginRight: 20
    },
    video: {
        height: 120,
        width: 150,
        marginLeft: 20,
        marginRight: 20,
    },
    videoTitle: {
        fontSize: 15,
        width: 130,
        marginTop: 15,
        color: colors.white,
        marginBottom: 10
    },
    pause: {
        position: 'absolute',
        height: 50,
        width: 50,
        right: 200,
        top: 35
    },

})
export default styles;