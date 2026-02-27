import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const STEPS = [
  {
    title: "Before Guests Arrive",
    points: [
      "Choose a date and keep the menu simple: vegetables, legumes, grains, olive oil.",
      "Invite 4–8 people and ask them to put phones away before they walk in.",
      "Skim the Host Guide once; it&apos;s a one-page outline you can reference on the counter.",
    ],
  },
  {
    title: "During the Table",
    points: [
      "Welcome guests, light a candle, or share why you&apos;re hosting.",
      "Cook together or finish the final steps as a group to slow the pace.",
      "Serve family-style, sit facing one another, and move through the conversation prompts.",
    ],
  },
  {
    title: "After the Meal",
    points: [
      "Ask for a Table Commitment: who will host within the next 30 days?",
      "Capture a quick photo and the key numbers (guests, city, commitments).",
      "Register your table so it counts toward the national movement.",
    ],
  },
];

const RESOURCES = [
  {
    title: "1-Page Host Guide",
    body: "Clear pacing, time estimates, and conversation prompts that keep the table intentional.",
  },
  {
    title: "Recipes & Shopping Lists",
    body: "Mediterranean-inspired dishes that use pantry staples and seasonal produce.",
  },
  {
    title: "Impact Tracker",
    body: "A simple form to log your gathering so we can report tables, people, and cities nationwide.",
  },
  {
    title: "Gallery Placement",
    body: "Share a photo during registration to help inspire hosts around the country.",
  },
];

export default function HostGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Host Guide</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#2e2a26]">Everything You Need to Lead a Table.</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            L.I.F.E. tables are designed to feel calm, honest, and repeatable. Use this guide to set the tone, keep
            the meal simple, and invite guests to continue the movement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/downloads/LIFE_Host_Guide_BRANDED.pdf"
              className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white transition hover:bg-[#566236]"
            >
              Download the PDF
            </Link>
            <Link
              href="/host"
              className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
            >
              Return to Host Overview
            </Link>
          </div>
        </section>

        <section className="mt-12 grid gap-8 rounded-3xl border border-[#dfd4c6] bg-white p-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.title} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6">
              <h2 className="text-xl font-semibold text-[#2e2a26]">{step.title}</h2>
              <ul className="mt-4 space-y-2 text-[#5b5149]">
                {step.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h2 className="text-3xl font-semibold text-[#2e2a26]">Resources You&apos;ll Receive</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {RESOURCES.map((resource) => (
              <div key={resource.title} className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#2e2a26]">{resource.title}</h3>
                <p className="mt-3 text-[#5b5149]">{resource.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#2e2a26]">Ready to steward the table?</h2>
              <p className="mt-4 text-lg text-[#5b5149]">
                Download the guide, choose a date, and then log your gathering so it&apos;s counted in the national totals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/downloads/LIFE_Host_Guide_BRANDED.pdf"
                className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white transition hover:bg-[#566236]"
              >
                Download Guide
              </Link>
              <Link
                href="/register"
                className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
              >
                Register Your Table
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
