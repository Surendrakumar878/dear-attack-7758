import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from '../Components/Cart'

import {Checkout} from '../Components/Checkout'
import {Pay} from '../Components/Pay'
// import HomePage from '../Components/HomePage'

// import HomePage from '../Components/Design/HomePage'
// import { Navbar } from '../Components/navabar/Navbar'
import Products from '../Components/Products'
import { AdminSideHomePage } from "../page/AdminPages/AdminSideHomePage";
import { AdminSideProducts } from "../page/AdminPages/AdminSideProducts";
import { AdminSideAddProducts } from "../page/AdminPages/AdminSideAddProducts";
import { AdminSideProductEditPage } from "../page/AdminPages/AdminSideProductEditPage";
import  Login from '../page/login/Login'
import { Signup } from '../page/signup/Signup'
import Navbar from '../Components/navabar/Subnavbar'
import Success from '../Components/Success'

import PrivateRouter from '../Components/PrivateRouter/PrivateRouter'
import SingleProducts from '../page/Products/SingleProducts'
import HomePage from '../Components/Design/HomePage'
import { AdminSideUsers } from '../page/AdminPages/AdminSideUsers'


function PageRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        
        {/* <Route path="/nav" element={<Navbar/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>


        <Route path="/cart" element={ <PrivateRouter><Cart/></PrivateRouter> }/>

        <Route path="/products" element={<Products/>}/>
        {/* <Route path="/admin_home_page" element={<AdminSideHomePage />} />
        <Route path='/admin_side_products' element={<AdminSideProducts />} />
        <Route path="/admin_side_add_product" element={<AdminSideAddProducts/>}/>
        <Route path="/admin_side_product_edit_page" element={<AdminSideProductEditPage/>}/> */}
        <Route path="/admin_home_page" element={<AdminSideHomePage />} />
        <Route path="/admin_side_users" element={<AdminSideUsers/>}/>
        <Route path='/admin_side_products' element={<AdminSideProducts />} />
        <Route path="/admin_side_add_product" element={<AdminSideAddProducts/>}/>
        <Route path="/admin_side_product_edit_page/:id" element={<AdminSideProductEditPage/>}/>
        <Route path="/products/:id" element={<SingleProducts/>}/>

    </Routes>
  )
}

export default PageRouter