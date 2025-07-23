import React from "react";
import { Box } from "@mui/material";

const iconStyles = {
  "fab fa-react": "#61DAFB",
  "fab fa-node-js": "#3C873A",
  "fab fa-laravel": "#FF2D20",
  "fas fa-database": "#4DB33D",
  "fas fa-server": "#00758F",
  "fab fa-js": "#F7DF1E",
  "fab fa-git-alt": "#F05032",
  "fas fa-code": "#00f7ff",
  "fab fa-github": "#ffffff",
};

const icons = Object.keys(iconStyles);
const repeatedIcons = [...icons, ...icons, ...icons]; // Repeat for smooth motion

export default function BidirectionalIconScroller() {
  const scrollSpeed = 14; // Seconds for one direction

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
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <Box
        component="ul"
        sx={{
          display: "flex",
          gap: 6,
          listStyle: "none",
          p: 0,
          m: 0,
          animation: `scrollBackAndForth ${scrollSpeed}s linear infinite alternate`,
          whiteSpace: "nowrap",
          alignItems: "center",
          height: "100%",
          willChange: "transform",
        }}
      >
        {repeatedIcons.map((iconClass, idx) => (
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

      <style>{`
        @keyframes scrollBackAndForth {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </Box>
  );
}
