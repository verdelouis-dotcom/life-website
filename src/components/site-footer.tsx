import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold">L.I.F.E.</p>
            <p className="mt-2 text-sm text-zinc-700">
              Rebuild the system. Start at the table.
            </p>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Explore</p>
            <ul className="mt-2 space-y-1 text-zinc-700">
              <li>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/workshops">
                  Workshops
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/join">
                  Join
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Next steps</p>
            <p className="mt-2 text-zinc-700">
              Want to host a table or bring a workshop to your group? Start on the Join page.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} L.I.F.E. Longevity Initiative for Food &amp; Education
          </p>
          <p className="opacity-80">Built to scale beyond one city.</p>
        </div>
      </div>
    </footer>
  );
}
