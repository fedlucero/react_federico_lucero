import './App.css';
import Navbar from './components/menu/NavBar';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <div className='container'>
      <ItemListContainer saludo="Hola"/>
      <ItemDetailContainer/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
