// src/animation/heroEffects.js

import { keyframes } from "@emotion/react";

// 👋 Waving emoji animation
export const wave = keyframes`
  0% { transform: rotate(0deg) }
  10% { transform: rotate(14deg) }
  20% { transform: rotate(-8deg) }
  30% { transform: rotate(14deg) }
  40% { transform: rotate(-4deg) }
  50% { transform: rotate(10deg) }
  60% { transform: rotate(0deg) }
  100% { transform: rotate(0deg) }
`;

// 📦 Fade in and slide up animation
export const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
