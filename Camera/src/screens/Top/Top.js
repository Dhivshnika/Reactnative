import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, PermissionsAndroid, Platform, ImageBackground } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function Top() {
    const navigation = useNavigation();
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedImage, setCapturedImage] = useState([]);
    const [capturedSide, setCapturedSide] = useState('Top');
    const [capturedTop, setCapturedTop] = useState(false);
    const [capturedLeft, setCapturedLeft] = useState(false);
    const [capturedFrontal, setCapturedFrontal] = useState(false);
    const [capturedRight, setCapturedRight] = useState(false);
    const [captured, setCaptured] = useState(false);
    const [topImage, setTopImage] = useState('https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg');
    const [leftImage, setLeftImage] = useState('https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg');
    const [frontalImage, setFrontalImage] = useState('https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg');
    const [rightImage, setRightImage] = useState('https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg');
    const cameraRef = useRef(null);
    const [nextImageId, setNextImageId] = useState(1);
    const [colors, setColors] = useState(['rgba(58, 73, 213, 0.8)', 'rgba(69, 80, 186, 0)']);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setColors(['rgba(27, 214, 113, 0.8)', 'rgba(27, 214, 113, 0.112)']);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const requestCameraPermission = async () => {
            try {
                if (Platform.OS === 'android') {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'Camera Permission',
                            message: 'App needs camera permission to take pictures.',
                            buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        }
                    );
                    setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
                } else if (Platform.OS === 'ios') {
                    setHasPermission(true);
                }
            } catch (error) {
                console.error('Error requesting camera permission:', error);
                setHasPermission(false);
            }
        };

        requestCameraPermission();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const options = { quality: 0.5, base64: true };
                const data = await cameraRef.current.takePictureAsync(options);
                setCapturedImage(prev => [
                    ...prev,
                    { id: nextImageId, side: capturedSide, uri: data.uri }
                ]);
                setCaptured(true);
                switch (capturedSide) {
                    case 'Top':
                        setTopImage(data.uri);
                        setCapturedTop(true);
                        break;
                    case 'Left':
                        setLeftImage(data.uri);
                        setCapturedLeft(true)
                        break;
                    case 'Frontal':
                        setFrontalImage(data.uri);
                        setCapturedFrontal(true)
                        break;
                    case 'Right':
                        setRightImage(data.uri);
                        setCapturedRight(true);
                        break;
                    default:
                        break;
                }
                setNextImageId(prevId => prevId + 1);
            } catch (error) {
                console.error('Error taking picture:', error);
                setCapturedImage('Error taking picture');
            }
        }
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const handleTop = () => {
        setCapturedSide('Top');
        setCapturedTop(false);
        setCaptured(false);
    }
    const handleBottom = () => {
        setCapturedSide('Left');
        setCapturedLeft(false);
        setCaptured(false);
    }
    const handleFrontal = () => {
        setCapturedSide('Frontal');
        setCapturedFrontal(false);
        setCaptured(false);
    }
    const handleRight = () => {
        setCapturedSide('Right');
        setCapturedRight(false);
        setCaptured(false);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameContainerText}>Wade Warren</Text>
                <View style={styles.endContainer}><Text style={styles.endContainerText}>End</Text></View>
            </View>
            {captured ?

                <Image source={{ uri: capturedImage[capturedImage.length - 1].uri }} style={styles.capturedImageContainer} height='50' width='50' />

                :
                <View style={styles.cameraContainer}>
                    <View style={styles.container}>
                        <RNCamera
                            ref={cameraRef}
                            style={styles.camera}
                            onCameraReady={() => setIsCameraReady(true)}
                            type={RNCamera.Constants.Type.back}
                        />
                        {!isCameraReady && <Text>Camera loading...</Text>}
                    </View>
                    <TouchableOpacity onPress={takePicture} style={styles.captureButton}>

                    </TouchableOpacity>
                </View>
            }
            <View style={styles.cameraOption}>
                <TouchableOpacity onPress={() => navigation.navigate('GlobalImage', { capturedImage })}>
                    <Text style={styles.global}>Global</Text>
                </TouchableOpacity>
                <Text style={styles.closeup}>Close Up</Text>
            </View>
            <View>
                <ScrollView horizontal style={styles.scrollBarContainer}>
                    <TouchableOpacity onPress={handleTop}>
                        {capturedTop === true ?
                            <ImageBackground
                                source={{ uri: topImage }}
                                style={styles.backgroundImage}>
                                <LinearGradient
                                    colors={colors}
                                    locations={[0, 1]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.linearBox}
                                />
                                <View style={styles.containerBack}>
                                    <Text style={styles.textBack}>Top</Text>
                                </View>
                            </ImageBackground>
                            :
                            <View style={[styles.scrollBarFront, capturedSide === 'Left' && styles.roundedRight, capturedSide === 'Top' && styles.transperent]}>
                                <Image source={{ uri: topImage }} style={{ width: 100, height: 100 }} />
                                <Text style={styles.scrollBarText}>Top</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBottom}>
                        {capturedLeft === true ?
                            <ImageBackground
                                source={{ uri: leftImage }}
                                style={styles.backgroundImage}>
                                <LinearGradient
                                    colors={colors}
                                    locations={[0, 1]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.linearBox}
                                />
                                <View style={styles.containerBack}>
                                    <Text style={styles.textBack}>Left</Text>
                                </View>
                            </ImageBackground>
                            :
                            <View style={[styles.scrollBar, capturedSide === 'Top' && styles.roundedLeft, capturedSide === 'Frontal' && styles.roundedRight, capturedSide === 'Left' && styles.transperent]}>
                                <Image source={{ uri: leftImage }} style={{ width: 100, height: 100 }} />
                                <Text style={styles.scrollBarText}>Left</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleFrontal}>
                        {capturedFrontal === true ?
                            <ImageBackground
                                source={{ uri: frontalImage }}
                                style={styles.backgroundImage}>
                                <LinearGradient
                                    colors={colors}
                                    locations={[0, 1]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.linearBox}
                                />
                                <View style={styles.containerBack}>
                                    <Text style={styles.textBack}>Frontal</Text>
                                </View>
                            </ImageBackground>
                            :
                            <View style={[styles.scrollBar, capturedSide === 'Left' && styles.roundedLeft, capturedSide === 'Right' && styles.roundedRight, capturedSide === 'Frontal' && styles.transperent]}>
                                <Image source={{ uri: frontalImage }} style={{ width: 100, height: 100 }} />
                                <Text style={styles.scrollBarText}>Frontal</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRight}>
                        {capturedRight === true ?
                            <ImageBackground
                                source={{ uri: rightImage }}
                                style={styles.backgroundImage}>
                                <LinearGradient
                                    colors={colors}
                                    locations={[0, 1]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.linearBox}
                                />
                                <View style={styles.containerBack}>
                                    <Text style={styles.textBack}>Right</Text>
                                </View>
                            </ImageBackground>
                            :
                            <View style={[styles.scrollBar, capturedSide === 'Frontal' && styles.roundedLeft, capturedSide === 'Right' && styles.transperent]} >
                                <Image source={{ uri: rightImage }} style={{ width: 100, height: 100 }} />
                                <Text style={styles.scrollBarText}>Right</Text>
                            </View>
                        }
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View >
    );
}

export default Top;
