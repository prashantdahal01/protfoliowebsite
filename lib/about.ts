export type SkillGroup = {
  category: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  { category: "Frontend", skills: [{ name: "React", level: 90 }, { name: "Next.js", level: 88 }, { name: "TypeScript", level: 84 }, { name: "Tailwind CSS", level: 90 }] },
  { category: "Motion & visual", skills: [{ name: "Framer Motion", level: 88 }, { name: "Canvas", level: 78 }, { name: "WebGL concepts", level: 68 }, { name: "Interaction design", level: 84 }] },
  { category: "Tools & delivery", skills: [{ name: "Git / GitHub", level: 86 }, { name: "Performance profiling", level: 76 }, { name: "Accessibility", level: 78 }, { name: "Responsive systems", level: 90 }] }
];

export const experience = [
  {
    company: "Independent practice",
    role: "Creative developer",
    dates: "Ongoing",
    achievements: ["Designing and building interactive portfolio and product experiences.", "Combining motion direction with maintainable React and Next.js systems."]
  },
  {
    company: "Open-source and personal projects",
    role: "Frontend engineer",
    dates: "Recent work",
    achievements: ["Exploring canvas storytelling, progressive enhancement, and accessible motion.", "Documenting reusable patterns for fast, expressive interface work."]
  }
];
