import Link from "next/link";
import { NavbarPulseButton } from "@/components/NavbarPulseButton";

export function Header() {
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

          <nav className="flex items-center gap-1 text-sm">
            <NavbarPulseButton href="#work">Work</NavbarPulseButton>
            <NavbarPulseButton href="#about">About</NavbarPulseButton>
            <NavbarPulseButton href="#contact">Contact</NavbarPulseButton>
          </nav>
        </div>

        <div className="rgb-circuit" />
      </div>
    </header>
  );
}

