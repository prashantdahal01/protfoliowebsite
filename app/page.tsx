import { Projects } from "@/components/Projects";
import { ScrollySection } from "@/components/ScrollySection";
import { AboutSections } from "@/components/AboutSections";

export default function Home() {
  return (
    <main className="bg-ink">
      <ScrollySection />
      <AboutSections />
      <Projects />
    </main>
  );
}

