import Link from "next/link";

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
        <div className="font-serif text-[0.95rem] uppercase tracking-[0.04em] text-white">LIFE</div>

        <p className="max-w-sm text-[0.75rem] text-white/50">
          Restoring shared meals through education, tools, and measurable impact. 501(c)(3) pending.
        </p>

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
