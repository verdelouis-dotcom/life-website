import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="flex flex-col gap-4 border-t border-[rgba(255,255,255,0.1)] bg-[var(--ink)] px-6 py-10 text-[rgba(255,255,255,0.6)] md:flex-row md:items-center md:justify-between md:px-16">
      <div className="font-[var(--font-landing-heading)] text-white tracking-[0.05em]">LIFE</div>
      <p className="text-sm">Longevity Initiative for Food &amp; Education · Restoring shared meals, one kitchen at a time.</p>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/about" className="transition hover:text-white">
          About
        </Link>
        <Link href="/how-it-works" className="transition hover:text-white">
          How It Works
        </Link>
        <Link href="/host" className="transition hover:text-white">
          Host a Table
        </Link>
        <Link href="/contact" className="transition hover:text-white">
          Contact
        </Link>
        <a href="mailto:info@longevityinitiativeforfoodandeducation.com" className="transition hover:text-white">
          Email
        </a>
      </div>
    </footer>
  );
}
