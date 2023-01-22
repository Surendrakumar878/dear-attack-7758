import axios from 'axios'
import * as types from './actionType'

export const getCartRequest = () => {
    return {
        type: types.GET_CART_REQUEST
    }
}

export const getCartSuccess = (data) => {
    return {
        type: types.GET_CART_SUCCESS,
        payload:data
    }
}

export const getCartFailure = () => {
    return {
        type: types.GET_CART_FAILURE
    }
}


export const deleteCartRequest = () => {
    return {
        type: types.DELETE_CART_REQUEST
    }
}

export const deleteCartSuccess = () => {

    return {
        type: types.DELETE_CART_SUCCESS,
    }
}

export const deleteCartFailure = () => {
    return {
        type: types.DELETE_CART_FAILURE
    }
}


export const updateCartRequest = () => {
    return {
        type: types.UPDATE_CART_REQUEST
    }
}

export const updateCartSuccess = (payload) => {
    // console.log("update cart =>",payload);
    return {
        type: types.UPDATE_CART_SUCCESS,
        payload
    }
}

export const updateCartFailure = () => {
    return {
        type: types.UPDATE_CART_FAILURE
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
            console.log("dataCart =>",res)
            dispatch(getCartSuccess(res.data))
        })

        .catch((e) => {
            dispatch(getCartFailure())
        })
}

export const deleteItem = (id) => (dispatch) => {
    dispatch(deleteCartRequest())
    // console.log("delete Page",id);
    axios.delete(`https://rich-red-indri-tie.cyclic.app/cart/delete/${id}`,{
          headers:{
            authorization:localStorage.getItem("token")
          }
        })
        .then((res) => {
            // console.log("dataCart =>",res)
            dispatch(deleteCartSuccess())
            dispatch(cart())
        })
        .catch((e) => {
            dispatch(deleteCartFailure())
        })
       
}

export const updateCartQuantity = (id,payload) => (dispatch) => {
    dispatch(updateCartRequest())
    // console.log("update cart Page",id,count);
    axios.patch(`https://rich-red-indri-tie.cyclic.app/cart/update/${id}`,payload,{
          headers:{
            authorization:localStorage.getItem("token")
          }
        })
        .then((res) => {
            // console.log("updatedataCart =>",res)
            dispatch(updateCartSuccess(res.data))
            dispatch(cart())
        })
        .catch((e) => {
            dispatch(updateCartFailure())
        })
}
