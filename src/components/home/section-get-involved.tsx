import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const OPTIONS = [
  {
    title: "Host a LIFE Workshop",
    description: "Invite friends or neighbors, cook something simple, and register the gathering so it counts.",
    cta: { label: "Host a LIFE Workshop", href: "/host" },
    guide: { text: "Hosting is simple and guided.", label: "Download the LIFE Workshop Guide", href: "/life-workshop-guide.pdf" },
  },
  {
    title: "Support the Movement",
    description: "Underwrite LIFE workshops, ingredients, and educational tools so more LIFE workshops can launch.",
    cta: { label: "Support Us", href: "/donate" },
  },
  {
    title: "Bring LIFE to Your Group",
    description: "Bring a LIFE workshop or keynote to your organization, faith community, or company.",
    cta: { label: "Request a Keynote", href: "/contact" },
  },
];

export default function SectionGetInvolved() {
  return (
    <section id="get-involved" className="section-spacing bg-[#fff8ef] text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-6 px-6 text-center">
        <Reveal>
          <h2 className="heading-lg">Get Involved</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {OPTIONS.map((option, index) => (
            <Reveal
              key={option.title}
              delay={index * 80}
              className="rounded-[28px] border border-[var(--border)] bg-white card-padding text-left shadow-sm"
            >
              <p className="heading-md text-[var(--life-forest)]">{option.title}</p>
              <p className="mt-2 body-sm text-[var(--text)]">{option.description}</p>
              {option.guide && (
                <div className="mt-3 space-y-1 body-sm text-[var(--muted)]">
                  <p>{option.guide.text}</p>
                  <a href={option.guide.href} className="text-[var(--terracotta)] underline decoration-[rgba(182,106,74,0.4)] underline-offset-4">
                    {option.guide.label}
                  </a>
                </div>
              )}
              <Link href={option.cta.href} className="btn-outline mt-4 inline-flex px-5 text-sm">
                {option.cta.label}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
