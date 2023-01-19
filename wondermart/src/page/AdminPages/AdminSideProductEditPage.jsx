import { FormControl, FormLabel, HStack, Input, Radio, RadioGroup, Select } from "@chakra-ui/react";
import React from "react";
import "../../Components/AdminStyles/AdminSideProductEditPage.css";

const AdminSideProductEditPage = () => {
    return (
        <div className="AdminSideProductEditContainer">
            <h5>Product Edit Page</h5>
            <div className="adminSideProductEditBox">
                <FormControl style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    width: "50%",
                    margin: "auto"
                }}>
                    <div className="productEditBox1">
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
                            <option value='beauty'>Beauty</option>
                            <option value='bakery'>Bakery</option>
                            <option value='nonveg'>Non-veg</option>
                            <option value='vegetable'>Vegetable</option>
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
                    </div>

                </FormControl>
            </div>
        </div>
    );
};

export { AdminSideProductEditPage };