import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { TagContext } from "../../contexts/TagContext";

function TaskForm({
  closeForm,
  isEditing,
  title,
  dueDate,
  id,
  currentTags,
  closeActions,
}) {
  const { addTask, editTask } = useContext(TaskContext);
  const { tags } = useContext(TagContext);

  const [formTitle, setFormTitle] = useState(isEditing ? title : "");
  const [formDate, setFormDate] = useState(
    isEditing && dueDate ? new Date(dueDate).toISOString().split("T")[0] : ""
  );
  const [selectedTags, setSelectedTags] = useState(
    isEditing && tags ? currentTags.map((t) => t._id) : []
  );
  const [error, setError] = useState(null);

  const handleTitleChange = (event) => setFormTitle(event.target.value);
  const handleDateChange = (event) => setFormDate(event.target.value);

  const handleTagChange = (tagId) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tagId)
        ? prevTags.filter((t) => t !== tagId)
        : [...prevTags, tagId]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const newTask = {
      title: formTitle,
      dueDate: formDate,
      tags: selectedTags,
    };

    try {
      if (isEditing && id) {
        await editTask(id, newTask);
        closeActions?.();
      } else {
        await addTask(newTask);
        setFormTitle("");
        setFormDate("");
        setSelectedTags([]);
      }
      closeForm?.();
    } catch (error) {
      setError(error.message);
    }
  };

  const TagItem = ({ tag, isSelected, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1 rounded-full text-sm transition-all duration-200"
      style={{
        backgroundColor: isSelected ? `${tag.color}20` : "white",
        border: `1px solid ${tag.color}40`,
        color: tag.color,
      }}
    >
      {tag.name}
    </button>
  );

  const inputStyle =
    "w-full px-4 py-2 bg-white rounded-lg font-Montserrat border border-gray-200 focus:border-space-primary focus:outline-none focus:ring-1 focus:ring-space-primary/20 placeholder-gray-400 transition-all duration-200";
  const dateInputStyle =
    "w-full px-4 py-2 bg-white rounded-lg  font-Montserrat border border-gray-200 focus:border-space-primary focus:outline-none focus:ring-1 focus:ring-space-primary/20 text-gray-600 transition-all duration-200";
  const buttonStyle =
    "px-4 py-2 rounded-full font-Montserrat transition-all duration-200 text-sm font-medium";

  if (isEditing) {
    return (
      <div className="w-full bg-white rounded-xl font-Montserrat">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-3">
            <input
              value={formTitle}
              type="text"
              name="title"
              onChange={handleTitleChange}
              placeholder="Task title"
              className={inputStyle}
            />

            <input
              value={formDate}
              type="date"
              name="dueDate"
              onChange={handleDateChange}
              className={dateInputStyle}
            />

            <div className="flex gap-2">
              {tags.map((tag) => (
                <TagItem
                  key={tag._id}
                  tag={tag}
                  isSelected={selectedTags.includes(tag._id)}
                  onClick={() => handleTagChange(tag._id)}
                />
              ))}
            </div>

            <div className="flex gap-2 ml-auto">
              <button
                type="button"
                onClick={closeForm}
                className={`${buttonStyle} text-gray-600 hover:bg-gray-50`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`${buttonStyle} bg-space-primary text-white  hover:bg-primary-dark`}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl font-Montserrat">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div>
            <input
              value={formTitle}
              type="text"
              name="title"
              onChange={handleTitleChange}
              placeholder="What needs to be done?"
              className={inputStyle}
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/3">
              <input
                value={formDate}
                type="date"
                name="dueDate"
                onChange={handleDateChange}
                className={dateInputStyle}
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <TagItem
                    key={tag._id}
                    tag={tag}
                    isSelected={selectedTags.includes(tag._id)}
                    onClick={() => handleTagChange(tag._id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={closeForm}
            className={`${buttonStyle} text-gray-600 hover:bg-gray-50 `}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${buttonStyle} bg-space-primary text-white hover:bg-space-primary-dark`}
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
