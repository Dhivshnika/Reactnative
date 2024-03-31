import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

function Timer() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef();
    const [openStopWatch, setOpenStopwatch] = useState(false);
    const [onReset, setOnReset] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [inputOpen, setInputOpen] = useState(false);
    const [pauseTimings, setPauseTimings] = useState([]);

    const handleStopWatch = () => {
        setOpenStopwatch(true);
    }

    const handleStopWatchClose = () => {
        setOpenStopwatch(false);
    }

    const handleInputOpen = () => {
        setInputOpen(true)
    }

    const handleStartStop = () => {
        if (time === 0) {
            setTime(inputValue * 60000);
        }
        console.log(time);
        if (running) {
            clearInterval(intervalRef.current);
            setPauseTimings(prevTimings => [...prevTimings, time]);
        } else {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => (prevTime > 0 ? prevTime - 10 : 0));
                if (time === 0) {
                    clearInterval(intervalRef.current);
                    setRunning(false);
                }
            }, 10);
            setOnReset(false);
        }
        setRunning(!running);
    };

    const handleTime = (ms) => {

        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(2);
        return `${minutes}:${seconds}`;
    }

    const handleReset = () => {
        setTime(0);
        setInputValue('0');
        setRunning(false);
        clearInterval(intervalRef.current);
        setOnReset(true);
        setInputOpen(false);
        setPauseTimings([]);
    };

    return (
        openStopWatch ? (
            <View style={{ backgroundColor: 'black', height: '100%', width: '100%', marginTop: 20, marginBottom: 50 }}>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handleStopWatchClose}>
                        <Image source={require('./assets/back.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Timer</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    {running ?
                        <View>
                            <Text style={styles.stopStart}>{handleTime(time)}</Text>
                        </View>
                        :

                        <View>
                            {onReset ?
                                <View>
                                    {
                                        inputOpen ?
                                            <TextInput
                                                value={inputValue}
                                                onChangeText={setInputValue}
                                                style={styles.stopStart}
                                                placeholder="0"
                                                placeholderTextColor='#2a4f69'

                                            />
                                            :
                                            <TouchableOpacity onPress={handleInputOpen}>
                                                <Text style={styles.placeholder}>Enter in minute</Text>
                                            </TouchableOpacity>
                                    }
                                </View>

                                :

                                <Text style={styles.stopStart}>{handleTime(time)}</Text>

                            }
                        </View>
                    }

                    <TouchableOpacity onPress={handleStartStop} style={styles.box}>
                        <Text style={styles.button}>{running ? 'Stop' : 'Start'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleReset} style={styles.box}>
                        <Text style={styles.button}>Reset</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {pauseTimings.map((pausedTime, index) => (
                        <Text key={index} style={styles.map}>Paused Time #{index + 1}: {handleTime(pausedTime)}</Text>
                    ))}
                </View>
            </View>
        ) : (
            <View style={{ backgroundColor: 'black', height: '100%', width: '100%', marginTop: 50 }}>
                <TouchableOpacity onPress={handleStopWatch}>
                    <Text style={styles.heading}>Timer</Text>
                    <Image source={require('./assets/timer.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
        )




    )
}
export default Timer;

const styles = StyleSheet.create({

    image: {
        height: 250,
        width: 250,
        marginLeft: 70,
        marginTop: 30
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
        marginTop: 5
    },

    icon: {
        height: 45,
        width: 45,
        marginLeft: 90,
    },

    placeholder: {
        fontSize: 50,
        textAlign: 'center',
        color: '#2a4f69'
    },

    map: {
        color: '#2a4f69',
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center'
    }
})