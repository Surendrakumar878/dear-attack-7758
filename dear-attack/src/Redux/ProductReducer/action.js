import * as types from './actionTypes'
import axios from 'axios'


export const getproddetailsreq = () => {
    return {
        type: types.GET_PROD_DETAILS_REQUEST
    }
}

export const getproddetailsSuccess = (data) => {
    return {
        type: types.GET_PROD_DETAILS_SUCCESS,
        payload:data
    }
}

export const getproddetailsFailure = () => {
    return {
        type: types.GET_PROD_DETAILS_FAILURE
    }
}

 const getproddata = (id) => (dispatch) => {
    // console.log(id.id)
    dispatch(getproddetailsreq());
    return axios.get(`https://modesens-mocker-api.onrender.com/modesensdata?id=${id.id}`)
        .then((res) => {
            //  console.log(res.data)
            dispatch(getproddetailsSuccess(res.data))
        })
        .catch((err) => {
 dispatch(getproddetailsFailure())
        })
}

export {getproddata};


export const addtocart = (data) => {
    return {
        type: types.ADD_CART_ITEMS,
        payload:data
    }
}

export const checkoutclear = (data) => {
    return {
        type: types.CLEAR_CART_CHECKOUT,
        payload:data
    }
}

export const removefromcart = (data) => {
    return {
        type: types.REMOVE_ITEM_FROM_CART,
        payload:data
    }
}
