import { useContext, useState } from "react"
import CreateFormInput from "./forms-components/CreateFormInput"
import { IoIosColorPalette } from "react-icons/io";
import { TagContext } from '../../contexts/TagContext'

function TagForm({toggleTagForm, isEditing, setIsOpen, color, name, id}){

    const { addTag, editTag } = useContext(TagContext)
    const[formName, setFormName] = useState(isEditing ? name : "")
    const[formColor, setFormColor] = useState(isEditing ? color :"#e6e7eb")
    const [error, setError] = useState(null)

    const handleNameChange = (event) => {setFormName(n => event.target.value)}
    const handleColorChange = (event) => {setFormColor(c => event.target.value)}


    const handleUpdate = async(id, newTag) => {
        setError(null);
        try {
            await editTag(id, newTag);
            toggleTagForm()
            setIsOpen(open => false)
        } catch(error) {
            setError(error.message);
        }
    }

    const handleCreate = async(newTag) => {
        setError(null);
        try {
            await addTag(newTag);
            toggleTagForm()
            setFormName( n => '')
            setFormColor( c => "#e6e7eb")
        } catch (error) {
            setError(error.message);
        }
    }


    const handleSubmit = async(event) =>{
        event.preventDefault()
        const newTag = {
            name: formName,
            color: formColor
        }
        if (isEditing && id) {
            handleUpdate(id, newTag);
        } else {
            handleCreate(newTag); 
        }
    }

    return(
            <div className="flex items-start gap-2 w-full">
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-gray-50 rounded-lg">
                        <CreateFormInput onChange={handleNameChange} value={formName} type="text" name="name" placeholder="Add tag"/>
                        <IoIosColorPalette />
                        <input onChange={handleColorChange} value={formColor} type="color" name="color" placeholder="choose color"/>
                        <button type="submit" className="rounded-lg p-2 text-sm fornt-thin font-Montserrat">save</button>
                    </form>
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            </div>
        
     )
}

export default TagForm