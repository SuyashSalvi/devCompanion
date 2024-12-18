"use client";

import { useEffect, useState } from "react";

export default function GradientCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none rounded-full z-[10000]" // Set high z-index
      style={{
        width: "20px",
        height: "20px",
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        background: "linear-gradient(135deg, #6B73FF, #000DFF)",
        boxShadow: "0 0 10px rgba(107, 115, 255, 0.8)",
      }}
    ></div>
  );
}
