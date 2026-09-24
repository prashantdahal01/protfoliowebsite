import Link from "next/link";
import { siteLinks } from "@/lib/site";
import { ResumeDownload } from "@/components/ResumeDownload";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t hairline bg-[#111111] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute -bottom-10 left-0 text-[23vw] font-bold leading-none tracking-[-0.1em] text-white/[0.035]">PRASHANT</div>
      <div className="relative mx-auto max-w-[1440px]"><div className="mb-16 flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[0.25em] text-[#d9ff4f]">Let&apos;s make something</p><h2 className="mt-5 max-w-3xl text-5xl font-bold tracking-[-0.07em] text-white sm:text-8xl">Have a good one<br /><span className="font-display font-normal italic text-white/50">in mind?</span></h2></div><Link href="/contact" className="border-b border-[#d9ff4f] pb-2 text-sm uppercase tracking-[0.18em] text-white transition hover:text-[#d9ff4f]">Send a message ↗</Link></div><div className="grid gap-10 border-t hairline pt-6 text-sm sm:grid-cols-3"><div><p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/35">Portfolio</p><a href={siteLinks.github} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-[#d9ff4f]">GitHub ↗</a></div><div><p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/35">Social</p><a href={siteLinks.linkedin} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-[#d9ff4f]">LinkedIn ↗</a></div><div><p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/35">Contact</p><div className="flex flex-col items-start gap-3 text-white/70"><a href={`mailto:${siteLinks.email}`} className="transition hover:text-[#d9ff4f]">{siteLinks.email}</a><ResumeDownload /></div></div></div><div className="mt-20 flex flex-col gap-2 border-t hairline pt-5 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Prashant Dahal</span><span>Built with Next.js / Tailwind / Framer Motion</span></div></div>
    </footer>
  );
}

