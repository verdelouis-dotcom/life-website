import Image from "next/image";
import type { Metadata } from "next";
import PastaClassForm from "@/components/forms/pasta-class-form";

export const metadata: Metadata = {
  title: "Fresh Pasta Cooking Class",
  description:
    "Roll, knead, and shape fresh pasta by hand with Lou and Kara Verde in Atlanta. Enjoy a three-course meal while supporting the LIFE nonprofit.",
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
  { label: "Duration", value: "2 hours" },
  { label: "Location", value: "Host house — Atlanta, GA area" },
  { label: "Group size", value: "2–6 guests" },
  { label: "Price", value: "$75 per person" },
  { label: "Included", value: "One glass of wine" },
  { label: "Impact", value: "100% of proceeds donated to LIFE" },
];

export default function FreshPastaClassPage() {
  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-24 pt-32">
        <section className="grid gap-8 rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm md:grid-cols-2">
          <div className="space-y-5">
            <p className="type-eyebrow text-[var(--olive)]">Fresh Pasta Cooking Class</p>
            <h1 className="text-4xl font-serif leading-tight md:text-5xl">Fresh Pasta Cooking Class</h1>
            <p className="text-lg text-[var(--muted)]">An authentic taste of Italy — in someone&apos;s home, the way it was meant to be.</p>
            <p className="text-base leading-relaxed text-[var(--text)]">
              Roll, knead, and shape fresh pasta by hand. Create a classic tiramisu. Sit down and eat what you made together. Every class is hosted by Lou
              and Kara Verde in their Atlanta home. <strong>100% of proceeds support LIFE — the Longevity Initiative for Food &amp; Education.</strong>
            </p>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-[28px]">
            <Image src="/images/workshops/pasta-lesson-7.jpeg" alt="Guests shaping fresh pasta" fill className="object-cover" />
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-[var(--border)] bg-white/90 p-10 md:grid-cols-2">
          <div>
            <p className="type-eyebrow text-[var(--olive)]">What You&apos;ll Do</p>
            <ul className="mt-4 space-y-3 text-[var(--text)]">
              {WHAT_YOU_DO.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[2px] inline-flex h-2 w-2 rounded-full bg-[var(--olive)]" aria-hidden />
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

        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-serif text-[var(--ink)]">Corporate &amp; Team Building</h2>
              <p className="mt-2 text-[var(--text)]">Corporate experiences and team-building activities available upon request.</p>
            </div>
            <a href="mailto:info@longevityinitiativeforfoodandeducation.com" className="btn-outline whitespace-nowrap">
              Contact us to learn more
            </a>
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-[var(--border)] bg-white/95 p-10 shadow-sm md:grid-cols-2">
          <div>
            <p className="type-eyebrow text-[var(--olive)]">Book Your Spot</p>
            <h2 className="text-3xl font-serif text-[var(--ink)]">Reserve your class</h2>
            <p className="mt-3 text-[var(--text)]">Fill out the inquiry form and Lou &amp; Kara will reply with available dates.</p>
          </div>
          <PastaClassForm />
        </section>
      </main>
    </div>
  );
}
