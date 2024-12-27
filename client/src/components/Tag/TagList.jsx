import { useContext, useEffect, useState } from "react";
import { TagContext } from "../../contexts/TagContext";
import { TaskContext } from "../../contexts/TaskContext";
import { AnimatePresence } from "framer-motion";
import Tag from "./Tag";

function Taglist() {
  const { tags, getTags } = useContext(TagContext);
  const { filterTasks } = useContext(TaskContext);

  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    getTags();
  }, []);

  const handleTagChange = (event) => {
    const tag = event.target.value;

    setSelectedTags((prevTags) => {
      const newTags = prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag];
      filterTasks(newTags);
      return newTags;
    });
  };

  return (
    <div className=" w-full flex-wrap flex items-center gap-2 md:gap-4">
      <AnimatePresence>
        {tags.map((tag, index) => (
          <div key={tag._id}>
            <label
              htmlFor={index}
              className={`${selectedTags.includes(tag._id) ? "shadow-lg" : ""}`}
            >
              <div>
                <Tag
                  key={index}
                  tag={tag}
                  isSelected={selectedTags.includes(tag._id)}
                  onTagSelect={handleTagChange}
                />
              </div>
            </label>
            <input
              onChange={handleTagChange}
              type="checkbox"
              checked={selectedTags.includes(tag._id)}
              id={index}
              name={tag._id}
              value={tag._id}
              className="hidden"
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Taglist;
