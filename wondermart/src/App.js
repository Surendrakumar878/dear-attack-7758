import logo from './logo.svg';
import './App.css';
import PageRouter from './Router/pageRouter'
import { Navbar } from './Components/navabar/Navbar';
import { Footer } from './Components/footer/Footer';
import { Box } from '@chakra-ui/react';



function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar/>
      <PageRouter/>
     
     {/* <Cart/>
     <Checkout/>
     <Pay/> */}
=======
      <Box w="100%" bg="white" pb="120px"><Navbar/> </Box>
      <PageRouter/>
     <Footer/>
>>>>>>> 56db8e7fd8659c395f946d27652642f218a10a30
    </div>
  );
}

export default App;