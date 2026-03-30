import Image from "next/image";
import Link from "next/link";
import styles from "./landing.module.css";

export default function LandingCTASection() {
  return (
    <section className={`${styles.section} ${styles.ctaWrap}`}>
      <div className={styles.ctaGrid}>
        <div className={styles.ctaPhoto}>
          <Image
            src="/images/workshops/pasta-lesson-7.jpeg"
            alt="Kids kneading pasta dough at a LIFE cooking experience"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
          />
        </div>
        <div className={styles.ctaContent}>
          <span className={styles.tagline}>Get Started</span>
          <h2 className={styles.sectionHeading}>Open your kitchen.
            <br />
            Start the ripple.
          </h2>
          <p className={styles.sectionBody}>
            It starts with one invitation. One recipe. One evening without phones. And a promise to do it again for someone else.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/host" className={styles.primaryBtn}>
              Host a Table
            </Link>
            <Link href="/life-guide" className={styles.outlineBtn}>
              Read the LIFE Guide
            </Link>
          </div>
          <p className={styles.pilotNote}>
            <span className={styles.pilotDot} />Currently piloting in Atlanta, GA & Austin, TX · 501(c)(3) pending
          </p>
        </div>
      </div>
    </section>
  );
}
