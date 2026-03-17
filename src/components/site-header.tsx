import Link from "next/link";
import BrandLogo from "@/components/brand-logo";

const PRIMARY_NAV = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/impact", label: "Impact" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

const GET_INVOLVED_LINKS = [
  { href: "/host", label: "Host a LIFE Table" },
  { href: "/register", label: "Share Your Table" },
  { href: "/assessment", label: "Take the Assessment" },
  { href: "/get-involved", label: "All Paths" },
  { href: "/workshops", label: "Workshops" },
  { href: "/keynote", label: "Request a Keynote" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-full px-3 py-1.5 text-sm text-[var(--text)] transition hover:bg-[#dcd3c5] hover:text-[var(--text)]"
    prefetch={false}
  >
    {label}
  </Link>
);

const GetInvolvedMenu = () => (
  <details className="relative">
    <summary className="flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 text-sm text-[var(--text)] transition hover:bg-[#dcd3c5] [&::-webkit-details-marker]:hidden">
      Get Involved
      <span aria-hidden="true" className="text-xs">
        ▾
      </span>
    </summary>
    <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-[var(--border)] bg-white p-3 shadow-lg">
      <div className="flex flex-col gap-1 text-sm">
        {GET_INVOLVED_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            prefetch={false}
            className="rounded-xl px-3 py-2 text-left text-[var(--text)] transition hover:bg-[var(--surface)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </details>
);

export default function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 shadow-sm">
      <div className="bg-[#0e1511] py-2 text-center text-[11px] uppercase tracking-[0.3em] text-white">
        501(c)(3) status pending • Began in Georgia • Piloting in select U.S. communities
      </div>
      <header className="border-b border-[#dfd4c6] bg-[#f4efe6]/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <BrandLogo variant="lockup" size={210} />
            </div>
            <div className="sm:hidden">
              <BrandLogo variant="lockup" size={160} />
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm md:justify-end">
            {PRIMARY_NAV.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
            <GetInvolvedMenu />
          </nav>
        </div>
      </header>
    </div>
  );
}
