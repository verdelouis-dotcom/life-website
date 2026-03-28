"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import { ZeffyEmbedFrame } from "@/components/zeffy/ZeffyEmbedFrame";
import { PILLARS } from "@/data/pillars";

const PROMISE_ITEMS = [
  { icon: "🍝", text: "Make a real meal from scratch — together" },
  { icon: "📵", text: "No phones at the table — not for anyone" },
  { icon: "📖", text: "Leave with a habit library worth sharing" },
  { icon: "🤝", text: "Come as a guest. Leave as a host." },
];

const HOW_STEPS = [
  {
    title: "You get an invitation",
    body: "Someone you know opens their home. You're invited to cook and eat together — no experience needed.",
  },
  {
    title: "Everyone has a role",
    body: "Kids chop. Adults stir. Someone rolls the dough. A real meal from scratch, the way it used to be.",
  },
  {
    title: "Screens away",
    body: "No phones at the table. Not for parents. Not for kids. Just cooking, laughing, and being together.",
    pill: "The one rule",
  },
  {
    title: "You leave with the habit library",
    body: "Simple habits your whole family can start tonight. Organized by pillar. Worth keeping. Worth sharing.",
  },
  {
    title: "You open your kitchen",
    body: "Within 30 days, you host. Invite your family. Invite a neighbor. The table grows.",
    pill: "Learn it. Live it. Pass it on.",
  },
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
    caption: "No phones. Just people cooking, laughing, and eating.",
  },
  {
    src: "/images/workshops/pasta-lesson-4.jpeg",
    alt: "Kids shaping homemade pasta at a LIFE gathering",
    caption: "Kids take over the dough station — and don’t want to leave.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "My 13-year-old put his phone down voluntarily for the first time in months. He rolled pasta, he laughed, he talked to us. I didn't know how much I'd missed him until I had him back for two hours.",
    name: "Jennifer M.",
    role: "Parent & Host · Decatur, GA",
  },
  {
    quote: "We used to eat in front of the TV every night. Now Sunday dinner is the one thing my kids actually ask for. That shift started at a LIFE table.",
    name: "Sarah K.",
    role: "Guest → Host · Austin, TX",
  },
  {
    quote:
      "I came not knowing anyone. Left having made dinner with five strangers who felt like neighbors. That's the only way I can describe it.",
    name: "Marcus T.",
    role: "Guest · Atlanta, GA",
  },
];

const JOIN_BENEFITS = [
  { label: "Six Pillars Framework — full curriculum PDF", body: "" },
  { label: "Daily habit tracker — 10 levels, streak engine", body: "" },
  { label: "Longevity assessment — discover your LIFE Age", body: "" },
  { label: "Gathering access — Atlanta & Austin", body: "" },
];

const DOORS = [
  {
    title: "Attend a LIFE gathering",
    body: "Atlanta and Austin families gather every month to cook, eat, and pass on the habits that hold communities together.",
    ctaLabel: "Find a gathering →",
    href: "/workshops",
  },
];

export function HomePageClient() {
  const [donationAmount, setDonationAmount] = useState("10");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [waitlistMessage, setWaitlistMessage] = useState<string | null>(null);

  const normalizedAmount = Math.max(10, Number(donationAmount) || 10);

  const handleWaitlistSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!waitlistEmail.trim()) {
      return;
    }

    setWaitlistStatus("loading");
    setWaitlistMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: waitlistEmail.trim(), tag: "city-waitlist" }),
      });

      if (!response.ok) {
        throw new Error("Unable to join waitlist");
      }

      setWaitlistStatus("success");
      setWaitlistEmail("");
      setWaitlistMessage("You're on the list. We'll reach out when LIFE launches near you.");
    } catch (error) {
      console.error("CITY_WAITLIST_ERROR", error);
      setWaitlistStatus("error");
      setWaitlistMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="home-v3">
      <section className="hero" id="hero">
        <div className="hero-left">
          <Reveal>
            <p className="hero-kicker">A national movement · starting around the table</p>
            <h1 className="hero-h1">
              What if you could live 20 years longer?
              <em>Let me show you how.</em>
            </h1>
            <p className="hero-sub">
              LIFE is a longevity education movement. Attend a gathering in your city, or enroll online for just $10. Either way, you get full access to the LIFE Longevity University: the Six Pillars Framework, daily habit tracker, and longevity assessment built on decades of peer-reviewed research.
            </p>
            <div className="hero-actions">
              <Link href="/#join" className="btn-primary">
                Enroll for $10 →
              </Link>
              <Link href="/workshops" className="btn-ghost">
                Find a Gathering →
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-right">
          <Image src="/images/workshops/pasta-lesson-1.jpg" alt="Family laughing while rolling pasta dough together" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="hero-img" />
          <div className="hero-caption">
            <strong>A LIFE gathering</strong>
            <p>“Two hours of actual presence. That's what we got back.”</p>
          </div>
        </div>
      </section>

      <section className="promise-band">
        {PROMISE_ITEMS.map((item, index) => (
          <Reveal key={item.text} className="promise-item">
            <span className="promise-icon">{item.icon}</span>
            <p className="promise-text">{item.text}</p>
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
              { number: "20+", label: "additional years of life", desc: "Communities practicing the six longevity pillars consistently outlive the average American by two decades.", cite: "Buettner D. Blue Zones, National Geographic 2005" },
              { number: "15", label: "cigarettes — the cost of loneliness", desc: "The U.S. Surgeon General declared loneliness a public health epidemic with mortality risk equal to smoking 15 cigarettes daily.", cite: "U.S. Surgeon General Advisory, 2023" },
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
          <Image src="/images/workshops/IMG_6843.jpeg" alt="Lou Verde smiling in a kitchen" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="story-img-overlay" aria-hidden="true" />
        </div>
        <div className="story-content">
          <Reveal>
            <p className="label-eyebrow">LOU'S STORY</p>
            <h2 className="story-heading">
              “My grandparents lived into their mid-90s. They never counted a calorie or ran a mile. They just cooked, gathered their family, and showed up for
              their neighbors. Every single day.”
            </h2>
            <p className="story-body">
              Lou Verde grew up in an Italian-American household where these habits weren't a program — they were simply how life was lived. After years
              studying the world's longest-lived communities, he kept finding the same six things at the center of every one of them. They were the same six
              his family had practiced for generations. LIFE exists to share them with every family in America — one pasta dinner at a time.
            </p>
            <p className="story-sig">Lou Verde · Founder · Atlanta, GA</p>
          </Reveal>
        </div>
      </section>

      <section className="how-it-works" id="what">
        <div className="how-heading">
          <Reveal>
            <p className="label-eyebrow">How it works</p>
            <h2>What happens at a LIFE gathering</h2>
          </Reveal>
        </div>
        <div className="how-steps">
          {HOW_STEPS.map((step, index) => (
            <Reveal key={step.title} className="how-card">
              <div className="how-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.pill && <span className="pill">{step.pill}</span>}
            </Reveal>
          ))}
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
            <h2>Six pillars. A habit for every member of your family.</h2>
            <p>
              Every guest leaves with the LIFE Guide — a library of simple habits organized around the six pillars of longevity found in the world's longest-lived
              people. There&apos;s something for every member of your family, at every age. The daily tracker lets you check them off, build your
              streak, and level up together.
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

      <section className="testimonials">
        <Reveal>
          <p className="label-eyebrow">What guests are saying</p>
          <h2>It feels like bringing back something we lost.</h2>
        </Reveal>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((quote) => (
            <Reveal key={quote.name} className="testimonial-card">
              <p className="quote">“{quote.quote}”</p>
              <p className="author">{quote.name}</p>
              <p className="role">{quote.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="join-left">
          <Reveal>
            <p className="label-eyebrow">Start your LIFE journey</p>
            <h2>Two ways into LIFE Longevity University.</h2>
            <p className="join-sub">
              LIFE Longevity University is the digital home of the Six Pillars Framework — a research-backed curriculum for living longer, built around the habits found in every long-lived culture on Earth. Access it by attending a gathering, or enroll directly for $10.
            </p>
          </Reveal>
          <div className="grid gap-4 mb-6 grid-cols-1 sm:grid-cols-2">
            <div style={{ border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem", background: "#fff" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "0.5rem" }}>Door 1</p>
              <h4 style={{ fontFamily: "var(--font-lora)", fontSize: "1.1rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.4rem" }}>Attend a Gathering</h4>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--muted)", marginBottom: "0.75rem" }}>
                Your host gives you access to LIFE Longevity University at no cost. Available in Atlanta &amp; Austin.
              </p>
              <Link href="/workshops" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--terra)", textDecoration: "none" }}>
                Find a gathering →
              </Link>
            </div>
            <div style={{ border: "1px solid var(--border)", borderLeft: "3px solid var(--sage)", borderRadius: "1rem", padding: "1.25rem 1.5rem", background: "#fff" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "0.5rem" }}>Door 2</p>
              <h4 style={{ fontFamily: "var(--font-lora)", fontSize: "1.1rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.4rem" }}>Enroll Online — $10</h4>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--muted)" }}>
                Instant access from anywhere in the US. Supports LIFE&apos;s national expansion and future research.
              </p>
            </div>
          </div>
          <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.75rem" }}>Your LIFE Longevity University enrollment includes</p>
          <ul className="join-benefits">
            {JOIN_BENEFITS.map((benefit) => (
              <Reveal key={benefit.label} className="join-benefit">
                <span>✓</span>
                <div>
                  <strong>{benefit.label}</strong>
                  <p>{benefit.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="join-legal">Tax-deductible enrollment · 501(c)(3) pending · Secure payment via Zeffy. Supports national expansion &amp; future longevity research. No recurring charges.</p>
        </div>
        <div className="join-right">
          <Reveal className="join-card">
            <p className="label-eyebrow text-[var(--olive)]">One-time enrollment · No subscription · Instant access</p>
            <p style={{ fontSize: "0.95rem", fontWeight: 500, lineHeight: 1.5, color: "var(--ink)", marginBottom: "1rem" }}>
              Enroll in LIFE Longevity University — the Six Pillars Framework, daily tracker, and longevity assessment in one place.
            </p>
            <div className="amount-input-row">
              <label htmlFor="donation-amount" className="sr-only">
                Donation amount
              </label>
              <span>$</span>
              <input
                id="donation-amount"
                type="number"
                min={10}
                value={donationAmount}
                onChange={(event) => setDonationAmount(event.target.value)}
              />
              <span className="amount-note">USD</span>
            </div>
            <ZeffyEmbedFrame amount={normalizedAmount} className="join-embed" minHeight={720} />
          </Reveal>
        </div>
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
        <Reveal className="door-card">
          <p className="label-eyebrow">Bring LIFE to your city</p>
          <h3>Not near Atlanta or Austin yet?</h3>
          <p>
            Join the waitlist. When enough families in your city raise their hands, we bring LIFE to you — or you bring it yourself with our team behind you.
          </p>
          <form className="waitlist-form" onSubmit={handleWaitlistSubmit}>
            <label className="sr-only" htmlFor="waitlist-email">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={waitlistEmail}
              onChange={(event) => setWaitlistEmail(event.target.value)}
              placeholder="Email address"
              required
              disabled={waitlistStatus === "loading"}
            />
            <button type="submit" disabled={waitlistStatus === "loading"}>
              {waitlistStatus === "loading" ? "Sending..." : "Notify Me"}
            </button>
          </form>
          {waitlistMessage && (
            <p className={`waitlist-message ${waitlistStatus === "error" ? "error" : ""}`}>{waitlistMessage}</p>
          )}
        </Reveal>
      </section>
    </div>
  );
}
