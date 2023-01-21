import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from '../Components/Cart'
import HomePage from '../Components/HomePage'
// import { Navbar } from '../Components/navabar/Navbar'
import Products from '../Components/Products'
import { AdminSideHomePage } from "../page/AdminPages/AdminSideHomePage";
import { AdminSideProducts } from "../page/AdminPages/AdminSideProducts";
import { AdminSideAddProducts } from "../page/AdminPages/AdminSideAddProducts";
import { AdminSideProductEditPage } from "../page/AdminPages/AdminSideProductEditPage";
import  Login from '../page/login/Login'
import { Signup } from '../page/signup/Signup'
import Navbar from '../Components/navabar/Subnavbar'
import SingleProducts from '../page/Products/SingleProducts'

function PageRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/admin_home_page" element={<AdminSideHomePage />} />
        <Route path='/admin_side_products' element={<AdminSideProducts />} />
        <Route path="/admin_side_add_product" element={<AdminSideAddProducts/>}/>
        <Route path="/admin_side_product_edit_page" element={<AdminSideProductEditPage/>}/>
        <Route path="/products/:id" element={<SingleProducts/>}/>

    </Routes>
  )
}

export default PageRouter