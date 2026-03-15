import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const HOST_PRIMARY_LINK = "mailto:info@longevityinitiativeforfoodandeducation.com?subject=Host%20a%20LIFE%20Workshop";
const HOST_GUIDE_LINK = "/host-guide.pdf";
const REGISTER_LINK = "/register";
const CONTACT_EMAIL = "mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Support";

const HOST_STEPS = [
  "Invite friends, neighbors, or family once you have attended a LIFE workshop.",
  "Prepare a meal together using fresh ingredients and the LIFE host guide.",
  "Share the six LIFE pillars and longevity principles in your own words.",
  "Register the workshop afterward so participation can be measured.",
];

export default function HostPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6] py-20">
          <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
            <p className="type-eyebrow">Host</p>
            <h1 className="type-display">Share What You Learned</h1>
            <p className="type-lede text-[var(--muted)]">
              After attending a LIFE workshop, participants are invited to host one of their own. Hosting keeps the movement simple: invite
              people you care about, cook with fresh ingredients, teach the six pillars, and register the gathering afterward. Hosts can cook
              any cuisine they know well—Italian, Japanese, Mexican, or others—as long as the meal emphasizes fresh ingredients and shared
              preparation.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-3xl space-y-8 rounded-[36px] border border-[var(--border)] bg-white p-10 shadow-sm">
            <div className="space-y-2 text-center">
              <h2 className="section-heading text-xl">How Hosting Works</h2>
              <p className="type-detail uppercase tracking-[0.3em] text-[var(--olive)]">Attend → Host → Register</p>
            </div>
            <ul className="space-y-4 text-left type-body-muted">
              {HOST_STEPS.map((step) => (
                <li key={step} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4">
                  {step}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={HOST_PRIMARY_LINK}
                className="btn-solid px-8 text-base"
              >
                Host a Workshop
              </a>
              <a
                href={HOST_GUIDE_LINK}
                className="btn-outline px-8 text-base"
              >
                Download Host Guide
              </a>
              <a
                href={REGISTER_LINK}
                className="btn-outline px-8 text-base"
              >
                Register Workshop
              </a>
            </div>
            <p className="type-detail text-center">
              Need support?{" "}
              <a href={CONTACT_EMAIL} className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
                Email the LIFE team
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
