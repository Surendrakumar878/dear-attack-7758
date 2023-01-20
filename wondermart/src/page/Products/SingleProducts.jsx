import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import React, { useState } from "react";

const SingleProducts = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="w-[100%]">
      <div className="w-[100%] md:w-[80%] mx-auto border-2 border-red-500 flex mt-5">
        {/* category section */}
        <div className="w-1/5 border-2 border-black h-[600px] hidden md:block">
          <div>
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
          {/* brand section */}
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
        </div>
        {/* products details */}
        <div className="w-[100%] md:w-4/5 border-2 border-green-500 h-[500px] flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[50%] border-4 border-blue-800 h-auto">
            <img
              className="w-[380px] h-[300px] md:h-full md:w-full px-2"
              src="https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg"
              alt=""
            />
          </div>

          <div className="w-[100%] md:w-[50%] border-4 border-yellow-600">
            <div className="px-3 py-2">
              <p className="text-xs border-b-2 w-[38px] border-gray-600 hover:border hover:scale-105 duration-300 cursor-pointer origin-right">
                Fresho
              </p>
              <h1 className="mt-1">Fresho Onion, 2 kg</h1>
              <p className="text-[10px] text-gray-500 mt-2 font-semibold">
                MRP: <span className=" line-through">Rs 77.25</span>
              </p>
              <p className="text-sm font-bold text-gray-700">
                Price:Rs 50{" "}
                <span className="text-[10px] font-semibold">(Rs.25/kg)</span>
              </p>
              <p className="text-xs font-semibold text-red-400">You Save:35%</p>
              <p className="text-[10px] font-semibold text-gray-400">
                (Inclusive of all taxes)
              </p>

              {/* add to cart btn */}
              <div className="flex gap-2 text-gray-500 items-center">
                <div className="flex gap-2 text-center">
                  <button
                    disabled={count <= 1}
                    onClick={() => setCount(count - 1)}
                    className="border-[1px] border-gray-300 px-3 py-2 rounded-md hover:shadow-xl"
                  >
                    -
                  </button>
                  <input
                    className="w-[22px] text-center outline-none font-bold"
                    type="text"
                    value={count}
                  />
                  <button
                    disabled={count >= 10}
                    onClick={() => setCount(count + 1)}
                    className="border-[1px] border-gray-300 px-3 py-2 rounded-md hover:shadow-xl"
                  >
                    +
                  </button>
                </div>

                <div className="border-2 border-[#84c225] px-3 py-2 rounded-md bg-[#84c225] hover:shadow-xl md:shadow-[#84c225]">
                  <button className="text-xs md:text-sm text-white font-bold">
                    ADD TO BASKET
                  </button>
                </div>
                <div className="border-[1px] border-gray-500 px-3 py-2 rounded-md hover:shadow-xl">
                  <button className="text-xs md:text-sm ">SAVE</button>
                </div>
              </div>

              <div className="text-[11px] flex items-center gap-2 mt-4">
                <div>
                  {" "}
                  <img
                    className="w-[24px] h-[16px] cursor-pointer"
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12'%3E%3Cg fill='%238F8F8F' fill-rule='evenodd'%3E%3Cpath d='M16.369 6.024h-2.044c-.11 0-.198-.072-.198-.161V4.97c0-.09.089-.161.198-.161h1.432a.21.21 0 01.174.083l.611.892c.074.107-.022.239-.173.239m1.358.165l-1.273-1.857a.42.42 0 00-.346-.165H13.73c-.219 0-.397.144-.397.321v1.857c0 .178.178.322.397.322h3.65c.303 0 .494-.264.347-.478'/%3E%3Cpath d='M18.8 9.11c0 .097-.086.175-.19.175h-.71a.189.189 0 01-.183-.13c-.251-.817-1.07-1.418-2.039-1.418-.968 0-1.787.6-2.038 1.418a.189.189 0 01-.183.13h-.937c-.104 0-.189-.078-.189-.174V3.189c0-.096.085-.174.19-.174h3.98c.068 0 .13.034.164.088l2.11 3.451a.163.163 0 01.024.085v2.472zm-3.122 1.826c-.752 0-1.361-.56-1.361-1.251 0-.692.61-1.252 1.361-1.252.753 0 1.362.56 1.362 1.252 0 .69-.61 1.251-1.362 1.251zm-4.18-1.825c0 .096-.084.174-.188.174H5.52a.19.19 0 01-.182-.127c-.263-.8-1.072-1.386-2.028-1.386s-1.766.585-2.028 1.386a.19.19 0 01-.182.127h-.08c-.104 0-.189-.078-.189-.174V.939c0-.096.085-.174.19-.174H11.31c.104 0 .189.078.189.174V9.11zM3.31 10.97c-.752 0-1.362-.56-1.362-1.252 0-.691.61-1.252 1.362-1.252.752 0 1.361.56 1.361 1.252s-.61 1.252-1.361 1.252zm16.197-4.639l-2.345-3.835a.385.385 0 00-.33-.178H12.52c-.104 0-.189-.078-.189-.174V.348c0-.192-.17-.348-.378-.348H.378C.17 0 0 .156 0 .348v9.354c0 .192.17.348.378.348h.69c.09 0 .164.056.185.135.228.85 1.063 1.482 2.057 1.482.993 0 1.828-.632 2.056-1.482a.188.188 0 01.184-.135h7.897c.087 0 .162.055.184.132.24.833 1.066 1.45 2.047 1.45.981 0 1.808-.617 2.048-1.45a.188.188 0 01.184-.132h1.267c.21 0 .379-.156.379-.348v-3.2a.326.326 0 00-.049-.17z'/%3E%3C/g%3E%3C/svg%3E"
                    alt=""
                  />
                </div>
                <div>
                  <p className="cursor-pointer text-[10px]  text-gray-500">
                    Standard Delivery: Tomorrow Morning
                  </p>{" "}
                </div>
              </div>
              {/* cards */}
              <div>
                <div className="flex justify-between items-center mt-5 text-xs text-gray-500 bg-[#e6f3d3] rounded-md h-[60px]  font-semibold hover:shadow-md">
                  <div className="px-2"> <p className="text-gray-600">2 kg</p> </div>
                  <div className="flex gap-3">
                    <p>Rs 50</p>
                    <p className="line-through">MRP Rs 77.5</p>
                    <p className="text-red-500">35% Off</p>
                  </div>
                  <div className="w-[10%] h-[60px] justify-center items-center flex text-white bg-[#84c225] rounded-tr-md rounded-br-md ">
                    <h1 className=""><CheckIcon fontSize={"xl"}/></h1>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500 bg-gray-200 rounded-md h-[60px]  font-semibold hover:shadow-md">
                  <div className="px-2"> <p className="text-gray-600">2 kg</p> </div>
                  <div className="flex gap-3">
                    <p>Rs 50</p>
                    <p className="line-through">MRP Rs 77.5</p>
                    <p className="text-red-500">35% Off</p>
                  </div>
                  <div className="w-[10%] h-[60px] justify-center items-center flex text-white bg-[#84c225] rounded-tr-md rounded-br-md">
                    <h1 className=""><CheckIcon fontSize={"xl"}/></h1>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500 rounded-md h-[60px] bg-gray-100  font-semibold hover:shadow-md">
                  <div className="px-2"> <p className="text-gray-600">2 kg</p> </div>
                  <div className="flex gap-3">
                    <p>Rs 50</p>
                    <p className="line-through">MRP Rs 77.5</p>
                    <p className="text-red-500">35% Off</p>
                  </div>
                  <div className="w-[10%] h-[60px] justify-center items-center flex text-white bg-[#84c225] rounded-tr-md rounded-br-md">
                    <h1 className=""><CheckIcon fontSize={"xl"}/></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
