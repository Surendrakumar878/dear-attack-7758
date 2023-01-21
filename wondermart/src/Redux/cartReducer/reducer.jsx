
import * as types from './actionType'

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}


export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_CART_REQUEST: {
            return {
                ...state, isLoading: true
            }
        }
        case types.GET_CART_SUCCESS: {
            console.log("payload =>",payload);
            return {
                ...state, isLoading: false, data:payload
            }
        }

        case types.GET_CART_FAILURE: {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        default: return state
    }
}

