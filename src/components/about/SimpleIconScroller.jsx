import React from "react";
import { Box } from "@mui/material";

// Font Awesome icon class to brand color map
const iconStyles = {
  "fab fa-react": "#61DAFB",
  "fab fa-node-js": "#3C873A",
  "fab fa-laravel": "#FF2D20",
  "fas fa-database": "#4DB33D",
  "fas fa-server": "#00758F",
  "fab fa-js": "#F7DF1E",
  "fab fa-git-alt": "#F05032",
  "fab fa-docker": "#0db7ed",
  "fas fa-code": "#00f7ff",
  "fab fa-github": "#ffffff",
};

const icons = Object.keys(iconStyles);

export default function SimpleIconScroller() {
  const scrollSpeed = 20; // duration in seconds

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: 60,
        mt: 8,
        userSelect: "none",
        borderRadius: 2,
        backgroundColor: "transparent",

        // Smooth edge fade effect using CSS masking
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      {/* Scrolling icon list */}
      <Box
        component="ul"
        sx={{
          display: "flex",
          gap: 6,
          listStyle: "none",
          p: 0,
          m: 0,
          animation: `scrollLeft ${scrollSpeed}s linear infinite`,
          whiteSpace: "nowrap",
          alignItems: "center",
          height: "100%",
        }}
      >
        {[...icons, ...icons].map((iconClass, idx) => (
          <Box
            key={idx}
            component="li"
            sx={{
              fontSize: 36,
              minWidth: 36,
              textAlign: "center",
              userSelect: "none",
              color: iconStyles[iconClass],
            }}
          >
            <i className={iconClass} aria-hidden="true" />
          </Box>
        ))}
      </Box>

      {/* Keyframes for scroll animation */}
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
}
