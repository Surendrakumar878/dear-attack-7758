import { GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios";

export const getAllProducts = (params) => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(`https://rich-red-indri-tie.cyclic.app/products`,params);
      console.log("res: ", res);
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILURE,
      });
    }
  };
  
  export const getSingleProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
      const res = await axios.get(
        `https://rich-red-indri-tie.cyclic.app/products/${id}`
      );
      // console.log("res: ", res);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data.product });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_PRODUCT_FAILURE,
      });
    }
  };