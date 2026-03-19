"use client";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const EXPERIENCE_IMAGES = [
  { src: "/images/workshops/pasta-lesson-1.jpg", alt: "Hands guiding pasta dough through a roller" },
  { src: "/images/workshops/pasta-lesson-3.jpeg", alt: "Hosts shaping fresh pasta" },
  { src: "/images/workshops/pasta-lesson-4.jpeg", alt: "LIFE workshop leader coaching guests" },
];

export default function SectionLifeInAction() {
  return (
    <section className="bg-[#fff8ef] text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 py-24 text-center md:py-32">
        <Reveal className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Life in Action</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">Real people. Real workshops. Real connection.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {EXPERIENCE_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={index * 80} className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover object-center" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-sm text-[var(--muted)]">Images shared with permission from LIFE hosts.</p>
        </Reveal>
      </div>
    </section>
  );
}
