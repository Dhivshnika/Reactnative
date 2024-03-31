import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, ScrollView, ImageBackground, TouchableOpacity, StatusBar, ImageBackgroundBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignupPage() {

    const navigation = useNavigation();

    return (

        <ImageBackground source={require('./assets/signup.png')} style={styles.backGroundImage}>
            <ScrollView>

                <Image source={require('./assets/person.png')} style={styles.image}></Image>

                <View style={{ paddingTop: 30, color: '#fff' }}>

                    <TextInput placeholder="Name" placeholderTextColor="grey" style={styles.input} />
                    <TextInput placeholder="Mail" placeholderTextColor="grey" style={styles.input} />
                    <TextInput placeholder="Password" placeholderTextColor="grey" style={styles.input} />
                    <TextInput placeholder="Confirm Password" placeholderTextColor="grey" style={styles.input} />

                    <TouchableOpacity>
                        <Text style={styles.button} onPress={() => navigation.navigate('Home')}>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={{ marginBottom: 200, marginTop: 10 }}>

                        <Text style={styles.login}>
                            If you already have an account?
                            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}> Login here</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >

    );
}
export default SignupPage;
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
        borderRadius: 4,
        borderRadius: 10

    },

    login: {
        // marginTop: 12,
        paddingLeft: 29,
        fontSize: 15,
        color: '#fff',
    },

    loginLink: {
        fontSize: 15,
        color: 'orange',
    },
    image: {
        height: 135,
        width: 135,
        borderRadius: 100,
        marginTop: 40,
        marginLeft: 110
    },
});
