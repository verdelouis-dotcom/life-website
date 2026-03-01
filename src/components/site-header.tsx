import Link from "next/link";
import BrandLogo from "@/components/brand-logo";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-this-matters", label: "Our Environment Changed" },
  { href: "/what-we-do", label: "The Monthly Table Model" },
  { href: "/workshops", label: "Workshops" },
  { href: "/host", label: "Host a Table" },
  { href: "/support", label: "Support the Movement" },
  { href: "/contact", label: "Contact" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="rounded-full px-3 py-2 text-sm text-[#2e2a26] transition hover:bg-[#dcd3c5] hover:text-[#2e2a26]" prefetch={false}>
    {label}
  </Link>
);

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfd4c6] bg-[#f4efe6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <BrandLogo variant="lockup" size={180} />
          </div>
          <div className="sm:hidden">
            <BrandLogo variant="mark" size={44} />
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-end gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
