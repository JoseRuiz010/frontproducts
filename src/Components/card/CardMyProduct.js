import React, { useContext } from 'react'
import './card.css'
import numeral from 'numeral'
import { useNavigate } from 'react-router-dom'
 export const CardMyProduct = ({producto}) => {
  const{name,imgUrl,price,category}= producto
  console.log(producto);
  const navigate=useNavigate()  

    async function EliminarProduct(){
       const data= await fetch('http://localhost:3000/products/'+producto._id,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
          },
           
       }) 
       alert(`El producto ${name} fue eliminado`);
       navigate('/')
     }
     

  return (
    <div className='content-card'>
        <img alt='compiuter' src={imgUrl}/>
        <h4 className="nombre">{name}</h4>
        <p>{category}</p>
        <h4 className='precio'>{numeral(price).format('$0,0.0')}</h4>
        <div className="buttons" style={{
          display:'flex',
          alignItems:'center',
          
          width:'80%',
          marginBottom:'7px'
        }}>
        {/* <button style={{
      backgroundColor:'#48A54C',
      color:'white',
      fontWeight:'bold',
      cursor:'pointer',
      width:'45%',
      height:'30px',
      borderRadius:'7px',
      marginBottom:'5px',
      border:'none',
       margin:'0 auto'
      
    }} onClick={()=>EliminarProduct()} ><i class="fa-solid fa-pencil"></i></button>
        */}
        <button style={{ 
          backgroundColor:'red',
          color:'white',
          fontWeight:'bold',
          cursor:'pointer',
          width:'45%',
          height:'30px',
          borderRadius:'7px',
          border:'none',
          marginBottom:'5px',
          margin:'0 auto'
        }} onClick={()=>EliminarProduct()} ><i class="fa-solid fa-trash-can"></i></button>
        </div>
        
    </div>
  )
}
