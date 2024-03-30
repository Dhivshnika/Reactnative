// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Weather from './src/screens/Weather/Weather';

const App = () => {
  // For simplicity, using static latitude and longitude for now


  return (
    <SafeAreaView style={styles.container}>
      <Weather />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
