import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import PastaClassForm from "@/components/forms/pasta-class-form";

export const metadata: Metadata = {
  title: "Fresh Pasta Cooking Class — LIFE",
  description:
    "Book the LIFE Fresh Pasta Cooking Class with Lou and Kara Verde in Atlanta. Cook pasta from scratch, make tiramisu, and support the LIFE nonprofit.",
};

const WHAT_YOU_DO = [
  "Source fresh, seasonal ingredients for your dishes",
  "Knead and roll pasta dough by hand",
  "Shape your pasta — tagliatelle, ravioli, or more",
  "Prepare sauces that pair perfectly with your handmade pasta",
  "Craft a classic tiramisu",
  "Sit down and enjoy a three-course meal with a glass of wine",
];

const DETAILS = [
  { label: "Duration", value: "3 hours" },
  { label: "Location", value: "Host house — Atlanta, GA area" },
  { label: "Group size", value: "2–6 guests" },
  { label: "Price", value: "$75 per person" },
  { label: "Included", value: "One glass of wine" },
  { label: "Impact", value: "100% of proceeds donated to LIFE" },
];

const PHOTOS = [
  { src: "/images/workshops/pasta-lesson-2.jpg", alt: "Guests rolling fresh pasta dough" },
  { src: "/images/workshops/pasta-lesson-3.jpeg", alt: "Family preparing pasta together" },
  { src: "/images/workshops/pasta-lesson-4.jpeg", alt: "Kids shaping pasta at the table" },
  { src: "/images/workshops/pasta-lesson-7.jpeg", alt: "Fresh pasta drying before dinner" },
];

const TESTIMONIALS = [
  {
    quote:
      "We came for a family date night and left with so much more than a great meal. Lou and Kara made the whole evening feel effortless and warm. We're already talking about coming back.",
    name: "Eryn M.",
    location: "Fayetteville, GA",
  },
  {
    quote:
      "The cooking class with Lou and Kara was the most precious and valuable experience we have ever booked. We made pasta and tiramisu with our kids in a comfortable home setting. Everything was fresh, delicious, and unrushed. Lou and Kara made our children feel included, so the entire evening felt relaxed and joyful. We recommend it to everyone.",
    name: "Eric & Kim",
    location: "Austin, TX",
  },
];

export default function FreshPastaClassPage() {
  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-24 pt-32">
        <section className="rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">Fresh Pasta Cooking Class</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 md:max-w-2xl">
              <h1 className="text-4xl font-serif leading-tight md:text-5xl">Fresh Pasta Cooking Class</h1>
              <p className="text-lg text-[var(--muted)]">An authentic taste of Italy — in someone&apos;s home, the way it was meant to be.</p>
              <p className="text-base leading-relaxed text-[var(--text)]">
                Fresh pasta made by hand. A classic tiramisu. A glass of wine. Three hours in Lou and Kara&apos;s kitchen — cook from scratch, sit down, and eat what you
                made. No experience needed. Just show up ready to cook.
              </p>
              <p className="text-base leading-relaxed text-[var(--text)]">
                Lou and Kara Verde open their Atlanta home to small groups — 2 to 6 guests — for an evening rooted in Italian tradition. Every penny supports LIFE —
                the Longevity Initiative for Food &amp; Education.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="#book" className="btn-primary">
                Book Your Spot →
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-[var(--border)] bg-white/90 p-10 shadow-sm md:grid-cols-2">
          <div>
            <p className="type-eyebrow text-[var(--olive)]">What You&apos;ll Do</p>
            <ul className="mt-4 space-y-3 text-[var(--text)]">
              {WHAT_YOU_DO.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[4px] inline-flex h-2 w-2 rounded-full bg-[var(--olive)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="type-eyebrow text-[var(--olive)]">Details</p>
            <dl className="mt-4 space-y-3 text-[var(--text)]">
              {DETAILS.map((detail) => (
                <div key={detail.label} className="flex justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                  <dt className="font-semibold text-[var(--ink)]">{detail.label}</dt>
                  <dd className="text-right text-[var(--muted)]">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            {PHOTOS.map((photo) => (
              <div key={photo.src} className="relative h-64 w-full overflow-hidden rounded-[28px]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm md:grid-cols-2">
          <div className="relative h-72 w-full overflow-hidden rounded-[28px]">
            <Image src="/images/founder2.jpeg" alt="Lou and Kara in the kitchen" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <p className="type-eyebrow text-[var(--olive)]">Your Hosts</p>
            <h2 className="text-3xl font-serif text-[var(--ink)]">Lou &amp; Kara Verde</h2>
            <p className="text-[var(--text)] leading-relaxed">
              Lou and Kara open their Atlanta home to small groups for an evening rooted in Italian tradition. Lou grew up in a three-generation Italian-American
              household where everyone was always in the kitchen, the food was real, and the table was sacred. He founded LIFE to bring that way of living back —
              one table at a time. Every penny from every class goes directly to LIFE.
            </p>
          </div>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">What Guests Are Saying</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-[var(--border)] bg-white px-6 py-6 text-[var(--text)] shadow-sm">
                <p className="text-lg font-serif leading-relaxed">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-[var(--ink)]">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="book" className="grid gap-8 rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm md:grid-cols-2">
          <div className="space-y-3">
            <p className="type-eyebrow text-[var(--olive)]">Book Your Spot</p>
            <h2 className="text-3xl font-serif text-[var(--ink)]">Reserve your class</h2>
            <p className="text-[var(--text)]">2–6 guests · $75 per person · Atlanta, GA. Lou &amp; Kara will reply with available dates.</p>
          </div>
          <PastaClassForm />
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-serif text-[var(--ink)]">Become a LIFE Host</h3>
            <p className="mt-2 text-[var(--text)]">
              Inspired by your evening with Lou and Kara? Open your own kitchen. Pick a recipe, invite your neighbors, cook together, and share the LIFE Guide
              with everyone at your table. That&apos;s how this grows.
            </p>
          </div>
          <Link href="/host" className="btn-outline whitespace-nowrap">
            Learn More →
          </Link>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-serif text-[var(--ink)]">Corporate &amp; Team Building</h3>
            <p className="mt-2 text-[var(--text)]">Corporate experiences and team building activities available upon request.</p>
          </div>
          <a href="mailto:info@longevityinitiativeforfoodandeducation.com" className="btn-outline whitespace-nowrap">
            Contact Us →
          </a>
        </section>
      </main>
    </div>
  );
}
