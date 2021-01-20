import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  
  
  // Crear un listado de productos ** STATE 1 **
  
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 }
  ]);

  // Crear un carrito de compras ** STATE 2 **
  const [carrito, agregarProductos] = useState([]);
  
  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <div className="App">
      
      <Header
        titulo= 'Tienda Virtual'
      />

      <h1>Lista de Productos</h1>
      <ul>
      {productos.map((producto) => {
        return <Producto
                key={producto.id}
                producto = {producto}
                productos = {productos}
                carrito = {carrito}
                agregarProductos={agregarProductos}
               />
      })}
      </ul>

      <Carrito
        carrito={carrito}
        agregarProductos={agregarProductos}
      />

      <Footer
        fecha={fecha} 
      />

    </div>
  );
}

export default App;
