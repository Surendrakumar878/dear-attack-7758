import * as types from './actionTypes'

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_DATA_REQUEST: {
            return {
                ...state, isLoading: true
            }
        }

        case types.GET_DATA_SUCCESS: {
            return {
                ...state, isLoading: false, data: payload
            }
        }

        case types.GET_DATA_FAILURE: {
            return {
                ...state, isLoading: false, isError: true, books: []
            }
        }
        default: return state
    }
}