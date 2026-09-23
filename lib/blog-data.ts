export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
};

export const blogPostMeta: BlogPostMeta[] = [
  {
    slug: "designing-for-scroll",
    title: "Designing for scroll without losing the plot",
    date: "2026-09-12",
    readTime: "4 min read"
  },
  {
    slug: "small-systems",
    title: "Small systems make expressive interfaces easier to keep",
    date: "2026-08-28",
    readTime: "3 min read"
  }
];
