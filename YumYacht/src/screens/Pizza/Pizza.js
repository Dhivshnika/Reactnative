import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import Images from "../../utils/Images";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const pizzaData = [
    {
        id: 'Schezwan Margherita',
        name: 'Schezwan Margherita',
        image: Images.schezwan_margherita,
        foodImage: Images.veg,
        food: 'Veg',
        price: 389,
        description: 'Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.',
        time: '40 mins',
        value: 1,
        shop: 'Pizzahut',
        star: Images.four_star,
    },
    {
        id: 'Mazedar Makhni Paneer',
        name: 'Mazedar Makhni Paneer',
        image: Images.mazedar_makhni_Paneer,
        foodImage: Images.veg,
        food: 'Veg',
        price: 609,
        description: 'A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle',
        time: '50 mins',
        value: 1,
        shop: 'Dominos',
        star: Images.four_star,
    },
    {
        id: 'Sizzling Schezwan Chicken',
        name: 'Sizzling Schezwan Chicken',
        image: Images.sizzling_schezwan_chicken,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 539,
        description: 'Loaded with our signature spicy schezwan sauce, juicy schezwan chicken meatballs & 100% mozzarella cheese.',
        time: '45 mins',
        value: 1,
        shop: 'Pizzahut',
        star: Images.five_star,
    },
    {
        id: 'Mexican Fiesta',
        name: 'Mexican Fiesta',
        image: Images.mexican_fiesta,
        foodImage: Images.veg,
        food: 'Veg',
        price: 539,
        description: 'Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce.',
        time: '30 mins',
        value: 1,
        shop: 'Pizzahut',
        star: Images.five_star,
    },
    {
        id: 'Nawabi Murg Makhni',
        name: 'Nawabi Murg Makhni',
        image: Images.nawabi_murg_makhni,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 689,
        description: 'A chicken lovers delight ! Combination of chicken malai tikka, flavourful chicken keema masala, crunchy onion, juicy tomato on our new makhni sauce with 100% mozzarella cheese and buttery spice sprinkle.',
        time: '45 mins',
        value: 1,
        shop: 'Dominos',
        star: Images.three_star,
    },
    {
        id: 'Margherita',
        name: 'Margherita',
        image: Images.margherita,
        foodImage: Images.veg,
        food: 'Veg',
        price: 289,
        description: 'Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!',
        time: '45 mins',
        value: 1,
        shop: 'Pizzahut',
        star: Images.three_star,
    },
    {
        id: 'Dhabe Da Keema',
        name: 'Dhabe Da Keema',
        image: Images.dhabe_da_keema,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 539,
        description: 'Dhaba style chicken keema masala, with green chiili, crunchy onion with flavourful pan sauce, 100% mozzarella cheese & a generous drizzle of mint mayo.',
        time: '30 mins',
        value: 1,
        shop: 'Dominos',
        star: Images.five_star,
    },
    {
        id: 'Triple Chicken Feast',
        name: 'Triple Chicken Feast',
        image: Images.triple_chicken_feast,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 689,
        description: 'Spicy Schezwan Chicken Meatball, flavourful Herbed Chicken, juicy Chicken Sausage, Green Capsicum & Onion, spicy Red Paprika with classic pan sauce and 100% mozzarella cheese.',
        time: '30 mins',
        value: 1,
        shop: 'Pizzahut',
        star: Images.five_star,
    },
];

function Pizza() {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={{ uri: Images.pizza_main }} style={styles.pizzaMain} />
            <FlatList
                data={pizzaData}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <ScrollView style={styles.pizzaItem}>
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
                                <Image source={item.image} style={styles.pizzaImage} />
                            </TouchableOpacity>
                            <Text style={styles.pizzaName}>{item.name}</Text>
                            <View style={styles.food}>
                                <Image source={item.foodImage} />
                                <Text style={styles.foodType}> {item.food}</Text>
                            </View>
                            <Text style={styles.pizzaPrice}>Rs.{item.price}/-</Text>
                        </View>
                    </ScrollView>
                )}
            />
        </View>

    )
}
export default Pizza;