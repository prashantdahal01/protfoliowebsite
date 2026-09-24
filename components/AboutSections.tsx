"use client";

import { motion } from "framer-motion";

export function AboutSections() {
  return (
    <section id="about" className="mx-auto grid max-w-[1440px] gap-14 px-5 py-28 sm:grid-cols-2 sm:px-8 sm:py-36 lg:px-12">
      <motion.article initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="border-t hairline pt-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[#d9ff4f]">01 / Design × engineering</p>
        <h2 className="mt-8 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl">I build digital experiences with a pulse.</h2>
        <p className="mt-8 max-w-xl text-base leading-7 text-white/55">Next.js, Framer Motion, WebGL/canvas, and obsessive attention to perceived performance.</p>
      </motion.article>
      <motion.article initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="border-t hairline pt-5 sm:mt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-[#d9ff4f]">Practice</p>
        <h2 className="mt-8 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl">Bridging design and engineering.</h2>
        <p className="mt-8 max-w-xl text-base leading-7 text-white/55">Motion direction meets scalable systems, built for maintainability and speed.</p>
      </motion.article>
    </section>
  );
}