import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import TagForm from "../forms/TagForm";

function TagFormToggle() {
  const [isTagFormOpen, setTagFormOpen] = useState(false);

  const showTagForm = () => setTagFormOpen(true);
  const hideTagForm = () => setTagFormOpen(false);

  return (
    <div className="flex items-center gap-3 w-full py-4">
      <div className={`${isTagFormOpen ? "block" : "hidden"} w-full`}>
        <TagForm
          closeForm={hideTagForm}
          isEditing={false}
          isTagFormOpen={isTagFormOpen}
        />
      </div>
      <button className="relative group">
        {isTagFormOpen ? (
          <div
            onClick={hideTagForm}
            className="p-2 rounded-full bg-space-primary-opacity-20 transition-all duration-200"
          >
            <IoClose className="size-5 text-space-primary" />
          </div>
        ) : (
          <div
            onClick={showTagForm}
            className="relative rounded-full flex px-4 py-2 items-center gap-2 bg-gradient-to-tr from-space-primary-light to-space-primary hover:bg-space-primary/15 border border-space-primary/30 hover:border-space-primary/50 text-space-primary-dark hover:text-space-primary  transition-all duration-300"
          >
            <span className="font-medium text-white text-sm">Add new tag</span>
            <IoAdd className="size-5 text-white" />
          </div>
        )}
      </button>
    </div>
  );
}

export default TagFormToggle;
