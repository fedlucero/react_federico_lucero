import './App.css';
import Navbar from './components/menu/NavBar';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <div className='container'>
      <ItemListContainer saludo="Hola"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
