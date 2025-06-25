// src/components/ScrollReactiveGlow.jsx
import React, { useEffect } from "react";
import { useScroll, useVelocity, useSpring } from "framer-motion";

export function ScrollReactiveGlow() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothedVelocity = useSpring(velocity, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const glow = document.getElementById("scroll-glow");
    if (!glow) return;

    const unsubscribe = smoothedVelocity.on("change", (v) => {
      // Normalize opacity (clamp max 1)
      const opacity = Math.min(1, Math.abs(v) / 500);
      glow.style.opacity = opacity;
    });

    return () => unsubscribe();
  }, [smoothedVelocity]);

  return (
    <div
      id="scroll-glow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        background: "radial-gradient(circle, #00f7ff33, transparent 70%)",
        zIndex: 1,
        opacity: 0,
        transition: "opacity 0.2s ease-out",
      }}
    />
  );
}
