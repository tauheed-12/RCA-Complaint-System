import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarComponent } from '../components/CareTakerDashboard/navbar';

function RootPage() {
    return (
        <div>
            <NavbarComponent/>
            <Outlet />
        </div>
    )
}

export default RootPage
