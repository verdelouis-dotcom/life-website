import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const IMAGES = [
  {
    src: "/images/workshops/pasta-lesson-1.jpg",
    alt: "Hands guiding pasta dough through a machine",
    caption: "Hands-on pasta lesson",
  },
  {
    src: "/images/workshops/pasta-lesson-2.jpg",
    alt: "Fresh pasta sheets resting on a kitchen counter",
    caption: "Fresh ingredients together",
  },
  {
    src: "/images/workshops/pasta-lesson-3.jpeg",
    alt: "Neighbors rolling dough side-by-side",
    caption: "Neighbors cooking",
  },
  {
    src: "/images/workshops/pasta-lesson-4.jpeg",
    alt: "Community members sharing a laugh over mixing bowls",
    caption: "Real conversation",
  },
  {
    src: "/images/workshops/pasta-lesson-5.jpeg",
    alt: "Finished pasta plated for guests",
    caption: "Shared meal moment",
  },
];

export default function SectionLooks() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <Reveal className="text-center space-y-3">
          <h2 className="section-heading">What It Looks Like</h2>
          <p className="text-sm text-[var(--muted)]">Images shared with permission from the Metro Atlanta pilot.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={index * 80} className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-sm">
              <div className="relative h-64 w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <p className="px-5 py-4 text-sm text-[var(--muted)]">{image.caption}</p>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-6 py-3 text-sm font-semibold text-[var(--olive)] transition hover:bg-white"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
