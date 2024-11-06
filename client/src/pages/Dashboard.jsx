import TaskList from '../components/Task/TaskList';
import TagList from '../components/Tag/TagList'
import DashboardHeader from '../components/layout/DashboardHeader';
import { TaskContextProvider } from '../contexts/TaskContext';
import { IoAdd } from "react-icons/io5";
import { useState } from 'react';
import Modal from '../components/layout/Modal';
import TaskForm from '../components/forms/TaskForm';

function Dashboard (){

    const [isOpen, setIsOpen] = useState(false);

    const openTaskModal = () => setIsOpen(true);
    const closeTaskModal = () => {
        setIsOpen(false);
        console.log('closeModal')
    }

    return(
        <TaskContextProvider>
            
                <div className="relative min-w-[320px] max-w-[1320px] h-full w-full flex gap-8 bg-white rounded-xl shadow-md p-4 overflow-x-hidden">         
                <div className="relative flex flex-col  w-full md:p-10 p4">     
                    <DashboardHeader />
                    <TagList />
                    <TaskList />
               
                </div>
                <button 
                    onClick={openTaskModal}
                    className={`flex items-center justify-center ${isOpen ? "hidden" : ""} 
                    w-14 h-14 rounded-full bg-green absolute right-10 bottom-10 
                    hover:scale-110 transition-transform duration-200`}
                >
                    <IoAdd className="text-white size-8" />
                </button>

                <Modal closeTaskModal={closeTaskModal} isOpen={isOpen}>
                    <h2 className="text-2xl font-Montserrat font-semibold mb-4 text-black">Create New Task</h2>
                    <TaskForm close={closeTaskModal}/>
                </Modal>
                    
                </div>     
        </TaskContextProvider>
    )
}


export default Dashboard