import React from 'react'
import { TaskContextProvider } from './contexts/TaskContext';
import TaskList from './components/TaskList'

function App() {

  return (
    <TaskContextProvider>
     <TaskList />
    </TaskContextProvider>
  )
}

export default App
