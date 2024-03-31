import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, ScrollView, ImageBackground, TouchableOpacity, StatusBar, ImageBackgroundBase, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ForgetPassword() {

    const navigation = useNavigation();

    return (

        <ImageBackground source={require('./assets/signup.png')} style={styles.backGroundImage}>
            <ScrollView>
                <Image source={require('./assets/otp.png')} style={styles.image}></Image>

                <Text style={styles.forgetPassword}> OTP Verification</Text>
                <Text style={styles.description}>
                    we will send you a <Text style={{ fontWeight: 'bold' }}>One Time Password</Text> on your mobile number
                </Text>
                <View style={{ paddingTop: 30, color: '#fff' }}>

                    <TextInput placeholder="OTP" placeholderTextColor="grey" style={styles.input} />

                    <TouchableOpacity>
                        <Text style={styles.button}>Verify</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.resend}>Didn't receive the verification OTP?
                    <Text style={styles.resendLink} onPress={() => alert('OTP sent')}> Resend again</Text>
                </Text>
            </ScrollView>
        </ImageBackground >
    )
}
export default ForgetPassword;

const styles = StyleSheet.create({
    backGroundImage: {
        flex: 1,
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
        height: 135,
        width: 135,
        borderRadius: 100,
        marginTop: 40,
        marginLeft: 110
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
    resend: {
        textAlign: 'center'
    },
    resendLink: {
        color: 'orange',

    }
});
