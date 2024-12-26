import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IoLockClosed, IoPerson, IoMailSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Input from "./forms-components//Input";
import PasswordInput from "./forms-components/PasswordInput";
import SubmitButton from "./forms-components/SubmitButton";

function RegisterForm() {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData((previus) => ({
      ...previus,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, checkPassword } = formData;
    setError(null);
    if (password == checkPassword) {
      try {
        await register(name, email, password);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("passwards should match");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col font-Montserrat "
      >
        <Input
          value={formData.name}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
          icon={IoPerson}
        />
        <Input
          value={formData.email}
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          icon={IoMailSharp}
        />
        <PasswordInput
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Enter password"
        />
        <PasswordInput
          value={formData.checkPassword}
          name="checkPassword"
          onChange={handleChange}
          placeholder="Confirm password"
        />

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

        <SubmitButton content="Register" />

        <div className="text-gray-400 flex items-center justify-center mt-4">
          <p>
            Already have an account?
            <Link to="/login" className="text-green">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
