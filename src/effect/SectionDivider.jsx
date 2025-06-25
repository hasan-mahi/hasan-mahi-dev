// src/components/SectionDivider.jsx
import React from "react";

export default function SectionDivider({ flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{
        display: "block",
        width: "100%",
        height: "80px",
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <path
        fill="#00f7ff"
        fillOpacity="0.08"
        d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,197.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  );
}
