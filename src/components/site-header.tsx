import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workshops", label: "Workshops" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
  { href: "/downloads/LIFE_Host_Guide_BRANDED.pdf", label: "Host Guide" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-full px-3 py-2 text-sm text-[#2e2a26] transition hover:bg-[#dcd3c5] hover:text-[#2e2a26]"
  >
    {label}
  </Link>
);

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfd4c6] bg-[#f4efe6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#6b7a46] font-serif text-lg text-white">
            L
          </span>
          <div className="leading-tight text-[#2e2a26]">
            <p className="text-sm font-semibold tracking-wide">L.I.F.E.</p>
            <p className="text-xs">Longevity Initiative</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
