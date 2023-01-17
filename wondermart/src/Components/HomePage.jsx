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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./Home.css";

const HomePage = () => {
  return (
    <Box>
      <Box border="1px solid red" w="100%">
        banner
      </Box>
      <Box w="80%" margin="auto">
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap={4}
          border="1px solid red"
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
        <Box border="1px solid red" mt="40px" h="45px">
          <Box>
            <Text textAlign="center">My Smart Basket</Text>
          </Box>
          <Box border="1px solid red">
            <Text textAlign="end">show more</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
