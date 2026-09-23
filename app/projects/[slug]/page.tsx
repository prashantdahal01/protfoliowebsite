import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNextProject, getProject, projects } from "@/lib/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const nextProject = getNextProject(project.slug);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-24 sm:py-32">
      <header className="max-w-4xl">
        <p className="text-xs font-medium tracking-[0.22em] text-cyan-200">CASE STUDY</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-300">{project.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-sm text-cyan-100">{tag}</span>)}
        </div>
      </header>

      <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        <Image src={project.image} alt={`${project.title} hero preview`} width={1600} height={900} priority className="aspect-video w-full object-cover" />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="max-w-3xl space-y-12">
          <section><h2 className="text-2xl font-semibold">The problem</h2><p className="mt-4 text-lg leading-8 text-gray-300">{project.problem}</p></section>
          <section><h2 className="text-2xl font-semibold">The approach</h2><p className="mt-4 text-lg leading-8 text-gray-300">{project.approach}</p></section>
          <section><h2 className="text-2xl font-semibold">The solution</h2><p className="mt-4 text-lg leading-8 text-gray-300">{project.solution}</p></section>
          <section><h2 className="text-2xl font-semibold">The outcome</h2><p className="mt-4 text-lg leading-8 text-gray-300">{project.outcome}</p></section>
        </article>
        <aside className="space-y-6 border-l border-white/10 pl-6 text-sm">
          <div><p className="text-xs tracking-[0.18em] text-gray-400">ROLE</p><p className="mt-2 text-gray-200">{project.role}</p></div>
          <div><p className="text-xs tracking-[0.18em] text-gray-400">STACK</p><p className="mt-2 text-gray-200">{project.tags.join(" · ")}</p></div>
          <div className="flex flex-col gap-3 pt-2"><a href={project.githubHref} target="_blank" rel="noopener noreferrer" className="text-cyan-200 underline underline-offset-4">View source on GitHub</a><a href={project.demoHref} className="text-gray-200 underline underline-offset-4">Open live demo</a></div>
        </aside>
      </div>

      <section className="mt-20"><h2 className="text-2xl font-semibold">Selected screens</h2><div className="mt-6 grid gap-5 sm:grid-cols-3">{project.gallery.map((image, index) => <Image key={image} src={image} alt={`${project.title} screen ${index + 1}`} width={900} height={600} loading="lazy" className="aspect-[3/2] rounded-xl border border-white/10 object-cover" />)}</div></section>

      <nav className="mt-24 border-t border-white/10 pt-8"><p className="text-xs tracking-[0.18em] text-gray-400">NEXT PROJECT</p><Link href={`/projects/${nextProject.slug}`} className="mt-3 inline-block text-2xl font-semibold text-cyan-200 hover:text-white">{nextProject.title} <span aria-hidden="true">↗</span></Link></nav>
    </main>
  );
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  return { title: project ? `${project.title} | Prashant Dahal` : "Project | Prashant Dahal", description: project?.description, openGraph: { title: project?.title, description: project?.description, images: [`/projects/${params.slug}/opengraph-image.webp`] } };
}