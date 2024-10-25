import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    
    axios.defaults.baseURL = 'http://localhost:3000/tasks';

    const getTasks = async () => {
        try {
            const response = await axios.get('/');
            setTasks(response.data);
            console.log(response.data);
        } catch (err) {
            console.error('Failed to fetch tasks:', err.message);
        }
    };

    const toggleStatus = async (id) => {
        try {
            await axios.put(`/status/${id}`);
            console.log('Status changed');
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
            await axios.delete(`/${id}`);
            setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
            console.log('Task deleted');
        } catch (err) {
            console.error('Task could not be deleted:', err);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, setTasks, getTasks, toggleStatus, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
