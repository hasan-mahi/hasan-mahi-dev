// src/components/WaveBackground.jsx
import React from "react";

export default function WaveBackground() {
  return (
    <div style={{ position: "fixed", zIndex: -1, width: "100%", height: "100%", top: 0, left: 0 }}>
      {/* BACK LAYER (slow, faint) */}
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
        style={{ position: "absolute", width: "100%", height: "100%", top: 0 }}>
        <path
          fill="#00f7ff"
          fillOpacity="0.03"
          d="M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z">
          <animate attributeName="d" dur="16s" repeatCount="indefinite"
            values="
              M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z;
              M0,120 C300,180 1140,120 1440,100 L1440,0 L0,0 Z;
              M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z
            " />
        </path>
      </svg>

      {/* FRONT LAYER (faster, brighter) */}
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
        style={{ position: "absolute", width: "100%", height: "100%", top: 0 }}>
        <path
          fill="#00f7ff"
          fillOpacity="0.07"
          d="M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z">
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="
              M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z;
              M0,180 C300,200 1140,100 1440,120 L1440,0 L0,0 Z;
              M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z
            " />
        </path>
      </svg>
    </div>
  );
}
