"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavbarPulseButton } from "@/components/NavbarPulseButton";
import { siteLinks } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const sections = ["work", "about"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-25% 0px -60%", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = [
    [isHome ? "#work" : "/#work", "Work"],
    ["/about", "About"],
    ["/blog", "Blog"],
    ["/contact", "Contact"]
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-black/35 backdrop-blur-xl supports-[backdrop-filter]:bg-black/25">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="rgb-logo select-none text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            Prashant Dahal
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full border border-white/20 px-3 py-2 text-sm text-white md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <nav id="site-navigation" className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col gap-2 border-b border-white/10 bg-black/95 px-6 py-4 text-sm md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
            {links.map(([href, label]) => (
              <NavbarPulseButton key={href} href={href} active={(href === "#work" || href === "/#work") && isHome && activeSection === "work" || href === "/about" && pathname === "/about" || href === "/blog" && pathname.startsWith("/blog") || href === "/contact" && pathname === "/contact"} onClick={() => setMenuOpen(false)}>
                {label}
              </NavbarPulseButton>
            ))}
          </nav>
          <div className="hidden items-center gap-4 pl-4 text-xs text-gray-300 lg:flex">
            <a href={siteLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
          <ThemeToggle />
        </div>

        <div className="rgb-circuit" />
      </div>
    </header>
  );
}

