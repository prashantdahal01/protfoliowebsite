import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prashantdahal.dev";
  return [
    "",
    "/about",
    "/contact",
    "/projects",
    "/blog",
    ...projects.map((project) => `/projects/${project.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`)
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
