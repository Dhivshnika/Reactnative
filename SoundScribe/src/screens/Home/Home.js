import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, } from 'react-native';
import Voice from '@react-native-community/voice';
import styles from './styles';
import colors from '../../utils/colors';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import JumpingText from '../JumpingText/JumpingText';

function Home() {
    const [result, setResult] = useState('');
    const [isLoading, setLoading] = useState(false);

    const speechStartHandler = e => {
        console.log('speechStart successful', e);
    };

    const speechEndHandler = e => {
        setLoading(false);
        console.log('stop handler', e);
    };

    const speechResultsHandler = e => {
        const text = e.value[0];
        setResult(text);
    };

    const startRecording = async () => {
        setLoading(true);
        try {
            await Voice.start('en-Us');
        } catch (error) {
            console.log('error', error);
        }
    };

    const stopRecording = async () => {
        try {
            await Voice.stop();
            setLoading(false);
        } catch (error) {
            console.log('error', error);
        }
    };

    const clear = () => {
        setResult('');
    };

    useEffect(() => {
        Voice.onSpeechStart = speechStartHandler;
        Voice.onSpeechEnd = speechEndHandler;
        Voice.onSpeechResults = speechResultsHandler;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    return (
        <View>
            <BackgroundAnimation />
            <JumpingText word="SoundScribe" />
            <View style={styles.inputTextBox}>
                <TextInput
                    value={result}
                    multiline={true}
                    placeholder="say something!"
                    placeholderTextColor={colors.grey}
                    style={styles.inputText}
                    onChangeText={text => setResult(text)}
                />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="black" style={styles.loader} />
                ) : (
                    <TouchableOpacity onPress={startRecording} style={styles.speak}>
                        <Text style={styles.speakText}>Speak</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.stop} onPress={stopRecording}>
                    <Text style={styles.stopText}>Stop</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.clear} onPress={clear}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Clear</Text>
            </TouchableOpacity>
        </View >
    );
};
export default Home;