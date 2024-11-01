import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    axios.defaults.baseURL = 'https://to-do-app-backend-nine.vercel.app/api/users';

    const persistUser = (response) => {
        setUser(response.data.user);
           
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user',JSON.stringify(response.data.user)); 
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        if (token && storedUser) {
            setUser(JSON.parse(storedUser));  
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;  
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/login', { email, password });
            persistUser(response)   
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
            throw new Error(errorMessage);
        }
    };

    const register = async (name, email, password) => {
        try {
            const response = await axios.post('/register', { name, email, password });
            persistUser(response)   
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
            throw new Error(errorMessage);
        }
    };

    const logout = async () => {
        setUser(null); 
        localStorage.removeItem('token'); 
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
