import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PageShell from "@/components/page-shell";
import TopicGrid from "@/components/topic-grid";

const CARD = "rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/90 p-8 shadow-sm";
const TEXT = "mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-16 text-[var(--text)]">
        <div className="space-y-16">
          <section className="pt-0">
            <PageShell>
              <div className={CARD}>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Declaration</p>
                <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Longevity Starts at the Table</h1>
                <div className={TEXT}>
                  <p>We are the first generation equipped with the knowledge to live longer — but the habits to live shorter.</p>
                  <p>Chronic disease is rising.<br />Life expectancy is declining.</p>
                  <p>This is not a failure of medicine.<br />It is a failure of environment.</p>
                  <p>L.I.F.E. exists to rebuild the daily structures that shape health — how we eat, gather, move, and connect.</p>
                </div>
              </div>
            </PageShell>
          </section>

          <section>
            <PageShell>
              <TopicGrid
                items={[
                  {
                    title: "Our Environment Changed",
                    href: "/why-this-matters",
                    description: "In one generation, daily life shifted:",
                  },
                  {
                    title: "The Monthly Table Model",
                    href: "/what-we-do",
                    description: "Once a month, we host.",
                  },
                  {
                    title: "Year One Pilot — Metro Atlanta",
                    href: "/what-we-do#pilot",
                    description: "L.I.F.E. begins locally.",
                  },
                  {
                    title: "Host a Table.",
                    href: "/host",
                    description: "A simple shared meal can restore connection—and multiply impact beyond a single event.",
                  },
                  {
                    title: "Support the Movement",
                    href: "/support",
                    description: "This work is community-funded.",
                  },
                  {
                    title: "Get Involved",
                    href: "/contact#get-involved",
                    description: "Rebuild the rhythm locally. Tell us how you’d like to engage and we’ll follow up directly.",
                  },
                ]}
              />
            </PageShell>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
