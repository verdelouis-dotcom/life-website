import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProofHighlightList from "@/components/proof/ProofHighlightList";
import PhotoHighlight from "@/components/proof/PhotoHighlight";
import { ABOUT_PROOF } from "@/data/proof";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/about";

export const metadata: Metadata = {
  title: "About LIFE | Longevity Initiative for Food & Education",
  description:
    "Learn about the mission behind LIFE and how shared meals, nutrition education, and community connection help improve health and longevity.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About LIFE | Longevity Initiative for Food & Education",
    description:
      "Learn about the mission behind LIFE and how shared meals, nutrition education, and community connection help improve health and longevity.",
    url: PAGE_URL,
  },
  twitter: {
    title: "About LIFE | Longevity Initiative for Food & Education",
    description:
      "Learn about the mission behind LIFE and how shared meals, nutrition education, and community connection help improve health and longevity.",
  },
};

const BOARD_MEMBERS = [
  {
    name: "Lou Verde",
    role: "Founder & President",
    bio: "Community nutrition advocate and creator of the LIFE Longevity Assessment. Leads strategy and supports early hosts.",
  },
  {
    name: "Dr. Miles Medina",
    role: "Treasurer",
    bio: "Emergency medicine physician at Piedmont Henry Hospital. Oversees fiscal controls and medical rigor.",
  },
  {
    name: "Bob Fabbio",
    role: "Vice President",
    bio: "Entrepreneur and founder of Norrio Capital Partners. Guides replication strategy and philanthropic partnerships.",
  },
  {
    name: "Kara Verde",
    role: "Secretary",
    bio: "Accounting graduate of Rochester Institute of Technology. Manages governance records and compliance documentation.",
  },
];

const BOARD_PRACTICES = [
  "Quarterly reviews covering LIFE workshop registrations, donations, and pilot risks.",
  "Dual-approval process for program expenses and grant disbursements.",
  "Public reporting on registered LIFE workshops, host commitments, and assessment insights.",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">About LIFE</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">About LIFE</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              The Longevity Initiative for Food &amp; Education (LIFE) is a nonprofit movement rebuilding the rituals that once made healthy
              communities possible: fresh ingredients, shared LIFE workshops, and long-term accountability.
            </p>
            <p className="mt-4 body-md text-[var(--text)]">A LIFE workshop is a shared meal where people cook, learn, and connect.</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-12 md:grid-cols-2">
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Our Mission</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              LIFE exists to teach practical longevity habits through community cooking, measurable participation, and nonprofit
              transparency. Every gathering focuses on food quality, connection, and replicable education.
            </p>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Why the LIFE Workshop Matters</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              Shared meals reduce isolation, improve food choices, and make healthier defaults easier to sustain. They also provide the best
              setting to teach the LIFE pillars: food, movement, sleep, connection, purpose, and stress regulation.
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-5xl space-y-6 px-6 pb-12">
          <article className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Founder Story</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text)]">
              Lou Verde grew up in a home where the LIFE workshop was sacred—three generations cooking, eating, and taking care of each other with fresh ingredients.
              Those lived patterns became the blueprint for LIFE long before any formal study. Later trips to Italy and longevity research simply confirmed
              what he already knew: shared meals, purpose, and responsibility extend healthy years. The first public gatherings piloted in Georgia so the
              structure could be tested transparently before traveling to other cities.
            </p>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">What Makes LIFE Different</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
              <li>• Mediterranean-inspired cooking techniques adapted to any cuisine.</li>
              <li>• Hosts register every LIFE workshop so reach, attendance, and impact are measurable.</li>
              <li>• The LIFE Longevity Assessment connects personal habits to the six pillars.</li>
              <li>• Donations underwrite ingredients, host toolkits, and reporting—not overhead.</li>
            </ul>
          </article>
        </section>

        <PhotoHighlight
          imageSrc="/images/founder.jpeg"
          alt="Founder Lou Verde leading a LIFE dinner"
          eyebrow="Founder-led pilot"
          title="Why LIFE started at a single shared LIFE workshop"
          body="Lou Verde traveled to Italy to study longevity traditions firsthand, learning the art of making pasta from scratch before translating those lessons into small shared LIFE workshops back home. Every LIFE workshop photo, registered LIFE workshop, and assessment reflection feeds the next host so the model stays grounded in real families."
          caption="Photo: Longevity research trip in Italy"
          imageClassName="object-[center_top]"
        />

        <ProofHighlightList eyebrow="Credibility" title="How LIFE stays accountable" items={ABOUT_PROOF} background="accent" />

        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div className="space-y-6 rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <div className="text-center space-y-2">
              <p className="type-eyebrow text-[var(--olive)]">Board & Leadership</p>
              <h2 className="heading-lg">Volunteer-led, accountable leadership</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {BOARD_MEMBERS.map((member) => (
                <article key={member.name} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-sm text-left">
                  <p className="label-text text-[var(--olive)]">{member.role}</p>
                  <h3 className="heading-md mt-1">{member.name}</h3>
                  <p className="body-sm mt-3 text-[var(--text)]">{member.bio}</p>
                </article>
              ))}
            </div>
            <div className="rounded-[28px] border border-[var(--border)] bg-[#fff8ef] p-6 text-left shadow-sm">
              <p className="label-text text-[var(--olive)]">Governance Practices</p>
              <ul className="mt-3 space-y-2 body-sm">
                {BOARD_PRACTICES.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Continue the Work</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/assessment" className="btn-solid px-8 text-base">
                Take the Assessment
              </Link>
              <Link href="/host" className="btn-outline px-8 text-base">
                Host a LIFE Workshop
              </Link>
              <Link href="/donate" className="btn-outline px-8 text-base">
                Donate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
