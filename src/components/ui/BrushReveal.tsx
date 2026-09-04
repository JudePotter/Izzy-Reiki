"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A reveal that wipes content in left-to-right, like a brushstroke — for
 * headings only, used sparingly so it reads as a signature moment rather
 * than a repeated tic. Works the same whether the element is above the fold
 * at mount (Hero) or scrolled into view later.
 */
export function BrushReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
