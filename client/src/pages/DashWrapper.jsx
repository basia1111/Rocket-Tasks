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
      className="w-full flex-1 flex flex-col items-center relative overflow-x-hidden p-6"
      style={{
        backgroundImage: 'url("/images/dashboard-img.png")',
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      {children}
    </motion.div>
  );
}

export default DashWrapper;
