import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Components/HomePage'
import { AdminSideHomePage } from "../page/AdminPages/AdminSideHomePage";
import { AdminSideProducts } from "../page/AdminPages/AdminSideProducts";
import { AdminSideAddProducts } from "../page/AdminPages/AdminSideAddProducts";
import { AdminSideProductEditPage } from "../page/AdminPages/AdminSideProductEditPage";

function PageRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin_home_page" element={<AdminSideHomePage />} />
        <Route path='/admin_side_products' element={<AdminSideProducts />} />
        <Route path="/admin_side_add_product" element={<AdminSideAddProducts/>}/>
        <Route path="/admin_side_product_edit_page" element={<AdminSideProductEditPage/>}/>
    </Routes>
  )
}

export default PageRouter