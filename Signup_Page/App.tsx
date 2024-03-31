import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import SignupPage from './src/SignupPage';
import LoginPage from './src/LoginPage';
import ForgetPassword from './src/ForgetPassword';
import OTPVerification from './src/OTPVerification';
import HomeScreen from './src/HomeScreen';
import Profile from './/src//Profile';
import Cart from './src/Cart';
import SavePage from './src/SavePage';
import Settings from './src/Settings';
import FeatherEarnings from './src/FeatherEarnings';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000027'
          }
        }}>

        <Stack.Screen name="Signup" component={SignupPage}
          options={{
            title: ' '
          }} />

        <Stack.Screen name="Login" component={LoginPage}
          options={{
            title: " ",
            headerTintColor: 'orange',
            headerBackTitle: 'Back to signup',
          }} />

        <Stack.Screen name="ForgetPassword" component={ForgetPassword}
          options={{
            title: " ",
            headerBackVisible: false
          }} />

        <Stack.Screen name="OTP" component={OTPVerification}
          options={{
            title: " ",
            headerBackVisible: false
          }} />

        <Stack.Screen name="Home"
          options={{
            headerShown: false
          }}
        >

          {() => (
            <Tab.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#000027'
                },
                tabBarActiveBackgroundColor: '#000027',
                tabBarActiveTintColor: 'orange',
                tabBarInactiveBackgroundColor: '#000027',
              }}
            >

              <Tab.Screen name='Homes' component={HomeScreen}
                options={{
                  title: 'Product',
                  headerTintColor: 'orange',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25
                  },
                  tabBarLabel: 'Home',

                  tabBarIcon: ({ focused }) => {
                    const homeImage = focused ? require('./src/assets/activeHomeIcon.png') : require('./src/assets/inactiveHomeIcon.png');
                    return (
                      <Image source={homeImage} />
                    )
                  },

                }}
              />

              <Tab.Screen name='Cart' component={Cart}
                options={{
                  title: 'Cart',
                  headerTintColor: 'orange',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25
                  },

                  tabBarIcon: ({ focused }) => {
                    const cartImage = focused ? require('./src/assets/activeCart.png') : require('./src/assets/inactiveCart.png');
                    return (
                      <Image source={cartImage} />
                    )
                  },

                }}
              />

              <Tab.Screen name='Save' component={SavePage}
                options={{
                  title: 'Saved items',
                  headerTintColor: 'orange',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25
                  },

                  tabBarIcon: ({ focused }) => {
                    const savedImage = focused ? require('./src/assets/activeSaved.png') : require('./src/assets/inactiveSaved.png');
                    return (
                      <Image source={savedImage} />
                    )
                  },

                }}
              />

              <Tab.Screen name='Settings' component={Settings}
                options={{
                  title: 'Settings',
                  headerTintColor: 'orange',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25
                  },

                  tabBarIcon: ({ focused }) => {
                    const homeImage = focused ? require('./src/assets/activeSettings.png') : require('./src/assets/inactiveSettings.png');
                    return (
                      <Image source={homeImage} />
                    )
                  },

                }}
              />
            </Tab.Navigator>)
          }

        </Stack.Screen>

        <Stack.Screen name="Logout" component={LoginPage}
          options={{
            title: ''
          }} />

        <Stack.Screen name="Profile" component={Profile}
          options={{
            title: 'Profile',
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />

        <Stack.Screen name="FeatherEarnings" component={FeatherEarnings}
          options={{
            title: '',
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

function App() {
  return (
    <StackNavigator />
  );
}

export default App;
