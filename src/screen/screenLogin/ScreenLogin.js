import React, { useContext } from 'react'
import { ContextGlobal } from '../../reducers/ContextGlobal'

export const ScreenLogin = () => {
  
  const {login} = useContext(ContextGlobal)
  return (
    <div>
      ScreenLogin
   <button onClick={()=>login()}>Login</button>
    </div>
  )
}
