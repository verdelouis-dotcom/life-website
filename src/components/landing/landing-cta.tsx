import Image from "next/image";
import styles from "./landing.module.css";

const HOST_URL = "https://www.longevityinitiativeforfoodandeducation.com/host";
const GUIDE_URL = "https://www.longevityinitiativeforfoodandeducation.com/life-guide";

export default function LandingCTASection() {
  return (
    <section className={`${styles.section} ${styles.ctaWrap}`}>
      <div className={styles.ctaGrid}>
        <div className={styles.ctaPhoto}>
          <Image
            src="/images/workshops/pasta-lesson-7.jpeg"
            alt="Kids kneading pasta dough at a LIFE workshop"
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
            <a href={HOST_URL} className={styles.primaryBtn}>
              Host a Table
            </a>
            <a href={GUIDE_URL} className={styles.outlineBtn}>
              Read the LIFE Guide
            </a>
          </div>
          <p className={styles.pilotNote}>
            <span className={styles.pilotDot} />Currently piloting in Metro Atlanta · 501(c)(3) pending
          </p>
        </div>
      </div>
    </section>
  );
}
