"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!visible) return null;
  return <button type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-40 rounded-full border border-cyan-200/40 bg-slate-950/80 p-3 text-cyan-100 shadow-lg backdrop-blur transition hover:bg-cyan-200 hover:text-slate-950"><FaArrowUp aria-hidden="true" /></button>;
}
