import React, { useContext } from 'react'
import './screenProductos.css'
  
import { useFetchHooks } from '../hooks/useFetchHooks'
import { typeFetch } from '../types/TypesFetch'
import { ContextGlobal } from '../reducers/ContextGlobal'
import { Card } from '../Components/card/Card'
import { Outlet } from 'react-router-dom'
import { Carrito } from '../Components/carrito/Carrito'

export const ScreeensProducts = () => {
     const {data, loading, error }= useFetchHooks(typeFetch.urlProducts)       
    
    if(error) return <div>{error}</div>;
    if(loading) return <div>Cargando...</div>

  return (
    <div className='content-productos'>
        <div className="carrito-icon">
          <Carrito />
          </div>
            {
              data.map(p=>(
                  <Card producto={p} key={p._id}/>
                ))
          }      
      </div>
    
    
  )
}
