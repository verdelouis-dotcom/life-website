import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const pillars = [
  { name: "FOOD", activation: "We replace ultra-processed products with real, whole ingredients." },
  { name: "MOVEMENT", activation: 'We engage in "active preparation"—cooking as a social, physical act.' },
  { name: "CONNECTION", activation: "We create a focused, screen-free environment for deep exchange." },
  { name: "COMMUNITY", activation: 'We move from "individuals eating" to a "collective belonging."' },
  { name: "PURPOSE", activation: 'We define our "why" and commit to spreading this practice to others.' },
  { name: "STRESS", activation: "We use the slow ritual of the meal to down-regulate the nervous system." },
];

const sequence = [
  {
    title: "I. THE RESET — Pillars: Stress & Connection",
    steps: [
      {
        label: "The Threshold",
        text: "Have everyone put their phones away and ensure the TV is off. The goal is to clear the digital noise so the table can take center stage.",
      },
      {
        label: "The Opening",
        text: 'Keep it light: "Tonight is about slowing down, having some fun, and practicing a new tradition together."',
      },
    ],
  },
  {
    title: "II. THE LABOR — Pillars: Food & Movement",
    steps: [
      { label: "Co-Creation", text: "Everyone gets a job. Put people to work chopping, stirring, or prepping." },
      {
        label: "The Food",
        text: "We use real, whole ingredients. We skip the ultra-processed stuff and focus on the flavor of real food.",
      },
    ],
  },
  {
    title: "III. THE NOURISHMENT — Pillars: Community & Stress",
    steps: [
      { label: "Presence", text: "Sit facing one another. Eat slowly." },
      {
        label: "The Vibe",
        text: 'This is the time to relax and enjoy the meal. Let the conversation flow naturally—the environment is the "medicine."',
      },
    ],
  },
  {
    title: "IV. THE LEGACY — Pillars: Purpose & Community",
    steps: [
      {
        label: "Ask the Table",
        text: [
          "The Origin: Did you grow up with a protected table, or was it a \"system\" you had to build yourself?",
          "The Impact: What is the biggest barrier in your life to eating real food and connecting daily?",
          "The Pivot: If you protected just one shared meal a week, how would your life change?",
        ],
      },
    ],
  },
];

export default function LifeHostGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">THE L.I.F.E. TABLE PROTOCOL</p>
          <h1 className="mt-4 text-4xl font-semibold">The Host’s Guide to Restoring the Human System</h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-2xl bg-[#6b7a46] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#556236]"
            >
              Register Your Table
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-xl font-semibold uppercase tracking-[0.35em] text-[#6b7a46]">The Mandate</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5b5149]">
            You are not hosting a dinner; you are rebuilding a foundation. By inviting people to your table, you are actively combating the
            modern crises of isolation and ultra-processed living. Your role is to provide the environment; the pillars will do the work.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">The Six Pillars in Practice</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2e2a26]">Pillar Activations</h2>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#dfd4c6]">
            <table className="w-full border-collapse text-left text-[#2e2a26]">
              <thead className="bg-[#ede2d1] text-sm uppercase tracking-[0.2em] text-[#5b5149]">
                <tr>
                  <th className="px-4 py-3">Pillar</th>
                  <th className="px-4 py-3">How it is activated tonight</th>
                </tr>
              </thead>
              <tbody>
                {pillars.map((pillar) => (
                  <tr key={pillar.name} className="border-t border-[#e9decf]">
                    <td className="px-4 py-4 font-semibold">{pillar.name}</td>
                    <td className="px-4 py-4 text-[#5b5149]">{pillar.activation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 space-y-8">
          {sequence.map((phase) => (
            <div key={phase.title} className="rounded-3xl border border-[#dfd4c6] bg-white p-8">
              <h3 className="text-2xl font-semibold uppercase tracking-wide text-[#2e2a26]">{phase.title}</h3>
              <div className="mt-5 space-y-4">
                {phase.steps.map((step) => (
                  <div key={step.label}>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7a46]">{step.label}</p>
                    {Array.isArray(step.text) ? (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-[#5b5149]">
                        {step.text.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-lg text-[#5b5149]">{step.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h3 className="text-xl font-semibold uppercase tracking-[0.35em] text-[#6b7a46]">THE MULTIPLIER (The Agreement)</h3>
          <p className="mt-4 text-lg leading-relaxed text-[#5b5149]">
            Before the night ends, finalize the next step. Every guest at this table is part of the mission.
          </p>
          <blockquote className="mt-6 rounded-2xl border border-[#dfd4c6] bg-white/60 p-6 text-lg italic text-[#2e2a26]">
            “To keep this momentum going, the agreement is that everyone here hosts their own table within the next 30 days. Who’s next?”
          </blockquote>
          <div className="mt-6 rounded-2xl border border-[#dfd4c6] bg-white p-6">
            <h4 className="text-lg font-semibold text-[#2e2a26]">Record the Growth</h4>
            <p className="mt-3 text-[#5b5149]">
              Visit longevityinitiativeforfoodandeducation.com to log your table’s data and help us track the national growth of this
              movement.
            </p>
            <Link href="/register" className="mt-4 inline-flex text-sm font-semibold text-[#6b7a46] underline-offset-4 hover:underline">
              Register Your Table
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6b7a46]">Keep It Simple</p>
          <p className="mt-3 text-2xl font-semibold text-[#2e2a26]">A Table. Real Food. People. Intention.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
