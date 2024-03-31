import { COUNT_INCREASE, COUNT_DECREASE } from "./actionTypes";

export const increment = () => {
    return {
        type: COUNT_INCREASE,
    };
};

export const decrement = () => {
    return {
        type: COUNT_DECREASE,
    };
};