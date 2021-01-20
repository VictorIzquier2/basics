import React, {Fragment} from 'react';

const Producto = ({producto, carrito, agregarProductos, productos}) => {

  const {nombre, precio, id} = producto;

  //Agregar un producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id);
    agregarProductos([
      ...carrito,
      ...producto
    ]);      
  }

  const deseleccionarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    agregarProductos(productos)
  }
  
  return(
    <Fragment>
      <br/>
      <li>{nombre}</li>
      <span>desde {precio}€</span>
      <br/>
      <br/>
      {productos
      ?
        (
          <button 
            type='button'
            onClick={() => seleccionarProducto(id)}
          >Comprar</button>
        )
      :
        (
          <button 
            type='button'
            onClick={() => deseleccionarProducto(id)}
          >Eliminar</button>
        )
      }
      <br/>
      <br/>
    </Fragment>
  )
}
export default Producto;