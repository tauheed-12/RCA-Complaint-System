import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

import StudentDashboard from "./pages/StudentDashboard";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RootPage from "./pages/RootPage";
import AdminProtectedRoutes from "./pages/AdminProtectedRoutes";
import CareTakerProtectedRoutes from "./pages/CareTakerProtectedRoutes";
import StudentProtectedRoutes from "./pages/StudentProtectedRoutes";
import VerifyEmail from "./pages/VerifyEmail";
import CareTakerDashboard from "./pages/CareTakerDashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <StudentDashboard />,

        children: [
            { path: '/', element: <HomePage /> },
            { path: '/auth/login', element: <Login /> },
            { path: '/verifyemail', element: <VerifyEmail /> },
            {
                element: <AdminProtectedRoutes />,
                children: [
                    { path: '/admin/dashboard', element: <AdminDashboard /> }
                ]
            },
            {
                element: <CareTakerProtectedRoutes />,
                children: [
                    { path: '/c', element: <CareTakerDashboard /> }
                ]
            },
            {
                element: <StudentProtectedRoutes />,
                children: [
                    { path: '/student/register', element: <Register /> },
                    { path: '/s', element: <StudentDashboard /> }
                ]
            }
        ]
    }
])

export default router;