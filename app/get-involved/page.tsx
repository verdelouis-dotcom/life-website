import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/get-involved";

export const metadata: Metadata = {
  title: "Get Involved | Longevity Initiative for Food & Education",
  description: "Share what you’ve learned through LIFE: host a LIFE cooking experience, support ingredients, or bring LIFE to your community.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Get Involved | Longevity Initiative for Food & Education",
    description: "Share what you’ve learned through LIFE: host a LIFE cooking experience, support ingredients, or bring LIFE to your community.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Get Involved | Longevity Initiative for Food & Education",
    description: "Share what you’ve learned through LIFE: host a LIFE cooking experience, support ingredients, or bring LIFE to your community.",
  },
};

const PATHS = [
  {
    title: "Host a LIFE Cooking Experience",
    description: "Invite people you care about, cook something simple, and register the cooking experience so it counts toward the movement.",
    ctaLabel: "Host a LIFE Cooking Experience",
    href: "/host",
    highlight: true,
    guideText: "Hosting is simple and guided.",
    guideLabel: "Download the LIFE Cooking Experience Guide",
    guideHref: "/life-workshop-guide.pdf",
  },
  {
    title: "Support the Movement",
    description: "Underwrite ingredients, LIFE cooking experiences, and educational tools so more LIFE cooking experiences can launch across communities.",
    ctaLabel: "Support Us",
    href: "/donate",
    highlight: false,
  },
  {
    title: "Bring LIFE to Your Community",
    description: "Request a LIFE cooking experience or keynote for your organization, congregation, or company to spark local LIFE cooking experiences.",
    ctaLabel: "Request a Keynote",
    href: "/keynote",
    highlight: false,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6] py-16">
          <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
            <p className="type-eyebrow text-[var(--olive)]">Get Involved</p>
            <h1 className="type-display">Share What You’ve Learned</h1>
            <p className="type-lede text-[var(--muted)]">LIFE grows when people bring others to the LIFE cooking experience.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
            {PATHS.map((path) => (
              <article
                key={path.title}
                className={`rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm ${path.highlight ? "md:scale-[1.02]" : ""}`}
              >
                <p className="type-eyebrow text-[var(--olive)]">{path.highlight ? "Primary Path" : "Supporting Path"}</p>
                <h2 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">{path.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--text)]">{path.description}</p>
                {path.guideText && path.guideHref && path.guideLabel && (
                  <div className="mt-3 space-y-1 text-xs text-[var(--muted)]">
                    <p>{path.guideText}</p>
                    <Link
                      href={path.guideHref}
                      className="text-[var(--terracotta)] underline decoration-[rgba(182,106,74,0.4)] underline-offset-4"
                    >
                      {path.guideLabel}
                    </Link>
                  </div>
                )}
                <Link href={path.href} className={`btn-${path.highlight ? "solid" : "outline"} mt-6 inline-flex px-6 text-sm`}>
                  {path.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
</>
  );
}
