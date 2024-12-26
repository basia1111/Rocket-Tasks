import React from "react";
import LoginForm from "../components/forms/LoginForm";
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

function Login() {
  return (
    <div className="w-full h-full rounded-3xl bg-[#0B0F1A]">
      <div className="h-full rounded-3xl relative overflow-hidden p-4">
        {/* Stars background */}
        <div className="absolute inset-0">
          {/* Large stars */}
          <div className="absolute top-10 left-10 text-space-primary-opacity-20 animate-pulse duration-[4s]">
            <StarIcon size="large" />
          </div>
          <div className="absolute top-20 right-20 text-space-primary-opacity-30 animate-pulse duration-[3s]">
            <StarIcon size="medium" />
          </div>
          <div className="absolute bottom-32 left-1/4 text-space-primary-opacity-20 animate-pulse duration-[5s]">
            <StarIcon size="small" />
          </div>
          {/* Small stars */}
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
            {/* Form Container with improved styling */}
            <div className="sm:w-[480px] w-full relative">
              {/* Outer glow effect */}
              <div className="absolute -inset-2 bg-space-primary-opacity-20/10 rounded-3xl blur-xl" />

              {/* Main form container */}
              <div className="relative backdrop-blur-xl bg-[#1A2234]/40 p-10 rounded-3xl border border-[#9BB5D8]/10">
                <div className="flex flex-col">
                  <h1 className="font-Montserrat font-bold text-[40px] leading-tight mb-3 text-space-primary">
                    Welcome Aboard,
                    <br />
                    Space Traveler!
                  </h1>

                  <p className="font-Montserrat text-space-primary/70 text-lg mb-8">
                    Log in to your mission control to manage tasks and keep your
                    journey on course.
                  </p>

                  <LoginForm />
                </div>
              </div>
            </div>

            {/* Decorative Section */}
            <div className="w-[600px] h-[600px] sm:flex hidden items-center justify-center relative">
              <div className="w-full h-full absolute inset-0">
                <LoginDecorativeSection />
                <img
                  src="/images/login-image.png"
                  className="height-[200px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
