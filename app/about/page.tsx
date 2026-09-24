import { ResumeDownload } from "@/components/ResumeDownload";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { ExperienceAccordion } from "@/components/ExperienceAccordion";

export const metadata = { title: "About | Prashant Dahal", description: "About Prashant Dahal, a creative developer focused on high-performance interfaces and motion systems." };

export default function AboutPage() {
  return <main className="min-h-screen pt-20"><section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-36 lg:px-12"><p className="text-xs uppercase tracking-[0.25em] text-[#d9ff4f]">About / 01</p><h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[0.9] tracking-[-0.07em] text-white sm:text-8xl">Thoughtful interaction<br /><span className="font-display font-normal italic text-white/50">made tangible.</span></h1><div className="mt-12 grid gap-8 sm:grid-cols-2 sm:pl-[28%]"><p className="text-xl leading-8 text-white/75">I am Prashant Dahal, a creative developer working at the intersection of interface design, frontend engineering, and motion.</p><div><p className="text-base leading-7 text-white/50">I care about the details people feel: timing, hierarchy, responsiveness, and the quiet confidence of a system that works.</p><div className="mt-8"><ResumeDownload /></div></div></div></section><section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="border-t hairline pt-5"><p className="text-xs uppercase tracking-[0.25em] text-[#d9ff4f]">02 / Experience</p><h2 className="mt-8 text-4xl font-medium tracking-[-0.05em] text-white sm:text-6xl">A practice built<br />through making.</h2></div><ExperienceAccordion /></section><section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><Skills /></section><section className="mx-auto max-w-[1440px] px-5 pb-28 sm:px-8 lg:px-12"><Testimonials /></section></main>;
}
