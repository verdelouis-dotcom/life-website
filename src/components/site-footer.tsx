import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/host", label: "Host a LIFE Workshop" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact LIFE" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f4efe6]">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">LIFE</p>
            <p className="text-sm leading-relaxed text-neutral-600">
              Restoring shared meals through education, tools, and measurable reporting.
            </p>
            <a
              href="mailto:info@longevityinitiativeforfoodandeducation.com"
              className="text-sm font-semibold text-[#b96d4a] transition hover:text-neutral-900"
            >
              info@longevityinitiativeforfoodandeducation.com
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-600">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#b96d4a] transition hover:text-neutral-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-4">
          <p className="text-xs text-neutral-500">© 2026 LIFE. Nonprofit pilot initiative.</p>
        </div>
      </div>
    </footer>
  );
}
