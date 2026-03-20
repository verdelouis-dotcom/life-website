import Link from "next/link";

const NAV_LINKS = [
  { href: "#evening", label: "A LIFE Evening" },
  { href: "#ripple", label: "How It Spreads" },
  { href: "#guide", label: "The LIFE Guide" },
];

export function LandingNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-[rgba(62,46,30,0.12)] bg-[rgba(253,250,246,0.94)] px-6 py-4 text-[var(--earth-mid)] backdrop-blur">
      <div className="font-[var(--font-landing-heading)] text-[1.05rem] tracking-[0.06em] text-[var(--earth)]">
        LIFE <sup className="font-[var(--font-landing-body)] text-[0.55rem] tracking-[0.1em] text-[var(--terra)]">ATL</sup>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[0.85rem] font-medium tracking-[0.04em] text-[var(--earth-mid)] transition-colors hover:text-[var(--terra)]"
          >
            {link.label}
          </a>
        ))}
        <Link
          href="https://www.longevityinitiativeforfoodandeducation.com/host"
          className="rounded-full bg-[var(--earth)] px-5 py-2 text-[0.85rem] font-semibold text-white shadow-sm transition hover:bg-[var(--terra)]"
        >
          Host a Table
        </Link>
      </div>
    </nav>
  );
}
