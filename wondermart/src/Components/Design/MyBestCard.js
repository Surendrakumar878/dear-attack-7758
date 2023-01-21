import React, { useState } from "react";
import "./MyBest.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
  Stack,
  Select,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Quantity from "./Quantity";

const MyBestCard = ({
  cardimg,
  carddetail,
  cardbrand,
  cardcost,
  selectkg,
  rating,
}) => {
  const [load, setLoad] = useState(false);
  const [replace, setReplace] = useState(true);
  const toast = useToast();
  const style1 = {
    height: "230px",
    margin: "auto",
  };

  const handleAdd = () => {
    setLoad(true);

    setTimeout(() => {
      setLoad(false);
      setReplace(false);
      toast({
        title: "An item has been added to your basket successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <div className="mybestcard">
      <div
        style={{
          border: "0.2px solid #DEDEDE",
          width: "95%",
          borderRadius: "10px",
        }}
      >
        <img src={cardimg} alt="product" style={style1} />
      </div>
      <div
        style={{
          height: "400px",
          width: "95%",
          fontFamily: "ProximaNova,Helvetica,Arial",
        }}
      >
        <p
          style={{ textAlign: "start", marginBottom: "10px", color: "#909090" }}
        >
          {cardbrand}
        </p>
        <p
          style={{
            textAlign: "start",
            marginBottom: "10px",
            fontSize: "16px",
            color: "#202020",
          }}
        >
          {" "}
          {carddetail}
        </p>
        <p style={{ textAlign: "start", color: "#909010" }}>{rating}</p>
        {/* <select style={{width:"100%", height:"25px"}}>
    <option>1 kg-Pouch</option>
    <option style={{border:"1px solid red"}}>500 g-Carton</option>
    <option>1 kg-Pouch</option>
</select> */}
        <Stack spacing={3} mb="10px">
          <Select
            variant="outline"
            placeholder={selectkg}
            border="1px solid red"
          />
        </Stack>
        <p
          style={{
            textAlign: "start",
            textDecoration: "bold",
            fontSize: "25px",
            marginBottom: "30px",
          }}
        >
          {cardcost}
        </p>
        <div style={{ display: "flex" }}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Bookmark-512.png"
            alt="icon"
            style={{ width: "40px" }}
          />

          {replace ? (
            <Button
              w="70%"
              ml="10px"
              background="#FFFFFF"
              border="1px solid red"
              _hover={{ background: "#CE0A0E", color: "#FFFFFF" }}
              onClick={handleAdd}
              isLoading={load}
            >
              ADD
            </Button>
          ) : (
            <Quantity />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBestCard;
