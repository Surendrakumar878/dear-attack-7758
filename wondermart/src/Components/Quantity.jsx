import { Button,Text,Box ,useToast} from '@chakra-ui/react'
import React,{useState} from 'react'

function Quantity() {
    const [count,setCount]=useState(1)
    const toast = useToast();
    const handledeacrese=()=>{
        if(count!==0){

            setCount((prev)=>prev-1)
        
        toast({
            title: "Quantity of this item has been reduced.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }

    }
    const handleincrease=()=>{
        setCount((prev)=>prev+1)
        toast({
            title: "An item has been added to your basket successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
    }
  return (
    <Box w="70%"  display="flex" border="1px solid red" gap="0px" ml="20px" background="#CE0A0E" >
        
        <Button  color="#FFFFFF" w="60px" _hover={{background:"none"}} background="#CE0A0E" onClick={handledeacrese} >-</Button>
        <Button background="#FFFFFF">{count}</Button>
        <Button background="#CE0A0E" color="#FFFFFF" w="60px" _hover={{background:"none"}} onClick={handleincrease}>+</Button>
    </Box>
  )
}

export default Quantity