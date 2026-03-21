"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/register", label: "Register Your Table" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav fixed inset-x-0 top-0 z-[100] border-b border-[rgba(62,46,30,0.12)] bg-[rgba(253,250,246,0.94)] backdrop-blur-[10px] supports-[backdrop-filter]:backdrop-blur">
      <div className="site-nav-inner">
        <Link href="/" className="shrink-0" aria-label="Longevity Initiative for Food & Education">
          <div className="site-nav-logo">
            <Image
              src="/images/life-logo-nav.svg"
              alt="Longevity Initiative for Food & Education"
              fill
              unoptimized
              style={{ objectFit: "contain", objectPosition: "left center" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="nav-links-group hidden items-center gap-6 text-[0.82rem] font-medium text-[#6B4F35] md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#B55A30]">
              {link.label}
            </Link>
          ))}
          <Link
            href="/host"
            className="rounded-full bg-[#3E2E1E] px-5 py-2 text-[0.82rem] font-semibold text-white transition-colors hover:bg-[#B55A30]"
          >
            Host a Table
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="nav-mobile-btn flex md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2" y="5" width="16" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="2" y="9.25" width="16" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="2" y="13.5" width="16" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t border-[rgba(62,46,30,0.08)] px-5 pb-5 pt-1">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-[rgba(62,46,30,0.06)] py-3 text-[0.9rem] font-medium text-[#6B4F35] no-underline transition-colors hover:text-[#B55A30]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/host"
              className="mt-4 block rounded-full bg-[#3E2E1E] px-5 py-2.5 text-center text-[0.875rem] font-semibold text-white no-underline transition-colors hover:bg-[#B55A30]"
              onClick={() => setOpen(false)}
            >
              Host a Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
