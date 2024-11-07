import { useState } from "react";
import { IoAdd, IoCloseOutline } from "react-icons/io5";
import TaskForm from "../forms/TaskForm";

function TaskFormToggle() {

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
 
    const showTaskModal = () => {
        setIsFormModalOpen(open => true)
    } 
    const hideTaskModal = () => {
        setIsFormModalOpen(open => false)
    }

    return (
        <>
            <button 
                onClick={showTaskModal}
                className={`flex items-center justify-center ${isFormModalOpen ? "hidden" : ""} 
                w-14 h-14 rounded-full bg-green absolute right-4 bottom-4
                hover:scale-110 transition-transform duration-200`}
            >
                <IoAdd className="text-white size-8" />
            </button>
            <div onClick={hideTaskModal} className={`${isFormModalOpen ? "visible" : "hidden"}  flex items-center justify-center top-0 left-0 absolute bg-blue-gray bg-opacity-10 rounded-xl shadow-xl w-full h-full z-50 p-4`}>
            
                <div onClick={(e) => e.stopPropagation()} className=" sm:min-w-[500px] w-full md:p-10 p-6 flex flex-col gap-5 rounded-xl shadow-lg bg-white">
                    <button 
                        onClick={hideTaskModal} 
                        className=" flex justify-end right-5 top-5 transition-transform duration-200 text-blue-gray"
                    >
                        <IoCloseOutline className="size-6" />
                    </button>
                    <h2 className="font-bold font-Montserrat text-lg">Create Task</h2>
                    <TaskForm  closeForm={hideTaskModal} isEditing={false}/>
                </div>
            </div>
        </>
    )
}

export default TaskFormToggle