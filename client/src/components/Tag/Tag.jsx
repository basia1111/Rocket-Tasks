import { useContext, useState } from "react";
import { TagContext } from "../../contexts/TagContext";
import { TaskContext } from "../../contexts/TaskContext";
import Actions from "../layout/Actions";
import TagForm from "../forms/TagForm";
import ConfirmDeleteModal from "../layout/ConfirmDeleteModal";
import { motion } from "framer-motion";

function TagItem({ tag, isSelected, onTagSelect }) {
  const { name, color, _id } = tag;
  const { deleteTag } = useContext(TagContext);
  const { getTasks } = useContext(TaskContext);

  const [isEditing, setIsEditing] = useState(false);
  const [isTagActionsOpen, setIsTagActionsOpen] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [error, setError] = useState(null);

  const showTagActions = () => setIsTagActionsOpen(true);
  const hideTagActions = () => setIsTagActionsOpen(false);

  const handleDelete = async (id) => {
    setError(null);
    try {
      await deleteTag(id);
      getTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleActionClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <motion.div
      onClick={(e) => !e.target.closest(".tag-actions") && onTagSelect(_id)}
      onMouseEnter={showTagActions}
      onMouseLeave={hideTagActions}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 25 }}
      className="relative group"
    >
      {isEditing ? (
        <TagForm
          hideTagActions={hideTagActions}
          closeForm={() => setIsEditing(false)}
          isEditing={isEditing}
          color={color}
          name={name}
          id={_id}
        />
      ) : (
        <div
          className={`tag-actions relative flex items-center bg-white/90 border border-space-primary/60 transition-all duration-200 font-Montserrat text-xs md:text-sm rounded-full px-1 md:px-4 py-1 md:py-2 ${isSelected ? "shadow-[inset_0_0_12px_rgba(135,206,235,0.45)] outline-offset-1 outline-space-primary/60 outline" : "shadow-[0_8px_16px_rgba(135,206,235,0.2),0_2px_8px_rgba(135,206,235,0.3),inset_0_0_8px_rgba(135,206,235,0.1)]"}`}
        >
          <div className="flex items-center gap-1 md:gap-3">
            <div className="relative">
              <div
                className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            </div>
            <span className="text-space-background-light font-medium tracking-wide">
              {name}
            </span>
            <div
              onClick={handleActionClick}
              className={`transition-all duration-200 ml-1 md:ml-2 ${isTagActionsOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}`}
            >
              <Actions
                setIsModalActive={setIsModalActive}
                setIsEditing={setIsEditing}
                iconSize="12"
                color="rgba(30, 58, 110, 0.6)"
              />
            </div>
          </div>
        </div>
      )}
      <ConfirmDeleteModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        handleDelete={handleDelete}
        id={_id}
        message="Are you sure you want to delete tag?"
      />
    </motion.div>
  );
}

export default TagItem;
