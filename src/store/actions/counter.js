import * as actionTypes from './actionTypes';


export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add_five = (val) => {
    return {
        type: actionTypes.ADD_FIVE,
        value: val


    }
}


export const subtract_five = (val) => {
    return {
        type: actionTypes.SUBTRACT_FIVE,
        value: val
    }
}