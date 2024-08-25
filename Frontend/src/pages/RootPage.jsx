import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function RootPage() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default RootPage
