import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen } from "react-native-screens";
import Home from "../Home/Home";
import Product from "../Product/Product";
function Navigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Product"
                    component={Product}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Navigation;