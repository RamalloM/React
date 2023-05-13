import './App.css';
import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import View from './components/View/View';



function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a la tienda"/>
     <ContenedorProductos/>
    <View/>
    </>
  );
}

export default App;
