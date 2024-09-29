import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function StudentProtectedRoutes() {
    const { isCareTaker, isAdmin } = useAuth();
    const isStudent = !(isCareTaker || isAdmin);
    console.log(isStudent);
    return (
        isStudent ? <Outlet /> : <Navigate to='/' />
    )
}

export default StudentProtectedRoutes
