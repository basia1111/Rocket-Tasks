import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { TagContext } from "../../contexts/TagContext";
import TagButton from "./forms-components/TagButton";
import Input from "./forms-components/Input";

const styles = {
  button:
    "px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200",
};

function TaskForm({
  closeForm,
  isEditing = false,
  title = "",
  dueDate = "",
  id,
  currentTags = [],
  closeActions,
}) {
  const { addTask, editTask } = useContext(TaskContext);
  const { tags } = useContext(TagContext);

  const [formTitle, setFormTitle] = useState(title);
  const [formDate, setFormDate] = useState(
    dueDate ? new Date(dueDate).toISOString().split("T")[0] : ""
  );
  const [selectedTagIds, setSelectedTagIds] = useState(
    new Set(currentTags.map((tag) => tag._id))
  );
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = {
        title: formTitle,
        dueDate: formDate,
        tags: Array.from(selectedTagIds),
      };

      if (isEditing) {
        await editTask(id, taskData);
        closeActions?.();
      } else {
        await addTask(taskData);
        setFormTitle("");
        setFormDate("");
        setSelectedTagIds(new Set());
      }
      setError("");
      closeForm?.();
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleTag = (tagId) => {
    setSelectedTagIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tagId)) {
        newSet.delete(tagId);
      } else {
        newSet.add(tagId);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-3">
        <div
          className={`flex gap-2 ${isEditing ? "md:flex-row flex-col" : "flex-col"}`}
        >
          <Input
            type="text"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            placeholder={isEditing ? "Task title" : "What needs to be done?"}
            className="px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-lg border border-gray-200 focus:border-space-primary focus:outline-none placeholder-gray-400 transition-all duration-200 text-sm md:text-base"
          />
          <Input
            type="date"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
            className="px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-lg border border-gray-200 focus:border-space-primary focus:outline-none focus:ring-1 focus:ring-space-primary/20 placeholder-gray-400 text-sm md:text-base"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tags.map((tag) => (
            <TagButton
              key={tag._id}
              name={tag.name}
              color={tag.color}
              isSelected={selectedTagIds.has(tag._id)}
              onClick={() => toggleTag(tag._id)}
            />
          ))}
        </div>

        {error && (
          <div className="text-red-500 text-xs md:text-sm">{error}</div>
        )}

        <div className="flex justify-end gap-2 pt-2 md:pt-3">
          <button
            type="button"
            onClick={closeForm}
            className={`${styles.button} text-white hover:text-white/90 active:scale-95`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${styles.button} bg-space-primary text-white hover:bg-space-primary/90 active:scale-95`}
          >
            {isEditing ? "Save" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
