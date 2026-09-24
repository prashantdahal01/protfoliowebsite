"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaCode, FaFigma, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const tools = [["VS Code", FaCode], ["React", FaReact], ["Next.js", SiNextdotjs], ["TypeScript", SiTypescript], ["Tailwind", SiTailwindcss], ["Figma", FaFigma], ["Node", FaNodeJs]] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const localTime = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kathmandu", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());

  return <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pb-7 pt-28 sm:px-8 sm:pb-9 lg:px-12">
    <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true"><div className="absolute left-[-10%] top-[12%] h-[38rem] w-[38rem] rounded-full bg-[#d9ff4f]/[0.035] blur-[120px]" /><div className="absolute bottom-[-18%] right-[-8%] h-[30rem] w-[30rem] rounded-full bg-[#5f6cff]/[0.06] blur-[130px]" /><div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" /></div>
    <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/50"><span>Creative developer / 2026</span><span className="hidden sm:block">Kathmandu, Nepal / {localTime}</span></div>
    <div className="relative py-14 sm:py-20"><motion.p initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-xs uppercase tracking-[0.28em] text-[#d9ff4f]">Available for thoughtful freelance</motion.p><h1 className="max-w-[1100px] text-[clamp(4.5rem,13vw,12.5rem)] font-bold leading-[0.78] tracking-[-0.075em] text-[#f2f0eb]">Prashant<br /><span className="font-display font-normal italic text-white/60">Dahal.</span></h1><p className="mt-10 max-w-xl text-lg leading-7 text-white/60 sm:ml-[28%] sm:text-xl">I build high-performance interfaces, motion systems, and scroll-linked stories that feel inevitable.</p></div>
    <div className="relative"><div className="marquee mb-8 overflow-hidden border-y hairline py-3 text-[10px] uppercase tracking-[0.24em] text-white/55"><div className="marquee-track flex gap-8"><span>Design × engineering × motion / Digital experiences with a pulse / </span><span aria-hidden="true">Design × engineering × motion / Digital experiences with a pulse / </span></div></div><div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div className="flex flex-wrap items-center gap-x-5 gap-y-4 text-white/45">{tools.map(([name, Icon]) => <span key={name} title={name} className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] transition hover:text-[#d9ff4f]"><Icon aria-hidden="true" className="text-lg transition group-hover:scale-110" /><span className="hidden lg:inline">{name}</span></span>)}</div><a href="#work" className={`scroll-cue flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60 ${reducedMotion ? "[animation:none]" : ""}`}><span className="h-8 w-px bg-[#d9ff4f]" /> Scroll down</a></div></div>
  </section>;
}