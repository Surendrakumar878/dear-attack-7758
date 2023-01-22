import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { GiShoppingCart } from "react-icons/gi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../Redux/productsReducer/action";
import { useToast } from "@chakra-ui/react";


const ProductStelton = (props) => {
  const toast = useToast()
  const [count, setCount] = useState(1);
  const {carts,loading}=useSelector((store)=>store.productReducer);

  const dispatch=useDispatch()

  const {
    name,
    ImgSrc,
    _id,
    category,
    price,
    weight,
    sasta,
    isavailable,
    brand,
    qty,
    mrp,
  } = props;


  //   console.log(props);
  return (
    <div className="p-2 border shadow-lg hover:shadow-2xl">
      <p className=" shadow-xl text-end text-xs py-1 text-[#f93d30] font-semibold animate-pulse">
        GET 20% OFF 💥
      </p>
      <div className="flex flex-row gap-3 md:block">
        <Link to={`/products/${_id}`}>
          <div className="overflow-hidden">
            <img
              className="border-2 border-red-500 w-[210px] h-[180px] cursor-pointer hover:scale-110 duration-500"
              src={ImgSrc}
              alt=""
            />
          </div>
        </Link>
        <div>
          <p className="text-xs text-gray-500">Fresho</p>
          <p className="text-sm font-semibold text-gray-600 cursor-pointer mt-2">
            {name}
          </p>
          <select
            name=""
            id=""
            className="mt-3 cursor-pointer border-2 border-blue-100 outline-none w-full text-xs text-gray-500 px-1 font-semibold"
          >
            <option value="">{weight}</option>
            <option value="">1 Kg- Pack</option>
            <option value="">5 Kg- Pack</option>
          </select>
        </div>
      </div>
      <div className="bg-gray-100 py-2">
        <div className="px-2">
          <div>
            <p className="text-gray-500 text-[11px] mt-1">
              MRP:<span className="line-through">RS {mrp}</span>{" "}
              <span className="text-[13px] text-gray-600 font-semibold">
                RS {price}
              </span>{" "}
            </p>
          </div>
          <div className="text-[11px] flex gap-2">
            <div>
              {" "}
              <img
                className="w-[33px] h-[25px] cursor-pointer"
                src="https://www.bbassets.com/static/v2626/custPage/build/content/img/standard-del-gray.svg"
                alt=""
              />
            </div>
            <div>
              <p className="cursor-pointer">
                Standard Delivery: Tomorrow Evening
              </p>{" "}
            </div>
          </div>

          <div className="text-[11px] flex items-center gap-2">
            <div className="">
              {" "}
              <img
                className="w-[25px] h-[20px] cursor-pointer text-green-400"
                src="https://www.bbassets.com/static/v2627/custPage/build/content/img/express-del-gray.svg"
                alt=""
              />
            </div>
            <div>
              <p className="cursor-pointer">
                Express Delivery:{" "}
                <span className="text-red-600">Out of stock</span>
              </p>{" "}
            </div>
          </div>
        </div>

        {/* quantity and cart */}
        <div className="mt-2 px-2 flex items-center gap-3">
          <div className="flex gap-1 items-center text-sm">
            <button
              disabled={count <= 1}
              onClick={() => setCount(count - 1)}
              className="border bg-gray-400 px-1 text-[16px]"
            >
              <ChevronLeftIcon />{" "}
            </button>
            <h1 className="border bg-white px-3 py-1">{count}</h1>
            <button
              disabled={count >= 10}
              onClick={() => setCount(count + 1)}
              className="border bg-gray-400 px-1 text-[16px]"
            >
              <ChevronRightIcon />
            </button>
          </div>
          <div className="flex gap-1 items-center border px-[10px] rounded-md py-1 bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-gray-600">
            <h1 className="text-xs font-semibold" onClick={()=>{
              dispatch(addProductToCart(_id,count))
              .then(() => toast({
                title: 'Product Added!',
                description: "We've added your product.",
                status: 'success',
                duration: 2000,
                position: "top",
                isClosable: true,
            }))
              
            }} >ADD</h1>
            <h1 className="text-lg">
              <GiShoppingCart />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStelton;
