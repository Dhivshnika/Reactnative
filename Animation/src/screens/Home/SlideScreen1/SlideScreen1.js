import React, { useRef, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import Images from "../../../utils/Images";
import colors from "../../../utils/colors";
import styles from "./styles";

function SlideScreen1() {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slide = [
        { id: 1, image: Images.home, color: colors.black, title: 'Home', desc: 'Welcome to the sweet home' },
        { id: 2, image: Images.camper, color: colors.black, title: 'camper', desc: 'camper for the safe travel' },
        { id: 3, image: Images.mailbox, color: colors.black, title: 'Mailbox', desc: 'Get the world wide information' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < slide.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                setCurrentIndex(0);
            }
        }, 2000); // Autoscroll every 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
        }
    }, [currentIndex]);

    return (
        <FlatList
            ref={flatListRef}
            data={slide}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <View style={{ height: '60%', width: '80%' }}>
                        <FastImage source={item.image} style={styles.image} />
                    </View>
                    <Text style={styles.desc}>{item.desc}</Text>
                </View>
            )}
            style={{ flex: 1 }}
            pagingEnabled // This ensures that the list snaps to an item boundary
        />
    );
}

export default SlideScreen1;
