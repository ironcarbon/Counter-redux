import * as actionTypes from '../actions';

const initialState = {
    results: []
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
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULTS:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;

}

export default reducer;