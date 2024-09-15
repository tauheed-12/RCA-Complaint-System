import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import CareTakerDashboard from "./pages/CareTakerDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RootPage from "./pages/RootPage";
import AdminProtectedRoutes from "./pages/AdminProtectedRoutes";
import CareTakerProtectedRoutes from "./pages/CareTakerProtectedRoutes";
import StudentProtectedRoutes from "./pages/StudentProtectedRoutes";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,

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
                    { path: '/c', element: <Dashboard/> }
                ]
            },
            {
                element: <StudentProtectedRoutes />,
                children: [
                    { path: '/student/register', element: <Register /> },
                    { path: '/student/dashboard/:studentId', element: <StudentDashboard /> }
                ]
            }
        ]
    }
])

export default router;