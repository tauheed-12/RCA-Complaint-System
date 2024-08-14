import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AdminProtectedRoutes() {
    const isAdmin = true
    return (
        isAdmin ? <Outlet /> : <Navigate to='/' />
    )
}

export default AdminProtectedRoutes
