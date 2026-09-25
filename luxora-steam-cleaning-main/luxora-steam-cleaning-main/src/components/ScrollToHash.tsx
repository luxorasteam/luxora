"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/** Scrolls to the element matching `window.location.hash` on mount/navigation. */
export default function ScrollToHash() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return null;
}
