import {
  AddIcon,
  CheckIcon,
  ChevronRightIcon,
  MinusIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import ReactImageMagnify from "react-image-magnify";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, getSingleProduct } from "../../Redux/productsReducer/action";
import { useToast } from "@chakra-ui/react";


const SingleProducts = () => {
  const toast = useToast()
  const { id } = useParams();
  console.log(id,"single")
  
  const {singleData  }=useSelector((store)=>store.productReducer)
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  useEffect(()=>{
    dispatch(getSingleProduct(id))
  },[dispatch])

  

  console.log(singleData.name);

  return (
    <div className="w-[100%]">
      {/* top section */}
      <div className="w-[100%] px-2 md:w-[100%] lg:w-[80%] mx-auto mt-5 border-t-2 py-2 flex justify-between items-center">
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
              <BreadcrumbLink className="hover:text-green-600" href="/products">
                {singleData.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:text-green-600" href="">
              {singleData.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        {/* social tag */}
        <div className="flex gap-2 font-sans text-gray-500 text-xs">
          <p>Share on</p>
          <img
          className="cursor-pointer"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20'%3E %3Cg fill='none' fill-rule='nonzero' transform='translate(.5)'%3E %3Ccircle cx='9.929' cy='9.929' r='9.929' fill='%233B5998'/%3E %3Cpath fill='%23FFF' d='M12.425 10.318h-1.772v6.49H7.97v-6.49H6.692V8.036H7.97V6.56c0-1.055.501-2.708 2.708-2.708l1.988.008v2.214h-1.442c-.237 0-.57.119-.57.622V8.04h2.006l-.234 2.279z'/%3E %3C/g%3E %3C/svg%3E"
            alt=""
          />
          <img
          className="cursor-pointer"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20'%3E %3Cg fill='none' fill-rule='nonzero' transform='translate(.528)'%3E %3Ccircle cx='9.929' cy='9.929' r='9.929' fill='%2355ACEE'/%3E %3Cpath fill='%23F1F2F2' d='M16.01 7.136a4.735 4.735 0 0 1-1.362.373 2.38 2.38 0 0 0 1.043-1.313c-.458.272-.966.47-1.507.576a2.374 2.374 0 0 0-4.044 2.165 6.737 6.737 0 0 1-4.892-2.48 2.373 2.373 0 0 0 .734 3.169 2.357 2.357 0 0 1-1.074-.298v.03c0 1.15.818 2.11 1.903 2.327a2.365 2.365 0 0 1-1.071.041 2.376 2.376 0 0 0 2.217 1.649 4.762 4.762 0 0 1-3.514.982 6.713 6.713 0 0 0 3.638 1.067c4.365 0 6.752-3.617 6.752-6.753 0-.103-.002-.206-.007-.307a4.813 4.813 0 0 0 1.185-1.228z'/%3E %3C/g%3E %3C/svg%3E"
            alt=""
          />
          <img
          className="cursor-pointer"
            src="data:image/svg+xml,%3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3Egoogle-plus%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpolygon id='path-1' points='0.00015 -5e-05 12 -5e-05 12 7.7524 0.00015 7.7524'%3E%3C/polygon%3E %3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='7_404_-pd-page' transform='translate(-1265.000000, -139.000000)'%3E %3Cg id='Social-media' transform='translate(1174.000000, 139.000000)'%3E %3Cg id='google-plus' transform='translate(91.014205, 0.000000)'%3E %3Cellipse id='XMLID_30_' fill='%23BA5252' fill-rule='nonzero' cx='9.92884956' cy='10.0170175' rx='9.92884956' ry='9.84175439'%3E%3C/ellipse%3E %3Cg id='Group-3' transform='translate(3.985795, 6.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cg id='Clip-2'%3E%3C/g%3E %3Cpath d='M0.55565,7.08095 L0.55565,1.37445 C0.55565,1.28595 0.65115,1.23045 0.72815,1.27345 L5.96265,4.21295 C5.99765,4.23295 6.04115,4.23295 6.07615,4.21295 L11.27165,1.28395 C11.34865,1.24045 11.44415,1.29595 11.44415,1.38445 L11.44415,7.08095 C11.44415,7.14495 11.39215,7.19645 11.32815,7.19645 L0.67165,7.19645 C0.60765,7.19645 0.55565,7.14495 0.55565,7.08095 M11.05965,0.76645 L6.07565,3.57545 C6.04015,3.59495 5.99715,3.59495 5.96215,3.57545 L0.94315,0.76645 C0.83915,0.70795 0.88015,0.54945 0.99965,0.54945 L11.00315,0.54945 C11.12215,0.54945 11.16365,0.70745 11.05965,0.76645 M0.00015,0.23145 L0.00015,7.52095 C0.00015,7.64895 0.10365,7.75245 0.23165,7.75245 L11.76865,7.75245 C11.89615,7.75245 12.00015,7.64895 12.00015,7.52095 L12.00015,0.23295 C12.00015,0.10495 11.89615,0.00145 11.76865,0.00145 L0.23165,-5e-05 C0.10365,-5e-05 0.00015,0.10345 0.00015,0.23145' id='Fill-1' fill='%23FFFFFF' mask='url(%23mask-2)'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"
            alt=""
          />
        </div>
      </div>

      <div className="w-[100%] md:w-[80%] mx-auto flex mt-3">
        {/* category section */}
        <div className="w-1/5 border-r-2 h-[400px] hidden lg:block">
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
        <div className="w-[100%] lg:w-4/5 md:shadow-md flex flex-col md:flex-row">
          <div className="w-[100%] lg:w-[50%] h-auto">
            <div className=" md:h-full md:w-full px-2 hidden md:block">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: `${singleData.ImgSrc}`,
                    width: 350,
                    height: 280,
                  },
                  largeImage: {
                    src: `${singleData.ImgSrc}`,
                    width: 1400,
                    height: 1800,
                  },
                  enlargedImageContainerDimensions: {
                    width: "200%",
                    height: "100%",
                  },
                  shouldUsePositiveSpaceLens: true,
                }}
              />
            </div>
            <img
              className="w-[380px] h-[300px] md:h-full md:w-full px-3 block md:hidden"
              src={singleData.ImgSrc}
              alt=""
            />
          </div>

          <div className="w-[100%] md:w-[50%] ">
            <div className="px-3 py-2">
              <p className="text-xs border-b-2 w-[38px] border-gray-600 hover:border hover:scale-105 duration-300 cursor-pointer origin-right">
                Fresho
              </p>
              <h1 className="mt-1">{singleData.name}</h1>
              <p className="text-[10px] text-gray-500 mt-2 font-semibold">
                MRP: <span className=" line-through">Rs {singleData.mrp}</span>
              </p>
              <p className="text-sm font-bold text-gray-700">
                Price:Rs {singleData.price}{" "}
                <span className="text-[10px] font-semibold">(Rs.25/kg)</span>
              </p>
              <p className="text-xs font-semibold text-red-400">You Save:{singleData.offers}</p>
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
                    <MinusIcon  />
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
                    <AddIcon />
                  </button>
                </div>

                <div className="border-2 border-[#84c225] px-3 py-2 rounded-md bg-[#84c225] hover:shadow-xl md:shadow-[#84c225]">
                  <button className="text-xs md:text-xs lg:text-sm text-white font-bold" onClick={()=>{
                    dispatch(addProductToCart(singleData._id,count))
                    .then(() => toast({
                      title: 'Product Added!',
                      description: "We've added your product.",
                      status: 'success',
                      duration: 2000,
                      position: "top",
                      isClosable: true,
                  }))
                  }} >
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
              <div className="">
                <div>
                  <div className="flex justify-between items-center mt-5 text-xs text-gray-500 bg-[#e6f3d3] rounded-md h-[60px]  font-semibold hover:shadow-md cursor-pointer">
                    <div className="px-2">
                      {" "}
                      <p className="text-gray-600">{singleData.weight}</p>{" "}
                    </div>
                    <div className="flex gap-3">
                      <p>Rs {singleData.price}</p>
                      <p className="line-through">MRP Rs {singleData.mrp}</p>
                      <p className="text-red-500">{singleData.offers}</p>
                    </div>
                    <div className="w-[10%] h-[60px] justify-center items-center flex text-white bg-[#84c225] rounded-tr-md rounded-br-md ">
                      <h1 className="">
                        <CheckIcon fontSize={"xl"} />
                      </h1>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-500 bg-gray-200 rounded-md h-[60px]  font-semibold hover:shadow-md cursor-pointer">
                    <div className="px-2">
                      {" "}
                      <p className="text-gray-600">2 kg</p>{" "}
                    </div>
                    <div className="flex gap-3">
                      <p>Rs 50</p>
                      <p className="line-through">MRP Rs 77.5</p>
                      <p className="text-red-500">35% Off</p>
                    </div>
                    <div className="w-[10%] h-[60px] justify-center items-center flex text-white bg-[#84c225] rounded-tr-md rounded-br-md">
                      <h1 className="">
                        <CheckIcon fontSize={"xl"} />
                      </h1>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-500 rounded-md h-[60px] bg-gray-100  font-semibold hover:shadow-md cursor-pointer">
                    <div className="px-2">
                      {" "}
                      <p className="text-gray-600">2 kg</p>{" "}
                    </div>
                    <div className="flex gap-3">
                      <p>Rs 50</p>
                      <p className="line-through">MRP Rs 77.5</p>
                      <p className="text-red-500">35% Off</p>
                    </div>
                    <div className="w-[10%] h-[60px] justify-center items-center flex text-white bg-[#84c225] rounded-tr-md rounded-br-md">
                      <h1 className="">
                        <CheckIcon fontSize={"xl"} />
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about sec */}
      <div className=" mt-5 px-2 mb-6">
        <div className="w-[100%] md:w-[80%] mx-auto">
        <h1 className="text-2xl mb-3 mt-2 text-gray-500">{singleData.name}</h1>
          <Accordion allowMultiple className="text-sm text-gray-500">
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="text-lg">About the Product</p>
                        <UnorderedList className="mt-2 text-sm">
                          <ListItem>
                            Onion is a vegetable which is almost like a staple
                            in Indian food. This is also known to be one of the
                            essential ingredients of raw salads. They come in
                            different colours like white, red or yellow and are
                            quite in demand in cold salads and hot soups.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList>
                      <ListItem>
                        You can dice, slice or cut it in rings and put it in
                        burgers and sandwiches. Onions emit a sharp flavour and
                        fragrance once they are fried; it is due to the sulphur
                        compound in the vegetable.Onions are known to be rich in
                        biotin.
                      </ListItem>
                      <ListItem>
                        Most of the flavonoids which are known as anti-oxidants
                        are concentrated more in the outer layers, so when you
                        peel off the layers, you should remove as little as
                        possible.
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple className="text-sm text-gray-500">
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="text-lg">Benefits</p>
                        <UnorderedList className="mt-2 text-sm">
                          <ListItem>
                            Onions are known to have antiseptic, antimicrobial
                            and antibiotic properties which help you to get rid
                            of infections.
                          </ListItem>
                          <ListItem>
                            If a piece of onion is inhaled, it can slow down or
                            stop nose bleeding.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList>
                      <ListItem>
                        Those who have sleeping disorders or insomnia can have a
                        good night sleep if they have an onion every day.
                      </ListItem>
                      <ListItem>
                        Those who have sleeping disorders or insomnia can have a
                        good night sleep if they have an onion every day.
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple className=" text-sm text-gray-500">
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="text-lg">Storage and Uses</p>
                        <UnorderedList className="mt-2 text-sm">
                          <ListItem>
                            Store in a cool dry place, need not refridgerate..
                          </ListItem>
                          <ListItem>
                            Freezing onions, soaking them under water and
                            keeping the root intact before chopping are some
                            methods to reduce tears while chopping them.
                          </ListItem>
                        </UnorderedList>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList>
                      <ListItem>
                        Those who have sleeping disorders or insomnia can have a
                        good night sleep if they have an onion every day.
                      </ListItem>
                      <ListItem>
                        Those who have sleeping disorders or insomnia can have a
                        good night sleep if they have an onion every day.
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple className="text-sm text-gray-500">
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <p className="text-lg">Other Product Info</p>
                        <UnorderedList className="mt-2 text-sm">
                          <ListItem>EAN Code: 10000148</ListItem>
                          <ListItem>Country of origin: India</ListItem>
                        </UnorderedList>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <UnorderedList>
                      <ListItem>
                        Sourced & Marketed by: Supermarket Grocery Supplies Pvt.
                        Ltd, No. 7, Service Road, Off 100 Feet Road Indiranagar
                        Landmark: Above HDFC Bank Bangalore, Karnataka 560071
                      </ListItem>
                      <ListItem>Best before 3 days from delivery date</ListItem>
                      <ListItem>
                        For Queries/Feedback/Complaints, Contact our Customer
                        Care Executive at: Phone: 1860 123 1000 | Address:
                        Supermarket Grocery Supplies Pvt Ltd. No7, Service Road,
                        Domlur 100 Feet Road, Indiranagar, Bangalore 560071. |
                        Email: customerservice@bigbasket.com
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-[100%] md:w-[80%] mx-auto mt-4">
          <p className="text-2xl">You may like to view more in</p>
          <div className="flex gap-2 mt-3 border-t-2 py-3">
            <div className="hover:shadow-md border-2 border-gray-500 text-gray-500 text-sm px-2 py-1 rounded-2xl font-semibold"> <button>Country of origin:India<ChevronRightIcon fontSize="20px" color="gray.500" /> </button> </div>
            <div className="hover:shadow-md border-2 border-gray-500 text-gray-500 text-sm px-2 py-1 rounded-2xl font-semibold"> <button>Food Preference Vegeterian<ChevronRightIcon fontSize="20px" color="gray.500" /> </button> </div>
            <div className="hover:shadow-md border-2 border-gray-500 text-gray-500 text-sm px-2 py-1 rounded-2xl font-semibold"> <button>Seasonal Summer<ChevronRightIcon fontSize="20px" color="gray.500" /> </button> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
