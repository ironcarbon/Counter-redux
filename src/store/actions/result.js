import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULTS,
        result: res
    }
}

export const store_results = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 5000);
    }

}

export const delete_results = (id) => {
    return {
        type: actionTypes.DELETE_RESULTS,
        resultElId: id
    }
}