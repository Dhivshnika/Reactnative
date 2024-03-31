import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import Images from "../../utils/Images";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const burgerData = [
    {
        id: '2 Veg Krisper Burger',
        name: '2 Veg Krisper Burger',
        image: Images.veg_krisper_burger,
        foodImage: Images.veg,
        food: 'Veg',
        price: 176,
        description: '2 delicious veg value burgers - at a deal price',
        time: '30 mins',
        value: 1,
        shop: 'Mcdonalds',
        star: Images.four_star,
    },
    {
        id: '2 Chicken Krisper Burger',
        name: '2 Chicken Krisper Burger',
        image: Images.chicken_krisper_burger,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 248,
        description: '2 delicious chicken value burgers - at a deal price',
        time: '35 mins',
        value: 1,
        shop: 'KFC',
        star: Images.four_star,
    },
    {
        id: 'Tandoori Zinger Burger',
        name: 'Tandoori Zinger Burger',
        image: Images.tandoori_zinger_burger,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 208,
        description: 'Chicken zinger with a delicious tandoori sauce',
        time: '30 mins',
        value: 1,
        shop: 'Burger King',
        star: Images.five_star,
    },
    {
        id: 'Classic Zinger Burger',
        name: 'Classic Zinger Burger',
        image: Images.classic_zinger_burger,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 199,
        description: 'Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce',
        time: '20 mins',
        value: 1,
        shop: 'KFC',
        star: Images.five_star,
    },
    {
        id: 'Chicken crispy Whopper',
        name: 'Chicken crispy Whopper',
        image: Images.chicken_whooper,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 129,
        description: 'Our Signature whopper With 7 Layers Between The Buns.',
        time: '45 mins',
        value: 1,
        shop: 'Mcdonalds',
        star: Images.three_star,
    },
    {
        id: 'Veg Double Whopper',
        name: 'Veg Double Whopper',
        image: Images.veg_double_whooper,
        foodImage: Images.veg,
        food: 'Veg',
        price: 199,
        description: 'Whopper with double signature veg paties',
        time: '35 mins',
        value: 1,
        shop: 'Burger King',
        star: Images.three_star,
    },
    {
        id: 'Tandoori Zinger Burgers',
        name: 'Tandoori Zinger Burgers',
        image: Images.tandoori_zinger_burger,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 208,
        description: 'Chicken zinger with a delicious tandoori sauce',
        time: '20 mins',
        value: 1,
        shop: 'KFC',
        star: Images.five_star,
    },
    {
        id: 'Classic Zinger Burgers',
        name: 'Classic Zinger Burgers',
        image: Images.classic_zinger_burger,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 199,
        description: 'Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce',
        time: '30 mins',
        value: 1,
        shop: 'Mcdonalds',
        star: Images.five_star,
    },
];

function Burger() {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={Images.burger_main} style={styles.burgerMain} />
            <FlatList
                data={burgerData}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <ScrollView style={styles.burgerItem}>
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
                                <Image source={item.image} style={styles.burgerImage} />
                            </TouchableOpacity>
                            <Text style={styles.burgerName}>{item.name}</Text>
                            <View style={styles.food}>
                                <Image source={item.foodImage} />
                                <Text style={styles.foodType}> {item.food}</Text>
                            </View>
                            <Text style={styles.burgerPrice}>Rs.{item.price}/-</Text>
                        </View>
                    </ScrollView>
                )}
            />
        </View>

    )
}
export default Burger;