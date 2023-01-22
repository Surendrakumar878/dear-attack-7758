import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div>
        <Box bg=""  >
           <Box m="auto" bg="" w="50%"  textAlign={"center"}>
           <Image w="100%" src='https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif'/>
            <Link to="/">
            <Heading  color="green" fontSize={"25px"} textDecoration="underline" _hover={{color:"red",fontSize:"30px"}}>Go To Home Page</Heading>
            </Link>
           </Box>
        </Box>
    </div>
  )
}

export default Success