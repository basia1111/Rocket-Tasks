import { useContext, useEffect } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import Toast from "./Toast";
import { motion, AnimatePresence } from "framer-motion";

const ToastList = () => {
  const { toasts } = useContext(ToastContext);
  return (
    <motion.div
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.2,
      }}
      className="fixed top-10 md:right-2 right-1 z-50 sm:p-4 p-2 max-w-sm w-full"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            id={toast.id}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ToastList;
