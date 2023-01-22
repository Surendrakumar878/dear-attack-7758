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

      <Box mt="5%" w="70%" height={"auto"} bg="gray.100" p={"3% 1%"} textAlign={"left"} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" border={"2px solid green"} borderRadius="10px">
        <Box>
        <Heading fontSize={"20px"} fontWeight="bold" mb="2%" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} p="2% 1%" borderRadius={"10px"} textDecoration="underline">Payment Options</Heading>
        </Box>
        <Payment/>
      </Box>
    </Box>
  )
}

