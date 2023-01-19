import logo from './logo.svg';
import './App.css';
import PageRouter from './Router/pageRouter'
import { Navbar } from './Components/navabar/Navbar';
import { Footer } from './Components/footer/Footer';
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <PageRouter/>
    <Footer/> */}
    <Products/>
    </div>
  );
}

export default App;
