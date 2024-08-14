import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function CareTakerProtectedRoutes() {
    const isCareTaker = true
    return (
        isCareTaker ? <Outlet /> : <Navigate to='/' />
    )
}

export default CareTakerProtectedRoutes
