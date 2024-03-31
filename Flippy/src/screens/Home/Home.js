import React, { useRef, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, Animated, Easing, Dimensions } from "react-native";
import styles from '../Home/styles';
import colors from "../../utils/colors";
import Images from "../../utils/Images";
import { useNavigation } from "@react-navigation/native";

function Home() {
    const navigation = useNavigation();
    const headings = [
        { id: 1, text: 'All' },
        { id: 2, text: 'Smart' },
        { id: 3, text: 'Sports' },
        { id: 4, text: 'Regular' },
        { id: 5, text: 'Half - face' },
        { id: 6, text: 'Off - road' },
    ];
    const optionData = [
        { id: 0, name: 'VEGA Crux', price: 716, image: Images.VEGA_Helmet, color: colors.blue },
        { id: 1, name: 'name', price: 'price', image: Images.VEGA_Helmet, color: colors.black },
        { id: 2, name: 'name', price: 'price', image: Images.VEGA_Helmet, color: colors.black },
        { id: 3, name: 'name', price: 'price', image: Images.VEGA_Helmet, color: colors.black },
        //{ id: 5, name: 'name', price: 'price', image: Images.VEGA_Helmet, color: colors.black },
    ];

    const [spinAnim] = useState(new Animated.Value(270));

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['270deg', '320deg'],
    });

    const flatListRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);

    const handleScroll = (event) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const windowWidth = Dimensions.get("window").width;
        const currentIndex = Math.floor(xOffset / windowWidth);
        setCurrentPage(currentIndex);
        console.log(currentPage);
        Animated.timing(spinAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={{ backgroundColor: colors.white, flex: 1 }}>
            <Text style={styles.mainHeading}>Helmets</Text>
            <View>
                <FlatList
                    data={headings}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.headingView}>
                            <Text style={styles.headingText}> {item.text} </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View>
                <FlatList
                    ref={flatListRef}
                    data={optionData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Product', {
                            item: {
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                image: item.image,
                                color: item.color,
                            }
                        })}>
                            <View style={[styles.subContainer, { backgroundColor: item.color }]}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>Rs.{item.price}/-</Text>
                                <Text>{item.id}{currentPage}</Text>
                                <Animated.Image
                                    source={item.image}
                                    style={[
                                        styles.image,
                                        {
                                            transform: [
                                                { rotate: index === currentPage ? spin : '270deg' },
                                            ],
                                        },
                                    ]}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

export default Home;
