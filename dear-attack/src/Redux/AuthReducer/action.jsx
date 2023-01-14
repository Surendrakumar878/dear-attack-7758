import axios from 'axios'
import * as types from './actionTypes'

export const postLoginRequest = () => {
    return {
        type: types.USER_LOGIN_REQUEST
    }
}

export const postLoginSuccess = (data) => {
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload:data
    }
}

export const postLoginFailure = () => {
    return {
        type: types.USER_LOGIN_FAILURE
    }
}

export const login = (payload) => (dispatch) => {
    dispatch(postLoginRequest())

     axios.post(`https://mocker-api.onrender.com/users`,payload)
        .then((r) => {
            // console.log(r);
            dispatch(postLoginSuccess(r.data))
        })
        .catch((e) => {
            dispatch(postLoginFailure())
        })
}
export const logOutUser =(payload)=>{
return {
    type:types.USER_LOGOUT,payload: payload
}
}





