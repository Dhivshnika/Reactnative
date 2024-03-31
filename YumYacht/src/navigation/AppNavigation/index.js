import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "../../screens/Welcome/Welcome";
import Home from "../../screens/Home/Home";
import { ImageBackground } from "react-native";
import Burger from "../../screens/Burger/Burger";
import DisplayItem from "../../screens/DisplayItem/DisplayItem";
import Cart from "../../screens/Cart/Cart";
import Dosa from "../../screens/Dosa/Dosa";
import Biryani from "../../screens/Biryani/Biryani";
import Drinks from "../../screens/Drinks/Drinks";
import Pizza from "../../screens/Pizza/Pizza";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Burger"
                    component={Burger}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="DisplayItem"
                    component={DisplayItem}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Pizza"
                    component={Pizza}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Drinks"
                    component={Drinks}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Biryani"
                    component={Biryani}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Dosa"
                    component={Dosa}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;