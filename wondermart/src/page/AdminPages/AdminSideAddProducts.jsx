import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Select,
  useToast,
  Box,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, getProducts } from "../../Redux/adminReducer/action";
import "../AdminStyles/AdminSideAddProducts.css";
import { AdminSideNavbar } from "./AdminSideNavbar";
import additem from "../AdminAssets/gomart-loading.gif";

const initialProductState = {
  brand: "",
  name: "",
  weight: "",
  price: 100,
  mrp: 200,
  ImgSrc: "",
  category: "bakery",
  sasta: "Har Din Sasta",
  packet: "",
  offers: "",
  isavailable: true,
  quantity: 0,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "brand":
      return {
        ...state,
        brand: action.payload,
      };

    case "name":
      return {
        ...state,
        name: action.payload,
      };

    case "weight":
      return {
        ...state,
        weight: action.payload,
      };

    case "price":
      return {
        ...state,
        price: Number(action.payload),
      };

    case "mrp":
      return {
        ...state,
        mrp: Number(action.payload),
      };
    case "ImgSrc":
      return {
        ...state,
        ImgSrc: action.payload,
      };
    case "category":
      return {
        ...state,
        category: action.payload,
      };
    case "sasta":
      return {
        ...state,
        sasta: action.payload,
      };
    case "packet":
      return {
        ...state,
        packet: action.payload,
      };
    case "offers":
      return {
        ...state,
        offers: action.payload,
      };
    case "isavailable":
      return {
        ...state,
        isavailable: action.payload,
      };
    case "quantity":
      return {
        ...state,
        quantity: Number(action.payload),
      };
    default:
      return state;
  }
};

const AdminSideAddProducts = () => {
  const [productState, setProductState] = useReducer(
    productReducer,
    initialProductState
  );
  const dispatch = useDispatch();
  const toast = useToast();

  const addProductHandler = () => {
    dispatch(addProduct(productState))
      .then(() => dispatch(getProducts()))
      .then(() =>
        toast({
          title: "Product Added!",
          description: "We've added your product.",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
          render: () => (
            <Box border="2px solid green" textAlign="center" borderRadius="10px" fontWeight="bolder" color="white" p={3} bg="blue.500" boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px">
              {`Product Successfully Added !`}
            </Box>
          ),
        })
      )
      .catch((err) =>
        toast({
          title: "Error!",
          description: "Something went wrong.",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        })
      );
  };

  return (
    <div className="AdminSideProductAddContainer">
      <div className="admin_side_update_form_heading">
        Wondermart Add Product Page
      </div>
      <div className="admin_side_form_box">
        <div>
          <AdminSideNavbar />
        </div>
        <div>
          <div className="adminSideProductAddBox">
            <FormControl
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "auto",
              }}
              className="parendFormBox"
            >
              <div className="productAddBox1">
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter name of the product"
                  value={productState.name}
                  type={Text}
                  onChange={(e) =>
                    setProductState({ type: "name", payload: e.target.value })
                  }
                />

                <FormLabel>Image</FormLabel>
                <Input
                  placeholder="Enter image url"
                  type={URL}
                  value={productState.ImgSrc}
                  onChange={(e) =>
                    setProductState({ type: "ImgSrc", payload: e.target.value })
                  }
                />

                <FormLabel>Engagement Text</FormLabel>
                <Input
                  placeholder="Enter text"
                  type="text"
                  value={productState.sasta}
                  onChange={(e) =>
                    setProductState({ type: "sasta", payload: e.target.value })
                  }
                />

                <FormLabel>Weight</FormLabel>
                <Input
                  placeholder="Enter weight"
                  value={productState.weight}
                  type="text"
                  onChange={(e) =>
                    setProductState({ type: "weight", payload: e.target.value })
                  }
                />

                <FormLabel>Price</FormLabel>
                <Input
                  placeholder="Enter price"
                  value={productState.price}
                  type={Number}
                  onChange={(e) =>
                    setProductState({
                      type: "price",
                      payload: Number(e.target.value),
                    })
                  }
                />

                <FormLabel>MRP</FormLabel>
                <Input
                  placeholder="Enter MRP"
                  value={productState.mrp}
                  type={Number}
                  onChange={(e) =>
                    setProductState({
                      type: "mrp",
                      payload: Number(e.target.value),
                    })
                  }
                />

                <FormLabel>Offer</FormLabel>
                <Input
                  placeholder="Enter offer"
                  value={productState.offers}
                  type="text"
                  onChange={(e) =>
                    setProductState({ type: "offers", payload: e.target.value })
                  }
                />

                <FormLabel>Packets</FormLabel>
                <Input
                  placeholder="Enter pc"
                  value={productState.packet}
                  type="text"
                  onChange={(e) =>
                    setProductState({ type: "packet", payload: e.target.value })
                  }
                />
              </div>

              <div className="productAddBox2">
                <FormLabel>Brand</FormLabel>
                <Select
                  placeholder="Select option"
                  value={productState.brand}
                  onChange={(e) =>
                    setProductState({ type: "brand", payload: e.target.value })
                  }
                >
                  <option value="Fresho">Fresho</option>
                  <option value="Ocean Secret">Ocean Secret</option>
                  <option value="ABHI EGGS">ABHI EGGS</option>
                  <option value="Milky Mist">Milky Mist</option>
                  <option value="Amul">Amul</option>
                  <option value="Nandini">Nandini</option>
                  <option value="Britannia">Britannia</option>
                  <option value="Gillette">Gillette</option>
                  <option value="Margo">Margo</option>
                  <option value="Vaseline">Vaseline</option>
                  <option value="Oral-B">Oral-B</option>
                  <option value="Prasuma">Prasuma</option>
                  <option value="Pears">Pears</option>
                  <option value="Hamam">Hamam</option>
                  <option value="Mother Dairy">Mother Dairy</option>
                  <option value="Nestle">Nestle</option>
                  <option value="iD Fresho">iD Fresho</option>
                  <option value="Nivea">Nivea</option>
                  <option value="STAYFREE">STAYFREE</option>
                  <option value="Mysore Sandal">Mysore Sandal</option>
                  <option value="Sensodyne">Sensodyne</option>
                  <option value="Cinthol">Cinthol</option>
                  <option value="Colgate">Colgate</option>
                  <option value="Dettol">Dettol</option>
                  <option value="Sunsilk">Sunsilk</option>
                  <option value="Loreal Paris">Loreal Paris</option>
                  <option value="Ponds">Ponds</option>
                  <option value="Medimix">Medimix</option>
                </Select>

                <FormLabel>Available or not</FormLabel>
                <Select
                  placeholder="Select option"
                  value={productState.isavailable}
                  onChange={(e) =>
                    setProductState({
                      type: "isavailable",
                      payload: e.target.value === "true" ? true : false,
                    })
                  }
                >
                  <option value={true}>Available</option>
                  <option value={false}>Not Available</option>
                </Select>

                <FormLabel>Quantity</FormLabel>
                <Select
                  placeholder="Select option"
                  value={productState.quantity}
                  type={Number}
                  onChange={(e) =>
                    setProductState({
                      type: "quantity",
                      payload: Number(e.target.value),
                    })
                  }
                >
                  <option value={0}>Zero</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                  <option value={4}>Four</option>
                  <option value={5}>Five</option>
                  <option value={6}>Six</option>
                  <option value={7}>Sevel</option>
                  <option value={8}>Eight</option>
                  <option value={9}>Nine</option>
                  <option value={10}>Ten</option>
                </Select>

                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select option"
                  value={productState.category}
                  onChange={(e) =>
                    setProductState({
                      type: "category",
                      payload: e.target.value,
                    })
                  }
                >
                  <option value="beauty">Beauty</option>
                  <option value="bakery">Bakery</option>
                  <option value="nonveg">Non-veg</option>
                  <option value="vegetable">Vegetable</option>
                </Select>

                <div>
                    <img style={{width: "60%"}} src={additem} alt=""/>
                </div>

                <Button
                  style={{ margin: "1%", marginTop: "5%" }}
                  colorScheme="pink"
                  onClick={addProductHandler}
                >
                  Add Product
                </Button>
                <Link to="/admin_side_products">
                  <Button
                    colorScheme="green"
                    style={{ margin: "1%", marginTop: "5%" }}
                  >
                    Back to Products
                  </Button>
                </Link>
              </div>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminSideAddProducts };
