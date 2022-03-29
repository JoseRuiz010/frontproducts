import React, { useContext, useState } from 'react'
import {NavLink, useNavigate } from 'react-router-dom';
import { ContextGlobal } from '../../reducers/ContextGlobal';
import { TypeRoutes } from '../../types/TypeRoutes';
import './navbar.css'
export const Navbar = () => {
  const navigate=useNavigate()
    const [active, setactive] = useState(true);
    const {logout} = useContext(ContextGlobal)
    const handleClick=()=>{
      
        setactive(!active)
    }

  return (
    <nav>
      <h4 className='logo'>Logo</h4>
      <div className="menu-icon" 
      onClick={()=>handleClick()}>
      <i className="fa-solid fa-bars"></i>
      </div>

      <ul className={`listas  ${active? 'listas-navbar':'listas-navbar-active'}`}>
           
          <li className='nav-items'><NavLink style={({isActive})=>{
            return {
               color: isActive? ' rgb(148, 144, 144)':''
            }
          }} to={TypeRoutes.main}>Productos</NavLink></li>
          <li className='nav-items'><NavLink style={({isActive})=>{
            return {
               color: isActive? ' rgb(148, 144, 144)':''
            }
          }} to={TypeRoutes.users}>Usuarios</NavLink></li>
          <li className='nav-items'><NavLink style={({isActive})=>{
            return {
               color: isActive? ' rgb(148, 144, 144)':''
            }
          }} to={TypeRoutes.roles}>Roles</NavLink></li>
          <li className='nav-items'><NavLink style={({isActive})=>{
            return {
               color: isActive? ' rgb(148, 144, 144)':''
            }
          }} to={TypeRoutes.perfil}>Perfil</NavLink></li>
          <li onClick={()=>{
            logout()
           navigate('/login')
            }}
            className='logout'
            >Logout</li>
      </ul>
    
    </nav>
  )
}
