import { Projects } from "@/components/Projects";
import { AboutSections } from "@/components/AboutSections";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="site-shell">
      <Hero />
      <AboutSections />
      <Projects />
    </main>
  );
}

