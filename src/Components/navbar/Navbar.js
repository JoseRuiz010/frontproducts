import React, { useState } from 'react'
import './navbar.css'
export const Navbar = () => {
    const [active, setactive] = useState(true);
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
          <li className='nav-items'>Home</li>
          <li className='nav-items'>Productos</li>
          <li className='nav-items'>Usuarios</li>
          <li className='nav-items'>Roles</li>
      </ul>
    
    </nav>
  )
}
