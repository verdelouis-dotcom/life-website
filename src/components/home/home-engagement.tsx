import Link from "next/link";
import EngagementForm from "@/components/forms/engagement-form";
import Reveal from "@/components/ui/reveal";

export default function HomeEngagement() {
  return (
    <section className="bg-[#fff8ef] py-16 text-[var(--text)] md:py-20">
      <div className="mx-auto max-w-6xl gap-12 px-6 lg:grid lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
        <Reveal className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Stay Involved</p>
          <h2 className="text-3xl font-semibold">Volunteer, receive updates, or request a call.</h2>
          <p className="text-lg text-[var(--muted)]">
            Share your info and we&apos;ll send the latest pilot impact briefs, workshop dates, and ways to serve. A member of the LIFE
            host team will respond within two business days.
          </p>
          <div className="rounded-[24px] border border-[var(--border)] bg-white/80 p-6 text-sm text-[var(--muted)] shadow-sm">
            <p className="font-semibold text-[var(--text)]">Prefer a direct line?</p>
            <p className="mt-2">
              Email{" "}
              <a
                className="font-semibold text-[var(--olive)] underline-offset-4 hover:underline"
                href="mailto:info@longevityinitiativeforfoodandeducation.com"
              >
                info@longevityinitiativeforfoodandeducation.com
              </a>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold text-[var(--olive)] underline-offset-4 hover:underline">
                use the contact page form
              </Link>
              .
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[var(--olive)]">Newsletter + Volunteer List</p>
            <p className="mt-1">We send one concise update each month with measurable progress.</p>
          </div>
        </Reveal>
        <Reveal delay={120} className="rounded-[32px] border border-[var(--border)] bg-white/95 p-8 shadow-lg shadow-black/5">
          <EngagementForm source="Home Page Form" />
        </Reveal>
      </div>
    </section>
  );
}
