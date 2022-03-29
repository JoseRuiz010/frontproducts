import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { ContextGlobal } from '../reducers/ContextGlobal'

export const PublicRoute = ({children}) => {
 
  const {user} = useContext(ContextGlobal)
  console.log(user);
    return (user?
    <Navigate to={'/'}/>:
    children
)}
