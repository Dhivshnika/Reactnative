import React from "react";
import { View } from "react-native";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import SlideScreen1 from "./SlideScreen1/SlideScreen1";

function Home() {
    return (
        <View style={{ flex: 1 }}>
            <BackgroundAnimation />
            <SlideScreen1 />
        </View>
    )
}
export default Home;