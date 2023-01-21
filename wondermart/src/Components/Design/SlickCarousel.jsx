import { Box,Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <Box>
        
        <Slider {...settings}>
          <Box display="flex" flexDirection="column" border="1px solid red">
            <Box w="32%" border="1px solid red" h="200px" >
            
            </Box>
            <Box w="32%" border="1px solid red"  h="200px">
          
              
            </Box>
            <Box w="32%" border="1px solid red"  h="200px">
          
            </Box>
          </Box>
         
        </Slider>
      </Box>
    );
  }
}