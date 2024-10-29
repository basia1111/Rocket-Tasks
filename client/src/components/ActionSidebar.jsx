import { useState } from "react";
import TaskForm from "./TaskForm";
import { IoAdd, IoCloseOutline } from "react-icons/io5";

function ActionSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => setIsOpen(true);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            <div 
                className={`p-6 bg-gray-100 rounded-xl h-full md:w-2/6 w-full md:relative absolute 
                md:left-0 ${isOpen ? 'left-0 top-0' : 'left-full top-0'} transition-all duration-300 ease-in-out`}
            >
                <button 
                    onClick={closeSidebar}
                    className="flex items-center justify-center md:hidden absolute right-5 top-5 
                    hover:scale-110 transition-transform duration-200"
                >
                    <IoCloseOutline className="size-6" />
                </button>
                <h2 className="text-2xl font-Montserrat font-semibold mb-4">Create New Task</h2>
                <TaskForm close={closeSidebar} />
            </div>

            <button 
                onClick={openSidebar}
                className={`flex items-center justify-center ${isOpen ? "hidden" : ""} 
                md:hidden w-14 h-14 rounded-full bg-green absolute right-10 bottom-10 
                hover:scale-110 transition-transform duration-200`}
            >
                <IoAdd className="text-white size-8" />
            </button>
        </>
    );
}

export default ActionSidebar;
