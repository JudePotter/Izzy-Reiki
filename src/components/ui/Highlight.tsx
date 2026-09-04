"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Hand-drawn style underline for a key word or short phrase, drawn on with a
 * stroke animation as it scrolls into view — use sparingly, one or two per
 * page at most.
 */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap pb-1">
      {children}
      <motion.svg
        viewBox="0 0 200 14"
        preserveAspectRatio="none"
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-0 h-[0.3em] w-full"
      >
        <motion.path
          d="M2 8.5C40 2 90 1 130 6C155 9.5 175 5 198 8"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </motion.svg>
    </span>
  );
}
