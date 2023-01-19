import * as types from "./actionTypes";
import axios from "axios";

const getProducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get(`https://rich-red-indri-tie.cyclic.app/products`,
      {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }
    )
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((e) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: e });
      console.log(e);
    });
};


const getUsers = () => (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST });

  return axios
    .get(`https://rich-red-indri-tie.cyclic.app/users`,
      {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }
    )
    .then((res) => {
      dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: types.GET_USERS_FAILURE });
      console.log(err);
    });
}



export {
  getProducts,
  getUsers
};