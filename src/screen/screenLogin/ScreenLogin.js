import React, { useContext } from 'react'
import { Menssaje } from '../../Components/menssaje/Menssaje'
import { useFetchHooks } from '../../hooks/useFetchHooks'
import { useForm } from '../../hooks/useForm'
import { ContextGlobal } from '../../reducers/ContextGlobal'
import { typeFetch } from '../../types/TypesFetch'
import './screenLogin.css'
export const ScreenLogin = () => {

  const { login, error } = useContext(ContextGlobal)

  const { onchange, data } = useForm({
    email: 'admin2@gmail.com',
    password: '1234'
  })

  const handleChange = (e) => {
    e.preventDefault();
    onchange(e.target)
  }

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



  const LoginUser = async () => {

    const user = await getData(typeFetch.urlPostLogin, data)
    console.log(user);
    login(user)
  }

  return (
    <div className="fondo-login">

      <div className='container-login'>
        <h3 className='title-sesion'>Bienvenido</h3>
        {
          error && <Menssaje menssaje={error} />
        }
        <div className="inputs">
          <input type="text" onChange={handleChange} name="email" className="input" value={data.email} />
          <input type="password" onChange={handleChange} name="password" className="input" value={data.password} />
          <button className='buttonLogin' onClick={() => LoginUser()}>Login</button>
        </div>
        <p className='registrarme'>Registrarse</p>


      </div>
    </div>
  )
}
