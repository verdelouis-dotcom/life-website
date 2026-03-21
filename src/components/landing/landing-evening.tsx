import Image from "next/image";
import styles from "./landing.module.css";

const steps = [
  {
    title: "Invite",
    body: "Hosts welcome 4–6 people into their home and share a favorite recipe.",
  },
  {
    title: "Cook",
    body: "Everyone helps prep, cook, set the table, and learn the meal together.",
  },
  {
    title: "Eat",
    body: "Conversation stays focused on real life — food, movement, purpose, rest, connection, stress.",
  },
  {
    title: "Pass it on",
    body: "Every guest leaves with the LIFE Guide and a promise to host within 30 days.",
  },
];

const details = [
  "Hosted in private homes in Atlanta, GA & Austin, TX",
  "Any recipe — the host shares what they love to make",
  "Fresh, whole ingredients only",
  "Everyone helps, including cleanup",
  "Every guest leaves with a LIFE Guide",
];

export default function LandingEveningSection() {
  return (
    <section className={`${styles.section} ${styles.evening}`} id="evening">
      <div className={styles.eveningInner}>
        <div>
          <span className={styles.tagline}>A LIFE Evening</span>
          <h2 className={styles.sectionHeading}>This is what hosting looks like.</h2>
          <p className={styles.sectionBody}>It isn&apos;t fancy. It&apos;s dinner at home — with fresh ingredients, practical learning, and a promise to teach someone else.</p>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div className={styles.step} key={step.title}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepBody}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.eveningRight}>
          <div className={`${styles.photoCard} ${styles.tallPhoto}`}>
            <Image
              src="/images/workshops/pasta-lesson-2.jpg"
              alt="Couple rolling fresh pasta dough together"
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className={styles.photoCaption}>Everyone cooks. Everyone learns.</div>
          </div>
          <div className={`${styles.photoCard} ${styles.shortPhoto}`}>
            <Image
              src="/images/workshops/pasta-lesson-6.jpeg"
              alt="Mother and daughter laughing while making pasta"
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className={styles.photoCaption}>No phones. Just people.</div>
          </div>
          <div className={styles.promiseCard}>
            <span className={styles.promiseTag}>The promise</span>
            <p className={styles.promiseText}>
              &ldquo;I&apos;ll invite someone into my home within <span>30 days</span> — cook together, share the guide, and ask them to do the same.&rdquo;
            </p>
          </div>
          <div className={styles.detailList}>
            {details.map((detail) => (
              <div className={styles.detailItem} key={detail}>
                <span className={styles.detailDot} />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
