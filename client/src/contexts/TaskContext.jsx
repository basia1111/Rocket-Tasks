import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [modifiedTask, setModifiedTask] = useState(null)
    
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/api/tasks',
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

    const getTasks = async () => {
        try {
            const response = await axiosInstance.get('/');
            setTasks(response.data);
        } catch (err) {
            console.error('Failed to fetch tasks:', err.message);
        }
    };

    const toggleStatus = async (id) => {
        try {
            await axiosInstance.put(`/status/${id}`);

            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task._id === id ? { ...task, status: !task.status } : task
                )
            );
        } catch (err) {
            console.error('Status did not change:', err);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axiosInstance.delete(`/${id}`);
        
            setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
            console.log('Task deleted');
        } catch (err) {
            console.error('Task could not be deleted:', err);
        }
    };

    const addTask = async (task) => {
        try {
            const response = await axiosInstance.post('/', task);
            
            setTasks(prevTasks => [...prevTasks, response.data] )
            console.log('Task added');
        } catch {
            console.error('Task could not be added:', err);
        }

    }

    const editTask = async (id, updatedTask) => {
        try {
            const response = await axiosInstance.put(`/${id}`, updatedTask);

            setTasks((prevTasks) =>
                prevTasks.map((task) => (task._id === id ? response.data : task))
            );
            setModifiedTask(response.data._id)
            console.log('Task updated');
        } catch (err) {
            console.error("Error updating task:", err);
        }
    };
    

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, setTasks, getTasks, toggleStatus, deleteTask, addTask, editTask, modifiedTask, axiosInstance}}>
            {children}
        </TaskContext.Provider>
    );
};
