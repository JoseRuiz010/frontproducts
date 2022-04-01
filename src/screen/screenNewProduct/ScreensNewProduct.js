import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { ContextGlobal } from '../../reducers/ContextGlobal'
import { TypeRoutes } from '../../types/TypeRoutes'
import { typeFetch } from '../../types/TypesFetch'
import'./newProduct.css'
export const ScreensNewProduct = () => {
    const navigate=useNavigate()
    const {user} = useContext(ContextGlobal)
    const [imagen, setimagen] = useState('https://d2jnzwd77blap.cloudfront.net/wp-content/uploads/2021/11/11105217/sin_imagen-6.png')
    const onchangeImagen=(url)=>{
        setimagen(url.target.value)
    }
    const { onchange, data } = useForm({
        name: '',
        category: 'Computer',
        price:'',
        imgUrl:'',
        user:user.user._id
      })

    async function getData(url) {
        const body = {
          method: url.metodo,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        console.log(body);
        return await fetch(url.url, body).then(res => res.json())
      }
        const handleSubmit=async(e)=>{
             
        const res= await getData(typeFetch.urlAddProducts)
        console.log(res);
        navigate(TypeRoutes.misProductos)
        }
    return (
        <div className='containerNewProduct'>

                <div className="img">
                    <img className='imagen' src={imagen} alt="" />
                </div>
            <div className="contentInput">
                <div className="Itemsinput">
                    <label>Descripcion</label>
                    <textarea  required rows={2} onChange={(e)=>onchange(e.target)} name='name' type="text" />
                </div>
                <div className="Itemsinput">
                    <label>Imagen URL</label>
                    <input required type="url" name='imgUrl' onChange={(e)=>{onchangeImagen(e);onchange(e.target)}}/>
                </div>
                <div className="Itemsinput">
                    <label>Precio</label>
                    <input required type="text" onChange={(e)=>onchange(e.target)} name='price'/>
                </div>
                <div className="Itemsinput">
                    <label>Categoria</label>
                    <input type="text" />
                </div>
                <button 
                onClick={(e)=>handleSubmit(e)}
                type={'submit'}
                style={{
                    background:'#48a54c',
                    width:'90%',
                    margin:'0 auto',
                    marginTop:'10px',
                    color:'white',
                    fontWeight:'bold',
                    fontSize:'15px',
                    height:'35px',
                    borderRadius:'7px',
                    border:'none',
                    cursor:'pointer'
                }}>Guardar</button>
            </div>
        </div>
    )
}
