"use client";

import { FormEvent, useState } from "react";
import { formspreeEndpoint } from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please complete your name, email, and message.");
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please email me directly instead.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-gray-200">
          <span>Name</span>
          <input name="name" required autoComplete="name" className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-200/70" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm text-gray-200">
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-200/70" placeholder="you@example.com" />
        </label>
      </div>
      <label className="block space-y-2 text-sm text-gray-200">
        <span>Message</span>
        <textarea name="message" required rows={6} className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-200/70" placeholder="Tell me about your project" />
      </label>
      <button type="submit" disabled={status === "submitting"} className="rounded-full bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-60">
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      <div aria-live="polite" className="text-sm">
        {status === "success" && <p className="text-emerald-300">Thanks, your message has been sent.</p>}
        {status === "error" && <p className="text-rose-300">{errorMessage}</p>}
      </div>
    </form>
  );
}
