import React from "react";
import RegisterForm from "../components/forms/RegisterForm";
import LoginDecorativeSection from "../components/LoginDecovariveSection";

const StarIcon = ({ size = "small" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  };

  return (
    <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
};

function Register() {
  return (
    <div className="w-full h-full rounded-3xl bg-[#0B0F1A]">
      <div className="h-full rounded-3xl relative p-4">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-space-primary-opacity-20 animate-pulse duration-[4s]">
            <StarIcon size="large" />
          </div>
          <div className="absolute top-20 right-20 text-space-primary-opacity-30 animate-pulse duration-[3s]">
            <StarIcon size="medium" />
          </div>
          <div className="absolute bottom-32 left-1/4 text-space-primary-opacity-20 animate-pulse duration-[5s]">
            <StarIcon size="small" />
          </div>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-space-primary rounded-full animate-twinkle"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.25,
                animationDelay: Math.random() * 5 + "s",
                animationDuration: Math.random() * 3 + 2 + "s",
              }}
            />
          ))}
        </div>

        <div className="w-full h-full flex sm:flex-row flex-col items-center justify-center relative">
          <div className="content-wrapper w-full max-w-6xl flex items-center justify-center gap-16">
            <div className="w-[500px] h-[500px] sm:flex hidden items-center justify-center relative">
              <div className="w-full h-full absolute inset-0">
                <LoginDecorativeSection />
                <img
                  src="/images/register-image.png"
                  className="height-auto w-full"
                />
              </div>
            </div>

            <div className="sm:w-[540px] w-full relative">
              <div className="absolute -inset-2 bg-space-primary-opacity-20/10 rounded-3xl blur-xl" />

              <div className="relative backdrop-blur-xl bg-[#1A2234]/40 p-6 md:p-10 rounded-3xl border border-[#9BB5D8]/10">
                <div className="flex flex-col">
                  <h1 className="font-Montserrat font-bold text-2xl md:text-[40px] leading-tight mb-3 text-space-primary">
                    Launch Your Journey!
                  </h1>
                  <div className="w-auto h-[200px] flex sm:hidden items-center justify-center relative">
                    <img
                      src="/images/register-image.png"
                      className="w-auto h-[200px]"
                    />
                  </div>
                  <p className="font-Montserrat text-space-primary/70 text-lg mb-8">
                    Sign up to embark on a stellar journey of task management
                    and stay on top of your galaxy of goals!
                  </p>

                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
