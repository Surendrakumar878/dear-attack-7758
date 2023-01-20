import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Components/HomePage'

import { Navbar } from '../Components/navabar/Navbar'
import Products from '../Components/Products'
import SingleProducts from '../page/Products/SingleProducts'


function PageRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/nav" element={<Navbar/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/products/id' element={<SingleProducts/>} />


    </Routes>
  )
}

export default PageRouter