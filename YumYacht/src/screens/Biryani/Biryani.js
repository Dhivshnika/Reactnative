import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import Images from "../../utils/Images";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const biryaniData = [
    {
        id: 'Spicy Chicken Dum Biryani ',
        name: 'Spicy Chicken Dum Biryani ',
        image: Images.spicy_chicken_dum_biryani,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 327,
        description: 'Serves 1 | Aromatic and flavourful spicy chicken dum biryani prepared with sorted spices, long grain rice and farm-fresh chicken.',
        time: '30 mins',
        value: 1,
        shop: 'SS Hydrabad Biryani',
        star: Images.five_star,
    },
    {
        id: 'Chicken Tikka Biryani',
        name: 'Chicken Tikka Biryani',
        image: Images.chicken_tikka_biryani,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 369,
        description: 'Serves 1 | Aromatic rice layered with juicy chicken tikka pieces in a delicate blend of whole spices.',
        time: '35 mins',
        value: 1,
        shop: 'Zaitoon',
        star: Images.four_star,
    },
    {
        id: 'Egg Dum Biryani',
        name: 'Egg Dum Biryani',
        image: Images.egg_dum_biryani,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 309,
        description: 'Serves 1 | fragrant basmati rice cooked with aromatic biryani spices & herbs fried with boiled eggs to yield a delicious one-pot egg biryani. A must-try treat for egg loving indori.',
        time: '40 mins',
        value: 1,
        shop: 'Erode Amman Mess',
        star: Images.five_star,
    },
    {
        id: 'Paneer Dum Biryani',
        name: 'Paneer Dum Biryani',
        image: Images.paneer_dum_biryani,
        foodImage: Images.veg,
        food: 'Veg',
        price: 299,
        description: 'Serves 1 | Premium quality biryani+ raita+ salad in eco-friendly packaging. Paneer do pyaza is a rich, creamy curry of soft succulent paneer and plenty of onions in a wonderful medley of spices, herbs and tomatoes.',
        time: '30 mins',
        value: 1,
        shop: 'Madurai Pandian Mess',
        star: Images.five_star,
    },
    {
        id: 'Veg Dum Biryani',
        name: 'Veg Dum Biryani',
        image: Images.veg_biryani,
        foodImage: Images.veg,
        food: 'Veg',
        price: 250,
        description: 'Serves 1 | A flavorful combination of rice and assorted veggies cooked in a fragrant and flavorful masala seasoned with Indian whole spices.',
        time: '35 mins',
        value: 1,
        shop: 'Sangeetha Veg Restaurant',
        star: Images.three_star,
    },
    {
        id: 'Mushroom Biryani',
        name: 'Mushroom Biryani',
        image: Images.mushroom_biryani,
        foodImage: Images.veg,
        food: 'Veg',
        price: 370,
        description: 'A delicious one pot dish made with rice,mushrooms,masala powder & herbs.',
        time: '45 mins',
        value: 1,
        shop: 'Hotel Crescent',
        star: Images.three_star,
    },
    {
        id: 'Prawn Biryani',
        name: 'Prawn Biryani',
        image: Images.prawn_biryani,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 370,
        description: 'Serves 1 | Richly flavored aromatic rice layered with succulent prawns in a delicate blend of whole spices| served along with raita and curry|',
        time: '55 mins',
        value: 1,
        shop: 'Star Biryani',
        star: Images.five_star,
    },
    {
        id: 'Fish Biryani',
        name: 'Fish Biryani',
        image: Images.fish_biryani,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 380,
        description: 'Richly flavored aromatic rice layered with succulent fish in a delicate blend of whole spices; served along with raita and curry.',
        time: '30 mins',
        value: 1,
        shop: 'Durbar Biryani',
        star: Images.five_star,
    },
];

function Biryani() {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={Images.biryani_main} style={styles.biryaniMain} />
            <FlatList
                data={biryaniData}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <ScrollView style={styles.biryaniItem}>
                        <View>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('DisplayItem', {
                                        item: {
                                            id: item.id,
                                            name: item.name,
                                            image: item.image,
                                            foodImage: item.foodImage,
                                            food: item.food,
                                            price: item.price,
                                            description: item.description,
                                            time: item.time,
                                            value: item.value,
                                            shop: item.shop,
                                            star: item.star,
                                        }
                                    })}>
                                <Image source={item.image} style={styles.biryaniImage} />
                            </TouchableOpacity>
                            <Text style={styles.biryaniName}>{item.name}</Text>
                            <View style={styles.food}>
                                <Image source={item.foodImage} />
                                <Text style={styles.foodType}> {item.food}</Text>
                            </View>
                            <Text style={styles.biryaniPrice}>Rs.{item.price}/-</Text>
                        </View>
                    </ScrollView>
                )}
            />
        </View>

    )
}
export default Biryani;