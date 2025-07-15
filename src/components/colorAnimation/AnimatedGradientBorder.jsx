// src/components/colorAnimation/AnimatedBorderWrapper.jsx
import React from "react";
import "./GradientText.css"; // Uses your existing animation & styling

export default function AnimatedGradientBorder({
  children,
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff"],
  animationSpeed = 8,
  borderRadius = "1.25rem",
  style = {},
  padding = "2px",
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    borderRadius,
    padding,
    ...style,
  };

  return (
    <div className="animated-gradient-text" style={gradientStyle}>
      <div className="gradient-overlay" style={gradientStyle}></div>
      <div style={{ position: "relative", zIndex: 2, borderRadius, height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
