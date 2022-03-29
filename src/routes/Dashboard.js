import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/navbar/Navbar'
import { ScreeensProducts } from '../screen/ScreeensProducts'
import { ScreensPerfil } from '../screen/screenPerfil/ScreensPerfil'
import { ScreensRoles } from '../screen/screenRoles/ScreensRoles'
import { ScreensUsers } from '../screen/screenUsuarios/ScreensUsers'
import { TypeRoutes } from '../types/TypeRoutes'

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={TypeRoutes.main} element={<ScreeensProducts />}>
                    <Route path={TypeRoutes.perfil} element={<ScreensPerfil />} />
                </Route>
                <Route path={TypeRoutes.users} element={<ScreensUsers />} />
                <Route path={TypeRoutes.roles} element={<ScreensRoles />} />
            </Routes>
        </>
    )
}
