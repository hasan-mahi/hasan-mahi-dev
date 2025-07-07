import { keyframes } from "@emotion/react";

// Circular floating motion without rotation
export const circularFloat = keyframes`
  0%   { transform: translate(0px, 0px); }
  25%  { transform: translate(10px, -10px); }
  50%  { transform: translate(20px, 0px); }
  75%  { transform: translate(10px, 10px); }
  100% { transform: translate(0px, 0px); }
`;

// Optional glow
export const glow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(0, 247, 255, 0.4),
                0 0 20px rgba(0, 247, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 247, 255, 0.6),
                0 0 30px rgba(0, 247, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 247, 255, 0.4),
                0 0 20px rgba(0, 247, 255, 0.2);
  }
`;
