import fs from "node:fs";
import path from "node:path";
import { blogPostMeta } from "@/lib/blog-data";

export type BlogPost = { slug: string; title: string; date: string; readTime: string; tags: string[]; draft: boolean; content: string };

const contentDirectory = path.join(process.cwd(), "content/blog");

function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: source };
  const data: Record<string, string | string[] | boolean> = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const raw = line.slice(separator + 1).trim();
    data[key] = raw.startsWith("[") ? raw.slice(1, -1).split(",").map((value) => value.trim()) : raw === "true" ? true : raw;
  }
  return { data, content: match[2] };
}

export const posts: BlogPost[] = blogPostMeta.map((metadata) => {
  const slug = metadata.slug;
  const parsed = parseFrontmatter(fs.readFileSync(path.join(contentDirectory, `${slug}.mdx`), "utf8"));
  return { slug, title: String(parsed.data.title), date: String(parsed.data.date), readTime: String(parsed.data.readTime), tags: (parsed.data.tags as string[]) ?? [], draft: Boolean(parsed.data.draft), content: parsed.content };
}).sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) { return posts.find((post) => post.slug === slug); }
