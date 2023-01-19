import {
  Box,
  Button,
  Center,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// import { Button } from "bootstrap";
import React, { useState } from "react";
// import { ModalBody, ModalHeader } from "react-bootstrap";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
export const Navbar = () => {
  const [on, setOn] = useState(false);

  return (
    <Box w={"100%"}>
      <Box bg="white" p="20px" w="80%" color={"green"} m="auto">
        <Box display="flex" w={"100%"}>
          <Box w="20%" border="1px solid blue">
            {" "}
            <Image w="100%"
             h="5px"
              src="assets/logo/logo1.png" alt="" />{" "}
          </Box>
          <Box w="60%" border="1px solid green" borderRadius={"8px"}>
            <Box display={"flex"} w="100%" p="10px">
              <FaSearch style={{ fontSize: "15px",marginTop:"5px", 
              
              // paddingTop:"10px"
              
              }} />{" "}
              <Input
                fontSize={"15px"}
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

        <Box
          position="relative"
          display="flex"
          w={"100%"}
          justifyContent="space-around"
          color={"black"}
        >
          <Button onClick={() => setOn(!on)} bg="#5e9400" color={"white"}>
            Shop By category
          </Button>

          <Button color={"black"} variant="link">
            Tea
          </Button>
          <Button color={"black"} variant="link">
            fruits-vegetables
          </Button>
          <Button color={"black"} variant="link">
            Ghee
          </Button>
          <Button color={"black"} variant="link">
            Nandini
          </Button>
          <Button color={"black"} variant="link">
            fresh-vegetables
          </Button>
          <Button variant="link" textDecoration={"none"} outline="none">
            {">>"}
          </Button>
        </Box>
        {on && (
          <Box
            w="600px"
            h="300px"
            position="absolute"
            top="111"
            right="0"
            bottom="0"
            left="210"
            zIndex="9900000000"
            // bg="teal"
            display={"flex"}
            justifyContent="space-between"
            mt="10px"
            border="1px solid green"

            borderRadius={"8px"}
          >
            <Box  borderLeftRadius="8px" w="14rem" color={"white"} bg="black" display={"flex"} flexDirection="column"  p="20px">
              <Button bg={"none"}>text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
            </Box>
            <Box w="14rem" bg="grey"  display={"flex"} flexDirection="column" p="20px">
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
            </Box>
            <Box  borderRadius={"8px"} w="14rem" bg="white" display={"flex"} flexDirection="column" p="20px">
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
              <Button bg="none">text</Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
