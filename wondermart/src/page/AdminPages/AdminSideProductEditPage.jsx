import { FormControl, FormLabel, Button, Input, Select } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../AdminStyles/AdminSideProductEditPage.css";
import { AdminSideNavbar } from "./AdminSideNavbar";

const AdminSideProductEditPage = () => {
    return (
        <div className="AdminSideProductEditContainer">
            <div className="admin_side_update_form_heading">Wondermart Product Edit Page</div>
            <div className="admin_side_form_box">
                <div>
                    <AdminSideNavbar />
                </div>
                <div>
                    <div className="adminSideProductEditBox">
                        <FormControl style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: "100%",
                            margin: "auto"
                        }} className="parendFormBox">
                            <div className="productEditBox1">
                                <FormLabel>Image</FormLabel>
                                <Input
                                    placeholder='Enter image url'
                                    type="url"
                                />

                                <FormLabel>Engagement Text</FormLabel>
                                <Input
                                    placeholder='Enter text'
                                    type="text"
                                />
                                <FormLabel>Name</FormLabel>
                                <Input placeholder='Enter name of the product' />

                                <FormLabel>Weight</FormLabel>
                                <Input placeholder='Enter weight' />

                                <FormLabel>Price</FormLabel>
                                <Input placeholder='Enter price' />

                                <FormLabel>MRP</FormLabel>
                                <Input placeholder='Enter MRP' />

                                <FormLabel>Offer</FormLabel>
                                <Input placeholder='Enter offer' />

                                <FormLabel>Packets</FormLabel>
                                <Input placeholder='Enter pc' />
                            </div>

                            <div className="productEditBox2">
                                <FormLabel>Brand</FormLabel>
                                <Select placeholder='Select option'>
                                    <option value='Fresho'>Fresho</option>
                                    <option value='Ocean Secret'>Ocean Secret</option>
                                    <option value='ABHI EGGS'>ABHI EGGS</option>
                                    <option value='Milky Mist'>Milky Mist</option>
                                    <option value='Amul'>Amul</option>
                                    <option value='Nandini'>Nandini</option>
                                    <option value='Britannia'>Britannia</option>
                                    <option value='Gillette'>Gillette</option>
                                    <option value='Margo'>Margo</option>
                                    <option value='Vaseline'>Vaseline</option>
                                    <option value='Oral-B'>Oral-B</option>
                                    <option value='Prasuma'>Prasuma</option>
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
                                <Select placeholder='Select option'>
                                    <option value={true}>Available</option>
                                    <option value={false}>Not Available</option>
                                </Select>

                                <FormLabel>Quantity</FormLabel>
                                <Select placeholder='Select option'>
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
                                <Select placeholder='Select option'>
                                    <option value='beauty'>Beauty</option>
                                    <option value='bakery'>Bakery</option>
                                    <option value='nonveg'>Non-veg</option>
                                    <option value='vegetable'>Vegetable</option>
                                </Select>

                                <Button colorScheme="blue" style={{ margin: "1%", marginTop: "5%" }}>Update Product</Button>
                                <Link to="/admin_side_products"><Button colorScheme="green" style={{ margin: "1%", marginTop: "5%" }}>Back</Button></Link>
                            </div>

                        </FormControl>
                    </div>
                </div>
            </div>

        </div>
    );
};

export { AdminSideProductEditPage };