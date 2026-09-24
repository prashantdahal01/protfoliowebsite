"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const over = (event: MouseEvent) => setActive(Boolean((event.target as HTMLElement).closest("a, button, article")));
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); };
  }, []);

  return <div className="cursor-layer pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true"><span className={`absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9ff4f] transition-transform duration-150 ${active ? "scale-150" : ""}`} style={{ left: position.x, top: position.y }} /><span className={`absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45 transition-all duration-300 ${active ? "scale-150 border-[#d9ff4f]" : ""}`} style={{ left: position.x, top: position.y }} /></div>;
}