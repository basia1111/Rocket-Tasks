function SubmitButton({content}){

    return(
        <button 
            type="submit" 
            className="bg-green text-white font-semibold  mt-6 py-3 px-4 rounded-full hover:scale-105 scale-100 transition-all duration-200 shadow-md"
        > 
            {content}     
        </button>
    )
}

export default SubmitButton