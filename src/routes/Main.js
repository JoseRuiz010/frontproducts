import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ScreenLogin } from '../screen/screenLogin/ScreenLogin'
import { TypeRoutes } from '../types/TypeRoutes'
import { Dashboard } from './Dashboard'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const Main = () => {
    return (
        <Routes>
            <Route path={TypeRoutes.login} 
            element={
            <PublicRoute>
                <ScreenLogin/>
            </PublicRoute>}/>
            <Route path={'/*'}
             element={
             <PrivateRoute>
            <Dashboard/>
            </PrivateRoute>
        }/>            
        </Routes>
    )
}
