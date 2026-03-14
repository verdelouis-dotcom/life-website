import Link from "next/link";
import BrandLogo from "@/components/brand-logo";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/assessment", label: "Assessment" },
  { href: "/register", label: "Register" },
  { href: "/donate", label: "Donate", highlight: true },
  { href: "/keynote", label: "Keynote" },
];

const NavLink = ({ href, label, highlight }: { href: string; label: string; highlight?: boolean }) => {
  if (highlight) {
    return (
      <Link href={href} className="btn-solid px-5 py-2 text-sm shadow-md" prefetch={false}>
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="rounded-full px-3 py-1.5 text-sm text-[var(--text)] transition hover:bg-[#dcd3c5] hover:text-[var(--text)]"
      prefetch={false}
    >
      {label}
    </Link>
  );
};

export default function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 shadow-sm">
      <div className="bg-[#0e1511] py-2 text-center text-[11px] uppercase tracking-[0.3em] text-white">
        501(c)(3) status pending • Metro Atlanta pilot • Building a scalable national model
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
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
