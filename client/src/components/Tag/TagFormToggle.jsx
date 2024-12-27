import { useState } from "react";
import { IoAdd, IoClose } from "react-icons/io5";
import TagForm from "../forms/TagForm";

function TagFormToggle() {
  const [isTagFormOpen, setTagFormOpen] = useState(false);
  const showTagForm = () => setTagFormOpen(true);
  const hideTagForm = () => setTagFormOpen(false);

  return (
    <div className="flex items-center gap-2 md:gap-3 w-full py-2 md:py-4">
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
            className="p-1.5 md:p-2 rounded-full bg-space-primary/10 backdrop-blur-sm hover:bg-space-primary/20 transition-all duration-200 border border-space-primary/20 hover:border-space-primary/30 group active:scale-95"
          >
            <IoClose className="w-4 h-4 md:w-5 md:h-5 text-space-primary group-hover:rotate-90 transition-transform duration-200" />
          </div>
        ) : (
          <div
            onClick={showTagForm}
            className="relative rounded-full flex px-3 md:px-4 py-1.5 md:py-2 items-center gap-1.5 md:gap-2 bg-space-primary/10 hover:bg-space-primary/20 backdrop-blur-sm border border-space-primary/20 hover:border-space-primary/40 transition-all duration-200 group overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-space-primary/0 via-space-primary/10 to-space-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            <span className="font-medium text-space-primary text-xs md:text-sm relative z-10">
              Add new tag
            </span>
            <IoAdd className="w-4 h-4 md:w-5 md:h-5 text-space-primary relative z-10 group-hover:rotate-180 transition-transform duration-300" />
            <div className="absolute top-1 right-1 w-0.5 md:w-1 h-0.5 md:h-1 bg-space-primary/20 rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-0.5 md:w-1 h-0.5 md:h-1 bg-space-primary/20 rounded-full"></div>
          </div>
        )}
      </button>
    </div>
  );
}

export default TagFormToggle;
