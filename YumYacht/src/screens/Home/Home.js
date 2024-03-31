import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, } from "react-native";
import styles from "./styles";
import Images from "../../utils/Images";
import { useNavigation } from '@react-navigation/native';
import Burger from "../Burger/Burger";
import Pizza from "../Pizza/Pizza";
import Drinks from "../Drinks/Drinks";
import Biryani from "../Biryani/Biryani";
import Dosa from "../Dosa/Dosa";


function Home() {
    const navigation = useNavigation();
    const [option, setOption] = useState('Burger');
    let content;
    switch (option) {
        case 'Burger':
            content = <Burger />;
            break;
        case 'Pizza':
            content = <Pizza />;
            break;
        case 'Drinks':
            content = <Drinks />;
            break;
        case 'Biryani':
            content = <Biryani />;
            break;
        case 'Dosa':
            content = <Dosa />;
            break;
        default:
            content = <Burger />;
    }
    return (
        <View style={styles.whole}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={Images.menu_bar} style={styles.menu} />
                <Text style={styles.home}>Home</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={Images.bag_item} style={styles.bag} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.inputContainer}>
                    <Image source={Images.search} style={styles.search} />
                    <TextInput style={styles.input} placeholder="Search...." placeholderTextColor='grey' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
                <Text style={[styles.title1, { fontWeight: option === 'Burger' ? 'bold' : 'normal' }]} onPress={() => setOption('Burger')}>BURGER</Text>
                <Text style={[styles.title2, { fontWeight: option === 'Pizza' ? 'bold' : 'normal' }]} onPress={() => setOption('Pizza')}>PIZZA</Text>
                <Text style={[styles.title3, { fontWeight: option === 'Drinks' ? 'bold' : 'normal' }]} onPress={() => setOption('Drinks')}>DRINKS</Text>
                <Text style={[styles.title4, { fontWeight: option === 'Biryani' ? 'bold' : 'normal' }]} onPress={() => setOption('Biryani')}>BIRYANI</Text>
                <Text style={[styles.title5, { fontWeight: option === 'Dosa' ? 'bold' : 'normal' }]} onPress={() => setOption('Dosa')}>DOSA</Text>
            </View>
            <ScrollView style={{ paddingBottom: 10 }}>
                {content}
            </ScrollView>

        </View>
    );
}
export default Home;