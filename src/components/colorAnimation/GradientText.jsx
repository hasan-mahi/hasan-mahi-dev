import React from "react";
import { Box } from "@mui/material";
import { gradientColors, moveGradient } from "./gradient";

export default function GradientText({
  children,
  colors = gradientColors,
  animationSpeed = 9,
  showBorder = false,
  className = "",
  style = {},
}) {
  return (
    <Box
      component="span"
      className={className}
      sx={{
        display: "inline-block",
        background: `linear-gradient(270deg, ${colors.join(",")})`,
        backgroundSize: "400% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: `${moveGradient} ${animationSpeed}s linear infinite`,
        ...(showBorder && {
          borderBottom: "2px solid",
          borderImage: `linear-gradient(270deg, ${colors.join(",")}) 1`,
        }),
        ...style,
      }}
    >
      {children}
    </Box>
  );
}
