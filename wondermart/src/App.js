import logo from "./logo.svg";
import "./App.css";
import PageRouter from "./Router/pageRouter";
import { Navbar } from "./Components/navabar/Navbar";
import { Footer } from "./Components/footer/Footer";
import { Box } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Box w="100%" bg="white" pb="120px"><Navbar/> </Box>
      <PageRouter/>
       <Footer/>
     
=======
      {/* <Navbar/>
      <PageRouter/> */}

      {/* <Cart/>
     <Checkout/>
     <Pay/> */}

      <Box w="100%" bg="white" pb="160px">
        <Navbar />{" "}
      </Box>
      <PageRouter />
>>>>>>> master
    </div>
  );
}

export default App;
