import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from '../Components/Cart'
import HomePage from '../Components/Design/HomePage'
// import { Navbar } from '../Components/navabar/Navbar'
import Products from '../Components/Products'
import { AdminSideHomePage } from "../page/AdminPages/AdminSideHomePage";
import { AdminSideProducts } from "../page/AdminPages/AdminSideProducts";
import { AdminSideAddProducts } from "../page/AdminPages/AdminSideAddProducts";
import { AdminSideProductEditPage } from "../page/AdminPages/AdminSideProductEditPage";
import  Login from '../page/login/Login'
import { Signup } from '../page/signup/Signup'
import Navbar from '../Components/navabar/Subnavbar'

function PageRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        
<<<<<<< HEAD
        <Route path="/nav" element={<Navbar/>}/>
=======
        {/* <Route path="/nav" element={<Navbar/>}/> */}
>>>>>>> 56db8e7fd8659c395f946d27652642f218a10a30
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/admin_home_page" element={<AdminSideHomePage />} />
        <Route path='/admin_side_products' element={<AdminSideProducts />} />
        <Route path="/admin_side_add_product" element={<AdminSideAddProducts/>}/>
        <Route path="/admin_side_product_edit_page" element={<AdminSideProductEditPage/>}/>

    </Routes>
  )
}

export default PageRouter