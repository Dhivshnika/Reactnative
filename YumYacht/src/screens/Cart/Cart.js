import React, { useState } from "react";
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import Images from "../../utils/Images";
import { useNavigation } from "@react-navigation/native";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer);
    const navigation = useNavigation();
    const total = cart.reduce((acc, item) => acc + item.price * (item.value || 1), 0)
    const number = cart.reduce((acc, item) => acc + item.value, 0);
    const deliveryFee = Math.round((0.028 * total) * 100) / 100;
    const gst = Math.round((0.061 * total) * 100) / 100;
    const platformFee = 2.00;
    const pay = Math.round((deliveryFee + gst + platformFee + total) * 100) / 100;
    const handleMinusCount = (item) => {
        if (item.value > 1) {
            dispatch({ type: 'DECREMENT_ITEM', id: item.id });
        }
    }
    const handlePlusCount = (item) => {
        dispatch({ type: 'INCREMENT_ITEM', id: item.id });
    }
    const handleRemove = (item) => {
        dispatch({
            type: 'REMOVE_CART',
            payload: {
                id: item.id,
            }
        });
    }
    const handleDeleteAll = () => {
        dispatch({ type: 'DELETE_ALL' })
    }
    return (
        <View style={{ flex: 1, }}>
            {cart.length === 0 ?
                (<View>
                    <Image source={Images.empty_cart} style={styles.emptyCart} />
                    <View style={styles.box}>
                        <Text style={styles.text1}>Good Food is Always</Text>
                        <Text style={styles.text1}>Cooking</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text2}>Your cart is empty. Add something</Text>
                        <Text style={styles.text2}>from the menu</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.browseBox} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.browseText}>Browse Restaurants</Text>
                        </TouchableOpacity>
                    </View>
                </View>)
                :
                (<ScrollView style={{ backgroundColor: '#E5E4E2' }}>
                    <TouchableOpacity style={styles.deleteBack} onPress={handleDeleteAll}>
                        <Image source={Images.bin} style={styles.deleteImage} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>My Cart</Text>
                    <FlatList
                        data={cart}
                        keyExtractor={item => item.id}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View style={styles.container}>
                                <Image source={item.image} style={styles.image} />
                                <View style={styles.itemDetail}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <View style={styles.foodContainer}>
                                        <Image source={item.foodImage} />
                                        <Text style={styles.food}> {item.food}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.price}>Rs.{item.price}/-</Text>
                                    </View>
                                    <View style={styles.countContainer}>
                                        <TouchableOpacity onPress={() => handleMinusCount(item)}>
                                            {
                                                item.value > 1 ?
                                                    <Image source={Images.minus_mini} style={styles.countImage} />
                                                    :
                                                    <Image source={Images.blur_minus_mini} style={styles.countImage} />
                                            }
                                        </TouchableOpacity>
                                        <Text style={styles.countText}>{item.value}</Text>
                                        <TouchableOpacity onPress={() => handlePlusCount(item)}>
                                            <Image source={Images.plus_mini} style={styles.countImage} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.remove} onPress={() => handleRemove(item)}>
                                            <Image source={Images.bin} style={styles.bin} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                    <TouchableOpacity style={styles.moreItemBox} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.moreItemText}>Add more items</Text>
                        <Image source={Images.add_item} style={styles.moreItemImage} />
                    </TouchableOpacity>
                    <Text style={styles.billHeading}>Bill Details</Text>
                    <View style={styles.bill}>
                        <View style={styles.part1}>
                            <View style={[styles.subtotalBox, { marginTop: 30 }]}>
                                <Text style={styles.subtotalText}>Subtotal({number})</Text>
                                <Text style={styles.subtotalTotal}>₹{total}</Text>
                            </View>
                            <View style={styles.delivaryFeeBox}>
                                <View style={styles.feeline}>
                                    <Text style={[styles.delivaryFeeText, { width: '45.5%' }]}>Delivery Fee</Text>
                                </View>
                                <Text style={styles.delivaryFeeTotal}>₹{deliveryFee}</Text>
                            </View>
                        </View>
                        <View style={styles.part2}>
                            <View style={[styles.subtotalBox, { marginTop: 20 }]}>
                                <View style={styles.feeline}>
                                    <Text style={[styles.delivaryFeeText, { width: '48%' }]}>Platform Fee</Text>
                                </View>
                                <Text style={styles.subtotalTotal}>₹2.00</Text>
                            </View>
                            <View style={styles.delivaryFeeBox}>
                                <View style={styles.feeline}>
                                    <Text style={[styles.delivaryFeeText, { width: '16%' }]}>GST</Text>
                                </View>
                                <Text style={styles.delivaryFeeTotal}>₹{gst}</Text>
                            </View>
                        </View>
                        <View style={styles.part3}>
                            <View style={styles.delivaryFeeBox}>
                                <View style={styles.feeline}>
                                    <Text style={[styles.payText, { width: '40%' }]}>To Pay</Text>
                                </View>
                                <Text style={styles.payTotal}>₹{pay}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.checkoutBox}>
                        <Text style={styles.checkoutText}>Check out</Text>
                    </TouchableOpacity>
                </ScrollView>)
            }
        </View>
    );
}
export default Cart;