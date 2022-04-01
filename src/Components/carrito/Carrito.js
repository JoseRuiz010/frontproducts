import React, { useContext, useState } from 'react'
import { ContextGlobal } from '../../reducers/ContextGlobal';
import './carrito.css'
import numeral from 'numeral';
export const Carrito = () => {
    const [visible, setvisible] = useState(false);

    const changeVisible = () => {
        setvisible(!visible)
    }
    return (
        <div>
            {!visible && <IconCarrito changeVisible={changeVisible} />}
            {visible && (<ContentCarrito changeVisible={changeVisible} />)}
        </div>
    )
}
const IconCarrito = ({ changeVisible }) => {

    return (
        <div className="imgCarrito" onClick={changeVisible} >
            <i class="fa-solid fa-cart-shopping"></i>
        </div>)
}

const ContentCarrito = ({ changeVisible }) => {
    const { carrito, QuitarAlCarrito } = useContext(ContextGlobal);
    
    return (
        < div className='cuerpoItems'>
            <i className="fa-solid fa-xmark cerrar-btn" onClick={changeVisible}></i>

            <div className="Carrito">
                <h3 className='titleCarrito'>Carrito</h3>

                {
                    carrito.prod.length === 0 ? <div style={{ color: 'red',textAlign:'center' }}>No hay productos seleccionado</div> :
                    <table className='table'>
                    
                    <thead>
                        <tr>
                            <th scope='col'>Producto</th>
                            <th scope='col'>Cantidad</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                                carrito.prod.map(c => (

                                    <tr className='dataTable'>
                                        <th scope="row">{c.producto.name}</th>
                                        <td>{c.cantidad}</td>
                                        <td><i className="fa-solid fa-trash tacho" onClick={() => QuitarAlCarrito(c.producto)}></i></td>

                                    </tr>

                                ))


                        }

                    </tbody>
                </table>
               }
                <hr className='division' />
                <h4 className='total'><b>Total:</b> {numeral(carrito.total).format('$0,0.00')}</h4>
            </div>
        </div >
    )
}