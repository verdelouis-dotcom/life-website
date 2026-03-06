import Reveal from "@/components/ui/reveal";

const BOARD_MEMBERS = [
  {
    name: "Lou Verde",
    role: "Founder & President",
    bio: "Community nutrition advocate and creator of the LIFE Table model, Lou guides the strategic vision and oversees pilot operations across Metro Atlanta.",
  },
  {
    name: "Dr. Miles Medina",
    role: "Treasurer",
    bio: "Emergency medicine physician and Associate Director at Piedmont Henry Hospital, Dr. Medina stewards clinical rigor, fiscal accountability, and medical partnerships.",
  },
  {
    name: "Bob Fabbio",
    role: "Vice President",
    bio: "Entrepreneur and founder of Norrio Capital Partners, Bob brings decades of venture-building experience to accelerate LIFE's replication and funding strategy.",
  },
  {
    name: "Kara Verde",
    role: "Secretary",
    bio: "Accounting graduate of Rochester Institute of Technology, Kara manages governance records and ensures LIFE's compliance documentation stays audit-ready.",
  },
];

const STATUS_LINES = [
  "LIFE is incorporated in the State of Georgia as a nonprofit organization.",
  "EIN (Employer Identification Number): 41-4525299",
  "501(c)(3) status: Pending final IRS determination.",
  "The initiative is community-funded and operates through volunteer leadership and pro-bono advisors.",
];

const ACCOUNTABILITY = [
  "Quarterly board reviews covering program data, financial reports, and risk assessment.",
  "Expense approvals require dual sign-off from the Treasurer and one additional officer.",
  "Program metrics (tables hosted, participants, replication rate) published via LIFE’s register portal.",
];

export default function SectionBoard() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <Reveal className="space-y-3 text-center">
          <h2 className="section-heading">Board</h2>
          <p className="type-detail">Strategic oversight, fiscal accountability, responsible growth.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {BOARD_MEMBERS.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 80}
              className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/90 p-6 shadow-sm"
            >
              <p className="type-eyebrow">Board of Directors</p>
              <h3 className="mt-2 text-xl font-semibold">{member.name}</h3>
              <p className="type-detail uppercase tracking-[0.3em] text-[var(--olive)]">{member.role}</p>
              <p className="mt-3 type-detail">{member.bio}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[28px] border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm">
            <p className="type-eyebrow">Organizational Status</p>
            <ul className="mt-4 space-y-2 type-detail">
              {STATUS_LINES.map((line) => (
                <li key={line}>• {line}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-[28px] border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm">
            <p className="type-eyebrow">Accountability Practices</p>
            <ul className="mt-4 space-y-2 type-detail">
              {ACCOUNTABILITY.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
