import { Projects } from "@/components/Projects";
import { ScrollySection } from "@/components/ScrollySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink">
      <ScrollySection />
      <Projects />
      <Footer />
    </main>
  );
}

