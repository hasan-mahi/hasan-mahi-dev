import React, { useEffect } from "react";

export default function MouseGlowTrail() {
  useEffect(() => {
    const trail = document.createElement("div");
    trail.style.position = "fixed";
    trail.style.pointerEvents = "none";
    trail.style.width = "20px";
    trail.style.height = "20px";
    trail.style.borderRadius = "50%";
    trail.style.background = "radial-gradient(circle, #00f7ff, transparent)";
    trail.style.filter = "blur(6px)";
    trail.style.zIndex = 9999;
    document.body.appendChild(trail);

    const move = (e) => {
      trail.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    document.addEventListener("mousemove", move);
    return () => {
      document.removeEventListener("mousemove", move);
      trail.remove();
    };
  }, []);

  return null;
}
