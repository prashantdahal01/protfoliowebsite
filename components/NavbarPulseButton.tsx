import Link from "next/link";

export function NavbarPulseButton({
  href,
  active = false,
  onClick,
  children
}: {
  href: string;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "group relative inline-flex items-center justify-center",
        "px-4 py-2 text-sm font-semibold tracking-[-0.01em]",
        "rounded-full border bg-white/[0.04] backdrop-blur-md",
        "transition-[transform,box-shadow,background-color,border-color,color] duration-200",
        "hover:-translate-y-[1px]",
        "neon-cycle neon-btn",
        active ? "border-white/40 bg-white/10" : ""
      ].join(" ")}
    >
      <span
        className="relative"
        style={{
          textShadow: "0 0 26px rgba(var(--neon), 0.32)"
        }}
      >
        {children}
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-[6px] h-px origin-left scale-x-100 opacity-70 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          backgroundColor: "rgb(var(--neon))"
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          backgroundColor: "rgba(var(--neon), 0.1)"
        }}
      />
    </Link>
  );
}

