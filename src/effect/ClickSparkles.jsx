import React, { useEffect } from "react";

export default function ClickSparkles() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    Object.assign(canvas.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 9998,
    });
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    window.addEventListener("resize", resize);

    let sparkles = [];

    function addSparkles(x, y) {
      // Reduce number of sparkles on small screens to improve performance
      const sparkleCount = window.innerWidth < 600 ? 5 : 10;

      for (let i = 0; i < sparkleCount; i++) {
        sparkles.push({
          x,
          y,
          dx: (Math.random() - 0.5) * 4,
          dy: (Math.random() - 0.5) * 4,
          life: 60,
          size: Math.random() * 4 + 2,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparkles = sparkles.filter((s) => s.life > 0);
      sparkles.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 247, 255, ${s.life / 60})`;
        ctx.fill();
        s.x += s.dx;
        s.y += s.dy;
        s.life -= 1;
      });
      requestAnimationFrame(animate);
    }

    function handleClick(e) {
      addSparkles(e.clientX, e.clientY);
    }

    document.addEventListener("click", handleClick);
    animate();

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
}
