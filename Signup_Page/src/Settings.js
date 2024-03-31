import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, ScrollView, ImageBackground, TouchableOpacity, StatusBar, ImageBackgroundBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Settings() {

    const navigation = useNavigation();

    return (

        <ImageBackground source={require('./assets/signup.png')} style={styles.backGroundImage}>
            <ScrollView>

                <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={styles.try}>
                        <Image source={require('./assets/search.png')} style={styles.searchIcon} />
                        <TextInput style={styles.searchBar} placeholder='Search for a setting.....' placeholderTextColor={'black'} />
                    </View>
                </View>

                <View style={{ marginTop: 70 }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={styles.option} onPress={() => navigation.navigate('Profile')}>  <Image source={require('./assets/inactiveProfileIcon.png')} />  Profile</Text>
                        <Text style={styles.option}>  <Image source={require('./assets/notification.png')} />  Notification</Text>
                        <Text style={styles.option}>  <Image source={require('./assets/appearance.png')} />  Appearance</Text>
                        <Text style={styles.option}>  <Image source={require('./assets/privacy.png')} />  Privacy & Security</Text>
                        <Text style={styles.option}>  <Image source={require('./assets/help.png')} />  Help & support</Text>
                        <Text style={styles.option}>  <Image source={require('./assets/about.png')} />  About</Text>
                        <Text style={styles.option} onPress={() => navigation.navigate('Logout')}>  <Image source={require('./assets/logout.png')} />  Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground >

    );
}
export default Settings;
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
    input: {
        backgroundColor: 'pink'
    },
    option: {
        marginBottom: 30,
        color: 'grey',
        fontSize: 25,
        marginLeft: 30,
        marginRight: 40,
        borderBottomColor: 'orange',
        borderBottomWidth: 1
    },
    try: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        width: '90 %',
        marginTop: 30,
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    }

});
