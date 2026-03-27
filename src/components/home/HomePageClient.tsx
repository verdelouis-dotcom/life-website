"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ZeffyEmbedFrame } from "@/components/zeffy/ZeffyEmbedFrame";

const heroStats = [
  { value: "Pilot", label: "Now underway in Atlanta & Austin" },
  { value: "$10", label: "Starts your journey — guide + tracker" },
  { value: "6", label: "Habits. That's all it takes." },
];

const problemStats = [
  {
    value: "4.8h",
    text: "Average daily screen time for children aged 8–12 — 60% of their waking hours outside school. Double what it was a decade ago.",
    source: "Common Sense Media, 2023",
  },
  {
    value: "53%",
    text: "Of teenagers feel lonely often or almost always. The loneliest generation in recorded history — shaped by screens replacing shared meals.",
    source: "American Perspectives Survey, 2023",
  },
  {
    value: "24m",
    text: "The average family dinner today. Down from 90 minutes a generation ago. At current trends, the shared family meal could vanish within a decade.",
    source: "Bureau of Labor Statistics, American Time Use Survey",
  },
];

const nationalFacts = [
  {
    value: "100+",
    title: "Years of progress — reversed",
    copy: "For the first time in over a century, American life expectancy is falling. We are the first generation projected to live shorter lives than our parents.",
    border: "var(--terra)",
    color: "var(--terra)",
  },
  {
    value: "6 in 10",
    title: "Americans live with chronic illness",
    copy: "Heart disease, diabetes, obesity, depression. Not bad luck — the compounded result of bad daily habits repeated for decades without interruption.",
    border: "var(--amber)",
    color: "var(--amber)",
  },
  {
    value: "15",
    title: "Cigarettes — the cost of loneliness",
    copy: "The U.S. Surgeon General declared loneliness a national epidemic. Being chronically lonely is as damaging to your health as smoking 15 cigarettes every single day.",
    border: "var(--olive)",
    color: "var(--olive-lt)",
  },
];

const pillars = [
  { number: "01", icon: "🥗", name: "Food", desc: "Cook from scratch. Eat together. Share what you make. The way we eat shapes everything.", href: "/pillars/food" },
  {
    number: "02",
    icon: "🚶",
    name: "Movement",
    desc: "Daily motion woven into real life — a walk after dinner, not a gym membership you'll quit.",
    href: "/pillars/movement",
  },
  { number: "03", icon: "🌙", name: "Sleep", desc: "The most underrated longevity habit. Protect it. Your body heals when you rest deeply.", href: "/pillars/sleep" },
  {
    number: "04",
    icon: "🤝",
    name: "Connection",
    desc: "Loneliness cuts years from your life. A shared meal is one of the oldest cures available.",
    href: "/pillars/connection",
  },
  { number: "05", icon: "🌱", name: "Purpose", desc: "People who know why they get up in the morning live seven years longer on average.", href: "/pillars/purpose" },
  {
    number: "06",
    icon: "🧘",
    name: "Stress",
    desc: "Chronic stress is invisible and cumulative. Simple daily tools — no retreat required.",
    href: "/pillars/stress",
  },
];

const howSteps = [
  {
    title: "You get an invitation",
    body: "Someone you know opens their home. You're invited to cook and eat together — no experience needed.",
  },
  { title: "Everyone has a role", body: "Kids chop. Adults stir. Someone rolls the dough. A real meal, made from scratch, the way it used to be." },
  {
    title: "Screens away. Everyone present.",
    body: "No phones at the table. Not for parents. Not for kids. Just cooking, laughing, and being together.",
    tag: "The one non-negotiable",
  },
  { title: "You receive the LIFE Guide", body: "Six habits your family can start tonight. Not a program — a guide worth sharing." },
  { title: "You open your own kitchen", body: "Within 30 days, you host. Invite your family. Invite a neighbor. The table grows — wherever you are." },
];

const testimonials = [
  {
    quote:
      "“My 13-year-old put his phone down voluntarily for the first time in months. He rolled pasta, he laughed, he talked to us. I didn't know how much I'd missed him until I had him back for two hours.”",
    name: "Jennifer M.",
    role: "Parent & Host · Decatur, GA",
    initials: "J",
  },
  {
    quote: "“We used to eat in front of the TV every night. Now Sunday dinner is the one thing my kids actually ask for. That shift started at a LIFE table.”",
    name: "Sarah K.",
    role: "Guest → Host · Austin, TX",
    initials: "S",
  },
  {
    quote:
      "“As a pediatrician I see the damage of disconnection every day. LIFE is the first thing I've found that actually changes family behavior — because it happens around food, not a screen.”",
    name: "Dr. David R.",
    role: "Community Partner · Atlanta, GA",
    initials: "D",
  },
];

const trustBand = [
  { value: "Pilot", label: "Active in Atlanta & Austin — growing" },
  { value: "30", label: "Days to host your own table — the promise every guest makes" },
  { value: "6", label: "Habits backed by longevity research" },
  { value: "501c3", label: "Nonprofit · Georgia corporation" },
];

const donationIncludes = [
  "LIFE Guide PDF — download instantly",
  "Daily habit tracker — add to your phone's home screen",
  "Level 1: Beginner — your journey begins",
  "LIFE gathering access — Atlanta & Austin",
];

const doors = [
  {
    icon: "🏠",
    name: "Attend a LIFE gathering",
    desc: "LIFE gatherings are currently piloting in Atlanta, GA and Austin, TX — free to attend. Cook together, eat together, leave with the guide and a reason to host your own.",
    link: "/workshops",
    linkLabel: "Find a gathering near you →",
    image: "/images/workshops/pasta-lesson-2.jpg",
  },
  {
    icon: "🌍",
    name: "Bring LIFE to your city",
    desc: "Not in Atlanta or Austin? Join the waitlist. When enough families in your city signal interest, LIFE comes to you — or you bring it yourself.",
    image: "/images/workshops/pasta-lesson-4.jpeg",
  },
];

export function HomePageClient() {
  const [donationAmount, setDonationAmount] = useState("10");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "success">("idle");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".conversion [data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => {
      const delay = el.dataset.delay;
      if (delay) {
        el.style.transitionDelay = `${delay}s`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const normalizedAmount = Math.max(10, Number(donationAmount) || 10);

  const handleWaitlistSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!waitlistEmail.trim()) {
      return;
    }
    setWaitlistStatus("success");
    setWaitlistEmail("");
    const timeout = setTimeout(() => setWaitlistStatus("idle"), 4000);
    return () => clearTimeout(timeout);
  };

  return (
    <div className="conversion">
      <section className="hero" id="hero">
        <div className="hero-left" data-reveal>
          <div className="hero-kicker">A National Movement · Starting Now</div>
          <h1 className="hero-h1">
            Your daily habits
            <br />
            are shortening
            <br />
            your life.
            <br />
            <em>We can help.</em>
          </h1>
          <p className="hero-sub">
            <strong>The way we eat, move, sleep, and connect</strong> is silently eroding our health and our relationships. The families of the world&apos;s longest-lived
            cultures knew something we&apos;ve forgotten. LIFE brings it back.
          </p>
          <div className="hero-actions">
            <Link href="#assessment" className="btn-primary">
              Discover Your LIFE Age — Free ↓
            </Link>
            <Link href="#solution" className="btn-secondary">
              See the six habits ↓
            </Link>
          </div>
          <div className="hero-proof">
            {heroStats.map((stat) => (
              <div key={stat.value} className="hp-item">
                <div className="hp-num">{stat.value}</div>
                <div className="hp-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right" data-reveal data-delay="0.2">
          <Image src="/images/workshops/pasta-lesson-1.jpg" alt="Family cooking together around a warm kitchen table" fill priority className="hero-img" sizes="50vw" />
          <div className="hero-img-caption">
            <strong>A LIFE Gathering</strong>
            &quot;My son made his first meal from scratch. He was 11. He hasn&apos;t stopped asking to do it again.&quot;
          </div>
        </div>
      </section>

      <section className="assess-hook" id="assessment">
        <div className="assess-hook-content" data-reveal>
          <div className="assess-urgent">⚠ Free · Takes 2 minutes</div>
          <h2 className="assess-h">
            What is your
            <br />
            <em>LIFE Age?</em>
          </h2>
          <p className="assess-body">
            Most people are living well below their potential lifespan — not because of genetics, but because of <strong>six daily habits they haven&apos;t yet activated.</strong>{" "}
            Without them, the average American is trending toward a LIFE Age in the low 70s. With them, that number shifts dramatically.
          </p>
          <p className="assess-body">Take our free longevity assessment and find out exactly where you stand and what to do about it.</p>
          <Link href="/assessment" className="assess-btn">
            Discover My LIFE Age — Free →
          </Link>
          <p className="assess-free-note">Enter your email to receive your full LIFE Age report.</p>
        </div>
        <div className="assess-right" data-reveal data-delay="0.2">
          <div className="life-age-card">
            <span className="lac-title">Your LIFE Age — before and after the six habits</span>
            <div className="lac-ages">
              <div className="lac-age bad">
                <div className="lac-age-num">71</div>
                <div className="lac-age-lbl">Without the 6 pillars active daily</div>
              </div>
              <div className="lac-age good">
                <div className="lac-age-num">90+</div>
                <div className="lac-age-lbl">With all 6 pillars activated consistently</div>
              </div>
              <div className="lac-arrow">→</div>
            </div>
            <p className="lac-message">
              &quot;The gap between a life cut short and a life lived fully isn&apos;t genetics. It&apos;s six daily habits — the same ones my grandparents lived without thinking
              about them.&quot;
            </p>
            <Link href="/assessment" className="lac-cta-mini">
              Take the free assessment to see your score →
            </Link>
          </div>
        </div>
      </section>

      <section className="problem" id="problem">
        <div className="problem-img" data-reveal>
          <Image src="/images/workshops/pasta-lesson-2.jpg" alt="Family at dinner table together" fill sizes="50vw" />
          <div className="problem-img-overlay" />
        </div>
        <div className="problem-content" data-reveal data-delay="0.1">
          <div className="sec-label">The Crisis</div>
          <h2 className="sec-h">
            Our daily habits
            <br />
            are <em>quietly killing us.</em>
          </h2>
          <p className="sec-body">
            Not dramatically. Not all at once. But steadily, invisibly — through the meals we skip, the screens we choose over our families, the sleep we sacrifice, and the
            neighbors we never meet.
          </p>
          <div className="problem-stats">
            {problemStats.map((stat) => (
              <div key={stat.value} className="ps-item">
                <div className="ps-num">{stat.value}</div>
                <div>
                  <div className="ps-text">{stat.text}</div>
                  <span className="ps-source">{stat.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="national">
        <div className="sec-label" style={{ color: "var(--amber)", justifyContent: "center", marginBottom: "1.25rem" }}>
          The bigger picture
        </div>
        <h2 style={{ fontFamily: "var(--font-lora), 'Cormorant Garamond', serif", fontSize: "clamp(1.6rem,2.8vw,2.4rem)", fontWeight: 700, lineHeight: 1.15, color: "var(--white)", marginBottom: "3rem" }}>
          This isn&apos;t just happening in your home.
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--amber-lt)" }}>It&apos;s happening to all of us.</em>
        </h2>
        <div className="national-cards">
          {nationalFacts.map((card) => (
            <div key={card.title} className="national-card" style={{ borderTopColor: card.border }}>
              <h3 style={{ color: card.color }}>{card.value}</h3>
              <strong>{card.title}</strong>
              <p>{card.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="agitation">
        <div className="agitation-photo" aria-hidden="true">
          <Image src="/images/workshops/pasta-lesson-3.jpeg" alt="" fill sizes="45vw" />
        </div>
        <div className="agitation-content" data-reveal>
          <div className="agitation-kicker">The honest truth</div>
          <h2 className="agitation-h">
            In 10 years your kids
            <br />
            will be grown.
            <br />
            <em>The window is now.</em>
          </h2>
          <p className="agitation-body">
            The screens won&apos;t slow down on their own. The dinners won&apos;t happen by accident. The connection your family is missing doesn&apos;t return without someone
            making a deliberate decision to bring it back.
          </p>
          <p className="agitation-body">
            Every day without the six habits is a day of compounding disconnection — physically, mentally, and as a family. The research is unambiguous: these habits don&apos;t
            just add years to your life. They add life to your years.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "1.75rem",
              padding: "1.5rem",
              background: "rgba(0,0,0,0.15)",
              borderLeft: "3px solid rgba(255,255,255,0.2)",
            }}
          >
            {nationalFacts.map((fact) => (
              <div key={fact.title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ fontFamily: "var(--font-lora)", fontSize: "1.6rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", flexShrink: 0, lineHeight: 1 }}>↓</div>
                <div style={{ fontFamily: "var(--font-lora)", fontSize: "1rem", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                  <strong style={{ color: "white", fontWeight: 600 }}>{fact.title}.</strong> {fact.copy}
                </div>
              </div>
            ))}
          </div>
          <p className="agitation-pivot">This didn&apos;t happen by accident. And it won&apos;t reverse without someone deciding to act. That someone is you. Tonight.</p>
        </div>
      </section>

      <section className="solution" id="solution">
        <div className="solution-top">
          <div data-reveal>
            <div className="sec-label">The Solution</div>
            <h2 className="sec-h">
              Six habits.
              <br />
              Inherited from Italy.
              <br />
              <em>Proven by science.</em>
            </h2>
            <p className="sec-body">
              These aren&apos;t trends or programs. They&apos;re the habits Lou Verde&apos;s Italian grandparents lived without thinking — the same habits that keep Blue Zone
              communities thriving into their 90s and beyond. Simple enough to start tonight. Powerful enough to transform your family.
            </p>
          </div>
          <div className="solution-photo" data-reveal data-delay="0.2">
            <Image src="/images/workshops/pasta-lesson-4.jpeg" alt="Family cooking pasta together in a warm kitchen" fill sizes="45vw" />
            <div className="solution-photo-caption">Families cooking together at a LIFE gathering</div>
          </div>
        </div>
        <div className="pillars-grid" data-reveal>
          {pillars.map((pillar) => (
            <Link key={pillar.number} href={pillar.href} className="pillar">
              <div className="pillar-num">{pillar.number}</div>
              <span className="pillar-icon">{pillar.icon}</span>
              <div className="pillar-name">{pillar.name}</div>
              <div className="pillar-desc">{pillar.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <div className="how-wrap">
          <div className="how-photo" data-reveal>
            <Image src="/images/workshops/IMG_4252.jpeg" alt="Neighbors gathered around a table cooking together" fill sizes="45vw" />
            <div className="how-photo-tag">“I met more of my neighbors at one LIFE table than in four years of living here.” — LIFE Guest</div>
          </div>
        <div data-reveal data-delay="0.2">
          <div className="sec-label">How It Works</div>
          <h2 className="sec-h" style={{ marginBottom: "1.5rem" }}>
            It starts at your table.
            <br />
            <em>Then it spreads.</em>
          </h2>
          <div className="how-steps">
            {howSteps.map((step, index) => (
              <div key={step.title} className="hstep">
                <div className="hstep-dot">{index + 1}</div>
                <div>
                  <div className="hstep-name">{step.title}</div>
                  <div className="hstep-desc">{step.body}</div>
                  {step.tag && <div className="hstep-pill">{step.tag}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="cred" id="credibility">
        <div className="cred-grid">
          <div data-reveal>
            <div className="lou-photo-wrap">
              <Image src="/images/workshops/IMG_6843.jpeg" alt="Lou Verde — LIFE Founder" fill className="lou-photo" sizes="45vw" />
              <div className="lou-photo-caption">
                <div className="lou-photo-name">Lou Verde</div>
                <div className="lou-photo-title">Founder · First-Generation American · Longevity Researcher</div>
              </div>
            </div>
            <blockquote className="lou-quote-block">
              “My grandparents came from Italy with nothing. They lived into their <em>90s.</em> Their secret wasn&apos;t a program. It was the dinner table — every single
              night.”
            </blockquote>
            <p className="lou-body">
              Lou didn&apos;t discover these habits in a research lab. He inherited them. Growing up in an Italian-American household, these six habits were simply how life was
              lived — cooking from scratch, eating together without distraction, walking daily, sleeping deeply, knowing neighbors by name, waking with purpose.
            </p>
            <p className="lou-body">
              After years studying longevity cultures worldwide — Blue Zones and well beyond — Lou kept finding the same six habits at the center of every long-lived community.
              LIFE exists to bring them to every family in America.
            </p>
            <div className="lou-heritage">
              <div className="heritage-tag">
                <span>🇮🇹</span> First-Generation Italian-American
              </div>
              <div className="heritage-tag">
                <span>🌍</span> Blue Zones & Longevity Research
              </div>
              <div className="heritage-tag">
                <span>👴</span> Grandparents lived into their 90s
              </div>
            </div>
          </div>
          <div data-reveal data-delay="0.2">
            <div className="sec-label">Real Families. Real Kitchens.</div>
            <div className="testimonials" style={{ marginBottom: "2.5rem" }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="tc">
                  <p className="tc-quote">{testimonial.quote}</p>
                  <div className="tc-author">
                    <div className="tc-av">{testimonial.initials}</div>
                    <div>
                      <div className="tc-name">{testimonial.name}</div>
                      <div className="tc-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="trust-band">
              {trustBand.map((item) => (
                <div key={item.label} className="tb-item">
                  <div className="tb-num">{item.value}</div>
                  <div className="tb-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="photo-break">
        <Image src="/images/workshops/IMG_6709.jpeg" alt="Family gathering around a table outdoors in golden light" fill sizes="100vw" />
        <div className="photo-break-overlay" />
        <div className="photo-break-text" data-reveal>
          <h2 className="pbt-h">
            The table is where <em>lives get longer.</em>
          </h2>
          <p className="pbt-sub">
            Every culture that consistently produces people who live past 90 shares one thing: they gather. They cook. They eat together. They show up for each other. Every single
            day.
          </p>
        </div>
      </div>

      <section className="donation" id="donation">
        <div className="donation-photo-wrap" aria-hidden="true">
          <Image src="/images/workshops/IMG_8060.jpeg" alt="" fill sizes="50vw" />
        </div>
        <div className="don-left" data-reveal>
          <div className="don-label">Start Your LIFE Journey</div>
          <h2 className="don-h">
            $10 starts everything.
            <br />
            <em>No subscription. Ever.</em>
          </h2>
          <p className="don-body">
            Your donation supports LIFE&apos;s mission — helping families across America rebuild the daily habits that make life longer, healthier, and more connected — wherever
            they are. In return, you get everything you need to start tonight.
          </p>
          <div className="don-what">
            {[
              { icon: "📖", text: "The LIFE Guide — six habits, fully explained, yours to keep and share with anyone" },
              { icon: "📱", text: "The Daily Habit Tracker — 48 habits across 6 pillars, streak engine, 10 levels, works on any phone" },
              { icon: "🏠", text: "Gathering access — attend a free LIFE table where available, or get priority access when LIFE launches in your city" },
              { icon: "🌍", text: "Movement membership — join families rebuilding the table across America" },
            ].map((row) => (
              <div key={row.text} className="dw-row">
                <div className="dw-icon">{row.icon}</div>
                <div className="dw-text">
                  <strong>{row.text.split(" — ")[0]}</strong> — {row.text.split(" — ")[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="don-right" data-reveal data-delay="0.2">
          <div className="don-card">
            <span className="dc-eyebrow">One-time donation · Instant access · No subscription</span>
            <div className="dc-price-row">
              <div className="dc-dollar">$</div>
              <div className="dc-amount">10</div>
            </div>
            <p className="dc-sub">Starts your LIFE journey — guide + daily tracker + community access</p>
            <div className="dc-includes">
              <span className="dc-inc-title">Unlocked immediately after donation</span>
              {donationIncludes.map((item) => (
                <div key={item} className="dc-inc-item">
                  <span className="dc-check">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <label className="dc-custom-lbl" htmlFor="donation-amount">
              Want to give more? Enter any amount:
            </label>
            <div className="dc-custom-row">
              <div className="dc-prefix">$</div>
              <input
                className="dc-input"
                id="donation-amount"
                type="number"
                min={10}
                value={donationAmount}
                onChange={(event) => setDonationAmount(event.target.value)}
              />
            </div>
            <p className="dc-note">The secure form below will load with your selected amount (minimum $10).</p>
            <ZeffyEmbedFrame amount={normalizedAmount} className="dc-embed" minHeight={840} />
            <div className="dc-legal">Tax-deductible donation · 501(c)(3) pending · Secure payment via Zeffy · No subscription. No recurring charges. No spam.</div>
          </div>
        </div>
      </section>

      <section className="doors">
        <div className="door">
          <div className="door-bg" aria-hidden="true">
            <Image src={doors[0].image} alt="" fill sizes="50vw" />
          </div>
          <div className="door-content" data-reveal>
            <span className="door-icon">{doors[0].icon}</span>
            <div className="door-name">{doors[0].name}</div>
            <p className="door-desc">{doors[0].desc}</p>
            <Link href={doors[0].link!} className="door-link">
              {doors[0].linkLabel}
            </Link>
          </div>
        </div>
        <div className="door">
          <div className="door-bg" aria-hidden="true">
            <Image src={doors[1].image} alt="" fill sizes="50vw" />
          </div>
          <div className="door-content" data-reveal data-delay="0.2">
            <span className="door-icon">{doors[1].icon}</span>
            <div className="door-name">{doors[1].name}</div>
            <p className="door-desc">{doors[1].desc}</p>
            <form className="door-email-row" onSubmit={handleWaitlistSubmit}>
              <input
                className="door-email-input"
                type="email"
                value={waitlistEmail}
                onChange={(event) => setWaitlistEmail(event.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                required
              />
              <button className="door-email-btn" type="submit" disabled={waitlistStatus === "success"}>
                {waitlistStatus === "success" ? "You're on the list!" : "Notify Me"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
