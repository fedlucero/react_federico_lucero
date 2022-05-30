import './App.css';
import Navbar from './components/menu/NavBar';
import Footer from './components/footer/Footer';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div className='logoXl'>
        </div>
        <p>
          Generative Art
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
