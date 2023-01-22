import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Select,
  useToast,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getProductById,
  getProducts,
  updateProduct,
} from "../../Redux/adminReducer/action";
import "../AdminStyles/AdminSideProductEditPage.css";
import { AdminSideNavbar } from "./AdminSideNavbar";
import additem from "../AdminAssets/newgrocery.png";

const AdminSideProductEditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState(0);
  const [mrp, setMrp] = useState(0);
  const [category, setCategory] = useState("");
  const [ImgSrc, setImgSrc] = useState("");
  const [packet, setPacket] = useState("");
  const [sasta, setSasta] = useState("Har Din Sasta");
  const [offers, setOffers] = useState("");
  const [isavailable, setIsavailable] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const productItem = useSelector((store) => store.adminReducer.productItem);
  const toast = useToast();

  const updateAdminSideProduct = () => {
    const newProductItem = {
      brand,
      name,
      category,
      quantity,
      ImgSrc,
      mrp,
      price,
      sasta,
      packet,
      offers,
      weight,
      isavailable,
    };

    dispatch(updateProduct(id, newProductItem))
      .then(() =>
        toast({
          title: "Product updated!",
          description: "We've updated products for you.",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
          render: () => (
            <Box border="2px solid green" textAlign="center" borderRadius="10px" fontWeight="bolder" color="white" p={3} bg="blue.500" boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px">
              {`Product Successfully Updated !`}
            </Box>
          ),
        })
      )
      .then(() => {
        dispatch(getProducts());
        console.log(newProductItem);
      });
  };

  useEffect(() => {
    if (productItem.length === 0) {
      dispatch(getProductById(id));
    }
    if (productItem) {
      setBrand(productItem.brand);
      setCategory(productItem.category);
      setImgSrc(productItem.ImgSrc);
      setIsavailable(productItem.isavailable);
      setMrp(productItem.mrp);
      setName(productItem.name);
      setOffers(productItem.offers);
      setPacket(productItem.packet);
      setPrice(productItem.price);
      setQuantity(productItem.quantity);
      setSasta(productItem.sasta);
      setWeight(productItem.weight);
    }
    productItem.length = 0;
  }, [id, productItem, productItem.length, dispatch]);

  return (
    <div className="AdminSideProductEditContainer">
      <div className="admin_side_update_form_heading">
        Wondermart Product Edit Page
      </div>
      <div className="admin_side_form_box">
        <div>
          <AdminSideNavbar />
        </div>
        <div>
          <div className="adminSideProductEditBox">
            <FormControl
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "auto",
              }}
              className="parendFormBox"
            >
              <div className="productEditBox1">
                <FormLabel>Image</FormLabel>
                <Input
                  placeholder="Enter image url"
                  type={URL}
                  value={ImgSrc}
                  onChange={(e) => setImgSrc(e.target.value)}
                />

                <FormLabel>Engagement Text</FormLabel>
                <Input
                  placeholder="Enter text"
                  type={Text}
                  value={sasta}
                  onChange={(e) => setSasta(e.target.value)}
                />
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter name of the product"
                  value={name}
                  type={Text}
                  onChange={(e) => setName(e.target.value)}
                />

                <FormLabel>Weight</FormLabel>
                <Input
                  placeholder="Enter weight"
                  value={weight}
                  type={Text}
                  onChange={(e) => setWeight(e.target.value)}
                />

                <FormLabel>Price</FormLabel>
                <Input
                  placeholder="Enter price"
                  value={price}
                  type={Number}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />

                <FormLabel>MRP</FormLabel>
                <Input
                  placeholder="Enter MRP"
                  value={mrp}
                  type={Number}
                  onChange={(e) => setMrp(Number(e.target.value))}
                />

                <FormLabel>Offer</FormLabel>
                <Input
                  placeholder="Enter offer"
                  value={offers}
                  type={Text}
                  onChange={(e) => setOffers(e.target.value)}
                />

                <FormLabel>Packets</FormLabel>
                <Input
                  placeholder="Enter pc"
                  value={packet}
                  type={Text}
                  onChange={(e) => setPacket(e.target.value)}
                />
              </div>

              <div className="productEditBox2">
                <FormLabel>Brand</FormLabel>
                <Select
                  placeholder="Select option"
                  value={brand}
                  type={Text}
                  onChange={(e) => setBrand(e.target.value)}
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
                  value={isavailable}
                  type={Boolean}
                  onChange={(e) =>
                    setIsavailable(e.target.value === "true" ? true : false)
                  }
                >
                  <option value={true}>Available</option>
                  <option value={false}>Not Available</option>
                </Select>

                <FormLabel>Quantity</FormLabel>
                <Select
                  placeholder="Select option"
                  value={quantity}
                  type={Number}
                  onChange={(e) => setQuantity(Number(e.target.value))}
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
                  value={category}
                  type={Text}
                  onChange={(e) => setCategory(e.target.value)}
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
                  colorScheme="blue"
                  style={{ margin: "1%", marginTop: "5%" }}
                  onClick={updateAdminSideProduct}
                >
                  Update Product
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

export { AdminSideProductEditPage };
