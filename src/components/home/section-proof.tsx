import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const PROOF_IMAGES = [
  { src: "/images/workshops/pasta-lesson-1.jpg", alt: "Hands guiding pasta dough through a roller" },
  { src: "/images/workshops/pasta-lesson-3.jpeg", alt: "Hosts shaping fresh pasta together" },
  { src: "/images/workshops/pasta-lesson-4.jpeg", alt: "Table leader guiding guests through the meal" },
];

export default function SectionProof() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <Reveal className="space-y-3 text-center">
          <p className="label-text">Proof</p>
          <h2 className="heading-lg">This is a LIFE table</h2>
          <p className="body-md text-[var(--muted)]">Scenes shared with permission from current hosts.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {PROOF_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={index * 80} className="overflow-hidden rounded-[28px] border border-[var(--border)] shadow-sm">
              <div className="relative aspect-square w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="rounded-[36px] border border-[var(--border)] bg-[#fff8ef] card-padding text-center shadow-sm">
          <p className="label-text">Accountability</p>
          <p className="mt-3 body-md text-[var(--text)]">LIFE registers every table, reviews it with the board, and publishes pilot data.</p>
          <p className="mt-2 body-sm text-[var(--muted)]">Incorporated nonprofit • EIN 41-4525299 • 501(c)(3) pending</p>
          <Link href="/about" className="mt-4 inline-flex justify-center text-sm text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
            Meet the leadership team
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
