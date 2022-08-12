import React from "react";

const CardLoader = (props) => (
  <div className={`card loader border-radius-10`}>
    <svg
      aria-labelledby="vxn110a-aria"
      role="img"
      width="100%"
      height="100%"
      viewBox="0 0 450 200"
    >
      <title id="vxn110a-aria">Loading...</title>
      <rect
        role="presentation"
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#vxn110a-diff)"
        style={{ fill: 'url("#vxn110a-animated-diff")' }}
      ></rect>
      <defs>
        <clipPath id="vxn110a-diff">
          <rect x="0" y="0" rx="0" ry="0" width="450" height="400"></rect>
        </clipPath>
        <linearGradient id="vxn110a-animated-diff">
          <stop offset="0%" stopColor="#f0f0f0" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="1.2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="50%" stopColor="#dedede" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="1.2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="100%" stopColor="#f0f0f0" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="1.2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
);
export default CardLoader;
