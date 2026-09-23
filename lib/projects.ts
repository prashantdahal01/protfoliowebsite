export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery: string[];
  demoHref: string;
  githubHref: string;
  role: string;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "scrollytelling-product-launch",
    title: "Scrollytelling Product Launch",
    description: "A frame-accurate scroll narrative built around a responsive canvas sequence.",
    tags: ["Next.js", "Canvas", "Framer Motion"],
    image: "/sequence/frame_08_delay-0.066s.webp",
    gallery: [
      "/sequence/frame_00_delay-0.066s.webp",
      "/sequence/frame_24_delay-0.066s.webp",
      "/sequence/frame_48_delay-0.066s.webp"
    ],
    demoHref: "/projects/scrollytelling-product-launch",
    githubHref: "https://github.com/prashantdahal01/scrollytelling-product-launch",
    role: "Product designer and frontend engineer",
    problem: "A product story needed to feel cinematic without becoming a heavy video embed or sacrificing control on small screens.",
    approach: "I treated scroll progress as the primary interaction model, separating canvas rendering from the content overlay so each could remain responsive and accessible.",
    solution: "A DPR-aware canvas loads a compressed frame sequence, while Framer Motion maps scroll progress to frame selection and restrained copy movement.",
    outcome: "The result is a lightweight, controllable product narrative with a resilient fallback: the surrounding story remains readable even when frames are still loading."
  },
  {
    slug: "realtime-design-system",
    title: "Realtime Design System",
    description: "A motion-first component language with tokens, performance budgets, and tactile feedback.",
    tags: ["TypeScript", "Tailwind", "Motion"],
    image: "/sequence/frame_22_delay-0.066s.webp",
    gallery: [
      "/sequence/frame_12_delay-0.066s.webp",
      "/sequence/frame_30_delay-0.066s.webp",
      "/sequence/frame_54_delay-0.066s.webp"
    ],
    demoHref: "/projects/realtime-design-system",
    githubHref: "https://github.com/prashantdahal01/realtime-design-system",
    role: "Design systems engineer",
    problem: "Interface polish was being recreated component by component, making motion inconsistent and expensive to maintain.",
    approach: "I grouped repeated decisions into semantic tokens for color, spacing, borders, and interaction states before composing higher-level patterns.",
    solution: "The system pairs typed component APIs with Tailwind utilities and small motion primitives that respect reduced-motion preferences.",
    outcome: "Teams can compose expressive screens from a consistent vocabulary while keeping the performance cost of interaction feedback predictable."
  },
  {
    slug: "interactive-case-study",
    title: "Interactive Case Study",
    description: "A progressive WebGL and canvas experience that keeps input handling buttery and legible.",
    tags: ["WebGL", "R3F", "Performance"],
    image: "/sequence/frame_36_delay-0.066s.webp",
    gallery: [
      "/sequence/frame_18_delay-0.066s.webp",
      "/sequence/frame_36_delay-0.066s.webp",
      "/sequence/frame_42_delay-0.066s.webp"
    ],
    demoHref: "/projects/interactive-case-study",
    githubHref: "https://github.com/prashantdahal01/interactive-case-study",
    role: "Creative technologist",
    problem: "A visually rich case study needed depth and movement without turning the page into an opaque, input-hungry demo.",
    approach: "I made the visual layer progressive: the semantic page structure remains useful on its own, while enhancement adds depth where the device can support it.",
    solution: "Canvas/WebGL scenes are isolated behind stable layout regions with bounded animation work and direct keyboard-friendly controls.",
    outcome: "The experience feels dimensional on capable devices and remains understandable, navigable, and performant everywhere else."
  },
  {
    slug: "editorial-portfolio",
    title: "Editorial Portfolio",
    description: "A typographic portfolio system with tactile hover states and deliberate visual hierarchy.",
    tags: ["UX", "UI", "Craft"],
    image: "/sequence/frame_50_delay-0.066s.webp",
    gallery: [
      "/sequence/frame_06_delay-0.066s.webp",
      "/sequence/frame_40_delay-0.066s.webp",
      "/sequence/frame_58_delay-0.066s.webp"
    ],
    demoHref: "/projects/editorial-portfolio",
    githubHref: "https://github.com/prashantdahal01/editorial-portfolio",
    role: "UX engineer and visual designer",
    problem: "A portfolio can easily become a gallery of disconnected effects, obscuring the work and the person behind it.",
    approach: "I used editorial pacing, restrained contrast shifts, and repeatable card structures to give every project room without adding visual noise.",
    solution: "The layout combines strong type scale, a narrow reading measure, and small responsive transitions that guide attention without competing with content.",
    outcome: "The portfolio feels authored and expressive while staying fast to scan, easy to navigate, and straightforward to extend."
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
