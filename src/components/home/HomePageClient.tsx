"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import { PILLARS } from "@/data/pillars";

const PROMISE_ITEMS = [
  "Make a real meal from scratch — together",
  "No phones at the table — not for anyone",
  "Leave with a habit library worth sharing",
  "Come as a guest. Leave as a host.",
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
    caption: "People cooking, laughing, and eating together.",
  },
  {
    src: "/images/workshops/pasta-lesson-4.jpeg",
    alt: "Kids shaping homemade pasta at a LIFE cooking experience",
    caption: "Kids take over the dough station — and don’t want to leave.",
  },
];

const DOORS = [
  {
    title: "Book Fresh Pasta Cooking Class",
    body: "Hands-on pasta making with Lou and Kara Verde in Atlanta. Learn to roll, shape, and share pasta the traditional way.",
    ctaLabel: "Book the class →",
    href: "/pasta-class",
  },
  {
    title: "Download the LIFE Guide",
    body: "Get the Six Pillars habit library as a printable PDF for your family.",
    ctaLabel: "Download the LIFE Guide →",
    href: "/downloads/life-guide.html",
    external: true,
  },
];

export function HomePageClient() {

  return (
    <div className="home-v3">
      <section className="hero" id="hero">
        <div className="hero-left">
          <Reveal>
            <p className="hero-kicker">A national movement · starting around the table</p>
            <h1 className="hero-h1">Real food. Real connection. Real life.</h1>
            <p className="hero-sub">Learn the habits behind the world&apos;s longest-lived cultures — starting in your kitchen.</p>
            <div className="hero-actions">
              <Link href="/pasta-class" className="btn-primary">
                Book Fresh Pasta Cooking Class →
              </Link>
              <Link href="/assessment" className="btn-ghost">
                Take the Free Longevity Assessment →
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-right">
          <Image src="/images/workshops/pasta-lesson-1.jpg" alt="Family laughing while rolling pasta dough together" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="hero-img" />
          <div className="hero-caption">
            <p>“Two hours of actual presence. That's what we got back.”</p>
          </div>
        </div>
      </section>

      <section className="mission-section px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              LIFE is a nonprofit longevity movement teaching families the habits behind the world&apos;s longest-lived cultures. We do it through cooking
              experiences, a free guide, and a community of people committed to living better. Our mission is simple — bring back the table, the connection,
              and the food that kept families healthy for generations.
            </p>
          </Reveal>
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
              <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 400, lineHeight: 1.2, color: "#F5F0E8" }}>
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
                  <p style={{ fontFamily: "var(--font-lora)", fontSize: "clamp(3rem,5vw,4rem)", fontWeight: 400, lineHeight: 1, color: "#F5F0E8", marginBottom: "0.5rem" }}>
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

      <section className="story">
        <div className="story-img">
          <Image src="/images/grandfather.jpeg" alt="Lou's grandfather gardening" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="story-img-overlay" aria-hidden="true" />
        </div>
        <div className="story-content">
          <Reveal>
            <p className="label-eyebrow">LOU'S STORY</p>
            <h2 className="story-heading">I grew up in upstate New York in a home that never felt small — even when it was.</h2>
            <p className="story-body">
              Three generations under one roof. My grandparents and parents came from Italy. The house was always full. Family. Neighbors. Friends who felt
              like relatives. My grandfather had a massive garden. Everyone was always in the kitchen. The food was real — fresh ingredients, old recipes,
              vegetables from the garden — and the table was sacred.
            </p>
            <p className="story-body">
              My grandparents lived into their 90s. At the time I didn&apos;t realize how rare that was. We replaced gardens with drive-thrus. We replaced dinner
              tables with screens. We replaced community with convenience.
            </p>
            <p className="story-body">
              LIFE exists to bring back the table. The connection. The food made from scratch. The way of living that kept families healthy for generations.
              One table at a time.
            </p>
            <p className="story-sig">Lou Verde · Founder · Atlanta, GA</p>
          </Reveal>
        </div>
      </section>

      <section className="photo-moment">
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
            <p className="label-eyebrow">The LIFE Guide — Habit Library</p>
            <h2>Six pillars. The habits behind the world's longest-lived cultures.</h2>
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

      <section className="doors">
        {DOORS.map((door) => (
          <Reveal key={door.title} className="door-card">
            <p className="label-eyebrow">{door.title}</p>
            <h3>{door.title}</h3>
            <p>{door.body}</p>
            {door.external ? (
              <a href={door.href} className="btn-primary" target="_blank" rel="noreferrer">
                {door.ctaLabel}
              </a>
            ) : (
              <Link href={door.href} className="btn-primary">
                {door.ctaLabel}
              </Link>
            )}
          </Reveal>
        ))}
      </section>
    </div>
  );
}
