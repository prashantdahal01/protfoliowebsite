"use client";

import { motion, type MotionValue, useReducedMotion, useTransform } from "framer-motion";
import { siteLinks } from "@/lib/site";

export function Overlay({
  scrollYProgress
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const reducedMotion = useReducedMotion();
  const drift = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -80]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/35" />

      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute inset-0 flex items-center justify-center px-6 text-center"
      >
        <div className="w-full max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
            <span className="text-xs font-medium tracking-[0.24em] text-white/90">
              AVAILABLE FOR FREELANCE
            </span>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Prashant Dahal.{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">Creative Developer.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-white/85 sm:text-base">
            High-performance interfaces, scroll narratives, and motion systems
            that feel inevitable.
          </p>
          <div className="pointer-events-auto mt-6 flex justify-center gap-5 text-xs font-medium text-cyan-100">
            <a href={`mailto:${siteLinks.email}`} className="underline underline-offset-4 hover:text-white">Email</a>
            <a href={siteLinks.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">GitHub</a>
            <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ y: drift, opacity: 0.9 }}
        className="absolute inset-0"
      >
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </motion.div>
    </div>
  );
}

