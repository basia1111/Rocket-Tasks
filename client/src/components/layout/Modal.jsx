import { IoAdd, IoCloseOutline } from "react-icons/io5";

function Modal({children, closeTaskModal, isOpen}){

    return(
        <div onClick={closeTaskModal} className={`${isOpen ? "visible" : "hidden"} absolute flex items-center justify-center w-full h-full top-0 right-0 bg-blue-gray  bg-opacity-50`}>
                <button 
                     onClick={closeTaskModal} 
                    className=" flex items-center justify-center absolute right-5 top-5 
                    hover:scale-110 transition-transform duration-200"
                >
                    <IoCloseOutline className="size-6" />
                </button>
                <div onClick={(e) => e.stopPropagation()} className="sm:min-w-[500px] p-10 flex flex-col rounded-xl shadow-lg bg-white">
                    {children}
                </div>
        </div>
    ) 
}

export default Modal