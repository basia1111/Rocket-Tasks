import React from 'react';
import { TaskContextProvider } from './contexts/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    return (
        <TaskContextProvider>
            <div className="app-container min-w-[320px] max-w-[1100px] h-full w-full flex gap-8 bg-white rounded-xl shadow-lg p-4">         
                <TaskList />
                <TaskForm /> 
            </div>
        </TaskContextProvider>
    );
}

export default App;
