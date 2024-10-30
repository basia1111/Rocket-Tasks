import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    axios.defaults.baseURL = 'http://localhost:3000/api/users';

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
            console.error('Login failed:', error.response?.data?.message || error.message);
        }
    };

    const register = async (name, email, password) => {
        try {
            console.log('context sends request')
            const response = await axios.post('/register', { name, email, password });
            persistUser(response)   
        } catch (error) {
            console.error('Register failed:', error.response?.data?.message || error.message);
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
