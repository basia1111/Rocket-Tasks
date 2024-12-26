import { useContext, forwardRef } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import { motion } from "framer-motion";

const Toast = ({ type, message, id }, ref) => {
  const { closeToast } = useContext(ToastContext);

  const variants = {
    initial: { y: 20, opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -20, opacity: 0, scale: 0.95 },
  };

  const getToastStyles = () => {
    if (type === "Success") {
      return {
        progressClass: "bg-space-primary",
        headerText: "Launch Successful",
        glowColor: "from-space-primary/30",
      };
    }
    return {
      progressClass: "bg-space-primary-dark",
      headerText: "Mission Update",
      glowColor: "from-space-primary-dark/30",
    };
  };

  const styles = getToastStyles();

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="relative max-w-md w-full group cursor-pointer"
      onClick={() => closeToast(id)}
    >
      <div className="mb-3 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-space-primary/10 to-transparent rounded-xl blur-lg" />
        <div className="relative bg-white rounded-lg border border-space-primary-opacity-30 shadow-[0_8px_16px_-6px_rgba(135,206,235,0.2)]">
          <div className="relative px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-space-background">
                {styles.headerText}
              </span>
              <span className="text-xs text-space-background/50">now</span>
            </div>
            <p className="mt-1 text-sm text-space-background/70">{message}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-lg">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              onAnimationComplete={() => closeToast(id)}
              className={`h-full ${styles.progressClass}`}
            />
          </div>
        </div>
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute -inset-1 bg-gradient-to-r from-space-primary/20 to-transparent rounded-lg blur-md" />
        </div>
      </div>
    </motion.div>
  );
};

export default forwardRef(Toast);
