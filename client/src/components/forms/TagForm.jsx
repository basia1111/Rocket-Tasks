import { useContext, useState } from "react";
import { TagContext } from "../../contexts/TagContext";
import { TaskContext } from "../../contexts/TaskContext";
import { IoCheckmark } from "react-icons/io5";

function TagForm({
  closeForm,
  isEditing,
  hideTagActions,
  color = "#0A1128",
  name = "",
  id,
}) {
  const { addTag, editTag } = useContext(TagContext);
  const { getTasks } = useContext(TaskContext);
  const [previewColor, setPreviewColor] = useState(color);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTag = {
      name: formData.get("name"),
      color: formData.get("color"),
    };

    try {
      if (isEditing && id) {
        await editTag(id, newTag);
        hideTagActions?.();
      } else {
        await addTag(newTag);
        event.target.reset();
        setPreviewColor("#e6e7eb");
      }
      getTasks();
      closeForm();
    } catch (error) {
      const errorDiv = document.getElementById("tagFormError");
      if (errorDiv) errorDiv.textContent = error.message;
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 md:gap-3 w-full bg-space-background-opacity-30 rounded-full p-1 md:p-1.5 border border-space-primary-opacity-20 shadow-sm"
      >
        <input
          defaultValue={name}
          type="text"
          name="name"
          placeholder="Add tag"
          className="flex-1 rounded-full px-3 md:px-4 py-1 text-xs md:text-sm text-space-primary placeholder-space-primary-opacity-40 bg-space-background-opacity-30 border border-space-primary/20 focus:border-space-primary/40 focus:outline-none placeholder-gray-400"
        />
        <div className="flex items-center gap-1.5 md:gap-2">
          <div
            className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-space-primary-opacity-20 cursor-pointer overflow-hidden relative"
            style={{ backgroundColor: previewColor }}
          >
            <input
              value={previewColor}
              onChange={(e) => setPreviewColor(e.target.value)}
              type="color"
              name="color"
              className="absolute inset-0 text-space-primary placeholder-space-primary-opacity-40 cursor-pointer opacity-0 w-full h-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-space-primary text-white rounded-full px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium hover:bg-space-primary/90 active:scale-95 transition-all duration-200"
        >
          <IoCheckmark className="w-3.5 h-3.5 md:w-4 md:h-4" />
          <span>{isEditing ? "Update" : "Save"}</span>
        </button>
      </form>
      <div
        id="tagFormError"
        className="text-red-500 text-xs md:text-sm mt-1.5 md:mt-2 pl-3 md:pl-4"
      />
    </div>
  );
}

export default TagForm;
