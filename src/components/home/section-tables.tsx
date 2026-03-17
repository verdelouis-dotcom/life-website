"use client";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const EXPERIENCE_IMAGES = [
  { src: "/images/workshops/pasta-lesson-1.jpg", alt: "Hands guiding pasta dough through a roller" },
  { src: "/images/workshops/IMG_6709.jpeg", alt: "Host demonstrating sauce prep" },
  { src: "/images/workshops/IMG_8145.JPG", alt: "Guests plating pasta together" },
];

export default function SectionTables() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="space-y-3">
          <h2 className="section-heading">Experience LIFE Tables</h2>
          <p className="type-detail">Images shared with permission from LIFE hosts.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {EXPERIENCE_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={index * 80} className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover object-center" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="space-y-2">
            <a href="/host" className="btn-solid px-8 text-base">
              Host a LIFE Table
            </a>
            <p className="text-sm text-[var(--muted)]">Most hosts start with friends or family.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
