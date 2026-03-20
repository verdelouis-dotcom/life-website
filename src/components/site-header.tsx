import Link from "next/link";
import BrandLogo from "@/components/brand-logo";

type NavItem = { href?: string; label?: string; type?: "resources" };
type ResourceLink = { href: string; label: string; external?: boolean };

const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { type: "resources" },
  { href: "/donate", label: "Support LIFE" },
  { href: "/contact", label: "Contact" },
];

const RESOURCE_LINKS: ResourceLink[] = [
  { href: "/assessment", label: "Take the Assessment" },
  { href: "/life-guide", label: "LIFE Guide" },
  { href: "/host/guide", label: "Host Guide" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="rounded-full px-3 py-1.5 text-sm text-[var(--text)] transition hover:bg-white/60" prefetch={false}>
    {label}
  </Link>
);

export default function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#1f1f1f] py-2 text-center text-[11px] uppercase tracking-[0.3em] text-white">
        501(c)(3) status pending • Began in Georgia • Piloting in select U.S. communities
      </div>
      <header className="border-b border-[#e6d9c7] bg-[#f7f1e8]/90 backdrop-blur-lg supports-[backdrop-filter]:backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <BrandLogo variant="lockup" size={210} />
            </div>
            <div className="sm:hidden">
              <BrandLogo variant="lockup" size={160} />
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm md:justify-end">
            {PRIMARY_NAV.map((item, index) =>
              item.type === "resources" ? <ResourcesMenu key={`resources-${index}`} /> : <NavLink key={item.href} href={item.href!} label={item.label!} />
            )}
            <Link href="/host" className="btn-solid px-5 text-xs md:text-sm" prefetch={false}>
              Host a Table
            </Link>
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
