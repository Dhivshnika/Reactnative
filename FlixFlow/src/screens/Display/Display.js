import React, { useRef, useState, useEffect } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, ScrollView, Modal, TouchableHighlight, TouchableOpacityComponent } from "react-native";
import styles from "./styles";
import Video from 'react-native-video';
import colors from "../../utils/colors";
import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';

function Display({ route }) {
    const { item } = route.params;
    const [openPause, isOpenPause] = useState(false);
    const [play, setPlay] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const [progress, setProgress] = useState({ currentTime: 0, seekableDuration: 0 });
    const ref = useRef();
    const format = (sec) => {
        let mins = parseInt(sec / 60).toString().padStart(2, '0');
        let secs = (Math.trunc(sec) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`
    };
    useEffect(() => {
        Orientation.lockToLandscape();
        return () => {
            Orientation.unlockAllOrientations();
        };
    }, []);
    const handleOpen = () => {
        isOpenPause(!openPause);
    }
    const handlePause = () => {
        setPlay(!play);
    }
    return (
        <View>
            <TouchableOpacity activeOpacity={1} onPress={handleOpen} >
                <Video
                    source={item.video}
                    style={styles.videoPreview}
                    paused={play}
                    ref={ref}
                    onProgress={(x) => {
                        console.log(x);
                        setProgress(x);
                    }}
                    resizeMode="cover"
                    onPress={handleOpen}
                />
            </TouchableOpacity>
            {
                openPause ?
                    <View>
                        <TouchableOpacity onPress={() => { ref.current.seek(progress.currentTime - 10) }}>
                            <Image source={require('../../assets/replay.png')} style={styles.replayMax} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePause}>
                            <Image source={play ? require('../../assets/play.png') : require('../../assets/pause.png')} style={styles.playMax} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { ref.current.seek(progress.currentTime + 10) }}>
                            <Image source={require('../../assets/forward.png')} style={styles.forwardMax} />
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }
            <View style={styles.sliderMax}>
                <Text style={styles.startMax}>{format(progress.currentTime)}</Text>
                <Slider
                    style={{ width: 600, height: 40 }}
                    minimumValue={0}
                    maximumValue={progress.seekableDuration}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(x) => {
                        ref.current.seek(x);
                    }}
                    value={progress.currentTime}
                />
                <Text style={styles.stopMax}>{format(progress.seekableDuration)}</Text>
            </View>
        </View>
    )
}
export default Display;