import { ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "../App.css";

const txt = [
  "Onion",
  "Fresh",
  "Leafy",
  "Meal",
  "diet",
  "veggies",
  "Vitamin",
  "Apple",
];
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

const Products = () => {
  return (
    <div className="w-full">
      <div className="w-[100%] md:w-[100%] lg:w-[80%] mx-auto border border-red-500 mt-5">
        <div>
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
          <div className="border border-red-500 block  md:w-1/5">
            <div>
                {/* cat filter */}
              <div className="mt-5 mx-2 border-b-2">
                <h1 className="text-sm md:text-lg border-b-2 border-solid w-20 border-[#84c225]">Category</h1>
              </div>
              <div className="px-3 mt-1 text-xs md:text-sm text-gray-500">
                <p className="cursor-pointer hover:text-green-600">Fruits & Vegetables</p>
                <p className="cursor-pointer hover:text-green-600">Beauty & Hygiene</p>
                <p className="cursor-pointer hover:text-green-600">Bakery,Cakes & Dairy</p>
                <p className="cursor-pointer hover:text-green-600">Non Vegeterian</p>
              </div>
            </div>

            {/* brand filter */}
            <div className="mx-2">
            <div className="mt-3 border-b-2">
                <h1 className="text-sm md:text-lg border-b-2 border-solid w-14 border-[#84c225]">Brand</h1>
              </div>
              <div className="border border-gray-300 mt-1 px-0 md:px-2 py-1 text-xs md:text-sm w-[90%]">
                <input className="outline-none" type="text" placeholder="Search by Brand" />
                <Search2Icon textColor="gray.500" className="cursor-pointer" />
              </div>
              <div className="">
              <div className="px-1 mt-1 text-xs md:text-sm text-gray-500 overflow-y-scroll">
                <div className="text-sm flex items-center gap-2 mt-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">bb Combo</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Fresho</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Tadaa</label>
                </div>
              </div>
              </div>
            </div>

            {/* country of origin */}
            <div className="mx-2">
            <div className="mt-3 border-b-2">
                <h1 className="text-sm md:text-lg border-b-2 w-36 border-solid border-[#84c225]">Country Of Origin</h1>
              </div>
              <div className="border border-gray-300 mt-1 px-2 py-1 text-sm w-[90%]">
                <input className="outline-none" type="text" placeholder="Search by Origin" />
                <Search2Icon textColor="gray.500" className="cursor-pointer" />
              </div>
              <div className="">
              <div className="px-1 mt-1 text-xs md:text-sm text-gray-500">
                <div className="text-sm flex items-center gap-2 mt-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Australia</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">China</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Greece</label>
                </div>
                <div className="text-sm flex items-center gap-2 ">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">India</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Italy</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">South Africa</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Spain</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Thailand</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Iran</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">USA</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Egypt</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Peru</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">New Zealand</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Turkey</label>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <input className="w-[15px] h-[15px]" type="checkbox" value='' name="" />
                    <label htmlFor="">Chile</label>
                </div>
              </div>
              </div>
            </div>


          </div>

          {/* products sections */}
          <div className="border border-black w-[96%] mx-auto md:w-4/5 h-[100vh] px-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
