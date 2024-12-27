import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

function DeleteModal({
  message,
  handleDelete,
  id,
  isModalActive,
  setIsModalActive,
}) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    console.error("Modal root not found");
    return null;
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isModalActive && (
        <motion.div
          className="fixed inset-0  flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setIsModalActive(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.2,
            stiffness: 200,
            damping: 30,
          }}
        >
          <motion.div
            className="w-full max-w-md mx-4 p-6 bg-white rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{
              type: "spring",
              duration: 0.2,
              stiffness: 280,
              damping: 20,
            }}
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsModalActive(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <IoCloseOutline className="w-6 h-6" />
              </button>
            </div>

            <div className="text-lg text-gray-800 mb-6 text-center">
              {message}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsModalActive(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(id);
                  setIsModalActive(false);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
}

export default DeleteModal;
