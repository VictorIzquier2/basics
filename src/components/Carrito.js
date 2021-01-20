import React from 'react';
import '../assets/css/Carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProductos}) => {

  return(
  <div className='carrito'>
    <h2 className='subheader'>Tu carrito de compras</h2>
    {carrito.length === 0
    ?
      <p className='subheader'>No hay elementos en el carrito</p>
    : carrito.map(producto => (
      <Producto
        key={producto.id}
        producto={producto}
        carrito={carrito}
        agregarProductos={agregarProductos}
      />
      ))
    }
  </div>
  )
}
export default Carrito;