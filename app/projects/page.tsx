import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-32">
      <p className="text-xs font-medium tracking-[0.22em] text-cyan-200">SELECTED WORK</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Projects & case studies</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">A growing archive of interface experiments, product systems, and interactive stories.</p>
      <Link href="/#work" className="mt-10 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm text-white hover:border-cyan-200/60">Back to featured work</Link>
    </main>
  );
}