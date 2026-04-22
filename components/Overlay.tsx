"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

function useFadeInOut(
  progress: MotionValue<number>,
  start: number,
  mid: number,
  end: number
) {
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [24, 0, -24]);
  return { opacity, y };
}

export function Overlay({
  scrollYProgress
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const s1 = useFadeInOut(scrollYProgress, 0.0, 0.08, 0.22);
  const s2 = useFadeInOut(scrollYProgress, 0.24, 0.34, 0.5);
  const s3 = useFadeInOut(scrollYProgress, 0.52, 0.66, 0.82);

  const drift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/35" />

      <motion.div
        style={{ opacity: s1.opacity, y: s1.y }}
        className="absolute inset-0 flex items-center justify-center px-6 text-center"
      >
        <div className="w-full max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
            <span className="text-xs tracking-[0.24em] text-white/70">
              AVAILABLE FOR FREELANCE
            </span>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Prashant Dahal.{" "}
            <span className="text-white/70">Creative Developer.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-white/70 sm:text-base">
            High-performance interfaces, scroll narratives, and motion systems
            that feel inevitable.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: s2.opacity, y: s2.y }}
        className="absolute left-6 top-[55%] w-[min(86vw,34rem)] sm:left-16"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <p className="text-xs tracking-[0.22em] text-white/60">
            DESIGN × ENGINEERING
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight">
            I build digital experiences.
          </h2>
          <p className="mt-3 text-pretty text-sm text-white/70">
            Next.js, Framer Motion, WebGL/canvas, and obsessive attention to
            perceived performance.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: s3.opacity, y: s3.y }}
        className="absolute right-6 top-[42%] w-[min(86vw,34rem)] text-right sm:right-16"
      >
        <div className="ml-auto rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <p className="text-xs tracking-[0.22em] text-white/60">CRAFT</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight">
            Bridging design and engineering.
          </h2>
          <p className="mt-3 text-pretty text-sm text-white/70">
            Motion direction meets scalable systems—built for maintainability and
            speed.
          </p>
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

