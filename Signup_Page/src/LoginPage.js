import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, ScrollView, ImageBackground, TouchableOpacity, StatusBar, ImageBackgroundBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginPage() {

    const navigation = useNavigation();

    return (

        <ImageBackground source={require('./assets/signup.png')} style={styles.backGroundImage}>
            <ScrollView>
                <Image source={require('./assets/person.png')} style={styles.image}></Image>
                <View style={{ paddingTop: 30, color: '#fff' }}>
                    <TextInput placeholder="Mail" placeholderTextColor="grey" style={styles.input} />
                    <TextInput placeholder="Password" placeholderTextColor="grey" style={styles.input} />

                    <View style={{ marginBottom: 20, marginTop: 10 }}>

                        <Text style={styles.forgetPassword} onPress={() => navigation.navigate('ForgetPassword')}> Forget Password?</Text>

                    </View>
                    <TouchableOpacity>
                        <Text style={styles.button} onPress={() => navigation.navigate('Homes')}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.register}>If you are a new user?
                        <Text style={{ color: 'orange' }} onPress={() => navigation.navigate('Signup')}> Register here</Text>
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground >

    );
}
export default LoginPage;
const styles = StyleSheet.create({
    backGroundImage: {
        flex: 1,
    },

    input: {
        textAlign: 'left',
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
        borderRadius: 10,
    },

    login: {
        paddingLeft: 29,
        fontSize: 15,
        color: '#fff',
    },

    forgetPassword: {
        fontSize: 15,
        color: 'orange',
        textAlign: 'right',
        marginRight: 50
    },
    image: {
        height: 135,
        width: 135,
        borderRadius: 100,
        marginTop: 40,
        marginLeft: 110
    },
    register: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
    }
});
