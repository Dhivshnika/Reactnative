import React, { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Timer from "./Timer";

function StopWatch() {

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false);
    const intervalRef = useRef();
    const [openStopWatch, setOpenStopwatch] = useState(false);
    const [pauseTimings, setPauseTimings] = useState([]);

    const handleStopWatchOpen = () => {
        setOpenStopwatch(true);
    }

    const handleStopWatchClose = () => {
        setOpenStopwatch(false);
    }

    const handleStartStop = () => {

        if (running) {
            clearInterval(intervalRef.current);
            setPauseTimings(prevTimings => [...prevTimings, time]);
        }
        else {
            const startTime = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10);
        }
        setRunning(!running);
    }

    const handleTime = (ms) => {

        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(2);
        return `${minutes}:${seconds}`;
    }

    const handleReset = () => {
        setTime(0);
        setRunning(false);
        clearInterval(intervalRef.current);
        setPauseTimings([]);
    }

    return (
        <ScrollView style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
            {
                openStopWatch ? (
                    <View>
                        <View style={{ marginTop: 30, marginBottom: 50 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={handleStopWatchClose}>
                                    <Image source={require('./assets/back.png')} style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.heading}>StopWatch</Text>
                            </View>
                            <Text style={styles.stopStart}>{handleTime(time)}</Text>

                            <TouchableOpacity onPress={handleStartStop} style={styles.box}>
                                <Text style={styles.button}>{running ? 'Stop' : 'Start'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleReset} style={styles.box}>
                                <Text style={styles.button}>Reset</Text>
                            </TouchableOpacity>
                            <View>
                                {pauseTimings.map((pausedTime, index) => (
                                    <Text key={index} style={styles.map}>Paused Time #{index + 1}: {handleTime(pausedTime)}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                ) : (
                    <View>
                        <TouchableOpacity onPress={handleStopWatchOpen}>
                            <Text style={styles.heading1}>StopWatch</Text>
                            <Image source={require('./assets/stopwatch.png')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                )

            }
            <View style={{ marginTop: 20, borderTopWidth: 1, borderColor: 'grey' }}>
                <Timer />
            </View>
        </ScrollView>

    )
}
export default StopWatch;

const styles = StyleSheet.create({

    image: {
        height: 250,
        width: 250,
        marginLeft: 50,
        marginTop: 40
    },

    stopStart: {
        fontSize: 90,
        textAlign: 'center',
        color: '#2a4f69'
    },

    button: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 4,
    },

    box: {
        backgroundColor: '#2a4f69',
        marginTop: 20,
        marginLeft: 100,
        marginRight: 100
    },

    heading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15
    },

    icon: {
        height: 45,
        width: 45,
        marginLeft: 90,
        marginTop: 10
    },

    heading1: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30
    },

    map: {
        color: '#2a4f69',
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center'
    }
})