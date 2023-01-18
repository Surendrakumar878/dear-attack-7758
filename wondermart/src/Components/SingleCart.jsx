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


const SingleCart = ({id, name,img, price, strikePrice, Qty} ) => {
    console.log("what is this",id, name,img, price, strikePrice, Qty)
  return (
           <Tr borderBottom={"1px solid gray"} h={"200px"}>
              <Td w={"70%"} mr="10%" bg={""}>
                <Box display={"flex"} alignItems={"center"} >
                  <Image src={img}/>
                  <Box ml={"10%"} lineHeight={"25px"}>
                    <Text>{name}</Text>
                    <Text> <b>₹{price}</b> <strike>₹{strikePrice}</strike></Text>                    
                  </Box>
                </Box>
              </Td>
              <Td>
                <Box p="3% 5%"  _hover={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}} border={"1px solid #bfbfbf"} bg="white" textAlign={"center"} display={"flex"} alignItems="center" justifyContent={"space-between"}>
                  <Button _hover={{bg:'#cc0000'}} color={"white"} fontSize="38px" pb="2%"  display={"flex"} alignItems="center" >-</Button>
                  <Button m={"1%"}>{Qty}</Button>
                  <Button _hover={{bg:'#cc0000'}} color={"white"} fontSize="38px"   pb="2%" display={"flex"} alignItems="center" >+</Button>
                </Box>
              </Td>
              <Td isNumeric><b>₹{price}</b></Td>
            </Tr>

  )
}

export default SingleCart