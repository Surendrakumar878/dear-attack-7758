import axios from 'axios'
import * as types from './actionType'

export const getCartRequest = () => {
    return {
        type: types.GET_CART_REQUEST
    }
}

export const getCartSuccess = (payload) => {
    return {
        type: types.GET_CART_SUCCESS,
        payload
    }
}

export const getCartFailure = () => {
    return {
        type: types.GET_CART_FAILURE
    }
}

export const cart = () => (dispatch) => {
    dispatch(getCartRequest())
    // console.log("Cart Page");
    axios.get("https://rich-red-indri-tie.cyclic.app/cart/cartItems",{
          headers:{
            authorization:localStorage.getItem("token")
          }
        })
        .then((res) => {
            // console.log("dataCart =>",res)
            dispatch(getCartSuccess(res.data))
        })
        .catch((e) => {
            dispatch(getCartFailure())
        })
}
