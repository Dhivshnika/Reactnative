import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, } from "react-native";
import styles from "./styles";
import Images from "../../utils/Images";
import SplashScreen from "react-native-splash-screen";
import { useNavigation } from '@react-navigation/native';
import Home from "../Home/Home";

function Welcome() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }, []);
    return (
        <View style={styles.whole}>
            <Image source={Images.home_cook_logo} style={styles.logo} />
            <View style={styles.headingView}>
                <Text style={styles.heading}>The Fastest</Text>
                <Text style={styles.heading}>Food Delivary</Text>
            </View>
            <Text style={styles.content}>Get your favorite food the fastest way possible</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Home)}>
                <Text style={styles.start}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Welcome;