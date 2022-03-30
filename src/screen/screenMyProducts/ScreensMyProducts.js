import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../Components/card/Card';
import { ContextGlobal } from '../../reducers/ContextGlobal';
import './screenMyProduct.css' 

export const ScreensMyProducts = () => {
     const [productos, setproductos] = useState([])
   const {user}=useContext(ContextGlobal);
  
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
      <h1 className='title-My-Product'>My products</h1>
      <div className='content-productos'>
            {
              productos.map(p=>(
                  <Card {...p} key={p._id}/>
                ))
          }      
      
      </div>
    </div>
  )
}
