import React, { useEffect } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, ScrollView, Modal, TouchableHighlight, TouchableOpacityComponent } from "react-native";
import styles from "./styles";
import Video from 'react-native-video';
import colors from "../../utils/colors";
import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';
import { useNavigation } from "@react-navigation/native";

function Home() {
    const navigation = useNavigation();
    const menu = [
        { id: 1, title: 'Trending' },
        { id: 2, title: 'Videos' },
        { id: 3, title: 'movies' },
        { id: 4, title: 'songs' },
    ];
    const videos = [
        { id: 1, video: require('../../assets/leo1.mp4'), title: ' Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander' },
        { id: 2, video: require('../../assets/leo2.mp4'), title: ' LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj' },
        { id: 3, video: require('../../assets/leo3.mp4'), title: ' LEO - Anbenum Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander' },

    ];
    useEffect(() => {
        Orientation.lockToPortrait();
        return () => {
            Orientation.unlockAllOrientations();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://wallpaper.dog/large/11032747.jpg' }}
                style={{
                    height: '500%',
                    width: '100%',
                    position: 'absolute'
                }}
            />
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/menu.png')} style={styles.icon} />
                <Text style={styles.heading}>FlixFlow</Text>
            </View>
            <View style={styles.searchBox}>
                <TextInput style={styles.searchInput} placeholder="Search....." />
                <Image source={require('../../assets/search.png')} style={styles.search} />
            </View>

            <FlatList
                data={menu}
                extraData={item => { item.id }}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.menus}>
                            <TouchableOpacity>
                                <Text style={styles.menusTitle}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                horizontal
            />
            <FlatList
                data={videos}
                extraData={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.videoBox}>
                        <Video
                            paused={true}
                            source={item.video}
                            style={styles.video}
                        />
                        <Text style={styles.videoTitle}>{item.title}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Display', { item: { id: item.id, title: item.title, video: item.video } })}>
                            <Image source={require('../../assets/pause.png')} style={styles.pause} />
                        </TouchableOpacity>
                    </View>

                )}
            />
            {/* <Modal
                visible={openModel}
                transparent={true}
                replay={true}
            >
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', flex: 1, }}>
                    <TouchableOpacity onPress={() => isOpenModel(false)}>
                        {fullScreen ? null : <Image source={require('../../assets/close.png')} style={styles.close} />}
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={handleOpen} style={fullScreen ? null : { marginTop: 90 }}>
                        <Video
                            source={selectedVideo}
                            style={fullScreen ? styles.videoPreviewMax : styles.videoPreviewMin}
                            paused={play}
                            ref={ref}
                            onProgress={(x) => {
                                console.log(x);
                                setProgress(x);
                            }}
                            onPress={handleOpen}
                        />
                    </TouchableOpacity>
                    {
                        openPause ?
                            <View>
                                <TouchableOpacity onPress={() => { ref.current.seek(progress.currentTime - 10) }}>
                                    <Image source={require('../../assets/replay.png')} style={fullScreen ? styles.replayMax : styles.replayMin} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handlePause}>
                                    <Image source={play ? require('../../assets/play.png') : require('../../assets/pause.png')} style={fullScreen ? styles.playMax : styles.playMin} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { ref.current.seek(progress.currentTime + 10) }}>
                                    <Image source={require('../../assets/forward.png')} style={fullScreen ? styles.forwardMax : styles.forwardMin} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleFullScreen}>
                                    <Image source={fullScreen ? (require('../../assets/mini.png')) : (require('../../assets/max.png'))} style={fullScreen ? styles.screenMax : styles.screenMin} />
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                    <View style={fullScreen ? styles.sliderMax : styles.sliderMin}>
                        <Text style={fullScreen ? styles.startMax : styles.startMin}>{format(progress.currentTime)}</Text>
                        <Slider
                            style={fullScreen ? { width: 380, height: 40 } : { width: 200, height: 40 }}
                            minimumValue={0}
                            maximumValue={progress.seekableDuration}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                            onValueChange={(x) => {
                                ref.current.seek(x);
                            }}
                            value={progress.currentTime}
                        />
                        <Text style={fullScreen ? styles.stopMax : styles.stopMin}>{format(progress.seekableDuration)}</Text>
                    </View>
                </View>
            </Modal> */}
        </View>
    )
}
export default Home;