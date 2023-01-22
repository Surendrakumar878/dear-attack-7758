import {
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE
} from "./actionTypes";
import axios from "axios";

export const getAllProducts = (category) => async (dispatch) => {
  if(category=="price_low=300&&price_high=700"){
    try {
      dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(
        `https://rich-red-indri-tie.cyclic.app/products?${category}`);
      console.log("res: ", res.data);
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILURE,
      });
  }
  }
  else if(category=="asc" || category=="desc"){
    try {
      dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(
        `https://rich-red-indri-tie.cyclic.app/products?sortBy=${category}`);
      console.log("res: ", res.data);
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILURE,
      });
  }
  }
  else if(category){
    try {
      dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(
        `https://rich-red-indri-tie.cyclic.app/products/?category=${category}`);
      console.log("res: ", res.data);
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILURE,
      });
  }
  }else{
    try {
      dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(
        `https://rich-red-indri-tie.cyclic.app/products`);
      console.log("res: ", res.data);
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILURE,
      });
    }
  }
  
};


export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
    const res = await axios.get(
      `https://rich-red-indri-tie.cyclic.app/products/getById/${id}`
    );
    // console.log("res: ", res);
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PRODUCT_FAILURE,
    });
  }
};

export const addProductToCart = (id, value) => async (dispatch) => {
  dispatch({ type:ADD_TO_CART_REQUEST });
return axios
  .post(`https://rich-red-indri-tie.cyclic.app/cart/addcartItem/${id}`, {quantity:value},
    {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }
  )
  .then((res) => {
    dispatch({ type:ADD_TO_CART_SUCCESS, payload: res.data });
    console.log("added", res);
  })
  .catch((error) => {
    dispatch({ type:ADD_TO_CART_FAILURE, payload: error });
    console.log(error)
  });
};



