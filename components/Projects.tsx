import Image from "next/image";
import { projects, type Project } from "@/lib/projects";

export function Projects({ items = projects }: { items?: Project[] }) {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium tracking-[0.26em] text-gray-300">SELECTED WORK</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects & case studies
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm text-gray-300 sm:text-base">
            A small set of work spanning motion systems, scroll-linked
            storytelling, and product UI.
          </p>
        </div>
        <a
          href="/projects"
          className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 sm:inline-flex"
        >
          View all
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/20 backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-cyan-200/40 hover:bg-white/[0.07] hover:shadow-cyan-950/40"
          >
            <div className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100">
              <div className="absolute left-1/3 top-1/3 h-44 w-44 rounded-full bg-cyan-400/10" />
              <div className="absolute right-1/3 bottom-1/3 h-44 w-44 rounded-full bg-violet-500/10" />
            </div>

            <div className="relative">
              <a href={p.demoHref} aria-label={`View ${p.title} case study`} className="block overflow-hidden rounded-xl border border-white/10">
                <Image src={p.image} alt={`${p.title} project preview`} width={1280} height={720} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" />
              </a>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-balance text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <a href={p.demoHref} className="mt-1 text-cyan-200 transition hover:text-white" aria-label={`Open ${p.title} demo`}>↗</a>
              </div>
              <p className="mt-3 text-pretty text-sm leading-6 text-gray-300">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-medium text-cyan-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm font-medium">
                <a href={p.demoHref} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">Live demo</a>
                <a href={p.githubHref} target="_blank" rel="noreferrer" className="text-gray-300 underline decoration-white/20 underline-offset-4 hover:text-white">GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

