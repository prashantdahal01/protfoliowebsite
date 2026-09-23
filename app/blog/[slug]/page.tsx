import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPost, posts } from "@/lib/blog";
import "highlight.js/styles/github-dark.css";

export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return { title: post ? `${post.title} | Prashant Dahal` : "Writing | Prashant Dahal", description: post?.title, openGraph: { images: [`/blog/${params.slug}/opengraph-image.webp`] } };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <main className="mx-auto min-h-screen max-w-3xl px-6 py-24 sm:py-32"><Link href="/blog" className="text-sm text-cyan-200 underline underline-offset-4">Back to writing</Link><header className="mt-12 border-b border-white/10 pb-10"><div className="flex flex-wrap gap-3 text-sm text-gray-400"><time dateTime={post.date}>{post.date}</time><span>·</span><span>{post.readTime}</span>{post.draft ? <span className="text-fuchsia-200">Draft</span> : null}</div><h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">{post.title}</h1><div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">{tag}</span>)}</div></header><article className="prose prose-invert prose-lg mt-12 max-w-none prose-headings:font-semibold prose-a:text-cyan-200 prose-pre:border prose-pre:border-white/10"><ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{post.content}</ReactMarkdown></article></main>;
}
