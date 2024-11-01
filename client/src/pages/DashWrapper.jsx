import { motion } from "framer-motion";

function DashWrapper({ children }) {
    const pageVariants = {
        initial: { opacity: 0, scale: 0.8, rotate: 10, x: 100 }, 
        animate: { opacity: 1, scale: 1, rotate: 0, x: 0 },     
        exit: { opacity: 0, scale: 0.8, rotate: -10, x: -100 }, 
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative min-w-[320px] max-w-[1320px] h-full w-full flex md:p-4 p-2 overflow-x-hidden"
        >
            {children}
        </motion.div>
    );
}

export default DashWrapper;
