"use client";

import { jsPDF } from "jspdf";

export function ResumeDownload() {
  function downloadResume() {
    const document = new jsPDF();
    document.setTextColor(15, 23, 42);
    document.setFontSize(24);
    document.text("Prashant Dahal", 20, 25);
    document.setFontSize(11);
    document.text("Creative Developer", 20, 34);
    document.setFontSize(12);
    document.text("Profile", 20, 52);
    document.setFontSize(10);
    const profile = document.splitTextToSize("Creative developer building high-performance interfaces, motion systems, and scroll-linked stories with React, Next.js, TypeScript, and Framer Motion.", 170);
    document.text(profile, 20, 60);
    document.setFontSize(12);
    document.text("Core skills", 20, 86);
    document.setFontSize(10);
    document.text("React · Next.js · TypeScript · Tailwind CSS · Framer Motion · Canvas · Accessibility", 20, 94);
    document.setFontSize(12);
    document.text("Experience", 20, 116);
    document.setFontSize(10);
    document.text("Independent practice — Creative developer — Ongoing", 20, 124);
    document.text("Open-source and personal projects — Frontend engineer — Recent work", 20, 132);
    document.save("prashant-dahal-resume.pdf");
  }

  return <button type="button" onClick={downloadResume} className="inline-flex rounded-full bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white">Download resume PDF</button>;
}
