import React, { createContext, useContext, useState, useEffect } from 'react';
import { ToastContext } from './ToastContext';
import axios from 'axios';


export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [modifiedTask, setModifiedTask] = useState(null)
    const API_URL = import.meta.env.VITE_API_URL
    const axiosInstance = axios.create({
        baseURL: `${API_URL}/tasks`,
    });
    const { addToast } = useContext(ToastContext)
    
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
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Failed to fetch tasks';
            throw new Error(errorMessage);
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
            
            let task = tasks.find(task => (
                task._id == id
            ))

            if(!task.status){
                addToast(`${task.title} is done!`, "Success")
            }


        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Failed to change status of task';
            throw new Error(errorMessage);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axiosInstance.delete(`/${id}`);
            setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
            console.log('Task deleted');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Task could not be deleted';
            throw new Error(errorMessage);
        }
    };

    const addTask = async (task) => {
        try {
            const response = await axiosInstance.post('/', task);
            setTasks(prevTasks => [...prevTasks, response.data] )
            setModifiedTask(response.data._id)

            setTimeout(() => {
                setModifiedTask(null)
            }, 1000);
        } catch(error) {
            const errorMessage = error.response?.data?.message || 'Task could not be added';
            throw new Error(errorMessage);
        }

    }

    const editTask = async (id, updatedTask) => {
        try {
            const response = await axiosInstance.put(`/${id}`, updatedTask);
            setTasks((prevTasks) =>
                prevTasks.map((task) => (task._id === id ? response.data : task))
            );
            setModifiedTask(response.data._id)
            
            setTimeout(() => {
                setModifiedTask(null)
            }, 1000);
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Task could not be added';
            throw new Error(errorMessage);
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
