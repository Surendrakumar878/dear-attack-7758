import React from "react";
import "../AdminStyles/AdminSideNavbar.css";
import { Link } from "react-router-dom";


const AdminSideNavbar = () => {
   return (
      <div className="admin_navbar_outerbox">
         <div className="admin_navbar">
            <div><Link to="/admin_home_page">Admins</Link></div>
            <div><Link to="/admin_side_products"><div>Products</div></Link></div>
            <div><Link to="/admin_side_users"><div>Users</div></Link></div>
            <div><Link to="/admin_side_add_product"><div>Add Product</div></Link></div>
         </div>
      </div>
   );
};

export { AdminSideNavbar };