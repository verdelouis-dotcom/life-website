"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const WORKSHOP_IMAGES = [
  { src: "/images/workshops/pasta-lesson-1.jpg", alt: "Hands guiding pasta dough through a roller" },
  { src: "/images/workshops/pasta-lesson-2.jpg", alt: "Fresh pasta sheets resting on a counter" },
  { src: "/images/workshops/pasta-lesson-3.jpeg", alt: "Neighbors rolling dough together" },
  { src: "/images/workshops/pasta-lesson-4.jpeg", alt: "Community members mixing ingredients" },
  { src: "/images/workshops/pasta-lesson-5.jpeg", alt: "Finished pasta plated for guests" },
  { src: "/images/workshops/IMG_4252.jpeg", alt: "Workshop guests laughing around the table" },
  { src: "/images/workshops/IMG_6709.jpeg", alt: "Host demonstrating sauce prep" },
  { src: "/images/workshops/IMG_6843.jpeg", alt: "Hands kneading dough during a LIFE table" },
  { src: "/images/workshops/IMG_8060.jpeg", alt: "Neighbors folding pasta sheets" },
  { src: "/images/workshops/IMG_8145.JPG", alt: "Guests plating pasta together" },
];

const FOOD_IMAGES = [
  { src: "/images/Food/octopus.jpeg", alt: "Seafood ingredients staged for cooking" },
  { src: "/images/Food/pasta.jpeg", alt: "Fresh pasta with tomatoes and olive oil" },
  { src: "/images/Food/pasta2.jpeg", alt: "Close-up of handmade pasta nests" },
  { src: "/images/Food/pasta3.jpeg", alt: "Plated pasta topped with herbs" },
  { src: "/images/Food/pasta4.jpeg", alt: "Pasta drying on a rack" },
  { src: "/images/Food/pasta5.jpeg", alt: "Rolling pin over thin pasta sheets" },
  { src: "/images/Food/pasta6.jpeg", alt: "Cut pasta strands ready to cook" },
  { src: "/images/Food/pasta7.jpeg", alt: "Rustic board with pasta dough" },
  { src: "/images/Food/pasta9.png", alt: "Bowls of Mediterranean ingredients" },
  { src: "/images/Food/veggies.jpeg", alt: "Fresh vegetables arranged for chopping" },
  { src: "/images/Food/veggies2.jpeg", alt: "Colorful produce laid out for a meal" },
  { src: "/images/Food/veggies3.jpeg", alt: "Tomatoes and greens ready for prep" },
];

const IMAGES = [...WORKSHOP_IMAGES, ...FOOD_IMAGES];
const INITIAL_COUNT = 4;

export default function SectionLooks() {
  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? IMAGES : IMAGES.slice(0, INITIAL_COUNT);

  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <Reveal className="space-y-3 text-center">
          <h2 className="section-heading">What It Looks Like</h2>
          <p className="type-detail">Images shared with permission from the Metro Atlanta pilot.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {imagesToShow.map((image, index) => (
            <Reveal key={image.src} delay={index * 80} className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover object-center" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            </Reveal>
          ))}
        </div>
        {!showAll && IMAGES.length > INITIAL_COUNT && (
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn-outline"
            >
              View All Photos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
