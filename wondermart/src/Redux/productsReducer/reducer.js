import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./actionTypes";

const initialState = {
  AllProducts: { loading: false, error: false },
  Product: { loading: false, error: false },
  data:[],
  singleData: [],
  carts: [],
  loading: false,
  error: false,
  message: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        AllProducts: { loading: true, error: false },
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        AllProducts: { loading: false, error: false },
        Product: { loading: false, error: false },
        data: payload,
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        AllProducts: { loading: false, error: true },
      };
    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        Product: { loading: true, error: false },
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        Product: { loading: false, error: false },
        singleData: payload,
      };
    case GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        Product: { loading: false, error: true },
      };


    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        carts: payload,
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
