"use client";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const EXPERIENCE_IMAGES = [
  { src: "/images/workshops/pasta-lesson-1.jpg", alt: "Hands guiding pasta dough through a roller" },
  { src: "/images/workshops/pasta-lesson-3.jpeg", alt: "Hosts shaping fresh pasta" },
  { src: "/images/workshops/pasta-lesson-4.jpeg", alt: "LIFE gathering host coaching guests" },
];

export default function SectionLifeInAction() {
  return (
    <section className="bg-[#fff8ef] text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 py-24 text-center md:py-32">
        <Reveal className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-700 md:text-base">Proof</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">LIFE in Action</h2>
          <div className="space-y-2 text-lg leading-relaxed text-neutral-800">
            <p>Families are cooking together again. Neighbors are meeting for the first time. Traditions are being shared across generations.</p>
            <p>LIFE is designed to be simple, practical, and repeatable—so what happens at one table can continue at the next.</p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-12">
          <Reveal delay={0} className="md:col-span-7">
            <div className="relative h-[320px] overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-lg">
              <Image src={EXPERIENCE_IMAGES[0].src} alt={EXPERIENCE_IMAGES[0].alt} fill className="object-cover" sizes="(min-width: 768px) 55vw, 100vw" />
            </div>
          </Reveal>
          <div className="md:col-span-5 space-y-6">
            {EXPERIENCE_IMAGES.slice(1).map((image, idx) => (
              <Reveal key={image.src} delay={(idx + 1) * 80}>
                <div className="relative h-[150px] overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-lg">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <p className="text-sm text-[var(--muted)]">Images shared with permission from LIFE hosts.</p>
        </Reveal>
      </div>
    </section>
  );
}
