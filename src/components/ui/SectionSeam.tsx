"use client";

import { motion } from "framer-motion";

const motifs = {
  /** A wandering line with two leaves either side of centre. */
  leaf: (
    <>
      <path d="M6 26c50 0 60-10 110-10s60 10 110 10 60-10 110-10 60 10 108 10" />
      <path d="M96 14c-7 3-9 10-5 16 7-2 12-7 12-14 0-3-1-4-2-5-2 1-4 2-5 3Z" />
      <path d="M92 28c2-5 4-9 7-12" />
      <path d="M256 38c7-3 9-10 5-16-7 2-12 7-12 14 0 3 1 4 2 5 2-1 4-2 5-3Z" />
      <path d="M260 24c-2 5-4 9-7 12" />
    </>
  ),
  /** A small six-petal flower on a gently curving stem, off to one side. */
  flower: (
    <>
      <path d="M6 30c60 0 70-16 130-16s70 16 130 16 60-14 118-14" />
      <path d="M300 12v14M293 19h14M296 14l8 10M304 14l-8 10" />
      <circle cx="300" cy="19" r="2.4" />
      <path d="M300 33c0 6-2 9-2 9" />
    </>
  ),
  /** A single star with a loose, windy line drifting through it. */
  vine: (
    <>
      <path d="M6 22c40 6 50 18 90 18s50-18 90-18 50 18 90 18 50-16 88-10" />
      <path d="M120 10v12M114 16h12M116 12l8 8M124 12l-8 8" />
      <path d="M96 22c-6 2-8 6-6 11 5-1 9-5 9-10 0-2 0-3-1-4-1 1-1 2-2 3Z" />
    </>
  ),
} as const;

/**
 * Fixes Round 1 §4, refined per follow-up feedback — faint calligraphy-style
 * flowers/leaves at the seams between pastel text sections. Used at several
 * joins now (not just one), always thin single-stroke line art in the brand
 * palette at low opacity, kept off photo blocks. `from`/`to` set the
 * (optionally two-tone) background so each strip reads as part of the
 * transition rather than a hard cut.
 */
export function SectionSeam({
  from,
  to,
  variant = "leaf",
}: {
  from: string;
  to: string;
  variant?: keyof typeof motifs;
}) {
  return (
    <div
      aria-hidden
      className={`relative h-12 w-full bg-gradient-to-b ${from} ${to} sm:h-14`}
    >
      <motion.svg
        viewBox="0 0 440 44"
        className="absolute left-1/2 top-1/2 h-7 w-72 -translate-x-1/2 -translate-y-1/2 text-espresso-light/25 sm:w-96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {motifs[variant]}
      </motion.svg>
    </div>
  );
}
