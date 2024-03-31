import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART:
            const itemExists = state.some(item => item.id === action.payload.id);
            if (itemExists) return state;
            return [...state, action.payload];
        case actionTypes.REMOVE_CART:
            return state.filter(item => item.id !== action.payload.id);
        case actionTypes.INCREMENT_ITEM:
            return state.map(item => item.id === action.id ? { ...item, value: item.value + 1 } : item);
        case actionTypes.DECREMENT_ITEM:
            return state.map(item => item.id === action.id && item.value > 1 ? { ...item, value: item.value - 1 } : item);
        case actionTypes.DELETE_ALL:
            return state = initialState;
        default:
            return state;
    }
}
export default cartReducer;