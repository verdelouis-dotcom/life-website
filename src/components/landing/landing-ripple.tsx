import styles from "./landing.module.css";

const rippleDetails = [
  "Each table of 4–6 guests creates 4–6 potential new tables",
  "The 30-day promise keeps the momentum alive",
  "Currently piloting across Metro Atlanta communities",
  "LIFE is a 501(c)(3) nonprofit — pending",
];

export default function LandingRippleSection() {
  return (
    <section className={`${styles.section} ${styles.rippleSection}`} id="ripple">
      <div className={styles.rippleInner}>
        <div className={styles.rippleVisual}>
          <div className={`${styles.ring} ${styles.ringOne}`} />
          <div className={`${styles.ring} ${styles.ringTwo}`} />
          <div className={`${styles.ring} ${styles.ringThree}`} />
          <div className={styles.rippleCenter}>
            one
            <br />
            table
          </div>
          <div className={styles.rippleNode} style={{ top: 28, left: "50%", transform: "translateX(-50%)" }}>
            next
            <br />
            host
          </div>
          <div className={styles.rippleNode} style={{ bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
            next
            <br />
            host
          </div>
          <div className={styles.rippleNode} style={{ left: 16, top: "50%", transform: "translateY(-50%)" }}>
            next
            <br />
            host
          </div>
          <div className={styles.rippleNode} style={{ right: 16, top: "50%", transform: "translateY(-50%)" }}>
            next
            <br />
            host
          </div>
        </div>
        <div>
          <span className={styles.tagline}>How It Spreads</span>
          <h2 className={styles.sectionHeading}>One meal becomes many.</h2>
          <p className={styles.sectionBody}>Every guest becomes a potential host. Every host reaches new people. The movement grows person to person — through kitchens, not campaigns.</p>
          <div className={styles.detailList} style={{ marginTop: "2rem" }}>
            {rippleDetails.map((detail) => (
              <div className={styles.detailItem} key={detail}>
                <span className={styles.detailDot} style={{ background: "var(--terra)" }} />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
