import React from 'react'
import './screenProductos.css'
import { Card } from '../Components/navbar/card/Card'
 
import { useFetchHooks } from '../hooks/useFetchHooks'
import { typeFetch } from '../types/TypesFetch'

export const ScreeensProducts = () => {

    const products= useFetchHooks(typeFetch.urlProducts)      
     console.log(products);
    
     if(!products) return <div>Cargando...</div>
  return (
    <div className='content-productos'>

        {
            products.map(p=>(
                <Card {...p} key={p._id}/>

            ))
        }

       
    </div>
  )
}
