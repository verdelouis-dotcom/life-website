import Image from "next/image";
import Link from "next/link";

export function LandingCTASection() {
  return (
    <section className="bg-[var(--terra-pale)] px-0 py-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[540px]">
          <Image
            src="/images/workshops/pasta-lesson-7.jpeg"
            alt="Kids kneading pasta dough together"
            fill
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 md:px-16">
          <span className="stag">Get Started</span>
          <h2 className="sh max-w-md">Open your kitchen. Start the ripple.</h2>
          <p className="sb mb-6">It starts with one invitation. One recipe. One evening without phones. And a promise to do it again for someone else.</p>
          <div className="cta-actions flex flex-wrap gap-3">
            <Link href="/host" className="btn-p">
              Host a Table
            </Link>
            <Link href="/life-guide" className="btn-o">
              Read the LIFE Guide
            </Link>
          </div>
          <p className="pilot-note mt-6 text-[0.8rem] text-[var(--muted-earth)]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
            Currently piloting in Atlanta, GA & Austin, TX · 501(c)(3) pending
          </p>
        </div>
      </div>
    </section>
  );
}
