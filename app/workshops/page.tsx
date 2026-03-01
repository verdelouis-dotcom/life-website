import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import EngagementForm from "@/components/forms/engagement-form";
import Reveal from "@/components/ui/reveal";
import IconSharedMeals from "@/components/icons/icon-shared-meals";
import IconRealFood from "@/components/icons/icon-real-food";
import IconCommunity from "@/components/icons/icon-community";
import IconEducation from "@/components/icons/icon-education";

const PROGRAMS = [
  {
    title: "Community Cooking Workshops",
    description:
      "Hands-on intensives (up to 12 people) combining knife skills, sourcing guidance, and education on food-as-culture.",
    highlights: ["Three-hour format", "Sliding-scale contributions", "Built-in reflection circle"],
    Icon: IconSharedMeals,
  },
  {
    title: "Real Food Playbooks",
    description:
      "Applied nutrition education that helps teams design repeatable menus, prep systems, and pantry plans.",
    highlights: ["Customized curriculum", "Actionable take-home guide", "Nutrition + budgeting focus"],
    Icon: IconRealFood,
  },
  {
    title: "Belonging Presentations",
    description: "Keynotes and dialogues that reframe shared meals as public health infrastructure.",
    highlights: ["30-60 minute sessions", "Audience participation", "Ideal for civic, workplace, and healthcare partners"],
    Icon: IconCommunity,
  },
];

// TODO: Replace placeholder imagery with final photography (workshop.jpg).

export default function WorkshopsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="relative isolate overflow-hidden text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/workshop.jpg)" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#0b120d]/70" aria-hidden="true" />
          <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-28">
            <Reveal className="text-xs uppercase tracking-[0.35em] text-white/70">Educational programming</Reveal>
            <Reveal>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">Workshops &amp; Presentations</h1>
            </Reveal>
            <Reveal className="text-lg text-white/90">
              Evidence-informed experiences that translate food literacy into tables, classrooms, and conference rooms.
            </Reveal>
            <Reveal className="flex flex-wrap gap-4">
              <a
                href="#engagement-form"
                className="inline-flex items-center justify-center rounded-2xl bg-white/90 px-6 py-3 text-base font-semibold text-[#1f2a22] shadow-lg transition hover:bg-white"
              >
                Request a Workshop
              </a>
              <a
                href="#engagement-form"
                className="inline-flex items-center justify-center rounded-2xl border border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Request a Presentation
              </a>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
              <Reveal className="space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Approach</p>
                <h2 className="text-3xl font-semibold text-[var(--text)]">Rooted in science. Designed for kitchens.</h2>
                <p className="text-lg text-[var(--muted)]">
                  We pair nutrition science with group facilitation so people leave confident, not overwhelmed. Programming
                  is tailored for nonprofits, employers, schools, and healthcare partners.
                </p>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--olive)]">Suggested support</p>
                  <p className="mt-2 text-base text-[var(--text)]">
                    Community cooking workshops: $50 per participant | Presentations: $500 | Half-day intensive: $1,000.
                    Contributions sustain our nonprofit mission and may include non-deductible portions when meals are served.
                  </p>
                </div>
              </Reveal>
              <Reveal className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/90 p-8 shadow-lg">
                <div className="flex items-center gap-3 text-[var(--terracotta)]">
                  <IconEducation className="h-9 w-9" />
                  <span className="text-xs uppercase tracking-[0.35em]">Program deliverables</span>
                </div>
                <ul className="mt-6 space-y-3 text-[var(--text)]">
                  <li>• Menu frameworks &amp; shopping lists</li>
                  <li>• Facilitation &amp; conversation prompts</li>
                  <li>• Follow-up accountability plan</li>
                  <li>• Impact recap designed for your stakeholders</li>
                </ul>
                <a
                  href="#engagement-form"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-white transition hover:bg-[#394930]"
                >
                  Share your goals
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[#fff8ef] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Programming menu</p>
              <h2 className="text-3xl font-semibold text-[var(--text)]">Choose the format that fits your people.</h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {PROGRAMS.map((program, index) => (
                <Reveal
                  key={program.title}
                  delay={index * 120}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm"
                >
                  <program.Icon className="h-10 w-10 text-[var(--terracotta)]" />
                  <h3 className="text-2xl font-semibold text-[var(--text)]">{program.title}</h3>
                  <p className="text-base text-[var(--muted)]">{program.description}</p>
                  <ul className="mt-2 space-y-1 text-sm text-[var(--text)]">
                    {program.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <a
                      href="#engagement-form"
                      className="inline-flex items-center justify-center rounded-2xl border border-[var(--terracotta)] px-4 py-2 text-sm font-semibold text-[var(--terracotta)] transition hover:bg-[#fbe8df]"
                    >
                      Start this program
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="engagement-form" className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="space-y-3 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Request programming</p>
              <h2 className="text-3xl font-semibold text-[var(--text)]">Let&rsquo;s co-design your experience.</h2>
              <p className="text-base text-[var(--muted)]">
                Share a few details and we&rsquo;ll follow up with scheduling, contributions, and customization options.
              </p>
            </Reveal>
            <div className="mt-8 rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/80 p-8">
              <EngagementForm source="Workshops Page" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
