import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const WORKSHOP_IMAGES = [
  {
    src: "/images/workshops/pasta-lesson-1.jpg",
    alt: "Hands-on pasta lesson around a shared table",
    caption: "Hosted cooking table — Metro Atlanta",
  },
  {
    src: "/images/workshops/pasta-lesson-2.jpg",
    alt: "Fresh ingredients prepared together",
    caption: "Real ingredients, real conversation",
  },
  {
    src: "/images/gallery-5.jpeg",
    alt: "Neighbors assembling Mediterranean dishes",
    caption: "Guests learn by doing",
  },
];

export default function SectionWorkshops() {
  return (
    <section className="bg-[#f8f4ec] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Hosted Cooking Tables</p>
          <h2 className="mt-3 text-3xl font-semibold">What It Looks Like</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">Images shared with permission from the Metro Atlanta pilot.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {WORKSHOP_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={index * 90} className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-sm">
              <div className="relative h-64 w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <p className="px-4 py-3 text-sm text-[var(--muted)]">{image.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
