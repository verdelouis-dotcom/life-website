"use client";

import { useState } from "react";
import { ZeffyEmbedFrame } from "@/components/zeffy/ZeffyEmbedFrame";

export function DonationEmbedPanel() {
  const [amount, setAmount] = useState("50");
  const normalizedAmount = Math.max(10, Number(amount) || 10);

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
      <p className="type-eyebrow text-center text-[var(--muted)]">Secure Zeffy checkout</p>
      <h2 className="section-heading text-center text-[var(--ink)]">Give any amount</h2>
      <p className="mt-2 text-center text-sm text-[var(--muted)]">Minimum donation $10. Your selected amount loads automatically below.</p>
      <label htmlFor="donation-page-amount" className="mt-6 block text-sm font-medium text-[var(--ink)]">
        Custom amount
      </label>
      <div className="mt-2 flex overflow-hidden rounded-full border border-[var(--border)] bg-[var(--white)]">
        <span className="bg-[var(--linen)] px-4 py-2 font-serif text-lg text-[var(--ink)]">$</span>
        <input
          id="donation-page-amount"
          className="flex-1 border-0 bg-transparent px-4 py-2 text-base text-[var(--ink)] outline-none"
          type="number"
          min={10}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <ZeffyEmbedFrame amount={normalizedAmount} className="mt-6" minHeight={860} />
      <p className="mt-3 text-center text-xs text-[var(--muted)]">Powered by Zeffy · No platform fees · 100% of your gift reaches LIFE.</p>
    </div>
  );
}
