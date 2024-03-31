import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import Images from "../../utils/Images";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const dosaData = [
    {
        id: 'Mysore Masala Dosa',
        name: 'Mysore Masala Dosa',
        image: Images.mysori_masala_dosa,
        foodImage: Images.veg,
        food: 'Veg',
        price: 125,
        description: 'Karnataka special mysore masala will have beetroot, aloo masala mixed with vegetables like onion, tomato, capcisum and butter.',
        time: '30 mins',
        value: 1,
        shop: 'Eating Circles ',
        star: Images.five_star,
    },
    {
        id: 'Cheese Corn Masala Dosa',
        name: 'Cheese Corn Masala Dosa',
        image: Images.cheese_corn_dosa,
        foodImage: Images.veg,
        food: 'Veg',
        price: 269,
        description: 'Sweet corn, special masala will be blended with aloo masala mixed with vegetables like onion, tomato, capcisum and butter.',
        time: '35 mins',
        value: 1,
        shop: 'Zaitoon',
        star: Images.four_star,
    },
    {
        id: 'Chocolate Banana Dosa',
        name: 'Chocolate Banana Dosa',
        image: Images.chocolate_dosa,
        foodImage: Images.veg,
        food: 'Veg',
        price: 220,
        description: 'Two of our famous low calorie dosa, infused with sweet & tasty banana slices, served with a rich chocolate sauce Protein -4, Carbohydrate -66, Fat -19, Calories -451',
        time: '40 mins',
        value: 1,
        shop: 'Bodypower Cafe',
        star: Images.five_star,
    },
    {
        id: 'Chinese Chopsuey Dosa',
        name: 'Chinese Chopsuey Dosa',
        image: Images.chinese_chopsuey_dosa,
        foodImage: Images.veg,
        food: 'Veg',
        price: 250,
        description: 'Its a special sauces added with noodles, cabbage blended together with vegetables like onion, capsicum, butter and cheese.',
        time: '30 mins',
        value: 1,
        shop: 'Southern Chinese Restaurant',
        star: Images.five_star,
    },
    {
        id: 'Mutton Kari Dosa',
        name: 'Mutton Kari Dosa',
        image: Images.mutton_kari_dosa,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 150,
        description: 'Dosai/pancake stuffed with specially made mutton keema masala and fried over our charcoal tawa till golden brown. Serves 1, Medium Spicy.',
        time: '35 mins',
        value: 1,
        shop: 'Darbar',
        star: Images.three_star,
    },
    {
        id: 'Chicken Kari Dosa',
        name: 'Chicken Kari Dosa',
        image: Images.chicken_kari_dosa,
        foodImage: Images.non_veg,
        food: 'Non veg',
        price: 185,
        description: 'Dosai/pancake stuffed with specially made chicken keema masala and fried over our charcoal tawa till golden brown. Serves 1, Medium Spicy.',
        time: '45 mins',
        value: 1,
        shop: 'Hotel Crescent',
        star: Images.three_star,
    },
    {
        id: 'Pav Bhaji Masala Dosa',
        name: 'Pav Bhaji Masala Dosa',
        image: Images.pav_bhaji_masala_dosa,
        foodImage: Images.veg,
        food: 'Veg',
        price: 170,
        description: 'Pav bhaji is always special for everyone since its got a special flavour which cant be explained, just enjoy it.',
        time: '55 mins',
        value: 1,
        shop: 'Bodypower Cafe',
        star: Images.five_star,
    },
    {
        id: 'Paneer Masala Dosa',
        name: 'Paneer Masala Dosa',
        image: Images.panner_masala_dosa,
        foodImage: Images.veg,
        food: 'Veg',
        price: 140,
        description: 'Paneer always blends well with aloo masala and gives a mouth watering flavour for the dosa. Always it comes with combination of vegetables.',
        time: '30 mins',
        value: 1,
        shop: 'Hotel Akshaya',
        star: Images.five_star,
    },
];

function Dosa() {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={Images.dosa_main} style={styles.dosaMain} />
            <FlatList
                data={dosaData}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <ScrollView style={styles.dosaItem}>
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
                                <Image source={item.image} style={styles.dosaImage} />
                            </TouchableOpacity>
                            <Text style={styles.dosaName}>{item.name}</Text>
                            <View style={styles.food}>
                                <Image source={item.foodImage} />
                                <Text style={styles.foodType}> {item.food}</Text>
                            </View>
                            <Text style={styles.dosaPrice}>Rs.{item.price}/-</Text>
                        </View>
                    </ScrollView>
                )}
            />
        </View>

    )
}
export default Dosa;