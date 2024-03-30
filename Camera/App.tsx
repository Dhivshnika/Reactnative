import React, { Component } from 'react';
import Top from './src/screens/Top/Top';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalImage from './src/screens/GlobalImage/GlobalImage';
import Progress from './src/screens/ProgressBar/Progress';
import Success from './src/screens/Success/Success';

const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Top" component={Top} options={{ headerShown: false }} />
        <Stack.Screen name='GlobalImage' component={GlobalImage} options={{ headerShown: false }} />
        <Stack.Screen name='Progress' component={Progress} options={{ headerShown: false }} />
        <Stack.Screen name='Success' component={Success} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;