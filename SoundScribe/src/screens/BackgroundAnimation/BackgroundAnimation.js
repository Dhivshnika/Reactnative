import React, { useEffect, useState } from 'react';
import { View, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const maxRadius = Math.sqrt(width * width + height * height);

function BackgroundAnimation() {
    const colors = ['#BCD2E8', '#91BAD6', '#73A5C6', '#528AAE', '#2E5984', '#1E3F66', '#BCD2E8'];
    const [currentIndex, setCurrentIndex] = useState(1);
    const sizeValue = new Animated.Value(0);

    useEffect(() => {
        sizeValue.setValue(0);
        Animated.timing(sizeValue, {
            toValue: maxRadius * 5,
            duration: 3000,
            useNativeDriver: false
        }).start(() => {
            // Move to next color after animation or wrap around to the start
            if (currentIndex < colors.length - 1) {
                // Move to next color and restart the size animation
                setCurrentIndex(currentIndex + 1);
                sizeValue.setValue(0);
            } else {
                // If it was the last color, reset to the beginning
                setCurrentIndex(1);
                sizeValue.setValue(0);
            }
        });
    }, [currentIndex]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            {colors.slice(0, currentIndex + 1).map((color, index) => (
                <Animated.View key={index} style={createCircleStyle(index === currentIndex ? sizeValue : maxRadius * 3, color)} />
            ))}
        </View>
    );
}

const createCircleStyle = (sizeValue, color) => ({
    position: 'absolute',
    top: height / 2,
    left: width / 2,
    width: sizeValue,
    height: sizeValue,
    borderRadius: maxRadius,
    backgroundColor: color,
    transform: [
        { translateY: -maxRadius },
        { translateX: -maxRadius }
    ]
});

export default BackgroundAnimation;
