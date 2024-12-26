import { useContext, useEffect, useState } from "react";
import { TagContext } from "../../contexts/TagContext";
import { TaskContext } from "../../contexts/TaskContext";
import CreateFormInput from "./forms-components/CreateFormInput";
import { IoIosColorPalette } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

function TagForm({
  closeForm,
  isEditing,
  hideTagActions,
  color,
  name,
  id,
  isTagFormOpen,
}) {
  const { addTag, editTag } = useContext(TagContext);
  const { getTasks } = useContext(TaskContext);

  const [formName, setFormName] = useState(isEditing ? name : "");
  const [formColor, setFormColor] = useState(isEditing ? color : "#e6e7eb");
  const [error, setError] = useState(null);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const handleNameChange = (event) => {
    setFormName(event.target.value);
  };
  const handleColorChange = (event) => {
    setFormColor(event.target.value);
  };
  const toggleColorPicker = () => setIsColorPickerOpen(!isColorPickerOpen);

  useEffect(() => {
    setError(null);
  }, [isTagFormOpen]);

  const handleUpdate = async (id, newTag) => {
    setError(null);
    try {
      await editTag(id, newTag);
      closeForm();
      hideTagActions && hideTagActions();
      getTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCreate = async (newTag) => {
    setError(null);
    try {
      await addTag(newTag);
      closeForm();
      setFormName("");
      setFormColor("#e6e7eb");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTag = {
      name: formName,
      color: formColor,
    };
    if (isEditing && id) {
      handleUpdate(id, newTag);
    } else {
      handleCreate(newTag);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 w-full  bg-white rounded-full p-1.5 border border-space-primary-opacity-20 shadow-sm"
      >
        <div className="flex-1">
          <CreateFormInput
            onChange={handleNameChange}
            value={formName}
            type="text"
            name="name"
            placeholder="Add tag"
          />
        </div>

        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full border-2 border-space-primary-opacity-20 cursor-pointer overflow-hidden relative hover:scale-105 transition-transform duration-200"
            style={{ backgroundColor: formColor }}
          >
            <input
              onChange={handleColorChange}
              value={formColor}
              type="color"
              name="color"
              className="absolute inset-0 cursor-pointer opacity-0 w-full h-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-space-primary hover:bg-space-primary-dark text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium transition-colors duration-200"
        >
          <IoCheckmark className="size-4" />
          <span>{isEditing ? "Update" : "Save"}</span>
        </button>
      </form>

      {error && <div className="text-red-500 text-sm mt-2 pl-4">{error}</div>}
    </div>
  );
}

export default TagForm;
