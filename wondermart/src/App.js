import logo from './logo.svg';
import './App.css';
import PageRouter from './Router/pageRouter'
import { Navbar } from './Components/navabar/Navbar';
import { Footer } from './Components/footer/Footer';
import { Pay } from './Components/Pay';
import  Cart  from './Components/Cart';
import { Checkout } from './Components/Checkout';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <PageRouter/>
     <Footer/> */}
     <Cart/>
     <Checkout/>
     <Pay/>
    </div>
  );
}

export default App;