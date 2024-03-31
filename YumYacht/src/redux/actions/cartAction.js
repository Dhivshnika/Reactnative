import * as actionTypes from './actionTypes';

export const addCart = (item) => {
    return {
        type: actionTypes.ADD_CART,
        payload: item
    };
}

export const removeCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_CART,
        itemId: itemId
    };
}

export const incrementItem = (id) => {
    return {
        type: actionTypes.INCREMENT_ITEM,
        id
    };
}

export const decrementItem = (id) => {
    return {
        type: actionTypes.DECREMENT_ITEM,
        id
    };
}

export const deleteAll = () => {
    return {
        type: actionTypes.DELETE_ALL,
    };
}