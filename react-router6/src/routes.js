import React from 'react'

import { Routes, Route, Outlet } from 'react-router-dom'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="perfil" element={<h1>Perfil<Outlet/></h1>}>
                <Route path="editar/:id" element={<h2>Editar</h2>} />
                {/* <Route path="*" element={<h2>Editar</h2>} /> */}
            </Route>
            <Route path="/modulo" element={<h1>Módulo</h1>} />
            <Route path="/acao" element={<h1>Ação</h1>} />
            <Route path="*" element={<h1>Não Encontrado</h1>} />
        </Routes>
    )
}