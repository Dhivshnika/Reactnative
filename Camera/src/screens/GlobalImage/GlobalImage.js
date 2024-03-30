import { FlatList, Image, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

function GlobalImage({ route }) {
    const { capturedImage } = route.params;
    const navigation = useNavigation();
    const uploadImagesToAPI = async (capturedImage) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ images: capturedImage }),
            });

            if (response.ok) {
                console.log('Images uploaded successfully');
            } else {
                console.error('Failed to upload images');
            }
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };
    return (
        <View style={styles.globalImageContainer}>
            <Text style={styles.globalImageText}>{capturedImage.length} Global Images</Text>
            <FlatList
                data={capturedImage}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <View>
                        <ImageBackground source={{ uri: item.uri }} style={styles.globalImageBox} >
                            <LinearGradient
                                colors={['rgba(27, 214, 113, 0)', '#1BD671']}
                                locations={[0, 2.55]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.linearBox}
                            >
                                <Image source={require('../../assets/tick.png')} style={styles.linearImage} />
                                <Text style={styles.side}>{item.side}</Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                )}
            />
            <View style={styles.cameraOptions}>
                <TouchableOpacity>
                    <Text style={styles.global}>Global({capturedImage.length})</Text>
                </TouchableOpacity>
                <Text style={styles.closeup}>Close Up({capturedImage.length})</Text>
            </View>
            <TouchableOpacity style={styles.uploadBox} onPress={() => { navigation.navigate('Progress', { capturedImage }); uploadImagesToAPI(capturedImage) }}><Text style={styles.uploadText}>Upload</Text></TouchableOpacity>
        </View>
    )
}
export default GlobalImage;