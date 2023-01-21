import { ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";


import ProductStelton from "./productStelton";
import "../App.css";

const data = [
  "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP8606-1200X300-5thDEC22.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP8603-1200X300-5thDEC22.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP8600-1200X300-5thDEC22.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP8597-1200X300-5thDEC22.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP8594-1200X300-5thDEC22.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP10934-1200X300-30thDEC22.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP10931-1200X300-30thDEC22.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP10928-1200X300-30thDEC22.jpg",
];

const test=[
  {
    "brand": "Milky Mist",
    "quantity": 1,
    "name": "Paneer - Excellent Source Of Vitamins, Calcium",
    "weight": "500 g - Pouch",
    "category": "bakery",
    "price": 247,
    "isavailable":false,
    "mrp": 290,
    "sasta": "Har Din Sasta!",
    "ImgSrc": "https://static.wixstatic.com/media/f0fada_5783894a8e794b36a062fbb384a0f590~mv2.jpg/v1/fill/w_1466,h_1099,q_90/f0fada_5783894a8e794b36a062fbb384a0f590~mv2.webp"
},
{
    "brand": "Amul",
    "quantity": 1,
    "name": "Butter - Pasteurised",
    "weight": "3x100 g - Multipack",
    "category": "bakery",
    "price": 154.35,
    "isavailable":true,
    "mrp": 162,
    "offers": "₹8 OFF",
    "ImgSrc": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcmyQ3JS_dyzt39Jd6ID_kh3jEFQwkIXU-CTwCXbJ-XXCFERLv_MYj7-HjHWyn-WNMGuJYkQtEqXaXBRsa4a3WxzjMQwkSIcNj6SzhSuefMMsl7yL57w_L&usqp=CAE"
},
{
    "brand": "Milky Mist",
    "quantity": 1,
    "name": "Cooking Butter - Unsalted",
    "weight": "2x500 g - Multipack",
    "category": "bakery",
    "price": 578,
    "isavailable":true,
    "mrp": 700,
    "ImgSrc": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBzC9e-UvVUp4F_Mh35a5zlp3rPzfJOSxxDB3d0URDqUnkpgGQ6opbYiHFeuRwdlXqlYA9Sxmi_h3dLCSC67bkqpzmjbxNn9Ygy3OmpLC3NcQ-1w5lJDXY&usqp=CAE"
},
{
    "brand": "Nandini",
    "quantity": 1,
    "name": "GoodLife UHT Treated Toned Milk",
    "category": "bakery",
    "price": 57.5,
    "isavailable":true,
    "mrp": 62,
    "sasta": "Har Din Sasta!",
    "packet": "1 L - Carton",
    "ImgSrc": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1LlnKEKqEhb3rsFQ01y9jC0EiovMwUm78FwVV7U9E9XltodYXpWKLI0xVrPhN4HxsLreVlUiiA6Ee-qfJeyfpdcaiapvY5E_AuF0wajgZtRlhkyJLq3M5Ig&usqp=CAE"
},
{
    "brand": "Amul",
    "quantity": 1,
    "name": "Taaza Fresh Toned Milk",
    "weight": "12x200 ml - Multipack",
    "category": "bakery",
    "price": 188.16,
    "isavailable":true,
    "mrp": 192,
    "offers": "₹4 OFF",
    "ImgSrc": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjfTfan34ZdR6z2JviJ9ziEe656kRpkRXUXU2E-_H1_UsmhICSLY-aH7ECKR74SeIwcc4xdMiA4Bilc-lsN5E0Sw5Hr5HE2wpfxq1tFMWhVcFXEPaqgfYR&usqp=CAE"
},
{
    "brand": "Britannia",
    "quantity": 1,
    "name": "Treat Croissant - Cocoa Creme Filling, 100% Veg, Soft",
    "weight": "6x45 g - Multipack",
    "category": "bakery",
    "price": 90,
    "isavailable":false,
    "mrp": 120,
    "ImgSrc": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTsKJc_4V2MdCyUwEMNHF--2wPCgzylEJAw7z0WeirTMNHOhl52i8z_UW810jhefrn4B1CmqDzEXyGju0qya4RiS0HMdyCI7aacG-qdEs&usqp=CAE"
},
{
    "quantity": 1,
    "name": "Lactose Free Milk",
    "weight": "6x250 ml - Multipack",
    "category": "bakery",
    "price": 147,
    "isavailable":true,
    "mrp": 150,
    "offers": "₹3 OFF",
    "ImgSrc": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxm5TO5ykY6qH9Iw2L3nuC-7MTXvXg1m26u-XngPqad7YByIU5wPp8FQ-2OgUoFCPnsNdAe4oZPWLiAsoZOXCnHLyoUrz1ZfN2nmXAOV6rTo65VZIV1lWvyQ&usqp=CAE"
},
{
    "brand": "Milky Mist",
    "quantity": 1,
    "name": "Farm Fresh Curd - No Preservatives",
    "weight": "2x1 kg - Multipack",
    "category": "bakery",
    "price": 175.99,
    "isavailable":true,
    "mrp": 270,
    "ImgSrc": "https://www.bigbasket.com/media/uploads/p/l/40004532_8-mother-dairy-dahi-made-from-toned-milk.jpg"
},
{
    "brand": "Britannia",
    "quantity": 1,
    "name": "Treat Croissant - Vanilla Creme Filling, 100% Veg, Soft",
    "weight": "6x45 g - Multipack",
    "category": "bakery",
    "price": 96,
    "isavailable":true,
    "mrp": 120,
    "ImgSrc": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqFAfM5NQIRfqUDJhjTLrM-xBx2poNZ-dqhlVjSwSLLH5oNVv9koLsLXtg1xbuwz5FnIT0Rq7xR2-4DARIpgUUYSTgz3o-aResm9qhofXrTfajssV0IjhN&usqp=CAE"
},
{
    "brand": "Fresho",
    "quantity": 1,
    "name": "Sandwich Bread - Safe, Preservative Free",
    "weight": "200 g",
    "category": "bakery",
    "price": 32,
    "ImgSrc": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0_VGv_4TC8B_h5H1Z-Sn-28-dNbV0k0dWZHf6LhmV9rqr9LoRvInnc6BzmjpmtI8_N2sRIJPtIomS7TIURtVdMDezk9rDmZz4rqcLJfyDDMGa6VHjIerJvg&usqp=CAE"
},
{
    "brand": "iD Fresho",
    "quantity": 1,
    "name": "Malabar Parota\/Paratha - No Added Preservatives",
    "weight": "400 g - (5 pcs)",
    "category": "bakery",
    "price": 90,
    "ImgSrc": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPinvSXf3vHq_pwyaX4Djfi7XsZ5DGztkYFRb6OGiNDgzGwArZCYwjD8OG_oK_1_5DvPPFcrAsz9ksC8G4-cES3vr5_Q7gwYyMYrQiikVA&usqp=CAE"
}
]

const Products = () => {

  
  return (
    <div className="w-full">
      <div className="w-[100%] md:w-[100%] lg:w-[80%] mx-auto mt-5">
        <div className="px-2">
          <Breadcrumb
            spacing="3px"
            separator={<ChevronRightIcon color="gray.500" />}
            className="text-xs md:text-sm text-gray-500"
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className=" hover:text-green-600">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink className="hover:text-green-600" href="#">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="shadow-md mt-6 px-4">
          <Slider
            arrows={false}
            dots
            infinite
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
          >
            {data.map((e) => (
              <div key={e}>
                <img src={e} className="w-full" alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-10">
          <img
            className="w-full"
            src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg"
            alt=""
          />
        </div>

        {/* main section */}
        <div className="flex mt-8">
          {/* category section */}
          <div className="border-r-2 hidden md:block md:w-1/5 mb-10">
            <div>
              {/* cat filter */}
              <div className="mt-5 mx-2 border-b-2">
                <h1 className="text-sm md:text-lg text-gray-500 border-b-2 border-solid w-20 border-[#84c225]">
                  Category
                </h1>
              </div>
              <div className="px-3 mt-1 text-xs md:text-sm text-gray-500">
                <p className="cursor-pointer hover:text-green-600">
                  Fruits & Vegetables
                </p>
                <p className="cursor-pointer hover:text-green-600">
                  Beauty & Hygiene
                </p>
                <p className="cursor-pointer hover:text-green-600">
                  Bakery,Cakes & Dairy
                </p>
                <p className="cursor-pointer hover:text-green-600">
                  Non Vegeterian
                </p>
              </div>
            </div>

            {/* brand filter */}
            <div className="mx-2">
              <div className="mt-3 border-b-2">
                <h1 className="text-sm md:text-lg border-b-2 border-solid w-14 text-gray-500 border-[#84c225]">
                  Brand
                </h1>
              </div>
              <div className="border flex items-center justify-between px-2 border-gray-300 mt-1  py-1 md:text-xs lg:text-sm w-[100%]">
                <input
                  className="outline-none text-gray-500 "
                  type="text"
                  placeholder="Search by Brand"
                />
                <Search2Icon
                  textColor="gray.500"
                  className="cursor-pointer md:invisible lg:visible"
                />
              </div>
              <div className="">
                <div className="px-1 mt-1 text-xs lg:text-sm text-gray-500 overflow-y-scroll">
                  <div className="text-sm flex items-center gap-2 mt-2">
                    <input
                      className="w-[15px] h-[15px] block border-[solid_white]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">bb Combo</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Fresho</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Tadaa</label>
                  </div>
                </div>
              </div>
            </div>

            {/* country of origin */}
            <div className="mx-2">
              <div className="mt-3 border-b-2">
                <h1 className="text-sm text-gray-500 md:text-sm lg:text-lg border-b-2 w-36 border-solid border-[#84c225]">
                  Country Of Origin
                </h1>
              </div>
              <div className="border flex items-center justify-between px-2 border-gray-300 mt-1  py-1 md:text-xs lg:text-sm w-[100%]">
                <div>
                  <input
                    className="outline-none text-gray-500"
                    type="text"
                    placeholder="Search by Origin"
                  />
                </div>
                <div>
                  <Search2Icon
                    textColor="gray.500"
                    className="cursor-pointer md:invisible lg:visible"
                  />
                </div>
              </div>
              <div className="">
                <div className="px-1 mt-1 text-xs lg:text-sm text-gray-500">
                  <div className="text-sm flex items-center gap-2 mt-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Australia</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">China</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Greece</label>
                  </div>
                  <div className="text-sm flex items-center gap-2 ">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">India</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Italy</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">South Africa</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Spain</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Thailand</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Iran</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">USA</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Egypt</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Peru</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">New Zealand</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Turkey</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Chile</label>
                  </div>
                </div>
              </div>
            </div>

            {/* discount */}
            <div className="mx-2">
              <div className="mt-3 border-b-2">
                <h1 className="text-sm text-gray-500 md:text-lg border-b-2 border-solid w-20 border-[#84c225]">
                Discount
                </h1>
              </div>
              <div className="">
                <div className="px-1 mt-1 text-xs lg:text-sm text-gray-500">
                  <div className="text-sm flex items-center gap-2 mt-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Upto 5% (1)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">10% - 15% (1)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">15% - 25% (206)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">More than 25% (32)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Rs 201 to Rs 500 (23)</label>
                  </div>
                </div>
              </div>
            </div>
            {/* price */}
            <div className="mx-2">
              <div className="mt-3 border-b-2">
                <h1 className="text-sm md:text-lg border-b-2 border-solid text-gray-500 w-14 border-[#84c225]">
                Price
                </h1>
              </div>
              <div className="">
                <div className="px-1 mt-1 text-xs lg:text-sm text-gray-500">
                  <div className="text-sm flex items-center gap-2 mt-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Less than Rs 20 (29)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Rs 21 to Rs 50 (78)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Rs 51 to Rs 100 (62)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Rs 101 to Rs 200 (51)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">Rs 201 to Rs 500 (23)</label>
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <input
                      className="w-[15px] h-[15px]"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <label htmlFor="">More than Rs 501 (3)</label>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* products sections */}
          <div className="w-[96%] mx-auto md:w-4/5 px-4">
            <div className="flex justify-between items-center mt-4">
              <div>
                <h1 className="text-xs md:text-2xl text-gray-600">
                  Fruits & Vegetables (253)
                </h1>
              </div>

              <div>
                <select
                  name=""
                  id=""
                  className="w-[80px] md:w-min border-2 text-xs md:text-sm text-gray-600 hover:border-green-300 cursor-pointer"
                >
                  <option value="">Popularity</option>
                  <option value="">Price-Low to High</option>
                  <option value="">Price-High to Low</option>
                  <option value="">Alphabatical</option>
                  <option value="">Rupee Saving-High to Low</option>
                  <option value="">Rupee Saving-Low to High</option>
                  <option value="">% off-High to Low</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 border-b-2">
              <div className="">
                <img
                  className="w-[25px] h-[20px]"
                  src="https://www.bbassets.com/static/v2627/custPage/build/content/img/standard-del.svg"
                  alt=""
                />
              </div>
              <div className="border-b-2 border-[#84c225]">
                <h1 className="text-sm font-semibold text-gray-600 hover:font-bold cursor-pointer">
                  ALL PRODUCTS
                </h1>
              </div>
            </div>

            {/* individual products */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
                {
                  test.map((e,i)=>(
                    <ProductStelton
                    key={i}
                    brand={e.brand}
                    qty={e.quantity} name={e.name} weight={e.weight} category={e.category}
                    price={e.price} mrp={e.mrp} ImgSrc={e.ImgSrc} sasta={e.sasta} isavailable={e.isavailable}
                    />
                  ))
                }
            </div>
            <h1 className="text-center mt-3 text-gray-500">--That's all folks--</h1>
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[80%] mx-auto bg-gray-200 py-4 mt-5 shadow-xl px-4 ">
        <div className="text-gray-600">
          <h1 className="text-xl">Buy Fruits and Vegetables Online</h1>
          <p className="mt-2 text-sm md:text-md leading-6">While fresh vegetables should be a part of your everyday meals, some vegetables are hard to find even in the huge supermarkets in your area. However, the luxury of online shopping offers customers the comfort of relishing these veggies by ordering them from the comfort of their home. While beetroot, amlas, green peas, broccoli can easily be found in the market, bigbasket makes grocery shopping easier for you with their fresh produce delivered in top class packages right at your doorstep. With their wide delivery network, geographical barriers are easily overcome in more than 25 major cities, thereby giving you the benefit of fresh fruits and vegetables every time.</p>
        </div>

        <div className="text-gray-600 mt-4">
          <h1 className="text-xl">Fruits and Vegetables</h1>
          <p className="mt-2 text-sm md:text-md leading-6">Fruits and vegetables form the base of everybody’s daily food consumption. However, not everyone has access to fresh and healthy vegetables and fruits due to various reasons. Starting from farming methods that involve toxicants to storage systems and logistics, many sellers land up with rotten raw foods or foods exposed to chemicals and other radicals. Bigbasket has now turned the scene around with its online shopping store, where you can have fresh potato, tomato, carrots, onions and everything else on your grocery list, delivered to your doorstep, even without stepping out of your house. Apart from your regular local produce, you can also shop for other seasonal produces such as asparagus, broccoli, drumstick, white onion and more on bigbasket’s online store. Packaging plays a vital role in up keeping the freshness of your fruits and vegetables. Green leafy vegetables are prone to spoilage easily if not handled properly. While ordering online in bigbasket, worries about packaging and hygiene can be kept at bay. Be it your lettuce, cauliflower or any green vegetable, the packaging standard is specific and of high quality. You can find a whole wide range of vegetables such as red cabbage, drumstick leaves and different exotic ones as well on bigbasket. Apart from quality, we also believe in making fresh foods available to all and thus, you can find very nominal pricing while shopping online with us. Comapre the onion price or potato price with anywhere else in the market, and you will understand what we are talking about. Quality is uncompromised regardless of the type of delivery that you choose, standard or express. The produce delivered to you will be as fresh as directly cultivated from the farms resulting in high levels of nutrition. You no more have to walk through aisles of piled up produce and spend time carefully picking out each vegetable or fruit from them. We will take care of the entire process for you. We at bigbasket, cautiously pick your produce, meticulously clean them and pack them using the best packaging material available before delivering them to you. Shop for your vegetables and fruits online now from the comfort of your couch and have your order delivered to your doorstep within a stipulated time. Look out for great deals, offers and value packs while shopping online with us. Save time, money and efforts, by completing your routine grocery shopping on bigbasket.</p>
        </div>

        <div className="text-gray-600 mt-4">
          <h1 className="text-xl">Freshness- the promise of quality</h1>
          <p className="mt-2 text-sm md:text-md leading-6">The freshness of the produce being delivered to you is unquestionable, even in the case of standard delivery. Veggies like banana stem and banana flower, which are used in exotic dishes, are fresh and readily available to buy online at bigbasket. Vegetables like mushrooms and sprouts, which are prone to quick spoilage are also packed with utmost care using the best materials. Variety of vegetables such as button mushrooms, raw banana and yellow zucchini are also available. With the demand for organic produce continuously rising, bigbasket has made them readily accessible. You can shop for organic bananas online on the site too. All these fruits and vegitables are brought from verified and reputed vendors, giving no room to worry about quality. Striving to sustain the nutritive benefits of the vegetables and fruits, bigbasket takes its packaging very seriously and abides by a very strict packing standard. With a whole lot of groceries to shop for and the luxury of at-home shopping, bigbasket brings convenience to your grocery shopping experience with regard to time, delivery, cost and quality. bigbasket offers a range of prominent products that are well received by customers. “Zespri” is one such well-known brand that is available to shop for online. For those looking out for organic products only, bigbasket stocks products by TVS Organic too. Make bigbasket your prime choice to buy fruits and vegetables online.</p>
        </div>

        <div className="text-gray-600 mt-4">
          <h1 className="text-2xl">Delivery in Major Cities</h1>
          <p className="mt-2 text-sm md:text-md leading-6">We at bigbasket choose our produce with as much care as you do. Carefully sorted, meticulously cleaned and carefully packed, fruits and vegetables from our online store reach you the day you order them. bigbasket offers delivery in Chennai, delivery in Delhi and most other major cities in India.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
