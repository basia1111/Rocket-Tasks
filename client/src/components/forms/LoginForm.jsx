import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom' 
import Input from "./forms-components/Input";
import PasswordInput from "./forms-components/PasswordInput";
import SubmitButton from "./forms-components/SubmitButton";

function LoginForm() {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);

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
            <form onSubmit={handleSubmit}  className="w-full flex flex-col gap-5 font-Montserrat max-w-sm">
                <Input value={formData.email} type="email"  name="email" onChange={handleChange} placeholder="Enter your email" icon={IoMailSharp}  />
                <PasswordInput value={formData.password} name="password" onChange={handleChange} placeholder="Enter password" />
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

                <SubmitButton content="Login" />

                <div className="text-gray-400 flex items-center justify-center mt-4">
                    <p>Don't have an account? <Link to="/Register" className="text-green">Register here</Link></p>
                </div>
            </form>
        </>
    );
}


export default LoginForm;