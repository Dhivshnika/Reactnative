import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback, TextInput, FlatList, ScrollView } from "react-native";
import Personal from "./Personal";


function Todo() {

    const [businessOpen, setBusinessOpen] = useState(true);
    const [isInputVisibleBusiness, setInputVisibleBusiness] = useState(false);
    const [inputValueBusiness, setInputValueBusiness] = useState('');
    const [dataArrayBusiness, setDataArrayBusiness] = useState([{ text: 'Business Task', strike: 'none', color: 'orange' }]);
    const [strikeBusiness, setStrikeBusiness] = useState('none');
    const [textColorBusiness, setTextColorBusiness] = useState('orange');
    const [editIndexBusiness, setEditIndexBusiness] = useState(null);



    const [isInputVisiblePersonal, setInputVisiblePersonal] = useState(false);
    const [inputValuePersonal, setInputValuePersonal] = useState('');
    const [dataArrayPersonal, setDataArrayPersonal] = useState([{ text: 'Personal Task', strike: 'none', color: 'orange' }]);
    const [strikePersonal, setStrikePersonal] = useState('none');
    const [textColorPersonal, setTextColorPersonal] = useState('orange');
    const [editIndexPersonal, setEditIndexPersonal] = useState(null);

    const lengthBusiness = dataArrayBusiness.length;
    const lengthPersonal = dataArrayPersonal.length;

    const handleBusiness = () => {
        if (businessOpen === false) {
            setBusinessOpen(true);
        }
    }

    const handleComplete = (index) => {
        if (businessOpen) {
            const updatedTasks = dataArrayBusiness.map((item, idx) => {
                if (idx === index) {
                    const newStrike = item.strike === 'none' ? 'line-through' : 'none';
                    const newColor = item.color === 'orange' ? 'grey' : 'orange';
                    return { ...item, strike: newStrike, color: newColor };
                }
                return item;
            });
            setDataArrayBusiness(updatedTasks);
        } else {
            const updatedTasks = dataArrayPersonal.map((item, idx) => {
                if (idx === index) {
                    const newStrike = item.strike === 'none' ? 'line-through' : 'none';
                    const newColor = item.color === 'orange' ? 'grey' : 'orange';
                    return { ...item, strike: newStrike, color: newColor };
                }
                return item;
            });
            setDataArrayPersonal(updatedTasks);
        }
    };


    const handleEdit = (index, type) => {
        if (type === "business") {
            setEditIndexBusiness(index);
            setInputValueBusiness(dataArrayBusiness[index].text);
        } else {
            setEditIndexPersonal(index);
            setInputValuePersonal(dataArrayPersonal[index].text);
        }
    };

    const saveEdit = (index, type) => {
        if (type === "business") {
            const updatedData = [...dataArrayBusiness];
            updatedData[index] = { ...updatedData[index], text: inputValueBusiness };
            setDataArrayBusiness(updatedData);
            setEditIndexBusiness(null);
            setInputValueBusiness('');
        } else {
            const updatedData = [...dataArrayPersonal];
            updatedData[index] = { ...updatedData[index], text: inputValuePersonal };
            setDataArrayPersonal(updatedData);
            setEditIndexPersonal(null);
            setInputValuePersonal('');
        }
    };


    const handleDelete = (indexToRemove) => {
        if (businessOpen === true) {
            const newArray = dataArrayBusiness.filter((_, index) => index !== indexToRemove);
            setDataArrayBusiness(newArray);
        }
        else {
            const newArray = dataArrayPersonal.filter((_, index) => index !== indexToRemove);
            setDataArrayPersonal(newArray);
        }
    };

    const handlePersonal = () => {
        setBusinessOpen(false);
    }

    const handleAdd = () => {
        if (businessOpen === true) {
            if (inputValueBusiness.trim()) {
                setDataArrayBusiness(prevArray => [...prevArray, { text: inputValueBusiness, strike: 'none', color: 'orange' }]);
                setInputValueBusiness('');
            }
            setInputVisibleBusiness(false);
        }
        else {
            if (inputValuePersonal.trim()) {
                setDataArrayPersonal(prevArray => [...prevArray, { text: inputValuePersonal, strike: 'none', color: 'orange' }]);
                setInputValuePersonal('');
            }
            setInputVisiblePersonal(false);
        }
    }

    return (
        <View style={styles.whole}>
            <Image source={require('./assets/background.jpg')} style={{ flex: 1, height: '100%', width: '100%', position: 'absolute', }} />
            <Text style={styles.text1}>What's up, Joy!</Text>
            <Text style={styles.text2}>CATEGORIES</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={handleBusiness}>
                    <View style={styles.category1}>
                        <Text style={styles.text3}>{lengthBusiness} Task</Text>
                        <Text style={styles.heading}>Business</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePersonal}>
                    <View style={styles.category2}>
                        <Text style={styles.text3}>{lengthPersonal} Task</Text>
                        <Text style={styles.heading}>Personal</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.text2}>Today's Task</Text>
            <View>
                {
                    businessOpen ?

                        (<View>
                            {isInputVisibleBusiness && <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.input}
                                    placeholder="Type here..."
                                    value={inputValueBusiness}
                                    onChangeText={setInputValueBusiness}
                                    autoFocus />
                                <TouchableOpacity onPress={handleAdd}>
                                    <Text style={styles.button}>Add</Text>
                                </TouchableOpacity>
                            </View>}
                            {
                                lengthBusiness > 0 ?
                                    (
                                        <FlatList
                                            data={dataArrayBusiness}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    {
                                                        index === editIndexBusiness ?
                                                            (<View style={styles.flat}>
                                                                <TextInput
                                                                    style={{ flex: 1, width: '70%', color: 'orange', fontSize: 20, padding: 10, }}
                                                                    value={inputValueBusiness}
                                                                    onChangeText={setInputValueBusiness}
                                                                />
                                                                <TouchableOpacity onPress={() => saveEdit(index, "business")}>
                                                                    <Text style={{ color: 'blue', fontSize: 20, marginTop: 9, paddingRight: 10 }}>Save</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            ) : (
                                                                <View style={styles.flat}>
                                                                    <View style={{ flex: 1, width: '70%' }}>
                                                                        <Text style={[styles.itemText, { textDecorationLine: item.strike, color: item.color }]}>{item.text}</Text>
                                                                    </View>
                                                                    <TouchableOpacity onPress={() => handleComplete(index)}>
                                                                        <Image source={require('./assets/tick.png')} style={styles.tick} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity onPress={() => handleEdit(index, "business")}>
                                                                        <Image source={require('./assets/edit.png')} style={styles.edit} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity onPress={() => handleDelete(index)}>
                                                                        <Image source={require('./assets/delete.png')} style={styles.delete} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            )
                                                    }
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
                        </View>)
                        :
                        (<View>
                            {isInputVisiblePersonal && <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.input}
                                    placeholder="Type here..."
                                    value={inputValuePersonal}
                                    onChangeText={setInputValuePersonal}
                                    autoFocus />
                                <TouchableOpacity onPress={handleAdd}>
                                    <Text style={styles.button}>Add</Text>
                                </TouchableOpacity>
                            </View>}
                            {
                                lengthPersonal > 0 ?
                                    (
                                        <FlatList
                                            data={dataArrayPersonal}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    {
                                                        index === editIndexPersonal ?
                                                            (<View style={styles.flat}>
                                                                <TextInput
                                                                    style={{ flex: 1, width: '70%', color: 'orange', fontSize: 20, padding: 10, }}
                                                                    value={inputValuePersonal}
                                                                    onChangeText={setInputValuePersonal}
                                                                />
                                                                <TouchableOpacity onPress={() => saveEdit(index, "personal")}>
                                                                    <Text style={{ color: 'blue', fontSize: 20, marginTop: 9, paddingRight: 10 }}>Save</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            ) : (
                                                                <View style={styles.flat}>
                                                                    <View style={{ flex: 1, width: '70%' }}>
                                                                        <Text style={[styles.itemText, { textDecorationLine: item.strike, color: item.color }]}>{item.text}</Text>
                                                                    </View>
                                                                    <TouchableOpacity onPress={() => handleComplete(index)}>
                                                                        <Image source={require('./assets/tick.png')} style={styles.tick} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity onPress={() => handleEdit(index, "personal")}>
                                                                        <Image source={require('./assets/edit.png')} style={styles.edit} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity onPress={() => handleDelete(index)}>
                                                                        <Image source={require('./assets/delete.png')} style={styles.delete} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            )
                                                    }
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
                        </View>)
                }
            </View>
            {
                businessOpen ?
                    <TouchableWithoutFeedback onPress={() => setInputVisibleBusiness(true)} style={{ flex: 1 }}>
                        <Image source={require('./assets/add.png')} style={styles.icon} />
                    </TouchableWithoutFeedback>
                    :
                    <TouchableOpacity onPress={() => setInputVisiblePersonal(true)} style={{ flex: 1 }}>
                        <Image source={require('./assets/add.png')} style={styles.icon} />
                    </TouchableOpacity>
            }
        </View>
    )
}

export default Todo;

const styles = StyleSheet.create({

    whole: {
        flex: 1,
        backgroundColor: '#00203FFF'
    },

    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
        marginLeft: 20,
        color: '#fff'
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
        marginLeft: 20,

    },

    category1: {
        backgroundColor: 'orange',
        marginLeft: 20,
        borderRadius: 10,
        marginTop: 25,
        elevation: 2
    },

    category2: {
        backgroundColor: 'orange',
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 25
    },
    icon: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 60,
        width: 60
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