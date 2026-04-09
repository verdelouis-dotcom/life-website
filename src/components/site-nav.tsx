"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/pasta-class", label: "Fresh Pasta Cooking Class" },
  { href: "/assessment", label: "Take the Assessment" },
  { href: "/host", label: "Host a Table" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Support Us" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-nav fixed inset-x-0 top-0 z-[100] ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-logo shrink-0 transition-opacity hover:opacity-80" aria-label="LIFE — Longevity Initiative for Food & Education">
          <Logo size="md" />
        </Link>

        {/* Desktop nav links */}
        <nav className="nav-links-group hidden items-center gap-6 text-[0.82rem] font-medium text-[#6B4F35] md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#B55A30]">
              {link.label}
            </Link>
          ))}
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
          </div>
        </div>
      )}
    </header>
  );
}
