import * as types from "./actionTypes";

const initialstate={
    isLoading:false,
    ProdData:[],
    isError:false,
    CartData:[]
}

export const reducer = (state = initialstate, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_PROD_DETAILS_REQUEST: {
            return {
                ...state, isLoading: true
            }
        }
        case types.GET_PROD_DETAILS_SUCCESS: {
            return {
                ...state, isLoading: false, ProdData:payload
            }
        }
        case types.GET_PROD_DETAILS_FAILURE: {
            return {
                ...state,isError: true
            }
        }
        case types.ADD_CART_ITEMS: {
            return{
                ...state,CartData:payload
            }  
        }
        case types.CLEAR_CART_CHECKOUT: {
            return{
                ...state,CartData:payload
            }
        }
        case types.REMOVE_ITEM_FROM_CART: {
            return{
                ...state,CartData:payload
            }
        }
        default: return state
    }
}

