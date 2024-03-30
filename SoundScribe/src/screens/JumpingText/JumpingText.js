import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const JumpingText = ({ word }) => {
  // Create an animated value for each letter in the word
  const animatedValues = [...word].map(() => new Animated.Value(0));

  useEffect(() => {
    // Define the animation for each letter
    const animations = animatedValues.map((animatedValue, index) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: index % 2 === 0 ? -10 : 10, // Alternating jump direction
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
      );
    });

    // Start all animations
    Animated.stagger(150, animations).start();
  }, []);

  return (
    <View style={styles.container}>
      {[...word].map((letter, index) => (
        <Animated.Text key={index} style={[styles.letter, { transform: [{ translateY: animatedValues[index] }] }]}>
          {letter}
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  letter: {
    fontSize: 25,
    marginLeft: 5
  },
});

export default JumpingText;
