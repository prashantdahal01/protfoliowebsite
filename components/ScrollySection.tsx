"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Overlay } from "@/components/Overlay";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";

export function ScrollySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-ink">
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <ScrollyCanvas stickyRef={stickyRef} scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

