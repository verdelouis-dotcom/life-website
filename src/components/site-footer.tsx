import Link from "next/link";
import Logo from "@/components/ui/logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/host", label: "Host a Table" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Support Us" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#1E140A] px-[4.5rem] py-[2.2rem] text-white max-md:px-6 max-md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-8 max-md:flex-col max-md:text-center">
        <Link href="/" className="flex items-center gap-3 shrink-0 text-sm text-white/80 hover:text-white transition">
          <div style={{ filter: "brightness(0) invert(1)" }}>
            <Logo size="sm" />
          </div>
          <span className="leading-tight">Longevity Initiative for Food &amp; Education</span>
        </Link>

        <p className="max-w-sm text-[0.75rem] text-white/60">Longevity Initiative for Food &amp; Education is organized as a Georgia nonprofit corporation and has applied for 501(c)(3) recognition from the IRS. Enrollment fees support the national expansion of the Six Pillars Framework and future longevity research.</p>

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
