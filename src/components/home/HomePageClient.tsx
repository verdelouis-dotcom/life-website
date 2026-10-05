"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import { PILLARS } from "@/data/pillars";

const PROMISE_ITEMS = [
  "Free, practical education",
  "A clearer view of your habits",
  "Realistic steps for everyday life",
  "Classes and donations fund the mission",
];

const PHOTO_MOMENT = [
  {
    src: "/images/workshops/pasta-lesson-2.jpg",
    alt: "Neighbors rolling fresh pasta dough together",
    caption: "Atlanta neighbors learning to roll pasta by hand.",
  },
  {
    src: "/images/workshops/pasta-lesson-3.jpeg",
    alt: "Family gathered around the table laughing and eating",
    caption: "Cooking class is fun for the entire family",
  },
  {
    src: "/images/workshops/pasta-lesson-4.jpeg",
    alt: "Kids shaping homemade pasta at a LIFE cooking experience",
    caption: "Kids take over the dough station — and don’t want to leave.",
  },
];

const DOORS = [
  {
    title: "Take the LIFE Assessment",
    body: "You know your credit score. Do you know your LIFE score? See your strengths and opportunities across the six LIFE pillars.",
    ctaLabel: "Take the free assessment →",
    href: "/assessment",
  },
  {
    title: "Explore Free Education",
    body: "Learn practical habits for real food, movement, sleep, connection, purpose, and stress regulation.",
    ctaLabel: "Explore LIFE resources →",
    href: "/resources",
  },
];

export function HomePageClient() {

  return (
    <div className="home-v3">
      <section className="hero" id="hero">
        <div className="hero-left">
          <Reveal>
            <p className="hero-kicker">A nonprofit longevity education initiative</p>
            <h1 className="hero-h1">
              Real food.
              <br />
              Real connection.
              <br />
              Real life.
            </h1>
            <p className="hero-sub">People are living longer. LIFE exists to help them live those years better.</p>
            <div className="hero-actions">
              <Link href="/assessment" className="btn-primary">
                Take the Free LIFE Assessment →
              </Link>
              <Link href="/resources" className="btn-ghost">
                Explore Free Education →
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-right">
          <Image src="/images/workshops/pasta-lesson-1.jpg" alt="Family laughing while rolling pasta dough together" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="hero-img" />
          <div className="hero-caption">
            <p>“Every class starts the same way — flour, eggs, and good company.”</p>
          </div>
        </div>
      </section>

      <section className="mission-section px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              LIFE is a nonprofit longevity education initiative. We teach practical, evidence-informed habits through this website and daily social-media education,
              reveal strengths and opportunities through the free LIFE Assessment, and offer realistic ways to take action. The goal isn&apos;t just more years.
              It&apos;s more LIFE in your years.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="label-eyebrow">How LIFE Works</p>
            <h2 className="mt-2 text-4xl font-serif text-[var(--life-forest)]">Education first. Action that fits real life.</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "01", title: "We Teach", body: "Free longevity education through the LIFE website, practical resources, and daily social-media education." },
              { number: "02", title: "We Reveal", body: "The free LIFE Assessment shows how everyday habits support—or work against—a longer, healthier life." },
              { number: "03", title: "We Inspire Action", body: "Simple, sustainable next steps—not biohacking, supplements, or complicated routines." },
              { number: "04", title: "We Fund the Mission", body: "Cooking classes, future LIFE experiences, and donations help keep education free and accessible." },
            ].map((item) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                  <p className="type-eyebrow text-[var(--olive)]">{item.number}</p>
                  <h3 className="mt-2 text-2xl font-serif text-[var(--life-forest)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text)]">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="promise-band">
        {PROMISE_ITEMS.map((item, index) => (
          <Reveal key={item} className="promise-item">
            <p className="promise-text">{item}</p>
            {index < PROMISE_ITEMS.length - 1 && <span className="promise-divider" aria-hidden="true" />}
          </Reveal>
        ))}
      </section>

      <section style={{ background: "#0F2318" }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "2rem" }}>
              The Research
            </p>
          </Reveal>
          <div className="grid gap-12 mb-16 md:grid-cols-2">
            <Reveal>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.25rem,3.5vw,3rem)", fontWeight: 600, lineHeight: 1.2, color: "#F5F0E8" }}>
                Your genes determine only 20% of how long you live. The rest is yours.
              </h2>
            </Reveal>
            <Reveal>
              <div>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,232,0.82)", marginBottom: "1.5rem" }}>
                  The Danish Twin Study — the most comprehensive longevity study ever conducted — established that approximately 80% of lifespan is determined by lifestyle and environment, not genetics. The world&apos;s longest-lived communities prove it. They share six daily habits. Not supplements. Not marathons. Just six ways of living that compound over a lifetime.
                </p>
                <p style={{ fontSize: "0.72rem", lineHeight: 1.6, color: "rgba(245,240,232,0.45)" }}>
                  Sources: Herskind AM et al. (1996). Human Genetics. · Buettner D. (2012). The Blue Zones. · U.S. Surgeon General Advisory on Loneliness (2023).
                </p>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {[
              { number: "80%", label: "of lifespan is lifestyle", desc: "Not genetics. Daily habits, environment, and social connection determine how long we live.", cite: "Danish Twin Study, NEJM 1996" },
              { number: "20+", label: "additional years of life", desc: "Communities practicing the six longevity pillars consistently outlive the average American by more than two decades.", cite: "Buettner D. Blue Zones, National Geographic 2005" },
              { number: "15%", label: "higher risk of early death", desc: "High ultra-processed food consumption is tied to a 15% increase in all-cause mortality risk.", cite: "PMC Systematic Review, 2025" },
            ].map((stat) => (
              <Reveal key={stat.number}>
                <div style={{ border: "1px solid rgba(245,240,232,0.12)", borderRadius: "1.5rem", padding: "2rem", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,5vw,4rem)", fontWeight: 600, lineHeight: 1.1, color: "#F5F0E8", marginBottom: "0.5rem" }}>
                    {stat.number}
                  </p>
                  <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(245,240,232,0.9)", marginBottom: "0.75rem" }}>
                    {stat.label}
                  </p>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(245,240,232,0.75)", marginBottom: "0.75rem" }}>
                    {stat.desc}
                  </p>
                  <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.4)" }}>
                    {stat.cite}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="photo-moment pt-8 md:pt-12">
        {PHOTO_MOMENT.map((photo) => (
          <Reveal key={photo.alt} className="photo-card">
            <div className="photo-wrapper">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <p>{photo.caption}</p>
          </Reveal>
        ))}
      </section>

      <section className="pillars-section" id="habits">
        <div className="pillars-heading">
          <Reveal>
            <p className="label-eyebrow">Free LIFE Education</p>
            <h2>Six pillars. Practical habits for living your years better.</h2>
            <p>
              The LIFE Guide is a free resource for every family — a library of simple habits organized around the six pillars of longevity found in the world's
              longest-lived people. There&apos;s something for every member of your family, at every age.
            </p>
          </Reveal>
        </div>
        <div className="pillars-grid">
          {PILLARS.slice(0, 6).map((pillar) => (
            <Reveal key={pillar.slug} className="pillar-card">
              <span className="pillar-color" style={{ backgroundColor: pillar.color }} aria-hidden="true" />
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
                <Link href={`/pillars/${pillar.slug}`}>Explore {pillar.title} →</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="grid gap-8 rounded-[36px] border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div>
              <p className="label-eyebrow">Cook together. Share the table. Support the mission.</p>
              <h2 className="mt-2 text-4xl font-serif text-[var(--life-forest)]">A LIFE experience that funds free education.</h2>
              <p className="mt-4 text-[var(--text)]">The Fresh Pasta Cooking Class brings real food, connection, and tradition to one table. Proceeds support LIFE&apos;s free Assessment, educational resources, and nonprofit mission.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/pasta-class" className="btn-primary">Book the class →</Link>
              <Link href="/donate" className="btn-outline">Support LIFE →</Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="doors">
        {DOORS.map((door) => (
          <Reveal key={door.title} className="door-card">
            <p className="label-eyebrow">{door.title}</p>
            <h3>{door.title}</h3>
            <p>{door.body}</p>
            <Link href={door.href} className="btn-primary">
              {door.ctaLabel}
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
