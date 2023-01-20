import React from 'react'
import { Box, Button, Heading, Input, Text, WrapItem } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Payment } from './Payments'
 export const Pay = () => {
  return (
    <Box w="100%" height={"auto"} bg="" p="5%">
      {/* <Box w="70%" height={"auto"} bg="gray.100" p={"3% 1%"} textAlign={"left"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" border={"2px solid green"} borderRadius="10px">
        <Heading fontSize={"20px"} fontWeight="bold" mb="2%" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} p="2% 1%" borderRadius={"10px"} textDecoration="underline">Delivery Address</Heading>
        <Box bg="gray.200" p="3% 1%">
          <Text fontSize={"15px"} fontWeight="bold" mb="1%">Personal Details</Text>
          <FormControl isRequired display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap="10px">
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter First Name</FormLabel>
              <Input placeholder='First name' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter Last Name</FormLabel>
              <Input placeholder='Last name' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter Contact Number</FormLabel>
              <Input placeholder='Contact Number' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
          </FormControl>
        </Box>

        <Box bg="gray.200" p="1% 1%">
          <Text fontSize={"15px"} fontWeight="bold" mb="1%">Address Details</Text>
          <FormControl isRequired display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap="10px">
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">House Number</FormLabel>
              <Input placeholder='House Number' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter Apartment Name</FormLabel>
              <Input placeholder='Enter Apartment Name' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter Street Details</FormLabel>
              <Input placeholder='Street Details' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter Landmark for easy reach out</FormLabel>
              <Input placeholder='Landmark' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter City Name</FormLabel>
              <Input placeholder='City Name' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter Area Details</FormLabel>
              <Input placeholder='Area Details' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>
            <Box>
              <FormLabel fontSize={"13px"} fontWeight="400">Enter Pincode</FormLabel>
              <Input placeholder='Pincode' border={"1px solid green"} _hover={{border:"1px solid orange"}}/>
            </Box>

          </FormControl>
          <Box bg="" w="30%" display={"flex"} alignItems="center" justifyContent={"space-between"}  p="2% 1% 2% 0%" mt="2%">
              <WrapItem>
                <Button colorScheme='whatsapp'>ADDRESS</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme='gray'>CENCEL</Button>
              </WrapItem>
            </Box>
        </Box>
      </Box> */}

      <Box mt="5%" w="70%" height={"auto"} bg="gray.100" p={"3% 1%"} textAlign={"left"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" border={"2px solid green"} borderRadius="10px">
        <Box>
        <Heading fontSize={"20px"} fontWeight="bold" mb="2%" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} p="2% 1%" borderRadius={"10px"} textDecoration="underline">Payment Options</Heading>
        </Box>
        {/* <Box bg="" display={"flex"}  alignItems="center"  justifyContent={"space-between"} p="2% 1%">
          <Box bg="gray" p="2% 1%" border={"1px solid black"}>
          <Heading fontSize={"18px"} >Payment Options</Heading>
          <Text>Apply voucher code,if applicable, to aval the offer</Text>
          </Box>
          <Box bg="gray" p="2% 1%" border={"1px solid black"}>
          <Heading fontSize={"18px"} >Payment Options</Heading>
          <Text>Apply voucher code,if applicable, to aval the offer</Text>
          </Box>
        </Box> */}
        <Payment/>
      </Box>
    </Box>
  )
}

