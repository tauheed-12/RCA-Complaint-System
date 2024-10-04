import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCareTaker, setIsCareTaker] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(1);

    useEffect(() => {
        const cookieUserId = Cookies.get('userId');
        const cookieIsAdmin = Cookies.get('isAdmin') === 'true';
        const cookieIsCareTaker = Cookies.get('isCareTaker') === 'true';
        const cookieToken = Cookies.get('token');

        if (cookieUserId) {
            setUserId(cookieUserId);
        }

        setIsAdmin(cookieIsAdmin);
        setIsCareTaker(cookieIsCareTaker);
        setToken(cookieToken);

        setLoading(false);
    }, []);

    const logout = () => {
        Cookies.remove('userId');
        Cookies.remove('isAdmin');
        Cookies.remove('isCareTaker');
        Cookies.remove('token');
        setUserId(null);
        setIsAdmin(false);
        setIsCareTaker(false);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ userId, setUserId, setIsAdmin, setIsCareTaker, setToken, isAdmin, isCareTaker, token, loading, logout, setRefresh, refresh }}>
            {!loading ? children : <div>Loading...</div>}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
