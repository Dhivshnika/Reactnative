import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity, StatusBar, ImageBackgroundBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ForgetPassword() {

    const navigation = useNavigation();
    const images = [
        require('./assets/earing1.jpg'),
        require('./assets/earing2.jpg'),
        require('./assets/featherEaring.jpg'),
        require('./assets/earing4.jpg'),
        require('./assets/earing5.jpg'),
        require('./assets/earing6.jpg')
    ];

    const { width } = Dimensions.get('window');
    const height = width * 0.7;

    return (

        <ImageBackground source={require('./assets/signup.png')} style={styles.backGroundImage}>
            <ScrollView>

                <View style={{ flex: 1 }}>
                    <View style={styles.try}>
                        <Image source={require('./assets/search.png')} style={styles.searchIcon} />
                        <TextInput style={styles.searchBar} placeholder='Search for a setting.....' placeholderTextColor={'black'} />
                    </View>
                </View>

                <View style={{ height, width, marginTop: 2 }}>
                    <ScrollView pagingEnabled horizontal style={{ height, width, }} >
                        {
                            images.map((image, index) => (
                                <Image
                                    key={index}
                                    source={image}
                                    style={{ height, width, resizeMode: 'cover', borderRadius: 20, borderColor: '#fff', borderWidth: 1, }}
                                />
                            ))
                        }
                    </ScrollView>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 5 }} >
                    <Image source={require('./assets/featherEaring.jpg')} style={styles.image} />
                    <Text style={styles.design} onPress={() => navigation.navigate('FeatherEarnings')}>Ethnic Women's Blue Feather Long Dangle Earrings Jewelry Bohemian Summer Flower Metal Ladies Earrings Boho Jewelry</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Image source={require('./assets/earing1.jpg')} style={styles.image} />
                    <Text style={styles.design} >Vaji Gold Polki Stone and Pearl Earrings</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Image source={require('./assets/earing6.jpg')} style={styles.image} />
                    <Text style={styles.design}>Radiant Yellow and White Gold Diamond Drop Earrings</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Image source={require('./assets/earing5.jpg')} style={styles.image} />
                    <Text style={styles.design}>Gold-Plated Chandbali Earings</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Image source={require('./assets/earing4.jpg')} style={styles.image} />
                    <Text style={styles.design}>Jewels 18k Gold Plated Meena Work Kundan Pearl Studded Peacock Designer Chandbali Earring For Women</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Image source={require('./assets/earing2.jpg')} style={styles.image} />
                    <Text style={styles.design}>Pendientes Women's Gypsy Silver Color Circle Wedding Earrings Jewelry Lady Retro Tassel Indian Jhumka Earrings Oorbellen Hangers</Text>
                </View>
            </ScrollView>
        </ImageBackground >
    )
}
export default ForgetPassword;

const styles = StyleSheet.create({
    backGroundImage: {
        flex: 1,
    },

    searchBar: {
        color: 'black'
    },

    searchIcon: {
        height: 19,
        width: 23,
    },

    try: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        width: '100 %',
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },

    input: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        marginLeft: 25,
        marginTop: 25,
        marginRight: 25,
        backgroundColor: '#fff',
        borderRadius: 10,
        color: 'black',
        borderColor: 'orange',
        borderWidth: 2
    },

    button: {
        padding: 5,
        fontSize: 25,
        textAlign: 'center',
        color: 'black',
        backgroundColor: '#808000',
        marginLeft: 110,
        marginRight: 110,
        marginTop: 40,
        marginBottom: 20,
        borderRadius: 4,
        borderRadius: 10
    },

    forgetPassword: {
        marginTop: 25,
        fontSize: 25,
        color: 'orange',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    image: {
        height: 110,
        width: 110,
        borderRadius: 100,
        marginTop: 10,
        marginLeft: 10,
        borderColor: '#fff',
        borderWidth: 1,
    },

    description: {
        textAlign: 'center',
        marginRight: 13,
        marginLeft: 13,
        marginTop: 10
    },

    back: {
        textAlign: 'center',
        color: 'orange',
        fontWeight: 'bold',
        marginTop: 150,
        fontSize: 20
    },

    design: {
        fontWeight: 'bold',
        marginTop: 20,
        flex: 1,
        marginLeft: 16,
        marginRight: 10,
        textAlign: 'justify',
        borderBottomWidth: 1,
        borderColor: "grey"
    }
});
