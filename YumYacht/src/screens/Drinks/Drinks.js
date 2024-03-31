import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import Images from "../../utils/Images";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const drinksData = [
    {
        id: 'Mango Mint Mojito',
        name: 'Mango Mint Mojito',
        image: Images.mango_mojito,
        foodImage: Images.veg,
        food: 'Veg',
        price: 90,
        description: 'Mango mojito is a soda based drink. Though usually served in a glass with ice, it can refer to mango with real mint leaves or lemon bite that has been chilled or cooled',
        time: '20 mins',
        value: 1,
        shop: 'The Thick Shake Factory',
        star: Images.four_star,
    },
    {
        id: 'Blue Lagoon Mint Mojito',
        name: 'Blue Lagoon Mint Mojito',
        image: Images.blue_mojito,
        foodImage: Images.veg,
        food: 'Veg',
        price: 120,
        description: 'Blue lagoon mojito is a soda based drink. Though usually served in a glass with ice, it can refer to tangy flavor (like - khatta mittha) with real mint leaves or lemon bite that has been chilled or cooled',
        time: '35 mins',
        value: 1,
        shop: 'Meat and Eat',
        star: Images.four_star,
    },
    {
        id: 'Kaala Khatta Mint Mojito',
        name: 'Kaala Khatta Mint Mojito',
        image: Images.kaala_mojito,
        foodImage: Images.veg,
        food: 'Veg',
        price: 150,
        description: 'Kaala khatta mojito is a soda based drink. Though usually served in a glass with ice, it can refer to kaala khatta with real mint leaves or lemon bite that has been chilled or cooled',
        time: '40 mins',
        value: 1,
        shop: 'Cafe Arabica',
        star: Images.five_star,
    },
    {
        id: 'Virgin Mint Mojito',
        name: 'Virgin Mint Mojito',
        image: Images.virgin_mojito,
        foodImage: Images.veg,
        food: 'Veg',
        price: 199,
        description: 'Regular mojito is a soda based drink. Though usually served in a glass with ice, it can refer to black salt or masala with real mint leaves or lemon bite that has been chilled or cooled',
        time: '50 mins',
        value: 1,
        shop: 'Chai King',
        star: Images.five_star,
    },
    {
        id: 'Watermelon Mint Mojito',
        name: 'Watermelon Mint Mojito',
        image: Images.watermelon_mojito,
        foodImage: Images.veg,
        food: 'Veg',
        price: 129,
        description: 'Watermelon mojito is a soda based drink. Though usually served in a glass with ice, it can refer to watermelon with real mint leaves or lemon bite that has been chilled or cooled',
        time: '45 mins',
        value: 1,
        shop: 'Cafe Coffee Day',
        star: Images.three_star,
    },
    {
        id: 'Chocolate Nutella Shake',
        name: 'Chocolate Nutella Shake',
        image: Images.nutella_shake,
        foodImage: Images.veg,
        food: 'Veg',
        price: 176,
        description: 'Its making with real nutlla chocolate including with ice cream & cream thick shake',
        time: '35 mins',
        value: 1,
        shop: 'Juice Theory',
        star: Images.three_star,
    },
    {
        id: 'Toffee Chocolate Smoothie',
        name: 'Toffee Chocolate Smoothie',
        image: Images.toffee_smoothie,
        foodImage: Images.veg,
        food: 'Veg',
        price: 208,
        description: 'Its making with cream and ice cream including real smoothie',
        time: '25 mins',
        value: 1,
        shop: 'Cool Biz',
        star: Images.five_star,
    },
    {
        id: 'Cherry Vanilla Smoothie',
        name: 'Cherry Vanilla Smoothie',
        image: Images.cherry_vanilla_smoothie,
        foodImage: Images.veg,
        food: 'Veg',
        price: 169,
        description: 'Its making with cream and ice cream including real fruit smoothie',
        time: '30 mins',
        value: 1,
        shop: 'Keventers',
        star: Images.five_star,
    },
];

function Drinks() {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={Images.drinks_main} style={styles.drinksMain} />
            <FlatList
                data={drinksData}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <ScrollView style={styles.drinksItem}>
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
                                <Image source={item.image} style={styles.drinksImage} />
                            </TouchableOpacity>
                            <Text style={styles.drinksName}>{item.name}</Text>
                            <View style={styles.food}>
                                <Image source={item.foodImage} />
                                <Text style={styles.foodType}> {item.food}</Text>
                            </View>
                            <Text style={styles.drinksPrice}>Rs.{item.price}/-</Text>
                        </View>
                    </ScrollView>
                )}
            />
        </View>

    )
}
export default Drinks;