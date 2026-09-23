"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  return <motion.div initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.22 }}>{children}</motion.div>;
}