import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    // if (action.type === 'INCREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     }
    // }
    // if (action.type === 'DECREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter - 1
    //     }
    // }
    // if (action.type === 'ADD_FIVE') {
    //     return {
    //         ...state,
    //         counter: state.counter + action.value
    //     }
    // }
    // if (action.type === 'SUBTRACT_FIVE')
    //     return {
    //         ...state,
    //         counter: state.counter - action.value
    //     }
    // return state;

    switch (action.type) {
        case (actionTypes.INCREMENT):
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_FIVE:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT_FIVE:
            return {
                ...state,
                counter: state.counter - action.value
            }

    }
    return state;

}

export default reducer;