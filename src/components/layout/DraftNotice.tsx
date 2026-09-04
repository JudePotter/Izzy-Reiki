"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dah-draft-notice-dismissed";

/**
 * Temporary review banner for this iteration — not part of the final brand
 * experience. Remove this component (and its import in the (site) layout)
 * once the design direction is signed off.
 */
export function DraftNotice() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // One-time read of external (localStorage) state on mount, matching the
    // server-rendered "visible" default until this resolves — not a render
    // loop, so the cascading-render concern the lint rule guards against
    // doesn't apply here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (localStorage.getItem(STORAGE_KEY) === "1") setDismissed(true);
  }, []);

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-terracotta-deep px-6 py-4 text-white">
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-4 text-center">
        <p className="text-sm leading-relaxed sm:text-base">
          This is the first iteration — we have lots more to come if you like
          the design direction. All other pages will be added in if you like
          what I&rsquo;ve built, and then we&rsquo;ll get all the copy in
          place!
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem(STORAGE_KEY, "1");
          setDismissed(true);
        }}
        aria-label="Dismiss this note"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/80 transition-colors hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}
