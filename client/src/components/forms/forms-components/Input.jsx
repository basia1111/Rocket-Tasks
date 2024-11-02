function Input({value, type, onChange, name, placeholder, icon: Icon }){

    return(
        <div className="relative">
            {Icon && <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" /> }
            <input 
                type={type} name={name} id={name} value={value} 
                onChange={onChange}
                placeholder={placeholder}
                className="w-full py-4 pl-10 pr-4 border-b-[1px] border-gray-300 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 rounded-none"
            />
        </div>

    )
}

export default Input