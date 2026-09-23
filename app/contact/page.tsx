import { ContactForm } from "@/components/ContactForm";
import { siteLinks } from "@/lib/site";

export const metadata = {
  title: "Contact | Prashant Dahal",
  description: "Get in touch with Prashant Dahal about a digital product or interactive experience."
};

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <section>
          <p className="text-xs font-medium tracking-[0.22em] text-cyan-200">START A CONVERSATION</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Let&apos;s make something clear, useful, and memorable.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300">Tell me what you are building, where it is stuck, or what you want people to feel when they use it.</p>
          <div className="mt-10 space-y-4 text-sm">
            <a className="block text-cyan-200 underline underline-offset-4 hover:text-white" href={`mailto:${siteLinks.email}`}>{siteLinks.email}</a>
            <a className="block text-gray-300 underline underline-offset-4 hover:text-white" href={siteLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="block text-gray-300 underline underline-offset-4 hover:text-white" href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
