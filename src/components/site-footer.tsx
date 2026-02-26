import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#dfd4c6] bg-[#f4efe6]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-[#2e2a26]">
        <div className="grid gap-8 md:grid-cols-4">
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
                <Link className="transition hover:text-[#c46a3a]" href="/host">
                  Host
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#c46a3a]" href="/register">
                  Register
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

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-[#2e2a26]">Bring L.I.F.E. to Your Organization</p>
              <p className="mt-2 text-[#5b5149]">
                Keynotes and interactive workshops for schools, communities, and teams.
              </p>
              <Link
                href="/speaking"
                className="mt-2 inline-flex text-[#c46a3a] underline-offset-4 hover:underline"
              >
                Request a Speaker
              </Link>
            </div>
            <div>
              <p className="font-semibold text-[#2e2a26]">Stay Connected</p>
              <p className="mt-2 text-[#5b5149]">
                Be notified when new resources and workshops are released.
              </p>
              <form action="/api/subscribe" method="post" className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-[#dfd4c6] px-4 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="rounded-xl border border-[#6b7a46] px-4 py-2 text-sm text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white"
                >
                  Notify Me
                </button>
              </form>
            </div>
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
