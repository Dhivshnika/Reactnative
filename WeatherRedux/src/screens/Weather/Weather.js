import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Animated, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
import Images from '../../utils/Images';
import colors from '../../utils/colors';



const Weather = () => {
    const API_KEY = '6acf25adece44800a95e7d927ec4538f';
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');
    const [open, setOpen] = useState(false);
    const [gif, setgif] = useState(Images.thunder);
    const [color, setColor] = useState(null);
    const [icon, setIcon] = useState(Images.drizzle_Icon);

    const handleIcon = (desc, icon) => {
        console.log(icon);
        if (['t04d', 't05d'].includes(icon)) {
            return (Images.thunder_Icon);
        }
        else if (['d01d', 'd02d', 'd03d', 'd01n', 'd02n', 'd03n'].includes(icon)) {
            return (Images.drizzle_Icon);
        }
        else if (['r01d', 'r02d', 'f01d', 'r04d', 'r06d', 'u00d', 'r01n', 'r02n', 'f01n', 'u00n'].includes(icon)) {
            return (Images.rain_Icon);
        }
        else if (icon === 'r05d') {
            return (Images.shower_Icon);
        }
        else if (['c02d'].includes(icon)) {
            return (Images.partial_cloud_Icon);
        }
        else if (['c02n'].includes(icon)) {
            return (Images.partial_night_Icon);
        }
        else if (['c01d'].includes(icon)) {
            return (Images.clear_sky_Icon);
        }
        else if (['s05d', 's05n'].includes(icon)) {
            return (Images.sleet_Icon);
        }
        else if (['c01n'].includes(icon)) {
            return (Images.clear_night_Icon);
        }
        else if (['c04d', 'c04n'].includes(icon)) {
            return (Images.overcast_Icon);
        }
        else if (['s02d', 's02n', 's03n', 's03d', 's06d', 's06n'].includes(icon)) {
            return (Images.snow_Icon);
        }
        else if (['a01d', 'a02d', 'a03d', 'a04d', 'a05d', 'a06d'].includes(icon)) {
            return (Images.day_fog_Icon);
        }
        else if (['a01n', 'a02n', 'a03n', 'a04n', 'a05n', 'a06n'].includes(icon)) {
            return (Images.night_fog_Icon);
        }
        else if (['t01d', 't02d', 't03d', 't01n', 't02n', 't03n'].includes(icon)) {
            return (Images.strom_rain_Icon);
        }
        else if (['r04n', 'r05n', 'r06n'].includes(icon)) {
            return (Images.light_rain_night_Icon);
        }
        else if (['s01d', 's01n', 's04d', 's04n'].includes(icon)) {
            return (Images.light_snow_Icon);
        }
        else if (['r03d', 'r03n'].includes(icon)) {
            return (Images.heavy_rain__Icon);
        }
        else if (['c03d'].includes(icon)) {
            return (Images.cloud_day_Icon);
        }
        else if (['c03n'].includes(icon)) {
            return (Images.cloud_night_Icon);
        }
        else {
            return ({ uri: `https://www.weatherbit.io/static/img/icons/${icon}.png` });
        }
    }

    const handleGif = (climate) => {
        if (['Light Rain', 'Moderate rain', 'Heavy rain', 'Freezing rain', 'Light shower rain', 'Shower rain', 'Heavy shower rain', 'Light Drizzle', 'Drizzle', 'Heavy Drizzle'].includes(climate)) {
            setgif(Images.rain);
            setColor(colors.blue_black);
        }
        else if (['Thunderstorm with light rain', 'Thunderstorm with rain', 'Thunderstorm with heavy rain', 'Thunderstorm with light drizzle', 'Thunderstorm with drizzle', 'Thunderstorm with heavy drizzle', 'Thunderstorm with Hail'].includes(climate)) {
            setgif(Images.thunder);
            setColor(colors.black);
        }
        else if (climate === 'Clear Sky') {
            setgif(Images.clear_sky);
            setColor(colors.white);
        }
        else if (['Few clouds', 'Scattered clouds', 'Broken clouds', 'Overcast clouds'].includes(climate)) {
            setgif(Images.cloudy);
            setColor(colors.cream);
        }
        else if (['Light snow', 'Snow', 'Heavy Snow', 'Mix snow/rain', 'Snow shower', 'Heavy snow shower', 'Flurries', 'Sleet', 'Heavy sleet'].includes(climate)) {
            setgif(Images.snow);
            setColor(colors.black);
        }
        else if (['Mist', 'Smoke', 'Haze', 'Sand/dust', 'Fog', 'Freezing Fog'].includes(climate)) {
            setgif(Images.fog);
            setColor(colors.green);
        }
    }

    const fetchWeatherData = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lon}&key=${API_KEY}&hours=24`);

            if (!response.ok) {
                console.error('Bad response', await response.text());
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const climate = data.data[0].weather.description;
            handleGif(climate);
            //console.log(climate);
            setWeatherData(data);

        } catch (error) {
            console.error("Failed to fetch weather data: ", error);
        }
    };

    const handleGetWeather = async () => {
        try {
            const geocodeResponse = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`);
            const geocodeData = await geocodeResponse.json();

            if (geocodeData && geocodeData.length > 0) {
                const lat = geocodeData[0].lat;
                const lon = geocodeData[0].lon;
                fetchWeatherData(lat, lon);
                setOpen(!open);
            } else {
                console.error("Failed to get location coordinates.");
            }
        } catch (error) {
            console.error("Failed to geocode location: ", error);
        }
    };

    function convertTo12HourFormat(time) {
        const [hour, minute] = time.split(':').map(Number);
        if (hour === 0) {
            return `12:${minute.toString().padStart(2, '0')} AM`;
        } else if (hour < 12) {
            return `${hour}:${minute.toString().padStart(2, '0')} AM`;
        } else if (hour === 12) {
            return `12:${minute.toString().padStart(2, '0')} PM`;
        } else {
            return `${hour - 12}:${minute.toString().padStart(2, '0')} PM`;
        }
    }


    return (
        <View style={styles.container}>
            {
                weatherData === null ?
                    <View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder=" Enter location....."
                                value={location}
                                onChangeText={setLocation}
                                placeholderTextColor={'grey'}
                                style={styles.inputText}
                            />
                            <TouchableOpacity onPress={handleGetWeather}>
                                <Image source={require('../../assets/Image/search.png')} style={styles.searchMain} />
                            </TouchableOpacity>
                        </View>

                        <FastImage
                            source={Images.cloud_gif}
                            style={styles.mainImage}
                        />

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.text1}>Discover the Weather</Text>
                            <Text style={styles.text2}>in Your City</Text>
                            <Text style={styles.text3}>Get to know your weather maps and</Text>
                            <Text style={styles.text4}>radar precipitation forecast</Text>
                        </View>
                    </View>
                    :

                    <View>
                        <FastImage
                            source={gif}
                            style={{ width: "100%", height: "100%", position: 'absolute' }}
                        />
                        <View style={styles.headerConatiner}>
                            <View style={{ width: '85%' }}>
                                {
                                    open ?
                                        <View>
                                            <Text style={styles.locationHeading}> {location}</Text>
                                            <Text style={styles.locationSubHeading}>Just Updated</Text>
                                        </View>
                                        :
                                        <View style={styles.input}>
                                            <TextInput
                                                placeholder=" Enter location....."
                                                value={location}
                                                onChangeText={setLocation}
                                                placeholderTextColor={'grey'}
                                                style={styles.inputText}
                                            />
                                            <TouchableOpacity onPress={handleGetWeather}>
                                                <Image source={require('../../assets/Image/search.png')} style={styles.search} />
                                            </TouchableOpacity>
                                        </View>
                                }
                            </View>
                            <TouchableOpacity onPress={() => setOpen(!open)}>
                                <Image source={require('../../assets/Image/menu.png')} style={{ marginTop: 36 }} />
                            </TouchableOpacity>
                        </View>


                        {weatherData && (
                            <View>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ width: '62%' }}>
                                        <Text style={styles.currentTemp}>{Math.round(weatherData.data[0].temp)}°</Text>
                                        <Text style={styles.currentDesc}>{weatherData.data[0].weather.description}</Text>
                                    </View>
                                    <View style={{ marginTop: '30%', }}>
                                        <View style={styles.umbrellaBox}>
                                            <Image source={require('../../assets/Image/rain.png')} style={styles.umbrellaImage} />
                                            <Text style={styles.umbrellaText}>{weatherData.data[0].pop}%</Text>
                                        </View>
                                        <View style={styles.snowmanBox}>
                                            <Image style={styles.snowmanImage} source={require('../../assets/Image/man.png')} />
                                            <Text style={styles.snowmanText}>{Math.round(weatherData.data[0].temp)}°</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.hourlyContainer, { backgroundColor: color }]}>
                                    <Text style={styles.forecast}>HOURLY FORECAST</Text>
                                    <FlatList
                                        horizontal
                                        data={weatherData.data}
                                        keyExtractor={(item) => item.timestamp_local}
                                        renderItem={({ item }) => (
                                            <View style={styles.hourlyItem}>
                                                <View>
                                                    <Text style={styles.timeText}>{convertTo12HourFormat(item.timestamp_local.split('T')[1])}     </Text>
                                                    <FastImage
                                                        style={styles.icon}
                                                        source={handleIcon(item.weather.description, item.weather.icon)}
                                                    />
                                                    <Text style={styles.tempText}>{Math.round(item.temp)}°C </Text>
                                                </View>
                                            </View>
                                        )}
                                    />
                                </View>
                            </View>
                        )}
                    </View>
            }
        </View>
    );
};

export default Weather;
