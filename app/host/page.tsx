import type { Metadata } from "next";
import Link from "next/link";

const HOST_URL = "https://www.longevityinitiativeforfoodandeducation.com/host";

export const metadata: Metadata = {
  title: "Host a LIFE Table — Open Your Kitchen",
  description: "Host a LIFE gathering. Cook together, eat together, pass it on.",
  alternates: {
    canonical: HOST_URL,
  },
  openGraph: {
    title: "Host a LIFE Table — Open Your Kitchen",
    description: "Host a LIFE gathering. Cook together, eat together, pass it on.",
    url: HOST_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "Host a LIFE Table — Open Your Kitchen",
    description: "Host a LIFE gathering. Cook together, eat together, pass it on.",
  },
};

export default function HostPage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">

        {/* Hero */}
        <section className="section-spacing bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6]">
          <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
            <p className="label-text">You were invited. Now it&apos;s your turn.</p>
            <h1 className="heading-xl">Host a LIFE Gathering</h1>
            <p className="body-lg text-[var(--muted)]">
              Invite people you already know. Cook something you love. Share a meal and pass on what you learned.
              That&apos;s the whole thing.
            </p>
            <ul className="body-md text-[var(--text)] space-y-2 text-left md:inline-block">
              <li>• No experience required — the guide walks you through everything.</li>
              <li>• Any recipe works. Fresh ingredients, a table, and real conversation.</li>
              <li>• Most hosts start with 4–8 friends or neighbors.</li>
            </ul>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link href="/host/guide" className="btn-solid px-8 text-base">
                Open the Host Guide
              </Link>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Attend a LIFE gathering first, then host within 30 days so the movement keeps its momentum.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="section-spacing">
          <div className="mx-auto max-w-3xl space-y-6 rounded-[36px] border border-[var(--border)] bg-white p-10 shadow-sm">
            <div className="space-y-2 text-center">
              <h2 className="heading-md">Attend → Host → Register</h2>
              <p className="type-detail uppercase tracking-[0.3em] text-[var(--olive)]">One table at a time</p>
            </div>
            <ul className="space-y-4 text-left body-sm text-[var(--text)]">
              {[
                "Attend a LIFE gathering and commit to hosting your own within 30 days.",
                "Invite friends, neighbors, or family once you have a date.",
                "Cook together, share the LIFE pillars in your own words, and enjoy the meal.",
                "Log your gathering so it counts toward the movement.",
              ].map((step) => (
                <li key={step} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4">
                  {step}
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-center text-sm text-[var(--muted)]">
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/host/guide" className="btn-solid px-8 text-base">
                  Open the Host Guide
                </Link>
              </div>
              <p>
                Already hosted?{" "}
                <Link href="/register" className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
                  Register your gathering
                </Link>
                .
              </p>
              <p>
                Need support?{" "}
                <a href="mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Support" className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
                  Email the LIFE team
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Host Champions */}
        <section className="section-spacing bg-white">
          <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
            <p className="label-text">LIFE Host Champions</p>
            <h2 className="heading-lg">Host more than once</h2>
            <p className="body-md text-[var(--muted)]">
              Champions commit to at least three LIFE gatherings per year, mentor new hosts, and share data after every gathering.
              If you love bringing people together, this is how you multiply the movement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Champion" className="btn-outline px-8 text-base">
                Tell us you&apos;re interested
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
