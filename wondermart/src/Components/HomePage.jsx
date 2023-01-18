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
import Slider from './Slider'

const HomePage = () => {
  return (
    <Box>
      <Box  w="100%">
        <Slider/>
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
          border="1px solid red"
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
          border="1px solid red"
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
          border="1px solid red"
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
          templateColumns={{md:"repeat(6, 1fr)",base:"repeat(2, 1fr)"}}
          gap={4}
          border="1px solid red"
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
        <Grid templateColumns={{md:"repeat(6, 1fr)",base:"repeat(2, 1fr)"}} gap={4} mt="20px">
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
        <Flex flexDirection={{base:"column",md:"row"}}>
          <Box
            w={{md:"50%",base:"100%"}}
            h={{md:"400px",base:"400px"}}
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_power-booster-beveragesStorefront_m_251222_560x378_01.jpg"
              alt="cold"
            />
          </Box>
          <Box w={{md:"50%",base:"100%"}} border="1px solid red" h="400px">
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
        <Grid templateColumns={{md:"repeat(6, 1fr)",base:"repeat(2, 1fr)"}} gap={4} mt="20px">
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
          templateColumns={{md:"repeat(4, 1fr)",base:"repeat(2, 1fr)"}}
          gap={4}
          border="1px solid red"
          mt="20px"
        >
          <GridItem
            w="100%"
            h={{md:"200px"}}
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
        <Flex flexDirection={{base:"column",md:"row"}}>
          <Box
            w={{md:"50%",base:"100%"}}
            h={{md:"400px",base:"400px"}}
            border="1px solid #E1E1E1"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Image src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hpmakeup-mania-_beautyStorefront_m_251222_560x378_01.jpg" />
          </Box>
          <Box w={{md:"50%",base:"100%"}} border="1px solid red" h="400px">
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
        <Grid templateColumns={{md:"repeat(6, 1fr)",base:"repeat(2, 1fr)"}} gap={4} mt="20px">
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
              Brand Store
            </Text>
          </Box>
        </Box>
        <Grid templateColumns={{md:"repeat(6, 1fr)",base:"repeat(2, 1fr)"}} gap={4} mt="20px">
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
      </Box>
    </Box>
  );
};

export default HomePage;
