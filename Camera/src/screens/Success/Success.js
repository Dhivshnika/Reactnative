import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

function Success({ route }) {
    const navigation = useNavigation();
    const { capturedImage } = route.params;
    return (
        <View style={styles.successContainer}>
            <View style={styles.successItems}>
                <Image source={require("../../assets/checkmark.png")} style={styles.successImage} />
                <Text style={styles.successfulText}>Successful</Text>
                <Text style={styles.successText}>Your {capturedImage.length} global images is successfully uploaded</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Top")} style={styles.BackContainer}>
                    <Text style={styles.backText}>Go back to home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Success;