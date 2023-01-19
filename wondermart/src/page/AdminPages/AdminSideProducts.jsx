import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Components/AdminStyles/AdminSideProducts.css"
// import products from "../products.json";
import { getProducts } from "../../Redux/adminReducer/action";
import { AdminSideNavbar } from "../AdminPages/AdminSideNavbar";
import { AdminSideSingleProductPage } from "../AdminPages/AdminSideSingleProductPage";


const AdminSideProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.adminReducer.products);
    // console.log("store products:", products);

    useEffect(()=>{
        if(products.length === 0){
            dispatch(getProducts());
        }
    },[products.length,dispatch]);

    return (
        <div className="adminProductContainer">
            <div>
                <AdminSideNavbar/>
            </div>
            <div className="admin_products_grid_container">
                {
                    products.length ? products.map((item) => {
                       return (
                            <AdminSideSingleProductPage
                                key={item.id} 
                                id={item.id}
                                brand={item.brand}
                                name={item.name}
                                weight={item.weight}
                                price={item.price}
                                ImgSrc={item.ImgSrc}
                                category={item.category}
                                offers={item.offers}
                                mrp={item.mrp}
                                packet={item.packet}
                                sasta={item.sasta}
                                isavailable={item.isavailable}
                                quantity={item.quantity}
                            />
                       );
                    }) : <div>Loading...</div>
                }
            </div>
        </div>
    );
};

export {AdminSideProducts};