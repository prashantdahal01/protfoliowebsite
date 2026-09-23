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
    <section ref={containerRef} className="relative h-[calc(100svh-4rem)] min-h-[38rem] w-full bg-ink">
      <div
        ref={stickyRef}
        className="sticky top-16 h-[calc(100svh-4rem)] min-h-[38rem] w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.14),transparent_35%),#090b10]" />
        <div className="absolute inset-0 opacity-20">
          <ScrollyCanvas stickyRef={stickyRef} scrollYProgress={scrollYProgress} />
        </div>
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

