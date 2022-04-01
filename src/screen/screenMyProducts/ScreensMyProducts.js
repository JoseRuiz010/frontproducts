import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '../../Components/card/Card';
import { CardMyProduct } from '../../Components/card/CardMyProduct';
import { ContextGlobal } from '../../reducers/ContextGlobal';
import { TypeRoutes } from '../../types/TypeRoutes';
import './screenMyProduct.css' 

export const ScreensMyProducts = () => {
     const [productos, setproductos] = useState([])
   const {user}=useContext(ContextGlobal);
   const navigate=useNavigate()

   useEffect(() => {

   async function getData(){
      const data= await fetch('http://localhost:3000/products/productByUser/'+user.user._id).then(data=>data.json()) 
      setproductos(data)
    }
    getData()
   }, [])
   
    if(productos.length===0) return <div>No se encontraron productos</div>
    if(productos.length<1) return <div>Cargando...</div>
  return(
    <div>
      <h1 className='title-My-Product'>Mis Productos</h1>
      <button style={{
        background:'#48A54C',
        border:'none',
        padding:'13px',
        borderRadius:'7px',
        marginLeft:'75px',
        marginTop:'30px',
        fontWeight:'bold',
        color:'white',
        cursor:'pointer',
        fontSize:'13px'
      }}
      onClick={()=>navigate(TypeRoutes.newProduct)
      }
      >Nuevo Producto</button>
      <div className='content-productos'>
            {
              productos.map(p=>(
                  <CardMyProduct producto={p} key={p._id}/>
                ))
          }      
      
      </div>
    </div>
  )
}
