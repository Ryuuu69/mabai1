"use client";

import { useEffect, useRef, useState } from "react";

type SpotlightProps = {
  className?: string;
  color?: string; // ex: "rgba(124,58,237,0.16)"
};

export default function Spotlight({
  className = "",
  color = "rgba(124,58,237,0.12)",
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 z-[1] ${className}`}
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)`,
      }}
    />
  );
}
