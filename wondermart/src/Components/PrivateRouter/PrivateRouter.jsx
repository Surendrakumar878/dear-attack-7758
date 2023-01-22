import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ( {children}) => {
    var isAuth  = useSelector((store)=>{
      console.log(store.authReducer)
      return store.authReducer.isAuth
    })
    console.log(isAuth)
    if(!isAuth){
      alert("please login")
        return (<Navigate to="/"/>)
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRouter