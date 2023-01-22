import { Button,Text,Box ,useToast} from '@chakra-ui/react'
import axios from 'axios';
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity } from '../../Redux/cartReducer/action';
// import { cart, updateCartQuantity } from '../Redux/cartReducer/action';

function Quantity({Qty,id}) {
  // console.log("QUANTITY ID",id);
     const data = useSelector((store) =>  store.cartReducer.data)
    // console.log("quantity =>",Qty) 
    // const [count,setCount]=useState(1)
    
    const dispatch =  useDispatch()
    const toast = useToast();

    const handledeacrese=(id)=>{
        if(Qty!==0){
            // setCount((prev)=>prev-1)
        var newData =  data.find((ele) => ele._id === id)
        // console.log("newData => ",newData);
        newData.quantity =  newData.quantity -1  
        console.log(id);
        toast({
            title: "Quantity of this item has been reduced.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }          
        dispatch(updateCartQuantity(id,newData))
    }
    const handleincrease=(id)=>{
        // setCount((prev)=>prev+1)
        toast({
            title: "An item has been added to your basket successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          var newData =  data.find((ele) => ele._id === id)
          console.log("newData => ",newData);
          newData.quantity = newData.quantity+1 
          dispatch(updateCartQuantity(id,newData))
    }
  return (
    <Box w="70%"  display="flex" border="1px solid red" gap="0px" ml="20px" background="#CE0A0E" >
        
        <Button  color="#FFFFFF" w="60px" _hover={{background:"none"}} background="#CE0A0E" onClick={() => handledeacrese(id)} >-</Button>
        <Button background="#FFFFFF">{Qty}</Button>
        <Button background="#CE0A0E" color="#FFFFFF" w="60px" _hover={{background:"none"}} onClick={() => handleincrease(id)}>+</Button>
    </Box>
  )
}

export default Quantity