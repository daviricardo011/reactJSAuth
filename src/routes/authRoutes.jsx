import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../screens/login'

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Login />} />
        </Routes>
    )
}

export default AuthRoutes