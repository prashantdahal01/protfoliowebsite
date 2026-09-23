import { FaCode, FaCube, FaWrench } from "react-icons/fa6";
import { skillGroups } from "@/lib/about";

const icons = [FaCode, FaCube, FaWrench];

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="max-w-2xl"><p className="text-xs font-medium tracking-[0.22em] text-cyan-200">CAPABILITIES</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A toolkit for useful motion.</h2><p className="mt-4 text-base leading-7 text-gray-300">Grouped by the kind of work each tool helps me do, rather than a wall of logos.</p></div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return <article key={group.category} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><Icon aria-hidden="true" className="text-2xl text-cyan-200" /><h3 className="mt-5 text-lg font-semibold">{group.category}</h3><div className="mt-6 space-y-4">{group.skills.map((skill) => <div key={skill.name}><div className="flex justify-between text-sm text-gray-200"><span>{skill.name}</span><span className="text-gray-400">{skill.level}%</span></div><div className="mt-2 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-200" style={{ width: `${skill.level}%` }} /></div></div>)}</div></article>;
        })}
      </div>
    </section>
  );
}
