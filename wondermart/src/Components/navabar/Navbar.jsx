import { Box, Center, Image, Input, Text } from "@chakra-ui/react";
import { Button } from "bootstrap";
import React from "react";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
export const Navbar = () => {
  return (
    <Box w={"100%"}>
      <Box bg="white" p="20px" w="80%" color={"green"} m="auto">
        <Box display="flex" w={"100%"}>
          <Box w="20%" border="1px solid blue">
            {" "}
            <Image w="100%" h="20px" src="assets/logo/logo1.png" alt="" />{" "}
          </Box>
          <Box w="60%" border="1px solid green" borderRadius={"8px"}>
            <Box display={"flex"} w="100%" p="10px">
              <FaSearch style={{ fontSize: "10px" }} />{" "}
              <Input
                fontSize={"10px"}
                pl={5}
                variant="unstyled"
                placeholder="Search Product..."
              />
            </Box>{" "}
          </Box>
          <Box w="20%" color="white">
            {" "}
            <Box bg={"grey"} borderRadius={"8px"} w="80%" ml="10px">
              <Text>time</Text>
              <Text>adress</Text>
            </Box>{" "}
          </Box>
          <Box
            w="10%"
            p={"8px"}
            borderRadius={"8px"}
            bg="black"
            color={"white"}
          >
            login/signup
          </Box>
          <Box w="5%" ml="10px" bg={"red.300"} borderRadius={"8px"}>
            {" "}
            <Center pt="10px">
              {" "}
              <FaShoppingBasket style={{ color: "white" }} />
            </Center>{" "}
          </Box>
        </Box>

        {/* second Navbar */}

        <Box display="flex" w={"100%"}>
          <Box w="20%" border="1px solid blue">
           <Button> shop By category</Button>tt
          </Box>
          <Box w="60%" border="1px solid green" borderRadius={"8px"}>
            <Box display={"flex"} w="100%" p="10px">
              <FaSearch style={{ fontSize: "10px" }} />{" "}
              <Input
                fontSize={"10px"}
                pl={5}
                variant="unstyled"
                placeholder="Search Product..."
              />
            </Box>{" "}
          </Box>
          <Box w="20%" color="white">
            {" "}
            <Box bg={"grey"} borderRadius={"8px"} w="80%" ml="10px">
              <Text>time</Text>
              <Text>adress</Text>
            </Box>{" "}
          </Box>
          <Box
            w="10%"
            p={"8px"}
            borderRadius={"8px"}
            bg="black"
            color={"white"}
          >
            login/signup
          </Box>
          <Box w="5%" ml="10px" bg={"red.300"} borderRadius={"8px"}>
            {" "}
            <Center pt="10px">
              {" "}
              <FaShoppingBasket style={{ color: "white" }} />
            </Center>{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
