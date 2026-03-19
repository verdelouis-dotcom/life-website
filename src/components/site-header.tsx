import Link from "next/link";
import BrandLogo from "@/components/brand-logo";

const PRIMARY_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/host", label: "Host" },
  { href: "/workshops", label: "LIFE Workshops" },
  { href: "/the-life-challenge", label: "The LIFE Challenge" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

const RESOURCE_LINKS = [
  { href: "/assessment", label: "Take the Assessment" },
  { href: "/host/guide", label: "Host Guide" },
  { href: "/life-coach-guide.pdf", label: "LIFE Coach Guide", external: true },
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
            <ResourcesMenu />
          </nav>
        </div>
      </header>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <details className="group relative [&>summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center rounded-full px-3 py-1.5 text-sm text-[var(--text)] transition hover:bg-[#dcd3c5] focus:outline-none">
        Resources
      </summary>
      <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-[var(--border)] bg-white/95 p-4 text-left shadow-xl">
        <ul className="space-y-2">
          {RESOURCE_LINKS.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noreferrer" className="text-sm text-[var(--text)] transition hover:text-[var(--life-forest)]">
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className="text-sm text-[var(--text)] transition hover:text-[var(--life-forest)]" prefetch={false}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
