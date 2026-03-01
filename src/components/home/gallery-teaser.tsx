import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const GALLERY_ITEMS = Array.from({ length: 6 }, (_, index) => index + 1);

// TODO: Replace placeholder imagery with final photography (gallery-1.jpg … gallery-6.jpg).

export default function GalleryTeaser() {
  return (
    <section className="bg-[#fff8ef] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Gallery</p>
          <h2 className="text-3xl font-semibold text-[var(--text)]">Community participation.</h2>
          <p className="text-lg text-[var(--muted)]">Shared with permission. Each gallery highlight represents measurable program reach.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <Reveal key={item} delay={item * 60}>
              <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/images/gallery-${item}.jpg`}
                    alt={`Community meal moment ${item}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
