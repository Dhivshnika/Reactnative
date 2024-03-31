import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, ScrollView, ImageBackground, TouchableOpacity, StatusBar, ImageBackgroundBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';

function Cart() {

    const navigation = useNavigation();
    const [price1, setPrice1] = useState(157)
    const [value1, setValue1] = useState(1);
    const [price2, setPrice2] = useState(2500)
    const [value2, setValue2] = useState(1);
    const [price3, setPrice3] = useState(350)
    const [value3, setValue3] = useState(1);
    const [showView, setShowView] = useState(true);

    const removeView = () => {
        setShowView(false)
    }

    const handleIncrease1 = () => {
        setValue1(value1 + 1);
        setPrice1(157 * (value1 + 1));
    }

    const handleDecrease1 = () => {
        if (value1 > 1) {
            setValue1(value1 - 1);

            setPrice1(157 * (value1 - 1));
        }
    }

    const handleIncrease2 = () => {
        setValue2(value2 + 1);
        setPrice2(2500 * (value2 + 1));
    }

    const handleDecrease2 = () => {
        if (value2 > 1) {
            setValue2(value2 - 1);

            setPrice2(2500 * (value2 - 1));
        }
    }

    const handleIncrease3 = () => {
        setValue3(value3 + 1);
        setPrice3(350 * (value3 + 1));
    }

    const handleDecrease3 = () => {
        if (value3 > 1) {
            setValue3(value3 - 1);

            setPrice3(350 * (value3 - 1));
        }
    }

    return (

        <ImageBackground source={require('./assets/signup.png')} style={styles.backGroundImage}>
            <ScrollView>
                {showView && (
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('./assets/featherEaring3.png')} style={styles.image} />
                                <Text style={styles.quantity}>
                                    <TouchableOpacity>
                                        <Text style={styles.increase} onPress={handleDecrease1}>  -  </Text>
                                    </TouchableOpacity>
                                    <Text>  {value1} </Text>
                                    <TouchableOpacity>
                                        <Text style={styles.decrease} onPress={handleIncrease1}>  +  </Text>
                                    </TouchableOpacity>
                                </Text>
                            </View>
                            <View style={{ flex: 1, marginRight: 15 }}>
                                <Text style={styles.name}>Ethnic Women's Blue Feather Long Dangle Earrings Jewelry Bohemian Summer Flower Metal Ladies Earrings Boho Jewelry</Text>
                                <Text style={styles.amount}>Rs.<Text>{price1}</Text>/-</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./assets/starFilled.png')} />
                                    <Image source={require('./assets/starFilled.png')} />
                                    <Image source={require('./assets/starFilled.png')} />
                                    <Image source={require('./assets/starFilled.png')} />
                                    <Image source={require('./assets/starHalfEmpty.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity>
                                <Text style={styles.remove} onPress={removeView}>Remove</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.buyNow}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)
                }
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 10, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={require('./assets/earing5.jpg')} style={styles.image} />
                            <Text style={styles.quantity}>
                                <TouchableOpacity>
                                    <Text style={styles.increase} onPress={handleDecrease2}>  -  </Text>
                                </TouchableOpacity>
                                <Text>  {value2} </Text>
                                <TouchableOpacity>
                                    <Text style={styles.decrease} onPress={handleIncrease2}>  +  </Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                        <View style={{ flex: 1, marginRight: 15 }}>
                            <Text style={styles.name}>Gold-Plated Chandbali Earings</Text>
                            <Text style={styles.amount}>Rs.<Text>{price2}</Text>/-</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./assets/starFilled.png')} />
                                <Image source={require('./assets/starFilled.png')} />
                                <Image source={require('./assets/starFilled.png')} />
                                <Image source={require('./assets/starFilled.png')} />
                                <Image source={require('./assets/starFilled.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>

                        <TouchableOpacity>
                            <Text style={styles.remove}>Remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.buyNow}>Buy Now</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 10, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={require('./assets/earing2.jpg')} style={styles.image} />
                            <Text style={styles.quantity}>
                                <TouchableOpacity>
                                    <Text style={styles.increase} onPress={handleDecrease3}>  -  </Text>
                                </TouchableOpacity>
                                <Text>  {value3} </Text>
                                <TouchableOpacity>
                                    <Text style={styles.decrease} onPress={handleIncrease3}>  +  </Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                        <View style={{ flex: 1, marginRight: 15 }}>
                            <Text style={styles.name}>Pendientes Women's Gypsy Silver Color Circle Wedding Earrings Jewelry Lady Retro Tassel Indian Jhumka Earrings Oorbellen Hangers</Text>
                            <Text style={styles.amount}>Rs.<Text>{price3}</Text>/-</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./assets/starFilled.png')} />
                                <Image source={require('./assets/starFilled.png')} />
                                <Image source={require('./assets/starFilled.png')} />
                                <Image source={require('./assets/starFilled.png')} />
                                <Image source={require('./assets/starEmpty.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>

                        <TouchableOpacity>
                            <Text style={styles.remove}>Remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.buyNow}>Buy Now</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </ScrollView>
        </ImageBackground >

    );
}
export default Cart;
const styles = StyleSheet.create({
    backGroundImage: {
        flex: 1,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#fff'
    },
    dropDown: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 5,
        backgroundColor: 'grey',
        color: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    name: {
        textAlign: 'justify',
        flex: 1,
        marginTop: 25,
        marginLeft: 10,

    },
    increase: {
        backgroundColor: '#fff',
        color: 'black',
    },
    decrease: {
        backgroundColor: '#fff',
        color: 'black',

    },
    quantity: {
        marginLeft: 40,
        marginTop: 15
    },
    amount: {
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 5,
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 20
    },
    remove: {
        marginLeft: 40,
        fontSize: 25,
        borderWidth: 1,
        borderColor: "#fff",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: '#000027',
        color: 'orange'
    },
    buyNow: {
        marginLeft: 50,
        fontSize: 25,
        borderWidth: 1,
        borderColor: "#fff",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: 'orange',
        color: '#000027'
    }

});
