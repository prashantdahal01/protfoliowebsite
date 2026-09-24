"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/about";

export function ExperienceAccordion() {
  const [open, setOpen] = useState(0);
  const reducedMotion = useReducedMotion();

  return <div className="mt-12 border-t hairline">{experience.map((item, index) => <div key={`${item.company}-${item.role}`} className="border-b hairline"><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)} className="grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-6 text-left sm:grid-cols-[4rem_1fr_8rem_auto]"><span className="text-xs text-white/35">0{index + 1}</span><span><span className="block text-2xl font-medium tracking-[-0.04em] text-white sm:text-4xl">{item.role}</span><span className="mt-1 block text-sm text-white/45">{item.company}</span></span><span className="hidden text-right text-xs uppercase tracking-[0.16em] text-white/40 sm:block">{item.dates}</span><span className="text-2xl font-light text-[#d9ff4f]">{open === index ? "−" : "+"}</span></button><AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.3 }} className="overflow-hidden"><ul className="mb-7 ml-[2.5rem] max-w-2xl space-y-3 text-base leading-7 text-white/60 sm:ml-[4rem]">{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></motion.div>}</AnimatePresence></div>)}</div>;
}