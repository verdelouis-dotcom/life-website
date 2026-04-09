import Link from "next/link";
import Logo from "@/components/ui/logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/host", label: "Host a Table" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Support Us" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#1E140A] px-[4.5rem] py-[2.2rem] text-white max-md:px-6 max-md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-8 max-md:flex-col max-md:text-center">
        <Link
          href="/"
          className="shrink-0 rounded-full border border-white/10 bg-[var(--offwhite)] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-opacity hover:opacity-90"
          aria-label="LIFE — Longevity Initiative for Food & Education"
        >
          <Logo size="sm" />
        </Link>

        <div className="max-w-sm space-y-2 text-[0.75rem] text-white/70">
          <p>Longevity Initiative for Food &amp; Education is organized as a Georgia nonprofit corporation with a board-governed mission to restore shared meals, practical education, and community accountability.</p>
          <p>Want to support LIFE? Every dollar goes directly to the mission. <Link href="/donate" className="underline-offset-4 hover:underline">Support LIFE →</Link></p>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-[1.6rem] text-[0.75rem] text-white/40 max-md:justify-center">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
