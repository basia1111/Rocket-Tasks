import { useContext, useEffect } from "react"
import { TagContext } from '../../contexts/TagContext'

function Taglist(){

    const { tags, getTags } = useContext(TagContext)

    useEffect(() => {
        getTags()
    }, [])

    return (
        <div>
            {tags.map(tag => (
                <div> {tag.name} </div>
            ))}
        </div>
    )

}

export default Taglist