import React from 'react'

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
import {MdDelete} from "react-icons/md"
// import Quantity from "../Components/Quantity"
import { useDispatch } from 'react-redux'
import { cart, deleteItem } from '../Redux/cartReducer/action'
import { useParams } from 'react-router-dom'
import Quantity from './Design/Quantity'

const SingleCart = ({id, name,img, price, strikePrice, Qty} ) => {
    // const id = useParams()
    // console.log(" Quantity id => ",id,Qty)

    // console.log("what is this",id, name,img, price, strikePrice, Qty)
    const dispatch =  useDispatch()

    const handleDelete = (id) => {
      // console.log("deleted =>",id);
      dispatch(deleteItem(id))
     
    }


  return (
           <Tr borderBottom={"2px solid green"}   h={"200px"} _hover={{boxShadow:" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"}}>
              <Td w={"70%"} mr="10%" bg={""}>
                <Box display={"flex"} alignItems={"center"} >
                  <Image src={img} w="150px"/>
                  <Box ml={"10%"} lineHeight={"25px"}>
                    <Text>{name}</Text>
                    <Text> <b>₹{price}</b> <strike>₹{strikePrice}</strike></Text>                    
                  </Box>
                </Box>
              </Td>
              <Td>
                <Box p="3% 5%"  _hover={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}} border={"1px solid #bfbfbf"} bg="white" textAlign={"center"} display={"flex"} alignItems="center" justifyContent={"space-between"}>
                  {/* <Button _hover={{bg:'#cc0000'}} color={"white"} fontSize="38px" pb="2%"  display={"flex"} alignItems="center" >-</Button>
                  <Button m={"1%"}>{Qty}</Button>
                  <Button _hover={{bg:'#cc0000'}} color={"white"} fontSize="38px"   pb="2%" display={"flex"} alignItems="center" >+</Button> */}

                  <Quantity Qty = {Qty} id =  {id}/>
                </Box>
                <Box display={"flex"} alignItems="center" justifyContent={"space-around"}>
                    <Text fontSize={"14px"} onClick={() =>{
                         handleDelete(id)
                       

                    }
                      
                       } cursor="pointer">Delete</Text>
                    <Text fontSize={"14px"}>Save for later</Text>
                  </Box>
              </Td>
              <Td isNumeric ><b>₹{price}</b></Td>
  
            </Tr>

  )
}

export default SingleCart