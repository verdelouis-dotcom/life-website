export default function SiteFooter() {
  const year = new Date().getFullYear();

  const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/workshops", label: "Tables" },
    { href: "/assessment", label: "Assessment" },
    { href: "/host", label: "Host a LIFE Table" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact LIFE" },
  ];

  const secondaryLinks = [
    { href: "/resources", label: "Resources" },
    { href: "/impact", label: "Impact" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/keynote", label: "Keynote" },
    { href: "/gallery", label: "Gallery" },
    { href: "/assessment/methodology", label: "Methodology" },
  ];

  const linkClass = "text-sm text-neutral-600 transition hover:text-neutral-900";

  return (
    <footer className="border-t border-neutral-200 bg-[#f4efe6]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-700 md:py-12">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
          <div className="space-y-2.5">
            <p className="text-sm font-semibold text-neutral-900 tracking-tight">LIFE</p>
            <p className="max-w-sm leading-relaxed text-neutral-600">
              The Longevity Initiative for Food &amp; Education (LIFE) is a nonprofit pilot restoring shared meals through education, tools, and measurable reporting.
            </p>
          </div>

          <div className="space-y-2.5">
            <p className="text-sm font-semibold text-neutral-900 tracking-tight">Reach Us</p>
            <div className="space-y-1 leading-relaxed text-neutral-600">
              <p className="font-medium text-neutral-700">Email</p>
              <a href="mailto:info@longevityinitiativeforfoodandeducation.com" className="break-words text-sm text-neutral-600 transition hover:text-neutral-900">
                info@longevityinitiativeforfoodandeducation.com
              </a>
              <p>Program or partnership questions welcome.</p>
            </div>
            <a href="/assessment/methodology" className={linkClass}>
              Review the LIFE Assessment methodology
            </a>
          </div>

          <div className="space-y-4">
            <div className="space-y-2.5">
              <p className="text-sm font-semibold text-neutral-900 tracking-tight">Quick Links</p>
              <ul className="space-y-2.5">
                {primaryLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2.5">
              <p className="text-sm font-semibold text-neutral-900 tracking-tight">More from LIFE</p>
              <ul className="space-y-2.5">
                {secondaryLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white/70 p-5 text-sm leading-relaxed text-neutral-600">
          <p className="text-sm font-semibold text-neutral-900 tracking-tight">Sustainability</p>
          <p className="mt-2">
            Funding streams include individual donations, local sponsorships, keynote honoraria, and grants—keeping the pilot responsive and accountable.
          </p>
        </div>

        <div className="mt-8 space-y-2.5 border-t border-neutral-200 pt-5 text-xs text-neutral-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {year} LIFE Longevity Initiative for Food &amp; Education</p>
            <p className="opacity-80">Start local. Prove the model. Expand when ready.</p>
          </div>
          <p className="leading-relaxed">
            LIFE is organized as a Georgia nonprofit corporation and has applied for recognition as a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code.
          </p>
          <p className="leading-relaxed">No goods or services were provided in exchange for donations unless otherwise noted.</p>
        </div>
      </div>
    </footer>
  );
}
