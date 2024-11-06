import { useContext, useState } from "react"
import CreateFormInput from "./forms-components/CreateFormInput"
import { IoIosColorPalette } from "react-icons/io";
import { TagContext } from '../../contexts/TagContext'
import { IoAdd } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";

function TagForm(){

    const { addTag } = useContext(TagContext)
    const [isOpen, setIsOpen] = useState(false);
    const[name, setName] = useState('')
    const[color, setColor] = useState('#e6e7eb')
    const [error, setError] = useState(null)
    
    const toggletaskForm = () => {
        setIsOpen(open => !open);
        setName('');
        setColor('#e6e7eb')
        setError('')

    };
    const handleNameChange = (event) => {setName(n => event.target.value)}
    const handleColorChange = (event) => {setColor(c => event.target.value)}

    const handleSubmit = async(event) =>{
        event.preventDefault()
        const newTag = {
            name: name,
            color: color
        }
        try{
            await addTag(newTag)
            toggletaskForm()
        } catch(err) {
            setError(e => err.message)
        }

    }


     return(
            <div className="flex items-start gap-2 w-full">
                <div className={`${isOpen ? "visible" : "hidden"}`}>
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-gray-50 rounded-lg">
                        <CreateFormInput onChange={handleNameChange} value={name} type="text" name="name" placeholder="Add tag"/>
                        <IoIosColorPalette />
                        <input onChange={handleColorChange} value={color} type="color" name="color" placeholder="choose color"/>
                        <button type="submit" className="rounded-lg p-2 text-sm fornt-thin font-Montserrat">save</button>
                    </form>
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                </div>
                <button 
                    onClick={toggletaskForm}
                    className="flex items-center justify-center rounded-full 
                            hover:scale-110 transition-transform duration-200 p-2"
                >
                    {isOpen ? (
                        <FcCancel className="text-blue-gray size-6" />
                    ) : (
                        <IoAdd className="text-blue-gray size-6" />
                    )}
                </button>
            </div>
     )
}

export default TagForm