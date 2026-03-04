import Link from "next/link";
import BrandLogo from "@/components/brand-logo";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/host", label: "Host" },
  { href: "/workshops", label: "Workshops" },
];

const CTAS = [
  { href: "/contact", label: "Contact", variant: "outline" as const },
  { href: "/donate", label: "Donate", variant: "solid" as const },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-full px-3 py-2 text-sm text-[#2e2a26] transition hover:bg-[#dcd3c5] hover:text-[#2e2a26]"
    prefetch={false}
  >
    {label}
  </Link>
);

const CtaLink = ({ href, label, variant }: { href: string; label: string; variant: "outline" | "solid" }) => {
  const base =
    "rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e2a26] transition";
  const styles =
    variant === "solid"
      ? "bg-[var(--olive)] text-white hover:bg-[#394930]"
      : "border border-[#2e2a26] text-[#2e2a26] hover:bg-[#dcd3c5]/70";
  return (
    <Link href={href} className={`${base} ${styles}`} prefetch={false}>
      {label}
    </Link>
  );
};

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfd4c6] bg-[#f4efe6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <BrandLogo variant="lockup" size={260} />
          </div>
          <div className="sm:hidden">
            <BrandLogo variant="lockup" size={200} />
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
          <nav className="flex flex-wrap items-center gap-1 md:justify-end">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>
          <div className="flex flex-wrap gap-2">
            {CTAS.map((cta) => (
              <CtaLink key={cta.href} {...cta} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
