import { motion } from "framer-motion";

function PageWrapper({ children }) {

    const pageVariants = {
        initial:{ x: 100, opacity: 0 },
        animate:{ x: 0, opacity: 1 },
        exit:{ x: 100, opacity: 0 }
    }

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"  
            transition={{ type: "spring", stiffness: 260, damping: 20}}
            className="min-w-[320px] max-w-[1320px] sm:h-full h-auto w-full flex items-center justify-aroundz"
        >
            {children}
        </motion.div>
    );
}

export default PageWrapper
