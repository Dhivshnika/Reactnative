import React, { useRef } from "react";
import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import styles from "./styles";

function Product({ route }) {
    const { item } = route.params;
    const moveX = useRef(new Animated.Value(0)).current;
    const moveY = useRef(new Animated.Value(0)).current;
    const handleMoveAnimation = () => {
        Animated.spring(moveX, {
            toValue: 10,
            duration: 3000,
            useNativeDriver: true
        }).start();
        Animated.spring(moveY, {
            toValue: 10,
            duration: 3000,
            useNativeDriver: true
        }).start();
    }
    return (
        <View>
            <Text style={styles.heading}>Helmet Details</Text>
            <TouchableOpacity onPress={handleMoveAnimation}>
                <Animated.Image source={item.image} style={[styles.image, { transform: [{ translateX: moveX, translateY: moveY }] }]} />
            </TouchableOpacity>
        </View>
    )
}
export default Product;