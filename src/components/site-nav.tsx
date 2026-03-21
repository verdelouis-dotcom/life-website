import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
];

export default function SiteNav() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] border-b border-[rgba(62,46,30,0.12)] bg-[rgba(253,250,246,0.94)] px-14 py-4 backdrop-blur-[10px] supports-[backdrop-filter]:backdrop-blur"
      style={{ minHeight: "52px" }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="Longevity Initiative for Food & Education">
          <Image src="/images/life-logo-nav.svg" alt="Longevity Initiative for Food & Education" width={220} height={34} priority style={{ display: "block" }} />
        </Link>

        <nav className="hidden min-[800px]:flex items-center gap-6 text-[0.82rem] font-medium text-[#6B4F35]">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#B55A30]">
              {link.label}
            </Link>
          ))}
          <Link
            href="/host"
            className="rounded-full bg-[#3E2E1E] px-5 py-2 text-[0.82rem] font-semibold text-white transition-colors hover:bg-[#B55A30]"
          >
            Host a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
