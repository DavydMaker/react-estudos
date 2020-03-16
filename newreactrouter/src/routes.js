import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} >
                <Route path="edit" element={<h1>Editar</h1>} />
                <Route path="new" element={<h1>Novo</h1>} />
                <Route path="info" element={<h1>Informações</h1>} />
            </Route>
        </Routes>
    )
}