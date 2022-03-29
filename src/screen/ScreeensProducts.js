import React, { useContext } from 'react'
import './screenProductos.css'
  
import { useFetchHooks } from '../hooks/useFetchHooks'
import { typeFetch } from '../types/TypesFetch'
import { ContextGlobal } from '../reducers/ContextGlobal'
import { Card } from '../Components/card/Card'
import { Outlet } from 'react-router-dom'

export const ScreeensProducts = () => {
     const {data, loading, error }= useFetchHooks(typeFetch.urlProducts)       
    
    if(error) return <div>{error}</div>;
    if(loading) return <div>Cargando...</div>

  return (
      <div className='content-productos'>
            {
              data.map(p=>(
                  <Card {...p} key={p._id}/>
                ))
          }      
      
      </div>
    
    
  )
}
