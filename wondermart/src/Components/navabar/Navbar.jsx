import { ArrowRightIcon, ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  tokenToCSSVar,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
// import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
// import { ModalBody, ModalHeader } from "react-bootstrap";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login, signup } from "../../Redux/authReducer/Action";
export const Navbar = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sname, setSname] = useState("");
  const [semail, setSEmail] = useState("");
  const [spassword, setSPassword] = useState("");
  const [on, setOn] = useState(false);
  const [one, setOne] = useState(false);
  const [user, setUser] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category2, setCategory2] = useState([
    "Feeding & Nursing",
    "Mothers & Maternity",
    "Combs, Brushes, Clippers",
    "Other Baby Accessories",
    "Soothers & Teethers",
  ]);
  const [category3, setCategory3] = useState([
    "Feeding & Nursing",
    "Mothers & Maternity",
    "Combs, Brushes, Clippers",
    "Other Baby Accessories",
    "Soothers & Teethers",
  ]);
  const [category, setCategory] = useState([
    "products",
    "Fruits & Vegetables",
    "Foodgrains, Oil & Masala",
    "Bakery, Cakes & Dairy",
    "Beverages",
    "Snacks & Branded Foods",
    "Beauty & Hygiene",
    "Cleaning & Household",
    "Kitchen, Garden & Pets",
    "Eggs, Meat & Fish",
    "Gourmet & World Food",
    "Baby Care",
  ]);
  //handleSubmitSignup
  const handleSubmit = (e) =>{
    e.preventDefault();
    const payload={
      email,
      password,
    };
    dispatch(login(payload));
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
    const payload = {
      username: sname,
      email: semail,
      password: spassword,
    };
    dispatch(signup(payload));
    console.log(payload);
    toast({
      title: "Welcome",
      description: "You are now signed in.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };
  // console.log(email, password);

  const subnav = (i) => {
    if (i === "Fruits & Vegetables") {
      return setCategory2([
        "  Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Flower Bouquets, Bunches",
        "Fresh Fruits",
        "Fresh Vegetables",
        "Herbs & Seasonings",
      ]);
    } else if (i === "Foodgrains, Oil & Masala") {
      // eslint-disable-next-line no-sparse-arrays
      return setCategory2([
        ,
        "Atta, Flours & Sooji",
        "Dals & Pulses",
        "Dry Fruits",
        "Edible Oils & Ghee",
        "Masalas & Spices",
      ]);
    } else if (i === "Beverages") {
      return setCategory2([
        "Baby Accessories",
        "Baby Bath & Hygiene",
        "Baby Food & Formula",
        "Diapers & Wipes",
        "Feeding & Nursing",
      ]);
    } else if (i === "Bakery, Cakes & Dairy") {
      return setCategory2([
        "Bakery Snacks",
        "Breads & Buns",
        "Cakes & Pastries",
        "Cookies, Rusk & Khari",
        "Dairy",
      ]);
    } else if (i === "Snacks & Branded Foods") {
      return setCategory2([
        "Baby Accessories",
        "Baby Bath & Hygiene",
        "Baby Food & Formula",
        "Diapers & Wipes",
      ]);
    } else if (i === "Beauty & Hygiene") {
      return setCategory2([
        "Biscuits & Cookies",
        "Breakfast Cereals",
        "Chocolates & Candies",
        "Frozen Veggies & Snacks",
        "Indian Mithai",
        "Noodle, Pasta, Vermicelli",
        "Pickles & Chutney",
      ]);
    } else if (i === "Baby Care") {
      return setCategory2([
        "Baby Accessories",
        "Baby Bath & Hygiene",
        "Baby Food & Formula",
        "Diapers & Wipes",
      ]);
    } else if (i === "Cleaning & Household") {
      // eslint-disable-next-line no-sparse-arrays
      return setCategory2([
        "Baby Accessories",
        "Baby Bath & Hygiene",
        "Baby Food & Formula",
        "Diapers & Wipes",
        "Feeding & Nursing",
        ,
      ]);
    }
  };
  const subnav1 = (i) => {
    if (i === "Cuts & Sprouts") {
      return setCategory3([
        "Herbs & Seasonings",
        "Organic Fruits & Vegetables",
        "Cut & Peeled Veggies",
        "Cut Fruit, Tender Coconut",
        "Fresh Salads & Sprouts",
      ]);
    } else if (i === "Foodgrains, Oil & Masala") {
      // eslint-disable-next-line no-sparse-arrays
      return setCategory3([
        ,
        "Atta, Flours & Sooji",
        "Dals & Pulses",
        "Dry Fruits",
        "Edible Oils & Ghee",
        "Masalas & Spices",
        "Organic Staples",
        "Rice & Rice Products",
        "Salt, Sugar & Jaggery",
        "Atta Whole Wheat",
        "Rice & Other Flours",
        "Sooji, Maida & Besan",
      ]);
    } else if (i === "Combs, Brushes, Clippers") {
      return setCategory3([
        "Baby Accessories",

        "Combs, Brushes, Clippers",
        "Other Baby Accessories",
        "Soothers & Teethers",
      ]);
    } else if (i === "Bakery, Cakes & Dairy") {
      // eslint-disable-next-line no-sparse-arrays
      return setCategory3([
        ,
        "Gourmet Breads",
        "Ice Creams & Desserts",
        "Non Dairy",
        "Bread Sticks & Lavash",
        "Breadcrumbs & Croutons",
        "Cheese & Garlic Bread",
      ]);
    } else if (i === "Baby Accessories") {
      return setCategory3([
        "Baby Accessories",

        "Mothers & Maternity",
        "Combs, Brushes, Clippers",
        "Other Baby Accessories",
        "Soothers & Teethers",
      ]);
    } else if (i === "Biscuits & Cookies") {
      // eslint-disable-next-line no-sparse-arrays
      return setCategory3([
        ,
        "Cookies",
        "Cream Biscuits & Wafers",
        "Glucose & Milk Biscuits",
        "Marie, Health, Digestive",
        "Salted Biscuits",
      ]);
    } else if (i === "Baby Accessories") {
      return setCategory2([
        "Feeding & Nursing",
        "Mothers & Maternity",
        "Combs, Brushes, Clippers",
        "Other Baby Accessories",
        "Soothers & Teethers",
      ]);
    } else if (i === "Diapers & Wipes") {
      return setCategory2([
        "Baby Accessories",

        "Mothers & Maternity",
        "Combs, Brushes, Clippers",
        "Other Baby Accessories",
        "Soothers & Teethers",
      ]);
    }
  };

  let token = localStorage.getItem("token") || [];
  let admin = localStorage.getItem("adminkey") || [];



  

  return (
    <Box position="fixed" zIndex={100} w={{ lg: "100%", sm: "100%", md: "100%" }}>
      <Box bg="white" p="20px" w={{ lg: "100%", sm: "100%", md: "100%" }} color={"green"} m="auto">
        <Box display="flex" w={{ lg: "100%", sm: "100%", md: "100%" }} alignItems="center">
          <Box display={{ lg: "none", sm: "100%", md: "100%" }}>
          <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
  {category.map((el)=><MenuItem >
      {el}
    </MenuItem>)  }
 
  </MenuList>
</Menu>
          </Box>
         <NavLink to="/"> <Box w="20%">
            {" "}
            <Image w={{ lg: "60%", sm: "80%", md: "80%" }} ml={{ lg: "100px", sm: "010px", md: "010px" }} src="assets/logo/logo1.png" alt="" />
            {/* <Text size={20} color={"black"} >wondermart</Text>  */}{" "}
          </Box>
          </NavLink>
          <Box w="60%">
            <Box w={{ lg: "100%", sm: "100%", md: "100%" }} border="1px solid green" borderRadius={"8px"}>
              <Box display={"flex"} w={{ lg: "100%", sm: "100%", md: "100%" }} p="10px">
                <FaSearch
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",

                    // paddingTop:"10px"
                  }}
                />{" "}
                <Input
                  fontSize={"15px"}
                  pl={5}
                  variant="unstyled"
                  placeholder="Search Product..."
                />
              </Box>{" "}
            </Box>
          </Box>
          <Box w={{ lg: "20%", sm: "20%", md: "20%" }} display={{ lg:"block", sm: "none", md: "none" }} color="white">
            {" "}
            <Box
              fontSize={{ lg: "13px", sm: "13px", md: "13px" }}
              pl="13px"
              pt="2px"
              pb="2px"
              bg={"#f7f7f7"}
              color="black"
              borderRadius={"8px"}
              w={{ lg: "60%", sm: "60%", md: "60%" }}
              ml="10px"
            >
              <Text>Get it in 12 hrs</Text>
              <Text>Home: Mahalakshmi ...</Text>
            </Box>{" "}
          </Box>
          <Box
            className="drop"
            w={{ lg: "10%", sm: "10%", md: "10%" }}
            // p={"8px"}
            textAlign={"center"}
            borderRadius={"8px"}
            // bg="black"
            // color={"white"}
          >
            {token.length > 10 ? (
              // <Image src=""    onClick={() => setUser(!user)}/>
              <Avatar
                onClick={() => setUser(!user)}
                src="https://example.com/logo.png"
                size={{ lg: "md", sm: "md", md: "md" }}
                borderWidth="3px"
                borderColor="blue.500"
                boxShadow="md"
                rounded="full"
                mr="80px"
              />
            ) : (
              <button fontSize={{ lg: "md", sm: "md", md: "md" }} bg="black" color="black" onClick={onOpen} mt="20px">
                Login/Signup
              </button>
            )}
          </Box>

          {user && (
            <Box
              w="50px"
              h="350px"
              position="absolute"
              top="111"
              right="200"
              bottom="0"
              // left="250"
              zIndex="99999999999999"
              // bg="teal"
              display={"flex"}
              justifyContent="space-between"
              mt="10px"
              // border="1px solid green"
            >
              <Box
                borderRadius={"8px"}
                bg="black"
                // borderLeftRadius="8px"
                w="16rem"
                color={"white"}
                display={"flex"}
                flexDirection="column"
                p="10px"
              >
                <Box display={"flex"}>
                  <Button _hover={{ bg: "grey" }} bg={"none"}>
                    My Account
                  </Button>
                </Box>
                <Box display={"flex"}>
                  <Button _hover={{ bg: "grey" }} bg={"none"}>
                    My Basket
                  </Button>
                  <Button _hover={{ bg: "grey" }} bg={"none"}>
                    0 Item
                  </Button>
                </Box>
                <Box display={"flex"}>
                  <Button _hover={{ bg: "grey" }} bg={"none"}>
                    My Orders
                  </Button>

                  <Button _hover={{ bg: "grey" }} bg={"none"}>
                    ₹0
                  </Button>
                </Box>
                <Box display={"flex"}>
                  <Button _hover={{ bg: "grey" }} bg={"none"}>
                    My Smart Basket
                  </Button>
                </Box>
                <Box display={"flex"}>
                  <Button _hover={{ bg: "grey" }} bg={"none"}>
                    My Wallet
                  </Button>
                </Box>
                <Box display={"flex"}>
                  <Button _hover={{ bg: "grey" }} bg={"none"}>
                    Contact Us
                  </Button>
                </Box>
                <Box display={"flex"}>
                  {admin.length >= 10 ? (
                    <NavLink to="/admin_home_page">
                      <Button _hover={{ bg: "grey" }} bg={"none"}>
                        Admin
                      </Button>
                    </NavLink>
                  ) : (
                    <Button _hover={{ bg: "grey" }} bg={"none"}>
                      user
                    </Button>
                  )}
                </Box>
                <Box display={"flex"}>

                  
                  <Button
                    _hover={{ bg: "grey" }}
                    bg={"none"}
                    onClick={() => {
                      localStorage.setItem("token", "t");
                      localStorage.setItem("adminkey", "t");
                      setUser(!user)
                      alert("logout")
                      navigate("/")
                      // onClose();
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
          <Box w="5%" display={{ lg: "block", sm: "none", md: "none" }}>
          <NavLink to="/cart"> <Box w="100%" bg={"red.300"} borderRadius={"8px"}>
              {" "}
              <Center p="15px">
                {" "}
                <FaShoppingBasket style={{ color: "white" }} />
              </Center>{" "}
            </Box>
            </NavLink>
          </Box>
        </Box>

        {/* second Navbar */}
        {/*-----------------------second Navbar ---------------------------------------------- */}
        <Box
          position="relative"
          display={{ lg: "flex", sm:"none", md:"none" }}
          w={{ lg: "100%", sm: "100%", md: "100%" }}
          justifyContent="space-around"
          color={"black"}
        >
          <Button
            onClick={() => setOn(!on)}
            bg="#5e9400"
            _hover={{ bg: "#5e9400" }}
            color={"white"}
           
          >
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
         <ArrowRightIcon boxSize={3} />
          </Button>
        </Box>
        {/* ________________------------------------dropdown---------------------------------------------- */}

        {on && (
          <Box
            w="750px"
            h="400px"
            position="absolute"
            top="111"
            right="0"
            bottom="0"
            left="210"
            zIndex={100}
            // bg="teal"
            display={"flex"}
            justifyContent="space-between"
            mt="10px"
            border="1px solid green"
            borderRadius={"8px"}
          >
            <Box
              h="400px"
              borderLeftRadius="8px"
              w="16rem"
              color={"white"}
              bg="black"
              display={"flex"}
              flexDirection="column"
              p="10px"
            >
              {category.map((i) => (
               <NavLink to="/products" ><Button
                  onMouseEnter={() => {
                    subnav(i);
                  }}
                  _hover={{ bg: "grey" }}
                  bg={"none"}
                >
                  {i}
                </Button>
                </NavLink>
              ))}
            </Box>
            <Box
              w="16rem"
              bg="grey"
              display={"flex"}
              flexDirection="column"
              p="10px"
              color={"black"}
            >
              {category2.map((i) => (
                <Button
                  onMouseEnter={() => {
                    subnav1(i);
                  }}
                  bg="none"
                >
                  {i}
                </Button>
              ))}
            </Box>
            <Box
              borderRadius={"8px"}
              w="16rem"
              bg="white"
              color={"black"}
              display={"flex"}
              flexDirection="column"
              p="10px"
            >
              {category3.map((i) => (
                <Button bg="none">{i}</Button>
              ))}
            </Box>
          </Box>
        )}
      </Box>
      {/* ________________------------------------modal---------------------------------------------- */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {one ? (
          <ModalContent>
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                textDecor="underline"
                fontSize="sm"
                color="blue.500"
                // href = "/singup"
                onClick={() => setOne(!one)}
                // to="/signup"
              >
                {one ? "Signup" : "login"}
              </NavLink>
            </ModalFooter>
          </ModalContent>
        ) : (
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
                    onChange={(e) => setSEmail(e.target.value)}
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
                    onChange={(e) => setSPassword(e.target.value)}
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
                    onChange={(e) => setSname(e.target.value)}
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
              <Link onClick={() => setOne(!one)}>
                {" "}
                {one ? "Signup" : "login"}
              </Link>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </Box>
  );
};
