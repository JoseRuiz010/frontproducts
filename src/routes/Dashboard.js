import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/navbar/Navbar'
import { ScreeensProducts } from '../screen/ScreeensProducts'
import { ScreensMyProducts } from '../screen/screenMyProducts/ScreensMyProducts'
import { ScreensPerfil } from '../screen/screenPerfil/ScreensPerfil'
import { TypeRoutes } from '../types/TypeRoutes'

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={TypeRoutes.main} element={<ScreeensProducts />}>
                </Route>
                    <Route path={TypeRoutes.perfil} element={<ScreensPerfil />} />
                <Route path={TypeRoutes.misProductos} element={<ScreensMyProducts />} />
      
            </Routes>
        </>
    )
}
