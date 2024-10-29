import { useState } from "react"

function Register (){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        checkPassword: ""
    })

    const handleChange = (event) => {
        setFormData(previus =>({
            ...previus,
            [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.prevent.default();
    }

    return(
        <>
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-1/2"> 
            
                <input 
                    type="text" name="name" id="name" value={formData.name} 
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                <input 
                    type="email" name="email" id="email" value={formData.email} 
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                <input 
                    type="password" name="password" id="password" value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Enter password"
                />
                <input 
                    type="password" name="checkPassword" id="checkPassword" value={formData.checkPassword} 
                    onChange={handleChange} 
                    placeholder="Confirm password"
                />
                
                <button type="submit" className="w-full"> Register </button>
            </form>
        </>
    )

}

export default Register