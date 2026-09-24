"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/projects";

export function Projects({ items = projects }: { items?: Project[] }) {
  return (
    <section id="work" className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
      <div className="flex items-end justify-between gap-6 border-b hairline pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#d9ff4f]">02 / Selected work</p>
          <h2 className="mt-5 text-5xl font-bold tracking-[-0.06em] text-white sm:text-7xl">Snap-shots<span className="text-[#d9ff4f]">.</span></h2>
        </div>
        <Link href="/projects" className="hidden text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#d9ff4f] sm:block">View archive ↗</Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
        {items.map((p, index) => <motion.article key={p.title} initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className={`group ${index % 2 === 1 ? "md:mt-28" : ""}`}>
          <Link href={p.demoHref} className="relative block overflow-hidden bg-[#202020]" aria-label={`View ${p.title} case study`}><Image src={p.image} alt={`${p.title} project preview`} width={1280} height={720} className="aspect-[1.35/1] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-[0.45]" /><div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 transition duration-500 group-hover:opacity-100 sm:p-7"><span className="self-end text-xs uppercase tracking-[0.2em] text-[#d9ff4f]">View project ↗</span><div><p className="text-xs uppercase tracking-[0.2em] text-white/70">{p.tags[0]} / {p.tags[1]}</p><h3 className="mt-2 max-w-md text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{p.title}</h3></div></div></Link>
          <div className="mt-4 flex items-start justify-between gap-5 border-t hairline pt-4"><div><h3 className="text-lg font-medium text-white">{p.title}</h3><p className="mt-1 text-sm text-white/45">{p.description}</p></div><span className="text-xs text-white/35">0{index + 1}</span></div>
        </motion.article>)}
      </div>
    </section>
  );
}

