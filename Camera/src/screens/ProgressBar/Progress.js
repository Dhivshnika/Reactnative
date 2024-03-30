import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";

function Progress({ route }) {
    const { capturedImage } = route.params;
    const navigation = useNavigation();
    const [progress, setProgress] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['#F3AF8E', '#FFFFFF'];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => prevProgress + 0.1);
        }, 900);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 1) {
            navigation.navigate('Success', { capturedImage });
        }
    }, [progress, navigation]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, 900); 4
        return () => clearTimeout(timer);
    }, [colorIndex, colors]);

    return (
        <View style={styles.progressContainer}>
            <LinearGradient
                colors={[colors[colorIndex], colors[(colorIndex + 1) % colors.length]]}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <ProgressBar progress={progress} width={200} color={'transparent'} />
            </LinearGradient>
            <Text style={styles.text}>{Math.round(progress * 100)}% in progress</Text>
        </View>
    )
}

export default Progress;
