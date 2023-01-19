import logo from './logo.svg';
import './App.css';
import PageRouter from './Router/pageRouter'
import { Navbar } from './Components/navabar/Navbar';
import { Footer } from './Components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <PageRouter/>
    <Footer/>
    </div>
  );
}

export default App;