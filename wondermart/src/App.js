import logo from './logo.svg';
import './App.css';
import PageRouter from './Router/pageRouter'
import { Navbar } from './Components/navabar/Navbar';
import { Footer } from './Components/footer/Footer';
import { Box } from '@chakra-ui/react';



function App() {
  return (
    <div className="App">

      <Box w="100%" bg="white" pb="120px"><Navbar/> </Box>
      <PageRouter/>
     <Footer/>
    </div>
  );
}

export default App;