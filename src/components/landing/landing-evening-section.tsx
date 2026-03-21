import Image from "next/image";

const STEPS = [
  {
    title: "The host invites you in",
    body: "Someone you know opens their home and shares a recipe they love. Maybe fresh pasta. Maybe something from their grandmother's kitchen.",
  },
  {
    title: "You cook together",
    body: "The group prepares a meal from scratch using fresh, whole ingredients. Everyone has a role — chopping, rolling, stirring. Even the cleanup is shared.",
  },
  {
    title: "Screens away. People present.",
    body: "No phones at the table. Just cooking, laughing, and actually talking to the people around you.",
  },
  {
    title: "You receive the LIFE Guide",
    body: "Before you leave, the host shares a simple guide filled with habits for better health and deeper connection.",
  },
  {
    title: "You make a promise",
    body: "Within 30 days, you host your own table. The only rule is you pass it on.",
  },
];

const DETAILS = [
  "Hosted in private homes in Atlanta, GA & Austin, TX",
  "Any recipe — the host shares what they love to make",
  "Fresh, whole ingredients only",
  "Everyone helps, including cleanup",
  "Every guest leaves with a LIFE Guide",
];

export function LandingEveningSection() {
  return (
    <section id="evening" className="bg-[var(--cream)] px-6 py-20 md:px-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <span className="stag">A LIFE Evening</span>
          <h2 className="sh">What actually happens at a LIFE table</h2>
          <p className="sb">A host invites a few neighbors, friends, or family into their home. Everyone helps. Everyone eats. Everyone leaves with something worth passing on.</p>
          <div className="mt-8 flex flex-col gap-6">
            {STEPS.map((step, index) => (
              <div key={step.title} className="grid grid-cols-[44px_auto] gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--rule,#e5dccc)] bg-[var(--offwhite)] font-[var(--font-landing-heading)] text-[0.95rem] text-[var(--terra)]">{index + 1}</div>
                <div>
                  <h3 className="mb-1 text-[0.95rem] font-semibold text-[var(--ink)]">{step.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed text-[var(--earth-mid)]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="overflow-hidden rounded-[1.2rem] border border-[var(--rule,#e5dccc)]">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="/images/workshops/pasta-lesson-2.jpg"
                alt="Neighbors rolling fresh pasta together"
                fill
                style={{ objectFit: "cover", objectPosition: "center 35%" }}
              />
            </div>
            <div className="border-t border-[var(--rule,#e5dccc)] bg-[var(--offwhite)] px-4 py-2 text-[0.8rem] italic text-[var(--muted-earth)]">No phones. Just people.</div>
          </div>
          <div className="overflow-hidden rounded-[1.2rem] border border-[var(--rule,#e5dccc)]">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/images/workshops/pasta-lesson-6.jpeg"
                alt="Mother and daughter laughing together while making pasta"
                fill
                style={{ objectFit: "cover", objectPosition: "30% center" }}
              />
            </div>
          </div>
          <div className="rounded-[1.2rem] border border-[var(--rule,#e5dccc)] bg-[var(--offwhite)] p-6">
            <span className="ptag">The promise</span>
            <p className="font-[var(--font-landing-heading)] text-[1.05rem] italic leading-relaxed text-[var(--ink)]">“I&apos;ll invite someone into my home within <span className="text-[var(--terra)]">30 days</span> — cook together, share the guide, and ask them to do the same.”</p>
          </div>
          <div className="rounded-[1.2rem] border border-[var(--rule,#e5dccc)] bg-white p-5">
            <div className="flex flex-col gap-2">
              {DETAILS.map((detail) => (
                <div key={detail} className="flex gap-3 text-[0.85rem] text-[var(--earth-mid)]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
