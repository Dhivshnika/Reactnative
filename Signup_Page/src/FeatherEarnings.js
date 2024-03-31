import React, { useState, use } from 'react';
import { StyleSheet, Text, TextInput, Image, View, ScrollView, ImageBackground, TouchableOpacity, StatusBar, ImageBackgroundBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Screen } from 'react-native-screens';

let res = 'unLike';
function FeatherEarnings() {

    const navigation = useNavigation();
    const [price, setPrice] = useState(157)
    const [value, setValue] = useState(1);
    const [pic, setPic] = useState(require('./assets/featherEaring.jpg'));
    const [like, setLike] = useState(require('./assets/inactiveSaved.png'));
    const [popup, setPopup] = useState(false);
    const [result, setResult] = useState('');


    const handleIncrease = () => {
        setValue(value + 1);
        setPrice(157 * (value + 1));
    }

    const handleDecrease = () => {
        if (value > 1) {
            setValue(value - 1);

            setPrice(157 * (value - 1));
        }
    }

    const handleCreamDot = () => {
        setPic(require('./assets/featherEaring4.jpg'));
    }

    const handleSkyBlueDot = () => {
        setPic(require('./assets/featherEaring3.png'));
    }

    const handleNavyBlueDot = () => {
        setPic(require('./assets/featherEaring6.png'));
    }

    const handleBlackDot = () => {
        setPic(require('./assets/featherEaring5.png'));
    }

    const handleRedDot = () => {
        setPic(require('./assets/featherEaring2.png'));
    }

    const handleWhiteDot = () => {
        setPic(require('./assets/featherEaring1.png'));
    }

    const handleMultiDot = () => {
        setPic(require('./assets/featherEaring7.jpg'));
    }

    use
    const handleLike = () => {

        if (res === 'like') {
            setLike(require('./assets/inactiveSaved.png'));
            res = 'unlike';
            setPopup(true);
            setResult('unsaved');
            // setPopup(false);
        }
        else {
            setLike(require('./assets/like.png'));
            res = 'like';
            setPopup(true);
            setResult('saved');
            // setPopup(false);
        }
    }

    return (

        <ImageBackground source={require('./assets/signup.png')} style={styles.backGroundImage}>
            <ScrollView>
                <Image source={pic} style={styles.image} />
                <Text style={styles.name}>Ethnic Women's Feather Long Dangle Earrings Jewelry Bohemian Summer Flower Metal Ladies Earrings Boho Jewelry</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.price}>Rs.{price}/-</Text>
                    <TouchableOpacity onPress={handleLike}>
                        <Image source={like} style={styles.likeStyle} />
                    </TouchableOpacity>
                </View>

                <AwesomeAlert show={popup} title={result} />

                <Text style={styles.color}>Color</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10, marginBottom: 10 }}>
                    <TouchableOpacity onPress={handleCreamDot} >
                        <Image source={require('./assets/featherEaring4.jpg')} style={styles.imageColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSkyBlueDot}>
                        <Image source={require('./assets/featherEaring3.png')} style={styles.imageColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleBlackDot}>
                        <Image source={require('./assets/featherEaring5.png')} style={styles.imageColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleWhiteDot}>
                        <Image source={require('./assets/featherEaring1.png')} style={styles.imageColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavyBlueDot}>
                        <Image source={require('./assets/featherEaring6.png')} style={styles.imageColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRedDot}>
                        <Image source={require('./assets/featherEaring2.png')} style={styles.imageColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMultiDot}>
                        <Image source={require('./assets/featherEaring7.jpg')} style={styles.imageColor} />
                    </TouchableOpacity>
                </ScrollView>
                <Text style={styles.quantity}>Quantity{'  '}
                    <TouchableOpacity>
                        <Text style={styles.increase} onPress={handleDecrease}>  -  </Text>
                    </TouchableOpacity>
                    <Text>  {value} </Text>
                    <TouchableOpacity>
                        <Text style={styles.decrease} onPress={handleIncrease}>  +  </Text>
                    </TouchableOpacity>
                </Text>

                <Text style={styles.specification}>Specifications</Text>

                <View style={{ marginLeft: 10, marginRight: 10, borderBottomWidth: 1, }}>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1} >Model Number</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>DX0</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Material</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Metal</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Brand Name</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Olevo</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Fine or Fashion</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Fashion</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Earring Type</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Drop Earrings</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Boho Jewelry</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Ethnic Earrings</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Women Earrings</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Fashion Earrings</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Origin</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Mainland China</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Item Type</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Earrings</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Shape</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Flower,Water Drop,Triangle</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Material</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Feather,Alloy</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Gender</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Women</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Style</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Ethnic</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row >
                        <DataTable.Cell textStyle={styles.txt1}>Metals Type</DataTable.Cell>
                        <DataTable.Cell textStyle={styles.txt2}>Copper</DataTable.Cell>
                    </DataTable.Row>
                </View>

                <Text style={styles.similar}>Similar Products</Text>

                <ScrollView horizontal>
                    <Image source={require('./assets/featherSimPic1.jpg')} style={styles.simPic} />
                    <Image source={require('./assets/featherSimPic2.jpg')} style={styles.simPic} />
                    <Image source={require('./assets/featherSimPic5.jpg')} style={styles.simPic} />
                    <Image source={require('./assets/featherSimPic4.png')} style={styles.simPic} />
                    <Image source={require('./assets/featherSimPic6.jpg')} style={styles.simPic} />
                    <Image source={require('./assets/featherSimPic3.png')} style={styles.simPic} />
                </ScrollView>

                <View style={styles.order}>
                    <TouchableOpacity>
                        <Text style={styles.buyNow}>Buy Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.addToCart}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground >

    );
}
export default FeatherEarnings;
const styles = StyleSheet.create({
    backGroundImage: {
        flex: 1,
    },
    image: {
        height: 270,
        width: 350,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
    },
    register: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'justify',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,

    },
    buyNow: {
        fontSize: 25,
        width: '200%',
        backgroundColor: 'orange',
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#000027',
        borderColor: 'grey',
        borderWidth: 1
    },
    addToCart: {
        fontSize: 25,
        width: '100%',
        backgroundColor: '#000027',
        paddingLeft: 30,
        paddingRight: 50,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'orange',
        borderColor: 'grey',
        borderWidth: 1,
    },
    order: {
        flexDirection: 'row',
        marginTop: 10,
        // borderColor: 'grey',
        // borderWidth: 1,
        // marginLeft: 5,
        // marginRight: 5
    },
    price: {
        fontSize: 40,
        color: 'orange',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    quantity: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,

    },
    increase: {
        backgroundColor: '#fff',
        color: 'black',
    },
    decrease: {
        backgroundColor: '#fff',
        color: 'black',

    },
    color: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
    },
    imageColor: {
        height: 50,
        width: 50,
        borderColor: '#fff',
        borderRadius: 100,
        borderWidth: 1,
        marginRight: 10
    },
    specification: {
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        marginRight: 210,
        marginBottom: 15
    },
    txt1: {
        color: 'orange',
        textAlign: 'left',
        fontWeight: 'bold'
        //backgroundColor: 'grey'
    },
    txt2: {
        color: '#fff',
        //backgroundColor: 'grey'
        textAlign: 'left',
        paddingLeft: 20
    },
    similar: {
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    simPic: {
        borderRadius: 10,
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: "#fff",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    likeStyle: {
        marginTop: 5,
        marginLeft: 130,
        height: 35,
        width: 35
    }
});
