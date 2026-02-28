"use client";

import { useEffect } from "react";

const APEX = "longevityinitiativeforfoodandeducation.com";
const CANONICAL = "www.longevityinitiativeforfoodandeducation.com";

export default function CanonicalRedirect() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const location = window.location;
    if (location.hostname === APEX) {
      const target = location.href.replace(APEX, CANONICAL);
      window.location.replace(target);
    }
  }, []);

  return null;
}
