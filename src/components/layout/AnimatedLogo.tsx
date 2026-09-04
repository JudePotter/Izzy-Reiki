"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * One-time entrance flourish: the logo starts centred over the header row,
 * then glides (with a light roll) into its normal left-aligned spot. Offset
 * is measured against the header row itself, not the viewport, so it holds
 * up across breakpoints. Runs once per page load — subsequent nav between
 * pages doesn't remount the header, so it won't repeat mid-visit.
 */
export function AnimatedLogo({ children }: { children: ReactNode }) {
  const logoRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotate = useMotionValue(-6);
  const opacity = useMotionValue(0);

  useLayoutEffect(() => {
    const logoEl = logoRef.current;
    const rowEl = logoEl?.closest<HTMLElement>("[data-header-row]");
    if (!logoEl || !rowEl) return;

    const rowRect = rowEl.getBoundingClientRect();
    const logoRect = logoEl.getBoundingClientRect();
    const rowCenter = rowRect.left + rowRect.width / 2;
    const logoCenter = logoRect.left + logoRect.width / 2;

    x.set(rowCenter - logoCenter);
    rotate.set(-6);
    opacity.set(0);

    const controls = [
      animate(x, 0, { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }),
      animate(rotate, 0, { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }),
      animate(opacity, 1, { duration: 0.7, ease: "easeOut", delay: 0.2 }),
    ];

    return () => controls.forEach((c) => c.stop());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div ref={logoRef} style={{ x, rotate, opacity }} className="flex items-center gap-3">
      {children}
    </motion.div>
  );
}
