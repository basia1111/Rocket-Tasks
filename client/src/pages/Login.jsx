import LoginForm from "../components/forms/LoginForm"
import Lottie from "lottie-react";
import animation from '../../public/animations/Animation-astronaut.json'

function Login(){

return(
    <div className="min-w-[320px] max-w-[1320px] sm:h-full h-auto w-full p-4 flex sm:flex-row flex-col gap-10 items-center justify-around bg-blue-gray rounded-3xl" >
        <div className=" sm:w-auto w-1/2 flex items-center justify-center bg-white sm:p-10 p-8 rounded-3xl shadow-lg">
            <div className="flex flex-col">
                <h1 className="font-Montserrat font-bold sm:text-4xl text-3xl sm:pb-4 pb-2 max-w-sm"> 🌌 Welcome Aboard, Space Traveler!</h1>
                <p className="font-Montserrat font-normal sm:text-l text- pb-8 max-w-sm" >Log in to your mission control to manage tasks and keep your journey on course.</p>
                <Lottie  className="sm:hidden flex h-32" animationData={animation} />
                <LoginForm />
            </div>
        </div>
        <div className="w-1/2 h-full sm:flex  hidden bg-[url('/images/bg-log.png')] bg-contain bg-no-repeat bg-center">
            <Lottie animationData={animation} />
        </div>

    </div>
)

}

export default Login