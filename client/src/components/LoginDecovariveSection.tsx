import React from "react";

const LoginDecorativeSection = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full absolute "
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="planetGradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#A7DEFF" />
          <stop offset="60%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#5DA1C7" />
        </radialGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" />
          <feComposite in="SourceGraphic" />
        </filter>

        <filter id="planetGlow">
          <feGaussianBlur stdDeviation="8" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="backgroundStars">
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={`bg-star-${i}`}
            cx={Math.random() * 800}
            cy={Math.random() * 600}
            r={Math.random() * 0.8 + 0.2}
            fill="#A7DEFF"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.1;0.3"
              dur={`${Math.random() * 3 + 2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
      <g id="satellites">
        {[1, 2, 3, 4].map((_, i) => {
          const duration = 12 + i * 4;
          const delay = i * (duration / 4);
          const baseRadius = 340 + i * 40;
          const yScale = 0.15;

          return (
            <g key={`satellite-${i}`} filter="url(#glow)">
              <circle r="4" fill="#A7DEFF">
                <animateMotion
                  path={`M 0,0 a ${baseRadius},${baseRadius * yScale} 0 1,${
                    i % 2 ? "0" : "1"
                  } ${baseRadius * 2},0 a ${baseRadius},${
                    baseRadius * yScale
                  } 0 1,${i % 2 ? "0" : "1"} -${baseRadius * 2},0`}
                  dur={`${duration}s`}
                  begin={`-${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <path
                d="M-8,0 L8,0"
                stroke="#A7DEFF"
                strokeWidth="1"
                opacity="0.4"
              >
                <animateMotion
                  path={`M 0,0 a ${baseRadius},${baseRadius * yScale} 0 1,${
                    i % 2 ? "0" : "1"
                  } ${baseRadius * 2},0 a ${baseRadius},${
                    baseRadius * yScale
                  } 0 1,${i % 2 ? "0" : "1"} -${baseRadius * 2},0`}
                  dur={`${duration}s`}
                  begin={`-${delay}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default LoginDecorativeSection;
