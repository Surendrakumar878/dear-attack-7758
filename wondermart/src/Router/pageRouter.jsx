import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from '../Components/Cart'
import HomePage from '../Components/HomePage'

import { Navbar } from '../Components/navabar/Navbar'


function PageRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        
        <Route path="/nav" element={<Navbar/>}/>

    </Routes>
  )
}

export default PageRouter


