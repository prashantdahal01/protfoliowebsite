import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata = { title: "Blog | Prashant Dahal", description: "Notes on frontend engineering, interaction design, performance, and motion." };

export default function BlogPage() {
  return <main className="mx-auto min-h-screen max-w-6xl px-6 py-24 sm:py-32"><p className="text-xs font-medium tracking-[0.22em] text-cyan-200">WRITING</p><h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">Notes from the build.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">Short essays about interfaces, systems, and the choices that make digital work feel considered.</p><div className="mt-14 grid gap-5 md:grid-cols-2">{posts.map((post) => <article key={post.slug} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><div className="flex flex-wrap gap-2 text-xs text-gray-400"><time dateTime={post.date}>{post.date}</time><span>·</span><span>{post.readTime}</span>{post.draft ? <span className="rounded-full border border-fuchsia-200/30 px-2 py-0.5 text-fuchsia-200">Draft</span> : null}</div><h2 className="mt-5 text-2xl font-semibold"><Link href={`/blog/${post.slug}`} className="hover:text-cyan-200">{post.title}</Link></h2><div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">{tag}</span>)}</div></article>)}</div></main>;
}
