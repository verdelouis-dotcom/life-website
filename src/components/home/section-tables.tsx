"use client";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const WORKSHOP_IMAGES = [
  { src: "/images/workshops/pasta-lesson-1.jpg", alt: "Hands guiding pasta dough through a roller" },
  { src: "/images/workshops/IMG_6709.jpeg", alt: "Host demonstrating sauce prep" },
  { src: "/images/workshops/IMG_8145.JPG", alt: "Guests plating pasta together" },
];

export default function SectionTables() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6">
        <Reveal className="space-y-3 text-center">
          <h2 className="section-heading">Table Snapshots</h2>
          <p className="type-detail">A quick look at LIFE workshops. See more in the gallery.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {WORKSHOP_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={index * 80} className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover object-center" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center">
          <a href="/gallery" className="btn-outline px-6">
            View the Gallery
          </a>
        </Reveal>
      </div>
    </section>
  );
}
