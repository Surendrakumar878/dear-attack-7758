import React from "react";

const ProductStelton = (props) => {
  const {
    name,
    ImgSrc,
    category,
    price,
    weight,
    sasta,
    isavailable,
    brand,
    qty,
    mrp
  } = props;
  console.log(props);
  return (
    <div className="p-2 border shadow-lg">
        <p className="border shadow-lg text-end text-xs py-1 text-[#f93d30] font-semibold animate-pulse">
            GET 20% OFF 💥
          </p>
        <div className="flex flex-row gap-3 md:block">
          <div className="">
            <img
              className="border-2 border-red-500 w-[210px] h-[180px]"
              src={ImgSrc}
              alt=""
            />
          </div>
          <div>
            <p className="text-xs text-gray-500">Fresho</p>
            <p className="text-sm font-semibold text-gray-600">{name}</p>
            <select name="" id="" className="mt-3 cursor-pointer border-2 border-blue-100 outline-none w-full text-xs text-gray-500 px-1 font-semibold">
            <option value="">2 Kg- RS 50</option>
            <option value="">1 Kg- RS 20</option>
            <option value="">5 Kg- RS 125</option>
          </select>
          </div>
          
        </div>

        <div className="bg-gray-200">
            <div className="px-2">
                <div>
                    <p className="text-gray-500 text-[11px] mt-1">MRP:<span className="line-through">RS {mrp}</span> <span className="text-[13px] text-gray-600 font-semibold">RS {price}</span> </p>
                </div>
                <div className="text-[11px] flex gap-2">
                    <div> <img className="w-[33px] h-[25px] cursor-pointer" src="https://www.bbassets.com/static/v2626/custPage/build/content/img/standard-del-gray.svg" alt="" /></div>
                    <div><p className="cursor-pointer">Standard Delivery: Tomorrow Evening</p> </div>
                </div>

                <div className="text-[11px] flex items-center gap-2">
                    <div> <img className="w-[33px] h-[25px] cursor-pointer hover:text-green-600" src="https://www.bbassets.com/static/v2627/custPage/build/content/img/express-del-gray.svg" alt="" /></div>
                    <div><p className="cursor-pointer">Express Delivery: Out of stock</p> </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default ProductStelton;
