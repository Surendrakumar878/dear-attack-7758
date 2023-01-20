import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
// import { Button } from "bootstrap";
import React, { useState } from "react";
// import { ModalBody, ModalHeader } from "react-bootstrap";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { login, signup } from "../../Redux/authReducer/Action";
export const Navbar = () => {
  const dispatch=useDispatch()
  const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [sname,setSname]=useState("")
const [semail,setSEmail]=useState("")
const [spassword,setSPassword]=useState("")
  const [on, setOn] = useState(false);
  const [one, setOne] = useState(false);
  const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    //handleSubmitSignup
    const handleSubmit = (e) => {
      e.preventDefault();
      const payload={
        
        email,
        password,
        
    }
    dispatch(login(payload))
    console.log(payload)
      toast({
        title: "Welcome",
        description: "You are now logged in.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    };
    const handleSubmitSignup = (e) => {
      e.preventDefault();
      const payload={
        "username":sname,
        "email":semail,
        "password":spassword,
        
    }
    dispatch(signup(payload))
    console.log(payload)
      toast({
        title: "Welcome",
        description: "You are now signed in.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    };
    console.log(email,
      password,)
  return (
    <Box w={"100%"} position="fixed" zIndex={1}>
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
            { <Text  onClick={onOpen}>
          {localStorage.getItem("token").length>2?"logout":"Login/Signup"}
        </Text>}
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
      <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          {on?<ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Enter your email"
                    aria-describedby="email-helper-text"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    aria-describedby="password-helper-text"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                  />
                </FormControl>
              </form>
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="teal" mr={3} onClick={handleSubmit}>
                Login
              </Button>
              <NavLink
                ml={2}
                textDecor ="underline"
                fontSize = "sm"
                color = "blue.500"
                // href = "/singup"
                onClick={() => setOn(!on)}
                // to="/signup"
              >
                {one?"Signup":"login"}
              </NavLink>
            </ModalFooter>
          </ModalContent>:
          
          <ModalContent>
            <ModalHeader>Signup</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    aria-describedby="email-helper-text"
                    value={semail}
                    onChange={(e)=>setSEmail(e.target.value)} 
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    aria-describedby="password-helper-text"
                    value={spassword}
                    onChange={(e)=>setSPassword(e.target.value)} 
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    aria-describedby="name-helper-text"
                    value={sname}
                    onChange={(e)=>setSname(e.target.value)} 
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    aria-describedby="phone-helper-text"

                  />
                </FormControl>
              </form>
            </ModalBody>
  
            <ModalFooter>
            <Button variantColor="teal" mr={3} onClick={handleSubmitSignup}>
              Signup
            </Button>
            <Link  onClick={() => setOne(!one)}> {on?"Signup":"login"}</Link>
          </ModalFooter>
          </ModalContent>}
        </Modal>
    </Box>
  );
};
