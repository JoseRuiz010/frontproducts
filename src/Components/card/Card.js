import React, { useContext } from 'react'
import './card.css'
import numeral from 'numeral'
import { ContextGlobal } from '../../reducers/ContextGlobal'
export const Card = ({producto}) => {
  const{name,imgUrl,price,category}= producto
  const {AgregarAlCarrito,QuitarAlCarrito} = useContext(ContextGlobal);
  return (
    <div className='content-card'>
        <img alt='compiuter' src={imgUrl}/>
        <h4 className="nombre">{name}</h4>
        <p>{category}</p>
        <h4 className='precio'>{numeral(price).format('$0,0.0')}</h4>
        <button style={{
          backgroundColor:'#440f87',
          color:'white',
          fontWeight:'bold',
          cursor:'pointer',
          width:'90%',
          height:'30px',
          borderRadius:'7px',
          marginBottom:'5px'
           }} onClick={()=>AgregarAlCarrito(producto)} >Agregar</button>
    </div>
  )
}
