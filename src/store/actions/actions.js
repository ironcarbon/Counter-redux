export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_FIVE = 'ADD_FIVE';
export const SUBTRACT_FIVE = 'SUBTRACT_FIVE';
export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';


export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add_five = (val) => {
    return {
        type: ADD_FIVE,
        value: val


    }
}


export const subtract_five = (val) => {
    return {
        type: SUBTRACT_FIVE,
        value: val
    }
}

export const store_results = (res) => {
    return {
        type: STORE_RESULTS,
        result: res
    }
}

export const delete_results = (id) => {
    return {
        type: DELETE_RESULTS,
        resultElId: id
    }
}