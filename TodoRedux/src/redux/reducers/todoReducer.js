import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case actionTypes.REMOVE_TODO:
            return state.filter(item => item.id != action.id);
        case actionTypes.EDIT_TODO:
            return state.map(item => item.id == action.id ? { ...item, text: action.text } : item);
        default:
            return state;
    }
}
export default todoReducer;