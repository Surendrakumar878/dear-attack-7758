import "../AdminStyles/AdminSideSingleProductPage.css";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { deleteProduct, getProducts } from "../../Redux/adminReducer/action";

const AdminSideSingleProductPage = ({
  id,
  brand,
  quantity,
  name,
  weight,
  price,
  ImgSrc,
  category,
  mrp,
  offers,
  packet,
  sasta,
  isavailable,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const adminProductDeleteHandler = (id) => {
    dispatch(deleteProduct(id))
      .then(() =>
        toast({
          title: "Product deleted !",
          description: "We've deleted your product.",
          status: "success",
          duration: 1500,
          position: "top",
          isClosable: true,
        })
      )
      .then(() => dispatch(getProducts()));
  };

  return (
    <div>
      <div className="admin_side_product_item">
        <div className="product_img_box">
          <div>
            <img src={ImgSrc} alt={brand} />
          </div>
          <div>
            {isavailable ? (
              <div className="blue availableContainer">
                <strong>Available</strong>
              </div>
            ) : (
              <div className="red availableContainer">
                <strong>Not Available</strong>
              </div>
            )}
          </div>
        </div>
        <div className="products_second_box">
          <ul className="product_information">
            <li>
              <span>Brand: </span>&nbsp;&nbsp; {brand}
            </li>
            {name ? (
              <li>
                <span>Name: </span>&nbsp;&nbsp; {name}
              </li>
            ) : (
              <></>
            )}
            {weight ? (
              <li>
                <span>Weight: </span>&nbsp;&nbsp; {weight}
              </li>
            ) : (
              <></>
            )}
            {offers ? (
              <li>
                <span>Offers: </span>&nbsp;&nbsp; {offers}
              </li>
            ) : (
              <></>
            )}
            {category ? (
              <li>
                <span>Category: </span>&nbsp;&nbsp; {category}
              </li>
            ) : (
              <></>
            )}
            {packet ? (
              <li>
                <span>Pc: </span>&nbsp;&nbsp; {packet}
              </li>
            ) : (
              <></>
            )}
            {price ? (
              <li>
                <span>Price: </span>&nbsp;&nbsp; {price}
              </li>
            ) : (
              <></>
            )}
            {mrp ? (
              <li className="strikthrough">
                <span>MRP: </span>&nbsp;&nbsp; {mrp}
              </li>
            ) : (
              <></>
            )}
            {quantity ? (
              <li>
                <span>Quantity: </span>&nbsp;&nbsp; <strong>{quantity}</strong>
              </li>
            ) : (
              <></>
            )}
            {sasta ? (
              <li>
                <strong>{sasta}</strong>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <div className="product_bottom_section">
            <div className="blue">
              <Link to={`/admin_side_product_edit_page/${id}`}>
                <EditIcon fontSize="130%" cursor="pointer" />
              </Link>
            </div>
            <div className="red">
              <DeleteIcon
                onClick={() => adminProductDeleteHandler(id)}
                fontSize="130%"
                cursor="pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminSideSingleProductPage };
