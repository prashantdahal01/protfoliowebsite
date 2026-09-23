"use client";

import { motion } from "framer-motion";

export function AboutSections() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-6 px-6 py-24 sm:grid-cols-2 sm:py-32">
      <motion.article initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="border-l border-cyan-300/40 pl-6">
        <p className="text-xs font-medium tracking-[0.22em] text-cyan-200">DESIGN × ENGINEERING</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">I build digital experiences.</h2>
        <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-gray-300">Next.js, Framer Motion, WebGL/canvas, and obsessive attention to perceived performance.</p>
      </motion.article>
      <motion.article initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="border-l border-fuchsia-300/40 pl-6 sm:mt-20">
        <p className="text-xs font-medium tracking-[0.22em] text-fuchsia-200">CRAFT</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Bridging design and engineering.</h2>
        <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-gray-300">Motion direction meets scalable systems, built for maintainability and speed.</p>
      </motion.article>
    </section>
  );
}