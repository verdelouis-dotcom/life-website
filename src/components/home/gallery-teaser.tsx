import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const GALLERY_IMAGES = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpeg", "gallery-6.jpg"];

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
          {GALLERY_IMAGES.map((image, index) => (
            <Reveal key={image} delay={(index + 1) * 60}>
              <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/images/${image}`}
                    alt={`Community meal moment ${index + 1}`}
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
