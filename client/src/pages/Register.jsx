import RegisterForm from "../components/forms/RegisterForm"
import Lottie from "lottie-react";
import animation from '../../public/animations/Animation-spacecraft.json'

function Register(){

return(
    <div className="min-w-[320px] max-w-[1320px] md:h-full h-auto w-full p-4 flex sm:flex-row flex-col gap-10 items-center justify-around bg-blue-gray rounded-3xl" >
       
       <div className="w-1/2 h-full sm:flex hidden bg-[url('/images/bg-reg.png')] bg-contain bg-no-repeat bg-center">
            <Lottie speed={0.1} animationData={animation}/>
        </div>
        <div className=" sm:w-auto w-full flex items-center justify-center bg-white sm:p-10 p-8 rounded-3xl shadow-lg">
            <div className=" flex flex-col items-center justify-center ">
                <h1 className="w-full text-left font-Montserrat font-bold sm:text-4xl text-2xl sm:pb-4 pb-2">🚀 Launch Your Journey</h1>
                <p className="max-w-sm sw-full text-left font-Montserrat font-normal text-l pb-8" >Sign up to embark on a stellar journey of task management and stay on top of your galaxy of goals!</p>
                <Lottie  speed={0.1} className="sm:hidden flex h-32" animationData={animation}/>
                <RegisterForm />
            </div>
        </div>
    </div>
)

}

export default Register