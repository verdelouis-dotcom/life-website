import Link from "next/link";

const CTA_LINK = "mailto:info@longevityinitiativeforfoodandeducation.com?subject=Become%20a%20LIFE%20Host";

const WHAT_HOSTS_DO = [
  "Invite neighbors into their homes for one hosted cooking table each month.",
  "Teach the six L.I.F.E. pillars through Mediterranean cooking, conversation, and repetition.",
  "Register every table so impact is tracked across people, tables, and cities.",
];

const HOST_SUPPORT = [
  "Evidence-informed curriculum covering longevity fundamentals and Mediterranean cooking techniques.",
  "Digital and physical toolkits: menus, shopping lists, facilitation prompts, measurement templates.",
  "Quarterly cohort calls plus on-demand guidance from the L.I.F.E. leadership team.",
];

const IDEAL_HOSTS = [
  "Live in or near Metro Atlanta during the pilot phase.",
  "Believe in restoring shared meals as a cultural routine.",
  "Comfortable inviting small groups into their home kitchens and learning alongside guests.",
  "Committed to registering each table and sharing feedback to refine the model.",
];

const HOW_TO_BEGIN = [
  "Reach out via the form below to share your interest and location.",
  "Complete an onboarding conversation covering expectations, metrics, and support needs.",
  "Attend a virtual host training session and receive the starter toolkit.",
  "Schedule your first table within 30 days of training.",
];

export default function HostPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6] py-20">
        <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Become a Host</p>
          <h1 className="text-4xl font-semibold text-[var(--life-forest)] sm:text-5xl">Lead A L.I.F.E. Table</h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Hosts restore the table as a cultural structure. Each host leads one cooking table per month, equips a guest to host next, and logs
            every gathering for measurable reporting. The pilot begins in Metro Atlanta with a model built for national replication.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CTA_LINK}
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#394930]"
            >
              Become a Host
            </a>
          </div>
        </div>
      </section>

      <SectionBlock title="What Hosts Do" description="A simple monthly cycle that creates exponential impact.">
        <ul className="space-y-3 text-[var(--muted)]">
          {WHAT_HOSTS_DO.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="Host Support" description="L.I.F.E. equips every host with proven tools and real-time guidance.">
        <ul className="space-y-3 text-[var(--muted)]">
          {HOST_SUPPORT.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="Ideal Hosts" description="We’re looking for neighbors ready to steward longevity habits at home.">
        <ul className="space-y-3 text-[var(--muted)]">
          {IDEAL_HOSTS.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="How to Begin" description="Four steps to join the pilot host cohort.">
        <ol className="space-y-3 text-[var(--muted)]">
          {HOW_TO_BEGIN.map((item, index) => (
            <li key={item}>
              <span className="font-semibold text-[var(--olive)]">Step {index + 1}.</span> {item}
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <a
            href={CTA_LINK}
            className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-8 py-3 text-base font-semibold text-[var(--olive)] transition hover:bg-white"
          >
            Become a Host
          </a>
        </div>
      </SectionBlock>
    </main>
  );
}

function SectionBlock({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
        <h2 className="section-heading text-center text-[var(--text)]">{title}</h2>
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--olive)]">{description}</p>
        <div className="text-left text-base leading-relaxed">{children}</div>
      </div>
    </section>
  );
}
