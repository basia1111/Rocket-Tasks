import { useState } from "react"

function Login (){

    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
                    type="email" name="email" id="email" value={formData.email} 
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                <input 
                    type="password" name="password" id="password" value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Enter password"
                />    
                <button type="submit" className="w-full"> Login </button>
            </form>
        </>
    )

}

export default Login