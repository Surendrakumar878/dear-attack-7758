
  import * as types from './actionTypes'
  import axios from 'axios'

  
  export const getRequest = () => {
      return {
          type: types.GET_DATA_REQUEST
      }
  }
  
  export const getSuccess = (payload) => {
      return {
          type: types.GET_DATA_SUCCESS,
          payload
      }
  }
  
  export const getFailure = () => {
      return {
          type: types.GET_DATA_FAILURE
      }
  }
  
   const getdata = (queryParams) => (dispatch) => {
      dispatch(getRequest());
      return axios.get("https://modesens-mocker-api.onrender.com/modesensdata",queryParams)
          .then((res) => {
              // console.log(res.data)
              dispatch(getSuccess(res.data))
          })
          .catch((err) => {
              // dispatch(getFailure())
          })
  }
  const getmensdata = (params) => (dispatch) => {
    dispatch(getRequest());
    return axios.get(" https://modesens-mocker-api.onrender.com/modesensdata?category=mens",params)
        .then((res) => {
            console.log(res.data)
            dispatch(getSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getFailure())
        })
}
const getwomensdata = (params) => (dispatch) => {
    dispatch(getRequest());
    return axios.get("https://modesens-mocker-api.onrender.com/modesensdata?category=womens",params)
        .then((res) => {
            // console.log(res.data)
            dispatch(getSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getFailure())
        })
}
const getbeautydata = (params) => (dispatch) => {
  dispatch(getRequest());
  return axios.get("https://modesens-mocker-api.onrender.com/modesensdata?category=beauty",params)
      .then((res) => {
          dispatch(getSuccess(res.data))
      })
      .catch((err) => {
          // dispatch(getFailure())
      })
}
const getkidsdata = (params) => (dispatch) => {
  dispatch(getRequest());
  return axios.get("https://modesens-mocker-api.onrender.com/modesensdata?category=kids",params)
      .then((res) => {
          dispatch(getSuccess(res.data))
      })
      .catch((err) => {
          // dispatch(getFailure())
      })
}
  const edit=(id,payload)=>(dispatch) => {
    // const navigate = useNavigate();
      return axios.patch(`https://modesens-mocker-api.onrender.com/modesensdata/${id}`,payload)
            .then((res) => {

              // console.log(res.data)
              
                // dispatch(getSuccess(res.data))
              // alert("edit") 
              // navigate("/admin")
            })
            .catch((err) => {
                // dispatch(getFailure())
            })
    
    }
    const deleteDataFromCart = (queryParams) => (dispatch) =>  {
      // console.log(id)
      return axios.delete(`https://modesens-mocker-api.onrender.com/modesensdata/${queryParams}`).then(()=>{
        alert("delete data successfully");
      })
    };
    
    const update =  (queryParams) => (dispatch) => {
     
     return axios.patch(`https://modesens-mocker-api.onrender.com/modesensdata/${queryParams}`).then((r)=>{
        console.log(r.data)
      })
    };
  
    const addNewData =  (queryParams) => (dispatch) => {
     
      return axios
      .post(`https://modesens-mocker-api.onrender.com/modesensdata`,queryParams)
      .then((res) => {
        // setProduct(res.data)
       
        // console.log(res.data);
        alert("Add data successfully");
      })
      .catch((e) => {
        console.log(e);
      });
     };
  
    
    export {update,deleteDataFromCart,edit,getdata,addNewData,getmensdata,getwomensdata,getbeautydata,getkidsdata}
  



