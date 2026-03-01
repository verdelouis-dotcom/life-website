import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";

// TODO: Replace placeholder imagery with final photography (workshop.jpg).

export default function WorkshopsCard() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-lg lg:flex">
          <div className="relative h-72 flex-1 lg:h-auto">
            <Image src="/images/workshop.jpg" alt="Hands-on workshop preparing food" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" aria-hidden="true" />
          </div>
          <div className="flex flex-1 flex-col gap-5 p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--terracotta)]">Workshops</p>
            <h2 className="text-3xl font-semibold text-[var(--text)]">Evidence meets apron-on moments.</h2>
            <p className="text-base text-[var(--muted)]">
              Nonprofit educational programming that translates nutrition science into tangible rituals inside community kitchens,
              workplaces, and civic groups.
            </p>
            <ul className="space-y-2 text-sm text-[var(--text)]">
              <li>• Community cooking intensives (3 hours)</li>
              <li>• High-engagement demonstrations (60 minutes)</li>
              <li>• Facilitator training for partner organizations</li>
            </ul>
            <div className="pt-2">
              <Link
                href="/workshops#engagement-form"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-white shadow-sm transition hover:bg-[#394930]"
              >
                Request programming
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
