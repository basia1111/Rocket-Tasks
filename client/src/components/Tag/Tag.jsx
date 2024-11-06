function TagItem({ tag }) {
    const { name, color } = tag;

    return (
        <div 
            className="rounded-full border-2 px-2 font-Montserrat font-normal text-sm shadow-md"
            style={{ borderColor: color }}
        >
            #{name}
        </div>
    );
}

export default TagItem;