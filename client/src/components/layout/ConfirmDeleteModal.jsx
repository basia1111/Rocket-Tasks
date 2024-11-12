import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion'

function ConfirmDeleteModal({message, handleDelete, id, isModalActive, setIsModalActive}){

    return(
        <AnimatePresence>
            {isModalActive&&(
                <motion.div 
                    className="flex items-center justify-center top-0 left-0 absolute bg-blue-gray bg-opacity-10 rounded-xl shadow-xl w-full h-full z-50 p-4 font-Montserrat"
                    onClick={() =>  setIsModalActive(m => false)}
                    initial={{ opacity:0}} 
                    animate={{ opacity:1}}
                    exit={{opacity:0}}
                    transition={{
                        type: "spring",
                        duration: 0.2,
                        stiffness: 200,
                        damping: 30,
                        duration: 0.3
                    }}
                >
                    <motion.div className="sm:min-w-[500px] p-4 flex flex-col items-center rounded-xl shadow-lg bg-white text-center"
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1}}
                            exit={{scale: 0}}
                            transition={{
                                type: "spring",
                                duration: 0.2,
                                stiffness: 280,
                                damping: 20,
                                duration: 0.3
                            }}
                    >
                        <button 
                            onClick={() =>  setIsModalActive(m => false)} 
                            className=" flex w-full  justify-end right-2 top-2 transition-transform duration-200 text-blue-gray"
                        >
                                <IoCloseOutline className="size-6" />
                        </button>
                        <div className="text-lg pb-4">
                            {message}
                        </div>
                        <button  onClick={() => (handleDelete(id), setIsModalActive(m => false))} className="text-base rounded-full px-2 py-1 bg-red-600 text-white">
                            Confirm
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default ConfirmDeleteModal