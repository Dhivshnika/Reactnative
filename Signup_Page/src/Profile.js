import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, ScrollView, ImageBackground, TouchableOpacity, StatusBar, ImageBackgroundBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ForgetPassword() {

    const navigation = useNavigation();

    return (

        <ImageBackground source={require('./assets/signup.png')} style={styles.backGroundImage}>
            <ScrollView>
                <Image source={require('./assets/profile.png')} style={styles.image}></Image>
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                    <Text style={styles.info}><Image source={require('./assets/username.png')} style={styles.iconName} />User name</Text>
                    <Text style={styles.info}>  <Image source={require('./assets/dob.png')} style={styles.iconDOB} />   Date of birth</Text>
                    <Text style={styles.info}><Image source={require('./assets/gender.png')} style={styles.icon} />  Gender</Text>
                    <Text style={styles.info}>  <Image source={require('./assets/mail.png')} style={styles.iconMail} />    Email</Text>
                    <Text style={styles.info}> <Image source={require('./assets/pwd.png')} style={styles.iconWrd} />   password</Text>
                </View>

                <View style={{ paddingTop: 30, color: '#fff' }}>


                    <TouchableOpacity>
                        <Text style={styles.button}  >Edit Profile</Text>
                    </TouchableOpacity>
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
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 4,
        borderRadius: 10

    },
    image: {
        height: 135,
        width: 135,
        borderRadius: 100,
        marginTop: 40,
        marginLeft: 110
    },
    info: {
        textAlign: 'left',
        marginRight: 40,
        marginLeft: 40,
        marginTop: 20,
        color: 'grey',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 270,
        height: 50

    },
    iconName: {
        height: 30,
        width: 45,
        marginTop: 5
    },
    icon: {
        height: 30,
        width: 40,
        marginTop: 5
    },
    iconDOB: {
        height: 29,
        width: 29,
        marginTop: 9,
    },
    iconMail: {
        height: 30,
        width: 30,
        marginTop: 5

    },
    iconWrd: {
        height: 30,
        width: 35,
        marginTop: 5
    }
})