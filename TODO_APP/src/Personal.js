import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback, TextInput, FlatList, ScrollView } from "react-native";

function Personal() {


    const [businessOpen, setBusinessOpen] = useState(true);
    const [isInputVisible2, setInputVisible2] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [dataArray, setDataArray] = useState([]);
    const [strike, setStrike] = useState('none');
    const [textColor, setTextColor] = useState('orange');
    const [isEditMode, setIsEditMode] = useState(false);

    const length = dataArray.length;

    const handleBusiness = () => {
        if (businessOpen === false) {
            setBusinessOpen(true);
        }
    }


    const handleEditItem = (editedItem) => {
        const updatedData = data.map(item => item.id === editedItem.id ? editedItem : item);
        setDataArray(updatedData);
    };

    const handleComplete = () => {
        if (strike === 'none') {
            setStrike('line-through');
            setTextColor('grey');
        }
        else {
            setStrike('none');
            setTextColor('orange');
        }
    }

    const handleEdit = () => {

    }

    const handleDelete = (indexToRemove) => {
        const newArray = dataArray.filter((_, index) => index !== indexToRemove);
        setDataArray(newArray);
    };

    const handlePersonal = () => {
        setBusinessOpen(false);
    }

    const handleAdd = () => {
        if (inputValue.trim()) {
            setDataArray(prevArray => [...prevArray, inputValue]);
            setInputValue('');
        }
        setInputVisible2(false);
    }



    return (
        <View style={styles.whole}>
            {
                isInputVisible2 && <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.input}
                        placeholder="Type here..."
                        value={inputValue}
                        onChangeText={setInputValue}
                        autoFocus />
                    <TouchableOpacity onPress={handleAdd}>
                        <Text style={styles.button}>Add</Text>
                    </TouchableOpacity>
                </View>
            }

            {
                length > 0 ?
                    (
                        <FlatList
                            data={dataArray}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <View style={styles.flat}>
                                    <View style={{ flex: 1, width: '70%' }}>
                                        <Text style={[styles.itemText, { textDecorationLine: strike, color: textColor }]}>{item}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => handleComplete(index)}>
                                        <Image source={require('./assets/tick.png')} style={styles.tick} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleEdit(index)}>
                                        <Image source={require('./assets/edit.png')} style={styles.edit} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleDelete(index)}>
                                        <Image source={require('./assets/delete.png')} style={styles.delete} />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    )
                    :
                    (
                        <View>
                            <Image source={require('./assets/noTask.png')} style={{ height: 300, width: 300, marginTop: 60, marginLeft: 30 }} />
                            <Text style={styles.task}>No Task</Text>
                        </View>
                    )
            }

            <TouchableOpacity onPress={() => setInputVisible2(true)} style={{ flex: 1 }}>
                <Image source={require('./assets/add.png')} style={styles.icon} />
            </TouchableOpacity>

        </View>
    )

}

export default Personal;

const styles = StyleSheet.create({

    whole: {
        flex: 1,
        backgroundColor: 'pink'
    },

    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
        marginLeft: 20
    },

    text2: {
        color: 'grey',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20
    },

    heading: {
        fontSize: 30,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20
    },

    text3: {
        color: 'grey',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 20
    },

    category1: {
        backgroundColor: 'orange',
        marginLeft: 20,
        borderRadius: 10,
        marginTop: 25
    },

    category2: {
        backgroundColor: 'orange',
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 25
    },
    icon: {
        position: 'absolute',
        right: 20,
        height: 60,
        width: 60,
        top: 48.5
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        marginLeft: 20,
        width: '70%'
    },

    button: {
        marginTop: 5,
        marginLeft: 20,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 10,
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        backgroundColor: 'orange'
    },

    flat: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 2,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 15,
        borderRadius: 5,

    },

    itemText: {
        fontSize: 20,
        padding: 10,
    },

    tick: {
        height: 25,
        width: 25,
        padding: 5,
        marginTop: 10,
        marginLeft: 10
    },

    edit: {
        padding: 5,
        marginTop: 10,
        marginLeft: 10
    },

    delete: {
        padding: 5,
        marginTop: 10,
        marginLeft: 10
    },

    task: {
        fontSize: 30,
        textAlign: 'center',

    }
})