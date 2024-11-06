import { useContext, useEffect, useState } from "react";
import { TagContext } from '../../contexts/TagContext';
import Tag from "./Tag"; 
import TagForm from "../forms/TagForm";

function Taglist() {
    const { tags, getTags } = useContext(TagContext);

    useEffect(() => {
        getTags();
    }, [getTags]);

    return (
        <div className="flex flex-col items-start gap-2 pb-4">
            <div className="p-2 flex items-start gap-2">
                {tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />    
                ))}
            </div>
            <TagForm />
        </div>
    );
}

export default Taglist;


