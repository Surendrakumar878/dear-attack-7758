import "../../Components/AdminStyles/AdminSideSingleProductPage.css";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";


const AdminSideSingleProductPage = ({id,brand,quantity, name, weight, price, ImgSrc, category, mrp, offers, packet, sasta,isavailable}) => {
    return (
        <div key={id}>
            <div className="admin_side_product_item">
                <div className="product_img_box">
                    <div>
                        <img src={ImgSrc} alt={name} />
                    </div>
                    <div>
                        <p>{brand}</p>
                    </div>
                </div>
                <div className="products_second_box">
                    <ul className="product_information">
                        {name? <li><span>Name: </span>&nbsp;&nbsp; {name}</li> : <></> }
                        {weight? <li><span>Weight: </span>&nbsp;&nbsp; {weight}</li> : <></>}
                        {offers? <li><span>Offers: </span>&nbsp;&nbsp; {offers}</li> : <></>}
                        {category? <li><span>Category: </span>&nbsp;&nbsp; {category}</li> : <></>}
                        {packet? <li><span>Pc: </span>&nbsp;&nbsp; {packet}</li> : <></>}
                        {price? <li><span>Price: </span>&nbsp;&nbsp; {price}</li> : <></>}
                        {mrp ? <li className="strikthrough"><span>MRP: </span>&nbsp;&nbsp; {mrp}</li> : <></>}
                        {quantity? <li><span>Quantity: </span>&nbsp;&nbsp; <strong>{quantity}</strong></li> : <></>}
                        {sasta ? <li><strong>{sasta}</strong></li> : <></>}
                        {isavailable? <button className="blue"><strong>Available</strong></button> : <button className="red"><strong>Not Available</strong></button>}
                    </ul>
                    <div className="product_bottom_section">
                        <div className="blue">
                            <Link to="/admin_side_product_edit_page"><EditIcon fontSize="130%" cursor="pointer" /></Link>
                        </div>
                        <div className="red">
                            <DeleteIcon fontSize="130%" cursor="pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AdminSideSingleProductPage }