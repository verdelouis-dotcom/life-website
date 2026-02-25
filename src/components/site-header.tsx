import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
  >
    {label}
  </Link>
);

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-white font-semibold">
            L
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">L.I.F.E.</p>
            <p className="text-xs text-zinc-600">Longevity Initiative</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/about" label="About" />
          <NavLink href="/workshops" label="Workshops" />
          <NavLink href="/join" label="Join" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        <Link
          href="/join"
          className="rounded-xl bg-emerald-700 px-4 py-2 text-sm text-white hover:bg-emerald-800"
        >
          Join the Table
        </Link>
      </div>
    </header>
  );
}
