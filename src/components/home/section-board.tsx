import Reveal from "@/components/ui/reveal";

const BOARD_MEMBERS = [
  {
    name: "Lou Verde",
    role: "Founder & President",
    bio: "Community nutrition advocate and creator of the LIFE Longevity Assessment, Lou guides the organization’s strategic vision and supports early hosts as the model grows.",
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
  "Program metrics (LIFE gatherings hosted, participants, replication rate) published via LIFE’s register portal.",
];

export default function SectionBoard() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <Reveal className="space-y-3 text-center">
          <h2 className="heading-lg">Board</h2>
          <p className="body-sm">Strategic oversight, fiscal accountability, responsible growth.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {BOARD_MEMBERS.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 80}
              className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/90 card-padding shadow-sm"
            >
              <p className="label-text">Board of Directors</p>
              <h3 className="heading-md mt-2 text-2xl">{member.name}</h3>
              <p className="label-text text-[var(--olive)]">{member.role}</p>
              <p className="mt-3 body-sm">{member.bio}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[28px] border border-[var(--border)] bg-[#fff8ef] card-padding shadow-sm">
            <p className="label-text">Organizational Status</p>
            <ul className="mt-4 space-y-2 body-sm">
              {STATUS_LINES.map((line) => (
                <li key={line}>• {line}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-[28px] border border-[var(--border)] bg-[#fff8ef] card-padding shadow-sm">
            <p className="label-text">Accountability Practices</p>
            <ul className="mt-4 space-y-2 body-sm">
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
