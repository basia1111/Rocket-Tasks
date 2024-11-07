import { IoCloseOutline } from "react-icons/io5";

function ConfirmDeleteModal({message, handleDelete, id, isModalActive, setIsModalActive}){

    return(
        <div 
            className={`${isModalActive ? "visible" : "hidden"} flex items-center justify-center top-0 left-0 absolute bg-blue-gray bg-opacity-10 rounded-xl shadow-xl w-full h-full z-50 p-4 font-Montserrat`}
            onClick={() =>  setIsModalActive(m => false)}
        >
            <div className="sm:min-w-[500px] p-4 flex gap-4 flex-col items-center rounded-xl shadow-lg bg-white text-center">
                <button 
                    onClick={() =>  setIsModalActive(m => false)} 
                    className=" flex w-full  justify-end right-5 top-5 transition-transform duration-200 text-blue-gray"
                >
                        <IoCloseOutline className="size-6" />
                </button>
                <div>
                    {message}
                </div>
                <button  onClick={() => (handleDelete(id), setIsModalActive(m => false))} className="rounded-full px-2 py-1 bg-red-600 text-white">
                    Confirm
                </button>
            </div>
        </div>
    )

}
export default ConfirmDeleteModal