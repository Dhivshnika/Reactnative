import * as actionTypes from './actionTypes';

export const addTodo = () => {
    return {
        type: actionTypes.ADD_TODO,
    };
}
export const removeTodo = () => {
    return {
        type: actionTypes.REMOVE_TODO,
    };
}
export const editTodo = () => {
    return {
        type: actionTypes.EDIT_TODO,
    }
}