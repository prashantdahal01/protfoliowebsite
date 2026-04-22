export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const DEFAULT_PROJECTS: Project[] = [
  {
    title: "Scrollytelling Product Launch",
    description:
      "A cinematic scroll narrative with frame-accurate canvas playback and responsive layout logic.",
    tags: ["Next.js", "Canvas", "Framer Motion"],
    href: "#"
  },
  {
    title: "Realtime Design System",
    description:
      "A motion-first component library with tokens, performance budgets, and micro-interactions.",
    tags: ["TypeScript", "Tailwind", "Motion"],
    href: "#"
  },
  {
    title: "Interactive Case Study",
    description:
      "A WebGL/canvas hybrid build with buttery input handling and progressive enhancement.",
    tags: ["WebGL", "R3F", "Perf"],
    href: "#"
  },
  {
    title: "Editorial Portfolio",
    description:
      "Minimal typography, tactile hover states, and subtle depth cues tuned for dark UI.",
    tags: ["UX", "UI", "Craft"],
    href: "#"
  }
];

export function Projects({ projects = DEFAULT_PROJECTS }: { projects?: Project[] }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28 pt-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.26em] text-white/60">SELECTED WORK</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects & case studies
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm text-white/70 sm:text-base">
            A small set of work spanning motion systems, scroll-linked
            storytelling, and product UI.
          </p>
        </div>
        <a
          href="#"
          className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 sm:inline-flex"
        >
          View all
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href ?? "#"}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
          >
            <div className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100">
              <div className="absolute left-1/3 top-1/3 h-44 w-44 rounded-full bg-cyan-400/10" />
              <div className="absolute right-1/3 bottom-1/3 h-44 w-44 rounded-full bg-violet-500/10" />
            </div>

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-balance text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <span className="mt-1 text-white/35 transition group-hover:text-white/60">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-pretty text-sm text-white/70">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

