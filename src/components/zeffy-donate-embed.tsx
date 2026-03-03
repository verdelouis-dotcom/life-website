"use client";

import { useState } from "react";

const ZEFFY_FORM_URL = "https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-9282?embedded=1";

export default function ZeffyDonateEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white/90 p-4 shadow-sm">
      <div className="mb-4 text-center text-sm text-[#5b5149]">
        Secure donations are processed via Zeffy with 0% platform fees.
      </div>
      <div className="relative min-h-[960px] w-full overflow-hidden rounded-2xl border border-[#dfd4c6] bg-[#f8f3ea]">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-[#5b5149]">
            Loading donation form…
          </div>
        )}
        <iframe
          title="Donate via Zeffy"
          src={ZEFFY_FORM_URL}
          className="h-[960px] w-full"
          loading="lazy"
          allow="payment *"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
