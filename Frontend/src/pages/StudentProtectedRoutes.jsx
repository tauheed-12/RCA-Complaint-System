import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function StudentProtectedRoutes() {
    const isStudent = true
    return (
        isStudent ? <Outlet /> : <Navigate to='/' />
    )
}

export default StudentProtectedRoutes
