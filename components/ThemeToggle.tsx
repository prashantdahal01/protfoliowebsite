"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  return <button type="button" aria-label={`Switch to ${isDark ? "light" : "dark"} theme`} onClick={() => setTheme(isDark ? "light" : "dark")} className="rounded-full border border-white/20 p-2 text-white transition hover:border-cyan-200/60 hover:text-cyan-100 dark:border-white/20 light:border-slate-300 light:text-slate-800">{isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}</button>;
}
