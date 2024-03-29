import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";

function Todo() {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todoReducer);
    const [text, setText] = useState('');
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const handleAdd = () => {
        dispatch({ type: 'ADD_TODO', text });
        setText('');
        console.log(text);
    }
    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_TODO', id });
    }
    const handleEdit = (id, text) => {
        setEditId(id);
        setEdit(true);
        setEditText(text);
    }
    const handleSave = (id) => {
        dispatch({ type: 'EDIT_TODO', id: id, text: editText });
        setEditText('');
        setEditId(null);
        setEdit(false);
    }
    return (
        <View style={styles.whole}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/83/7f/9c/837f9c249fa390af71f5b2fde5ab2374.jpg' }} style={{ flex: 1, position: 'absolute', width: '100%', height: '200%', }} />
            <Text style={styles.heading}>Todo App</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput value={text} onChangeText={setText} placeholder="Enter todo....." placeholderTextColor='grey' style={styles.input} />
                <TouchableOpacity onPress={handleAdd}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todo}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    if (edit && editId === item.id) {
                        return (
                            <View style={styles.container}>
                                <TextInput
                                    value={editText}
                                    onChangeText={setEditText}
                                    style={styles.edit}
                                />
                                <TouchableOpacity onPress={() => handleSave(item.id, item.text)}>
                                    <Text style={styles.save}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    } else {
                        return (
                            <View style={styles.container}>
                                <Text style={styles.output}>{item.text}</Text>
                                <TouchableOpacity onPress={() => handleRemove(item.id)}>
                                    <Text style={styles.remove}>X</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleEdit(item.id, item.text)}>
                                    <Text style={styles.remove}>E</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }
                }}
            />
        </View>
    )
}
export default Todo;