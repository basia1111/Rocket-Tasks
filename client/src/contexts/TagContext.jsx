import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

export const TagContext = createContext();

export const TagContextProvider = ({ children }) => {
    const [tags, setTags] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL
    const axiosInstance = axios.create({
        baseURL: `${API_URL}/tags`,
    });
    
    const setAuthToken = () => {
        const token = localStorage.getItem('token'); 
        if (token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axiosInstance.defaults.headers.common['Authorization']; 
        }
    };

    setAuthToken();

    const getTags = async () => {
        try {
            const response = await axiosInstance.get('/');
            
            setTags(response.data);
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Failed to fetch tags';
            throw new Error(errorMessage);
        }
    };

    const deleteTag = async (id) => {
        try {
            await axiosInstance.delete(`/${id}`);
            setTags(prevTags => prevTags.filter(tag => tag._id !== id));
            
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Tag could not be deleted';
            throw new Error(errorMessage);
        }
    };

    const addTag = async (tag) => {
        try {
            const response = await axiosInstance.post('/', tag);
            setTags(prevTags => [...prevTags, response.data] )
        } catch(error) {
            const errorMessage = error.response?.data?.message || 'Tag could not be added';
            throw new Error(errorMessage);
        }

    }

    const editTag = async (id, updatedTag) => {
        try {
            const response = await axiosInstance.put(`/${id}`, updatedTag);
            setTags((prevTasks) =>
                prevTasks.map((tag) => (tag._id === id ? response.data : tag))
            );
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Tag could not be modified';
            throw new Error(errorMessage);
        }
    };

    return (
        <TagContext.Provider value={{ tags, getTags, deleteTag, addTag, editTag }}>
            {children}
        </TagContext.Provider>
    );
};
