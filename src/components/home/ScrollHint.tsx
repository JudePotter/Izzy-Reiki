"use client";

import { useEffect, useState } from "react";

/**
 * A gentle "scroll down" nudge at the foot of the hero — visitors were
 * treating the hero as the whole page. Fades in after the hero's intro
 * animations settle, then fades out for good once they scroll. Clicking it
 * scrolls down for them. The bounce is skipped for reduced-motion users.
 */
export function ScrollHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let scrolled = window.scrollY > 40;
    const timer = window.setTimeout(() => setVisible(!scrolled), 1200);

    function onScroll() {
      scrolled = window.scrollY > 40;
      if (scrolled) setVisible(false);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
      aria-label="Scroll down"
      tabIndex={visible ? 0 : -1}
      className={`absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-sage transition-opacity duration-500 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 motion-safe:animate-bounce"
        fill="none"
        aria-hidden
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
