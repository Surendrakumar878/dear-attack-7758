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
import { product } from './db'
import SingleCart from './SingleCart'


const Cart = () => {

  var items = "(5 Items)"
  return (
    <Box w="100%" h={"auto"} pt="2%">
      <Box bg={""} p="2%  1%" w="75%" h={"auto"} m="auto">
        <Box className='checkoutBtn' borderRadius={"10px"} p={"2%"} w="100%" h={"90px"} bg="#202020" display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Box bg={""}>
            <Box p="15px 15px 10px 5px" textAlign="left">
              <Heading color={"white"} fontSize={"17px"}>Subtotal {items}: <b> ₹ 241.46</b></Heading>
              {/* <Box w='100%' h='200px' bgGradient='linear(to-r, black.500, pink.500)' /> */}
              <Heading color={"#8bbe32"} fontSize={"16px"} p={"2% 4% 2% 0%"} >Savings: ₹ 129.57</Heading>
            </Box>
          </Box>
          <Button bg='#cc0000' _hover={{ bg: "#EF3C3C" }} color={"white"} p="10px 65px">Checkout</Button>
        </Box>
        <TableContainer>
          <Table variant='simple'>
            <Text textAlign={"left"} m="2% 2% 2% 0">This is Cart Item Table</Text>

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
                <Th>Items  (5 items)</Th>
                <Th>Quantity</Th>
                <Th isNumeric>Sub-total</Th>
              </Tr>
            </Thead>
            <Tbody m={"5% 1%"}>

              {
                product.map((ele) => <SingleCart key={ele.id} id={ele.id} name={ele.name} img={ele.img} price={ele.price} strikePrice={ele.strikePrice} Qty={ele.Qty} />)
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>


    </Box>
  )
}

export default Cart