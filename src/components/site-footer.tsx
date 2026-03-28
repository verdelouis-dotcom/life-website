import Link from "next/link";
import LifeLogo from "@/components/brand/life-logo";

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
        <LifeLogo variant="footer" className="footer-logo shrink-0" />

        <p className="max-w-sm text-[0.75rem] text-white/50">Learn it. Live it. Pass it on.</p>

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
