import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import Images from "../../utils/Images";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

function DisplayItem({ route }) {
    const dispatch = useDispatch();
    const { item } = route.params;
    const navigation = useNavigation();
    const [count, setCount] = useState(1);
    const handleMinusCount = (item) => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const handlePlusCount = (item) => {
        setCount(count + 1);
    }
    const handleAdd = (item) => {
        dispatch({
            type: 'ADD_CART',
            payload: {
                id: item.id,
                name: item.name,
                image: item.image,
                foodImage: item.foodImage,
                food: item.food,
                price: item.price,
                description: item.description,
                time: item.time,
                value: count,
            }
        });
        navigation.navigate('Cart');
        console.log(item.value);
    }
    return (
        <View>
            <Image source={item.image} style={styles.image} />
            <View style={styles.shopBox}>
                <Text style={styles.shopText}>{item.shop}</Text>
                <Image source={item.star} style={styles.star} />
            </View>
            <View style={styles.namePrice}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rs.{item.price}/-</Text>
            </View>
            <View>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.timeBox}>
                <Image source={Images.clock} style={styles.clock} />
                <Text style={styles.clockText}> Delivery Time</Text>
                <Text style={styles.minute}>{item.time}</Text>
            </View>
            <View style={styles.add}>
                <TouchableOpacity onPress={() => handleMinusCount(item)}>
                    {
                        count > 1 ?
                            <Image source={Images.minus} />
                            :
                            <Image source={Images.blur_minus} />
                    }
                </TouchableOpacity>
                <Text style={styles.number}>{count}</Text>
                <TouchableOpacity onPress={() => handlePlusCount(item)}>
                    <Image source={Images.plus} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartBox} onPress={() => handleAdd(item)}>
                    <Text style={styles.cart}>Add To Cart</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}
export default DisplayItem;