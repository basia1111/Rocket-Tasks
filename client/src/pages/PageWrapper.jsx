import { motion } from "framer-motion";

function PageWrapper({ children }) {
  const pageVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-full flex-1 flex flex-col relative overflow-x-hidden md:p-6"
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
