import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const OPTIONS = [
  {
    title: "Host a LIFE Table",
    description: "Invite friends or neighbors, cook something simple, and register the gathering so it counts.",
    cta: { label: "Start Hosting", href: "/host" },
    guide: { text: "Hosting is simple and guided.", label: "Download the LIFE Table Guide", href: "/life-table-guide.pdf" },
  },
  {
    title: "Donate Ingredients",
    description: "Underwrite workshops, ingredients, and educational tools so more tables can launch.",
    cta: { label: "Support a Table", href: "/donate" },
  },
  {
    title: "Bring LIFE to Your Group",
    description: "Bring a LIFE workshop or keynote to your organization, faith community, or company.",
    cta: { label: "Bring LIFE to Your Community", href: "/contact" },
  },
];

export default function SectionGetInvolved() {
  return (
    <section id="get-involved" className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-6 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Get Involved</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {OPTIONS.map((option, index) => (
            <Reveal
              key={option.title}
              delay={index * 80}
              className="rounded-[28px] border border-[var(--border)] bg-white p-6 text-left shadow-sm"
            >
              <p className="text-lg font-semibold text-[var(--life-forest)]">{option.title}</p>
              <p className="mt-2 text-sm text-[var(--text)]">{option.description}</p>
              {option.guide && (
                <div className="mt-3 space-y-1 text-xs text-[var(--muted)]">
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
