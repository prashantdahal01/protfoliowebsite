export function Footer() {
  return (
    <footer className="footer-laser relative mt-10 bg-[#070707]">
      <div className="relative">
        <div className="rgb-laser" />
        <div
          aria-hidden="true"
          className="rgb-laser-glow pointer-events-none absolute left-0 right-0 top-0 h-2 opacity-0 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,255,255,0.0), rgba(0,255,255,0.65), rgba(168,85,247,0.65), rgba(236,72,153,0.65), rgba(0,255,255,0.0))",
            filter: "blur(20px)"
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white/85">Prashant Dahal</p>
            <p className="mt-2 max-w-md text-sm text-white/55">
              Creative developer focused on high-performance motion and
              scroll-linked storytelling.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <a className="hover:text-white" href="#work">
              Work
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Prashant Dahal</span>
          <span>Built with Next.js • Tailwind • Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}

