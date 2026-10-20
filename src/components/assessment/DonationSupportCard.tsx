interface DonationSupportCardProps {
  href?: string;
}

export default function DonationSupportCard({ href = "/donate" }: DonationSupportCardProps) {
  return (
    <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Support LIFE</p>
      <h3 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">Support LIFE</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">
        If this assessment helped you, consider supporting our nonprofit’s longevity education mission.
      </p>
      <a
        href={href}
        className="btn-outline mt-5 px-6 text-sm"
      >
        Support the Movement
      </a>
    </section>
  );
}
