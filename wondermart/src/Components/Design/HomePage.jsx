import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  Wrap,
  WrapItem,
  Flex,
  Square,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./Home.css";
import Slider from "./Slider";
import AnotherSlider from "./AnotherSlider";

import Imagecarousel from "./Imagecarousel.js";
import Best from "./Best.js";
import SimpleSlider from "./SlickCarousel";
// import {Navbar} from "../navabar/Navbar";
import {Footer} from '../footer/Footer'



const HomePage = () => {
  return (
    <Box>

      
      
    
      <Box w="100%">
        <Slider />
      </Box>
      
      
      <Box w="80%" margin="auto">
        <Grid
          templateColumns={{ md: "repeat(6, 1fr)", base: "repeat(2, 1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem w="100%" h="50">
            <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_01.png" />
          </GridItem>
          <GridItem w="100%">
            <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_02.png" />
          </GridItem>
          <GridItem w="100%">
            <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_03.png" />
          </GridItem>
          <GridItem w="100%">
            <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_04.png" />
          </GridItem>
          <GridItem w="100%">
            <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_05.png" />
          </GridItem>
          <GridItem w="100%">
            <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_06.png" />
          </GridItem>
        </Grid>
        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              My Smart Basket{" "}
            </Text>
          </Box>
        </Box>
        <Imagecarousel />

        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Bank Offers{" "}
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2,1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem
            w="100%"
            h={{ md: "200px" }}
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_onecard_360_160123.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_hsbc_360_160123.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_indusind-500_360_160123.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_paytm-wallet_360_160123.jpg" />
          </GridItem>
        </Grid>
        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Best Sellers{" "}
            </Text>
          </Box>
        </Box>
        <Best />

        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Most Popular{" "}
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(1,1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem
            w="100%"
            h="200px"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_winter-mostpopularStorefront_m_480_251222_01.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_stationy-mostpopularStorefront_m_480_251222_02.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_winter-loc-mostpopularStorefront_m_480_251222_03.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_say-mostpopularStorefront_m_480_251222_04.jpg" />
          </GridItem>
        </Grid>

        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Top Offers{" "}
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(1,1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem
            w="100%"
            h="200px"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            mb={{ base: "20px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_dow-topoffersStorefront_m_480_251222_01.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_big-packs-topoffersStorefront_m_480_251222_02.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_combos-topoffersStorefront_m_480_251222_03.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_30-corner-topoffersStorefront_m_480_251222_04.jpg" />
          </GridItem>
        </Grid>

        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Fruits & Vegetables{" "}
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(6, 1fr)", base: "repeat(2, 1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem
            w="100%"
            h="100px"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_organic-fnc-fnv_Storefront_m_251222_01.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-fruits-fnv_Storefront_m_251222_02.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-vegetables-fnv_Storefront_m_251222_03.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_cuts-sprouts-fnv_Storefront_m_251222_04.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_exotic-fruits-fnv_Storefront_m_251222_05.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_herbs-seasonings-fnv_Storefront_m_251222_06.jpg" />
          </GridItem>
        </Grid>

        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Your Daily Staples{" "}
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(6, 1fr)", base: "repeat(2, 1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem
            w="100%"
            h="100px"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_atta-flour-staplesStorefront_m_480_251222_01.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_rice-staplesStorefront_m_480_251222_02.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dals-pulses-staplesStorefront_m_480_251222_03.jpg" />
          </GridItem>
          <GridItem w="100%" border="1px solid #E1E1E1">
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_cooking-oils-staplesStorefront_m_480_251222_04.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dry-fruits-staplesStorefront_m_480_251222_05.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_salt-staplesStorefront_m_480_251222_06.jpg" />
          </GridItem>
        </Grid>

        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Beverages{" "}
            </Text>
          </Box>
        </Box>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box
            w={{ md: "50%", base: "100%" }}
            h={{ md: "400px", base: "400px" }}
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_power-booster-beveragesStorefront_m_251222_560x378_01.jpg"
              alt="cold"
            />
          </Box>
          <Box w={{ md: "50%", base: "100%" }} h="400px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                w="100%"
                h="185"
                border="1px solid #E1E1E1"
                _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_tea-beveragesStorefront_m_251222_275x184_02.jpg" />
              </GridItem>
              <GridItem
                w="100%"
                h="185"
                border="1px solid #E1E1E1"
                _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_health-drinks-beveragesStorefront_m_251222_275x184_03.jpg" />
              </GridItem>
              <GridItem
                w="100%"
                h="190"
                border="1px solid #E1E1E1"
                _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_fruity-beveragesStorefront_m_251222_275x184_04.jpg" />
              </GridItem>
              <GridItem
                w="100%"
                h="190"
                border="1px solid #E1E1E1"
                _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_soft-drinks-beveragesStorefront_m_251222_275x184_05.jpg" />
              </GridItem>
            </Grid>
          </Box>
        </Flex>
        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Snack Store{" "}
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(6, 1fr)", base: "repeat(2, 1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem
            w="100%"
            h="100px"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_namkeens-snacksStorefront_m_480_251022_01.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg" />
          </GridItem>
          <GridItem w="100%" border="1px solid #E1E1E1">
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_chocolates-snacksStorefront_m_480_251022_06-13.jpg" />
          </GridItem>
        </Grid>
        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Cleaning & Household
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2, 1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem
            w="100%"
            h={{ md: "200px" }}
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_cleaners-disfec_cleaningStorefront_m_480_251222_01.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_detergebts-favric-cleaningStorefront_m_480_251222_02.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_disposable-bags-cleaningStorefront_m_480_251222_03.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_fresheners-repellem-cleaningStorefront_m_480_251222_04.jpg" />
          </GridItem>
        </Grid>
        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text
              textAlign="center"
              fontSize="24px"
              color="#444444"
              textDecoration="none solid rgb(68,68,68)"
            >
              Beauty & Hygiene{" "}
            </Text>
          </Box>
        </Box>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box
            w={{ md: "50%", base: "100%" }}
            h={{ md: "400px", base: "400px" }}
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hpmakeup-mania-_beautyStorefront_m_251222_560x378_01.jpg" />
          </Box>
          <Box w={{ md: "50%", base: "100%" }} h="400px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                w="100%"
                h="185"
                border="1px solid #E1E1E1"
                _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_min-40-beautyStorefront_m_251222_275x184_02.jpg" />
              </GridItem>
              <GridItem
                w="100%"
                h="185"
                border="1px solid #E1E1E1"
                _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_under-199-beautyStorefront_m_251222_275x184_03.jpg" />
              </GridItem>
              <GridItem
                w="100%"
                h="190"
                border="1px solid #E1E1E1"
                _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_fantastic-deos-perfumes-beautyStorefront_m_251222_275x184_04.jpg" />
              </GridItem>
              <GridItem
                w="100%"
                h="190"
                border="1px solid #E1E1E1"
                _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_shaving-carebeautyStorefront_m_251222_275x184_05.jpg" />
              </GridItem>
            </Grid>
          </Box>
        </Flex>
        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Home & Kitchen Essentials
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(6, 1fr)", base: "repeat(2, 1fr)" }}
          gap={4}
          mt="20px"
          mb="30px"
        >
          <GridItem
            w="100%"
            h="100px"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_namkeens-snacksStorefront_m_480_251022_01.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg" />
          </GridItem>
          <GridItem w="100%" border="1px solid #E1E1E1">
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg" />
          </GridItem>
          <GridItem
            w="100%"
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_chocolates-snacksStorefront_m_480_251022_06-13.jpg" />
          </GridItem>
        </Grid>
        <AnotherSlider />
        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
              Brand Store
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(6, 1fr)", base: "repeat(2, 1fr)" }}
          gap={4}
          mt="20px"
        >
          <GridItem
            w="100%"
            h="140px"
            _hover={{
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            background="#FFFFFF"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="20px"
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_01.jpg?tr=w-1920,q=80" />
          </GridItem>
          <GridItem
            w="100%"
            _hover={{
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            background="#FFFFFF"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="20px"
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_02.jpg?tr=w-1920,q=80" />
          </GridItem>
          <GridItem
            w="100%"
            _hover={{
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            background="#FFFFFF"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="20px"
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_03.jpg?tr=w-1920,q=80" />
          </GridItem>
          <GridItem
            w="100%"
            _hover={{
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            background="#FFFFFF"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="20px"
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_04.jpg?tr=w-1920,q=80" />
          </GridItem>
          <GridItem
            w="100%"
            _hover={{
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            background="#FFFFFF"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="20px"
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_05.jpg?tr=w-1920,q=80" />
          </GridItem>
          <GridItem
            w="100%"
            _hover={{
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            background="#FFFFFF"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="20px"
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_06.jpg?tr=w-1920,q=80" />
          </GridItem>
        </Grid>
        <Box
          borderBottom="1px solid #DEDEDE"
          mt="40px"
          h="45px"
          fontFamily="ProximaNovaA-Regular"
        >
          <Box pb="20px">
            <Text textAlign="center" fontSize="24px" color="#444444">
            Featured Recipes
            </Text>
          </Box>
        </Box>
        <Box h={{md:"400px"}} border="1px solid red" borderRadius="20px" mt="20px">
          <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_1_dec_w2_14012023.jpg?tr=w-1200,q=80" alt="banner" borderRadius="20px"/>

        </Box>
        <Box h="900px" border="1px solid #000000" mt="40px" pl={{md:"100px"}} pr={{md:"100px"}} display={{base:"none",md:"block"}}>
          <Text fontWeight="bold" textAlign="start" >bigbasket – online grocery store</Text>
          <Text textAlign="start" >Did you ever imagine that the freshest of fruits and vegetables, top quality pulses and food grains, dairy products and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues. Add to this the convenience of finding all your requirements at one single source, along with great savings, and you will realize that bigbasket- India’s largest online supermarket, has revolutionized the way India shops for groceries. Online grocery shopping has never been easier. Need things fresh? Whether it’s fruits and vegetables or dairy and meat, we have this covered as well! Get fresh eggs, meat, fish and more online at your convenience. Hassle-free Home Delivery options

We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks branded foods reach you in time.

Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.
Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.
BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.
Read more..
India’s biggest Online Supermarket
bigbasket.com believes in providing the highest level of customer service and is continuously innovating to meet customer expectations. Our On-time Guarantee is one such assurance where we refund 10% of the bill value if the delivery is delayed. For all your order values above Rs. 1000, we provide free delivery. A wide range of imported and gourmet products are available through our express delivery and slotted delivery service. If you ever find an item missing on delivery or want to return a product, you can report it to us within 48 hours for a ‘no-questions-asked’ refund.

Best quality products for our quality-conscious customers.

bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer trust and confidence, by taking feedback and giving our customers what they want. We have added the convenience of pre-cut fruits in our Fresho range. If it’s a product category you’re looking to shop from, we’ve made it convenient for you to access all products in a section easily. For instance, if you’re looking for beverages, you can order from a long list of beverages that include cool drinks, hot teas, fruit juices and more.

We are proud to be associated closely with the farmers from whom we source our fresh products. Most of our farm-fresh products are sourced directly from farmers, which not only ensures the best prices and freshest products for our customers but also helps the farmers get better prices. With more than 80 Organic Fruits and Vegetables and a wide range of organic staples, bigbasket has the largest range in the organic products category.

When it comes to payment, we have made it easy for our customers can pay through multiple payment channels like Credit and Debit cards, Internet Banking, e-wallets and Sodexo passes or simply pay Cash on Delivery (COD).The convenience of shopping for home and daily needs, while not compromising on quality, has made bigbasket.com the online supermarket of choice for thousands of happy customers across India.</Text>

        </Box>

       

        
      </Box>
      <Footer/>
    </Box>
  );
};

export default HomePage;
