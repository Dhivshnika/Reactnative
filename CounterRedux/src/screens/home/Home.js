import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "../../redux/actions/countAction";

function Home() {
    const dispatch = useDispatch();

    const count = useSelector((store) => store.count.count);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        if (count > 0)
            dispatch(decrement());
    };

    return (
        <View style={styles.parentContainer}>
            <Text style={styles.heading}>Counter App</Text>
            <Text style={styles.output}>{count}</Text>
            <View style={styles.buttonWrapperView}>
                <TouchableOpacity onPress={handleIncrement}>
                    <Text style={styles.buttonInc}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDecrement}>
                    <Text style={styles.buttonDec}>Decrement</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;