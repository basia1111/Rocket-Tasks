import { useContext } from 'react'
import { ToastContext } from '../../contexts/ToastContext';
import { motion, }  from 'framer-motion'
import {IoCloseOutline } from "react-icons/io5";

const Toast = ({ type, message, id}) => {

    const { closeToast } = useContext(ToastContext)
    const variants = {
        initial: { x: 300, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 300, opacity: 0 }
    };

    return (
        <motion.div 
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:0.3}}
            className="relative rounded-lg shadow-xl bg-white p-4 mb-2 border-2 border-green flex items-center gap-4"
        >
                <p className="text-3xl">🎉</p>
            <div> 
                <p className="font-bold">{type}</p>
                <p className="font-normal">{message}</p>
            </div> 
            <IoCloseOutline onClick={()=> closeToast(id)}  className="absolute cursor-pointer top-2 right-2 text-xl text-blue-gray"/>

        </motion.div>
    );
};

export default Toast 