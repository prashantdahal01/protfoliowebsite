"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteLinks } from "@/lib/site";

const links = [["/about", "About"], ["/#work", "Work"], ["/blog", "Blog"], ["/contact", "Contact"]] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-bold uppercase tracking-[0.18em] text-white" onClick={() => setMenuOpen(false)}>PD<span className="text-[#d9ff4f]">.</span></Link>
          <button type="button" aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen((value) => !value)} className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:text-[#d9ff4f]"><span>{menuOpen ? "Close" : "Menu"}</span><span className="relative flex h-5 w-6 flex-col justify-center gap-1.5"><span className={`block h-px bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`} /><span className={`block h-px bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} /></span></button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && <motion.div id="site-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.35 }} className="fixed inset-0 z-40 overflow-y-auto bg-[#151515] px-5 pb-10 pt-28 sm:px-8 lg:px-12">
          <div className="flex min-h-full flex-col justify-between"><nav aria-label="Main navigation" className="border-t hairline">{links.map(([href, label], index) => <motion.div key={href} initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : index * 0.07 }} className="border-b hairline"><Link href={href} onClick={() => setMenuOpen(false)} className={`flex items-baseline justify-between py-5 text-[clamp(3.2rem,9vw,8rem)] leading-none tracking-[-0.06em] transition hover:text-[#d9ff4f] ${pathname === href ? "text-[#d9ff4f]" : "text-white"}`}><span className="mr-5 text-xs tracking-[0.18em] text-white/35">0{index + 1}</span>{label}<span className="text-sm text-white/30">↗</span></Link></motion.div>)}</nav><div className="mt-20 grid gap-8 border-t hairline pt-5 text-sm sm:grid-cols-2"><div><p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/35">Connect</p><div className="flex gap-6"><a href={siteLinks.github} target="_blank" rel="noreferrer" className="hover:text-[#d9ff4f]">GitHub ↗</a><a href={siteLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#d9ff4f]">LinkedIn ↗</a></div></div><div className="sm:text-right"><p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/35">Currently</p><p className="text-white/65">Building thoughtful digital experiences.</p></div></div></div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}

