import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from '../contexts/AuthContext'

function Register (){
    const { register } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        checkPassword: ""
    })
    const [error, setError] = useState(null)


    const handleChange = (event) => {
        setFormData(previus =>({
            ...previus,
            [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { name, email, password, checkPassword} = formData
        setError(null);
        if(password == checkPassword){
            try {
                await register( name, email, password)
            } catch (error) {  
                setError(error.message);
            }
        } else {
            setError('passwards should match')
        }
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
                {error && <div className="error-message">{error}</div>}
            </form>
        </>
    )

}

export default Register