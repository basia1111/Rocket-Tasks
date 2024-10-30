import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        setFormData(previous => ({
            ...previous,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = async (event) => {
        setError(null);
        event.preventDefault();
        try {
            await login(formData.email, formData.password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-1/2"> 
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

                {error && <div className="error-message">{error}</div>}
            </form>
        </>
    );
}

export default Login;
