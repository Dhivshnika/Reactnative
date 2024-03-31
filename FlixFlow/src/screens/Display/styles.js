const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    videoPreview: {
        height: '100%',
        width: '100%',
    },

    playMax: {
        position: 'absolute',
        bottom: 150,
        left: 370
    },
    replayMax: {
        position: 'absolute',
        bottom: 150,
        left: 250,
    },
    forwardMax: {
        position: 'absolute',
        bottom: 150,
        left: 490
    },

    sliderMax: {
        flexDirection: "row",
        position: "absolute",
        top: 270,
        left: 60
    },
    startMax: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10
    },
    stopMax: {
        marginTop: 10
    },
    screenMin: {
        position: 'absolute',
        bottom: 345,
        left: 30
    },
    screenMax: {
        position: 'absolute',
        bottom: 275,
        left: 140
    },
})
export default styles;