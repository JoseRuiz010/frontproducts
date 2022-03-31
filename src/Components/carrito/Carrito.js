import React, { useContext, useState } from 'react'
import { ContextGlobal } from '../../reducers/ContextGlobal';
import './carrito.css'
export const Carrito = () => {
    const [visible, setvisible] = useState(false);

    const  changeVisible=()=>{
        setvisible(!visible)
    }
    return (
        <div>
            {!visible&&<IconCarrito changeVisible={changeVisible}/>}
            {visible && (<ContentCarrito  changeVisible={changeVisible}/>)}
        </div>
    )
}
const IconCarrito=({changeVisible})=>{
  
return(
<div className="imgCarrito" onClick={changeVisible} >

  <i class="fa-solid fa-cart-shopping"></i>
 </div>)
}

const ContentCarrito = ({changeVisible}) => {
    const {carrito,QuitarAlCarrito} = useContext(ContextGlobal);

    return (
        < div  className='cuerpoItems'>
           <i className="fa-solid fa-xmark cerrar-btn" onClick={changeVisible}></i>

            <div className="Carrito">
                <ul>
                    {
                     carrito.length===0&&<div>No hay productos seleccionado</div>    
                    }
                    {
                        carrito.map(c =>(
                            <li className='itemsCarrito'>{c.producto.name} -{c.cantidad}
                            <i  className="fa-solid fa-trash tacho" onClick={()=>QuitarAlCarrito(c.producto)}></i>
                            </li>

                        ))
                    }
                </ul>
                <br />
                <h4>Total: </h4>
            </div>
        </div >
    )
}