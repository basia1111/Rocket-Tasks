import RegisterForm from "../components/forms/RegisterForm"

function Register(){

return(
    <div className="min-w-[320px] max-w-[1320px] h-full w-full p-4 flex gap-10 justify-between" >
         <div className="w-1/2 h-full md:flex flex-col bg-white p-10 rounded-3xl shadow-xl hidden">
            
        </div>
        <div className="md:w-1/2 w-full h-full flex flex-col md:p-10 p-4 items-start justify-start ">
            <h1 className="font-Montserrat font-bold text-4xl pb-4">Create Your Account</h1>
            <p className="font-Montserrat font-normal text-l pb-8" >Sign up to start managing your tasks efficiently!</p>
            <RegisterForm />
        </div>
    </div>
)

}

export default Register