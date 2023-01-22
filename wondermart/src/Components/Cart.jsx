import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
// import { product } from './db'
import SingleCart from './SingleCart'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from '../Redux/cartReducer/action'
import { Link } from 'react-router-dom'


const Cart = () => {

  const data= useSelector((store) =>  store.cartReducer.data)
  const isLoading = useSelector((store) =>   store.cartReducer.isLoading)
  const [total, setTotal] = useState(0)
  // const size=data.length
  const dispatch =  useDispatch()
  // console.log("data =>",data,isLoading);
  

  useEffect(() => {
    if(data.length > 0  ){
      var value =data.reduce((sum,ele) => {
        sum+=(ele.price)*(ele.quantity)
        return sum
        // console.log(ele.price);
      },0)
      // console.log("value =>",data);
     setTotal(value)
    }
  },[data.length])

  useEffect(() => {
      dispatch(cart())
  }, [dispatch])
  

  
  return (
    <Box w="100%" h={"auto"} p="2% 0">
      <Box bg={""} p="2%  1%" w="75%" h={"auto"} m="auto">
        <Box className='checkoutBtn' borderRadius={"10px"} p={"2%"} w="100%" h={"90px"} bg="#202020" display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box bg={""}>
            <Box p="15px 15px 10px 5px" textAlign="left">
              <Heading color={"white"} fontSize={"17px"}>Subtotal {data.length} Items: <b> ₹ {total}</b></Heading>
              {/* <Box w='100%' h='200px' bgGradient='linear(to-r, black.500, pink.500)' /> */}
              <Heading color={"#8bbe32"} fontSize={"16px"} p={"2% 4% 2% 0%"} >Savings: ₹ 129.57</Heading>
            </Box>
          </Box>
          <Link to="/checkout">
          <Button bg='#cc0000' _hover={{ bg: "#EF3C3C" }} color={"white"} p="10px 65px">Checkout</Button>
          </Link>
        </Box>
        <TableContainer>
          <Table variant='simple'>
            <Text textAlign={"left"} fontSize="18px" m="2% 2% 2% 0" fontWeight={"bold"}>Cart Item Table</Text>

            <hr
              className="mb-4"
              style={{
                height: "2px",
                width: "10%",
                backgroundColor: "#ff6517",
                opacity: 1,
              }}
            />
            <Thead>
              <Tr>
                <Th>Items  {(data.length)} Items</Th>
                <Th>Quantity</Th>
                <Th isNumeric>Sub-total</Th>
              </Tr>
            </Thead>
            <Tbody m={"2%"} gap="3%">
            {isLoading ?
                    <div display="flex"  alignItems="center"  justifyContent="center"  margin="auto">
                        <img style={{
                            width: "80%",
                            margin: "auto",
                            marginBottom: "5%"
                        }} src={"https://i.pinimg.com/originals/d7/7b/ce/d77bce75b53ed81f656be3f4249b372b.gif"} alt="loading..." />
                        <h1 style={{
                            fontWeight: "bold",
                            fontSize: "100%",
                            color: "Green",
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "150%",
                            marginTop: "5%"
                        }}>Please wait Loading...</h1>
                    </div>
               : <></>
                }

              {
                data.map((ele) => <SingleCart key={ele._id} id={ele._id} name={ele.name} img={ele.ImgSrc} price={ele.price} strikePrice={ele.mrp} Qty={ele.quantity} />)
              }

            </Tbody>
          </Table>
        </TableContainer>
      </Box>


    </Box>
  )
}

export default Cart