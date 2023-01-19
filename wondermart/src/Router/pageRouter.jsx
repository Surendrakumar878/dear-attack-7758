import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Components/HomePage'

function PageRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>

    </Routes>
  )
}

export default PageRouter