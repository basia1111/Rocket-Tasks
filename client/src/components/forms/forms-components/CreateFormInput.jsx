function CreateFormInput({value, type, onChange, name, placeholder, icon: Icon }){

    return(
        <div className="relative">
            <input 
                type={type} name={name} id={name} value={value} 
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-2 rounded-lg bg-transparent focus:outline-none transition-all duration-200 text-sm font-light"
            />
        </div>
    )
}

export default CreateFormInput