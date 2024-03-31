import React, { useEffect, useState } from 'react';
import { View, StyleSheet, PermissionsAndroid, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Welcome = () => {
    const [region, setRegion] = useState(null);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        Geolocation.setRNConfiguration({ authorizationLevel: 'always' });

        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                });
                setMarkers([{ id: 1, latitude, longitude }]);
            },
            error => {
                console.error(`Error getting current location: ${error.message}`);
            },
        );

        const watchId = Geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setRegion(prevRegion => ({
                    ...prevRegion,
                    latitude,
                    longitude,
                }));
                setMarkers(prevMarkers => [
                    ...prevMarkers,
                    { id: prevMarkers.length + 1, latitude, longitude },
                ]);
            },
            error => {
                console.error(`Error getting location: ${error.message}`);
            },
            { enableHighAccuracy: true, distanceFilter: 10 },
        );

        return () => {
            Geolocation.clearWatch(watchId);
        };
    }, []);


    const handleDragEnd = (newCoordinate) => {
        setRegion(newCoordinate);
        setMarkers([{ id: 1, ...newCoordinate }]);
    };

    return (
        <View style={styles.container}>
            {region && (
                <MapView style={styles.map} region={region} mapType="standard">
                    {markers.map(marker => (
                        <Marker
                            key={marker.id}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            title={`Marker ${marker.id}`}
                            draggable
                            onDragEnd={e => handleDragEnd(e.nativeEvent.coordinate)}
                        >
                            {/* <Button title="Move Me!" onPress={() => console.log('Marker button pressed!')} /> */}
                        </Marker>
                    ))}
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default Welcome;
