const RIPPLE_DETAILS = [
  "Each table of 4–6 guests creates 4–6 potential new tables",
  "The 30-day promise keeps the momentum alive",
  "Currently piloting in Atlanta, GA & Austin, TX",
  "LIFE is a 501(c)(3) nonprofit",
];

export function LandingRippleSection() {
  return (
    <section id="ripple" className="bg-[var(--offwhite)] px-6 py-20 md:px-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto h-[320px] w-[320px] max-w-full">
          {[130, 220, 310].map((size, index) => (
            <div
              key={size}
              className="absolute rounded-full border"
              style={{
                width: size,
                height: size,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`,
                borderColor: `rgba(181,90,48,${0.15 - index * 0.05})`,
                animation: `pulse 3s ease-in-out ${index}s infinite`,
              }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(181,90,48,0.25)] bg-[var(--terra-pale)] text-center font-[var(--font-landing-heading)] text-[0.8rem] text-[var(--terra)]">
            one<br />table
          </div>
          {[
            { top: "28px", left: "50%", transform: "translateX(-50%)" },
            { bottom: "28px", left: "50%", transform: "translateX(-50%)" },
            { left: "16px", top: "50%", transform: "translateY(-50%)" },
            { right: "16px", top: "50%", transform: "translateY(-50%)" },
          ].map((pos, index) => (
            <div
              key={index}
              className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-[var(--rule,#e5dccc)] bg-[var(--parchment)] text-[0.65rem] text-[var(--earth-mid)]"
              style={pos as React.CSSProperties}
            >
              next<br />host
            </div>
          ))}
        </div>
        <div>
          <span className="stag">How It Spreads</span>
          <h2 className="sh">One meal becomes many.</h2>
          <p className="sb">Every guest becomes a potential host. Every host reaches new people. The movement grows person to person — through kitchens, not campaigns.</p>
          <div className="mt-6 flex flex-col gap-3">
            {RIPPLE_DETAILS.map((detail) => (
              <div key={detail} className="flex gap-3 text-[0.9rem] text-[var(--earth-mid)]">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--terra)]" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
