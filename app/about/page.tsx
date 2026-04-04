import type { Metadata } from "next";
import Image from "next/image";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/about";

export const metadata: Metadata = {
  title: "About LIFE — Longevity Initiative for Food & Education",
  description: "Learn how LIFE is restoring longevity habits through shared cooking experiences, practical education, and accountable leadership.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About LIFE — Longevity Initiative for Food & Education",
    description: "Learn how LIFE is restoring longevity habits through shared cooking experiences, practical education, and accountable leadership.",
    url: PAGE_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "About LIFE — Longevity Initiative for Food & Education",
    description: "Learn how LIFE is restoring longevity habits through shared cooking experiences, practical education, and accountable leadership.",
  },
};

const BOARD_MEMBERS = [
  {
    name: "Lou Verde",
    role: "Founder & President",
    bio: "Community nutrition advocate and creator of the LIFE longevity framework. Lou leads strategy, hosts cooking experiences, and supports early hosts as the movement grows.",
  },
  {
    name: "Bob Fabbio",
    role: "Vice President",
    bio: "Entrepreneur and founder of Norrio Capital Partners. Bob guides replication strategy and philanthropic partnerships as LIFE expands beyond Atlanta.",
  },
  {
    name: "Kara Verde",
    role: "Secretary",
    bio: "Accounting graduate of Rochester Institute of Technology. Kara manages governance records, compliance documentation, and keeps the organization accountable to its mission.",
  },
  {
    name: "Dr. Miles Medina",
    role: "Treasurer",
    bio: "Emergency medicine physician at Piedmont Henry Hospital. Dr. Medina oversees fiscal controls and brings medical rigor to LIFE's longevity education framework.",
  },
];

const GOVERNANCE_PRACTICES = [
  "Quarterly reviews covering cooking experience registrations, donations, and pilot risks",
  "Dual-approval process for program expenses and grant disbursements",
  "Public reporting on registered cooking experiences, host commitments, and assessment insights",
];

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">About LIFE</p>
          <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">About LIFE</h1>
          <p className="mt-4 text-lg leading-7">
            LIFE is a nonprofit movement that gives you the proven steps to eliminate the habits that are quietly shortening your life and weakening your connection to the people you love.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-6 pb-12">
        <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">Our Mission</p>
          <h2 className="heading-lg">Our Mission</h2>
          <p className="mt-4 text-base leading-7">
            LIFE exists to give every family the habits, the tools, and the community to live longer — starting at the table. We teach through cooking, measure what we do, and stay accountable to the families and donors who make it possible.
          </p>
        </article>
        <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">Why the Cooking Experience Matters</p>
          <h2 className="heading-lg">Why the Cooking Experience Matters</h2>
          <p className="mt-4 text-base leading-7">
            There is no better classroom than a kitchen. When families cook together they talk differently, eat differently, and connect differently. Shared meals reduce isolation, improve food choices, and make healthy habits easier to sustain. They also create the perfect setting to introduce the six pillars of longevity — food, movement, sleep, connection, purpose, and stress regulation — not as a lecture, but as a lived experience. The habits that help people live longer are not complicated. They just need to be practiced together.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-4xl space-y-5 px-6 pb-12">
        <article className="rounded-[36px] border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">Lou's Story</p>
          <h2 className="heading-lg">Lou's Story</h2>
          <div className="mt-6 space-y-4 text-base leading-7">
            <p>I grew up in upstate New York in a home that never felt small — even when it was.</p>
            <p>Three generations lived under one roof. My grandparents and parents were born in Italy and came to America when my parents were teenagers, chasing opportunity and a better life. But what they carried with them was something far greater than opportunity. They carried a way of living.</p>
            <p>Our house was always full. Family. Friends. Neighbors who felt like relatives. No one came by for a quick visit. They came in, sat down, and ate.</p>
            <p>My grandfather had a massive garden. Every season he worked the soil with pride — lettuce, tomatoes, peas, peppers, squash, zucchini, garlic, eggplant, green beans, peach trees, mulberry trees, fig trees, raspberries, barrels of fresh basil and parsley, and wine made the old-fashioned way.</p>
            <p>Everyone was always in the kitchen. The food was real — fresh ingredients, old recipes, vegetables from the garden. The table was sacred.</p>
            <p>My grandparents lived into their 90s. They were celebrated, respected, and surrounded by family until the very end.</p>
            <p>At the time I didn't realize how rare that was.</p>
            <p>Years later, I traveled to Italy — not as a tourist, but as a student. I wanted to understand why the communities where people lived the longest all shared the same patterns. What I found wasn't surprising. It was exactly what I had grown up with.</p>
            <p>The gardens. The kitchens. The tables. The unhurried meals. The neighbors who knew each other by name. The sense that life was something you lived together — not something you consumed alone.</p>
            <p>The research confirmed what my family had practiced for generations. The habits that add years to your life are not complicated. They are not expensive. They are not new. They are old. And most of America has quietly walked away from them.</p>
            <p>We replaced gardens with drive-thrus. We replaced dinner tables with screens. We replaced community with convenience. And it is costing us years of life.</p>
            <p>LIFE was born from that realization. Not to romanticize the past — but to reclaim what worked.</p>
            <p>Longevity does not require wealth. It does not require complicated systems. It does not require perfection. It requires real food. Daily movement. Connection. Intention.</p>
            <p>I watched two Italian immigrants build a long, vibrant life in America without surrendering the habits that protected their health. Now my mission is to bring those habits back — not as nostalgia, but as a practical, accessible path forward for every American family.</p>
            <p>Because if we change kitchens, we change habits.</p>
            <p>If we change habits, we change health.</p>
            <p>And if we change health, we change the future.</p>
            <p className="font-semibold text-[var(--olive)]">Lou Verde · Founder · Atlanta, GA</p>
          </div>
        </article>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-12 lg:flex-row">
        <div className="flex-1 rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">A Research Trip to the Source</p>
          <h2 className="heading-lg">A Research Trip to the Source</h2>
          <p className="mt-4 text-base leading-7">
            To understand longevity, Lou went to where it still exists. Over the course of his travels through Italy — from the Adriatic coast to Florence, Sicily, Naples, Rome, remote castle towns, fishing villages, and medieval hilltop communities — one thing became impossible to ignore. The oldest, healthiest people weren't following a program. They were doing what their parents and grandparents had done before them. They grew their own food. They cooked every meal from scratch. They ate together — slowly, without screens. They knew their neighbors. They had purpose. They moved constantly without ever calling it exercise. It was the same six things. Everywhere. Without exception. What Lou saw in Italy wasn't a diet or a wellness trend. It was a way of living that had been quietly protecting people for centuries. And it was the same way of living he had grown up watching in his own home in upstate New York. He came back to America with one mission — to bring it back.
          </p>
        </div>
        <div className="flex-1 overflow-hidden rounded-[36px] border border-[var(--border)] bg-white/60 shadow-sm">
          <Image src="/images/founder.jpeg" alt="Lou Verde in Italy" width={900} height={1100} className="h-full w-full object-cover object-top" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-5 px-6 pb-12">
        <article className="rounded-[36px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">What Makes LIFE Different</p>
          <h2 className="heading-lg">What Makes LIFE Different</h2>
          <p className="mt-4 text-base leading-7">
            LIFE is not just a longevity movement. It is a multidimensional organization — part cooking experience, part community movement, part education platform — and it lives not in a clinic or a classroom, but in someone's home. Anyone can be a host. Just like Lou and Kara open their kitchen, so can you. A neighbor. A friend. A family with a dining room table and a belief that real food and real connection matter.
          </p>
          <p className="mt-4 text-base leading-7">
            The experience doesn't require a professional chef or a formal curriculum. It requires a kitchen, fresh ingredients, and the willingness to share what you know with the people around you. There are millions of Americans who would benefit from this way of living and would like to learn. They deserve to live longer and happier lives. LIFE exists because those of us who were lucky enough to grow up around the table have a responsibility to share it. To open our kitchens. To pass it on. This is how it spreads. Not through advertising. Not through algorithms. Through open doors and full tables.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="space-y-6 rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
          <div className="space-y-2 text-center">
            <p className="type-eyebrow text-[var(--olive)]">Board & Leadership</p>
            <h2 className="heading-lg">Volunteer-led, accountable leadership.</h2>
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
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="rounded-[32px] border border-[var(--border)] bg-[#fff8ef] p-8 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">Governance</p>
          <h2 className="heading-lg">Governance</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7">
            {GOVERNANCE_PRACTICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-[32px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
          <p className="text-base leading-7 text-[var(--text)]">
            LIFE is organized as a Georgia nonprofit corporation and has applied for 501(c)(3) recognition from the IRS. Enrollment fees support the national expansion of the Six Pillars Framework and future longevity research.
          </p>
        </div>
      </section>
    </main>
  );
}
