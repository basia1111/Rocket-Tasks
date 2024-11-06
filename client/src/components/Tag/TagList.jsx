import { useContext, useEffect, useState } from "react";
import { TagContext } from '../../contexts/TagContext';
import Tag from "./Tag"; 
import TagForm from "../forms/TagForm"


function Taglist() {
    const { tags, getTags } = useContext(TagContext);
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        getTags();
    }, [getTags]);

    return (
            <div className=" w-full flex-wrap p-2 flex items-start gap-2">
                {tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />    
                ))}
            </div>

    );
}

export default Taglist;


