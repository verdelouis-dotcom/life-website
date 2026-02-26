import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#dfd4c6] bg-[#f4efe6]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-[#2e2a26]">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold tracking-wide">L.I.F.E.</p>
            <p className="mt-2 text-sm text-[#5b5149]">
              Rebuilding health and belonging through shared meals.
            </p>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-[#2e2a26]">Explore</p>
            <ul className="mt-2 space-y-1 text-[#5b5149]">
              <li>
                <Link className="transition hover:text-[#c46a3a]" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#c46a3a]" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#c46a3a]" href="/workshops">
                  Workshops
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#c46a3a]" href="/join">
                  Join
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#c46a3a]" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-[#2e2a26]">Next steps</p>
            <p className="mt-2 text-[#5b5149]">
              Ready to host a table or bring a workshop to your group? Start on the Join page.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#dfd4c6] pt-6 text-xs text-[#5b5149] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} L.I.F.E. Longevity Initiative for Food &amp; Education
          </p>
          <p className="opacity-80">Built to scale beyond one city.</p>
        </div>
      </div>
    </footer>
  );
}
