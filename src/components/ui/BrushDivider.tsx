"use client";

import { motion } from "framer-motion";

const fillMap = {
  white: "#f8f5f0",
  cream: "#f0e8dd",
  dark: "#3c4e40",
} as const;

/**
 * Hand-painted brushstroke divider between sections. Renders a wavy, slightly
 * irregular edge in the colour of the section it leads into, with a
 * feTurbulence displacement so the edge reads as brushed rather than a clean
 * vector wave, and wipes in left-to-right as it scrolls into view — like the
 * section is being brushed on. `flip` mirrors it vertically for use above a
 * section instead of below one.
 */
export function BrushDivider({
  into,
  flip = false,
  className = "",
}: {
  into: keyof typeof fillMap;
  flip?: boolean;
  className?: string;
}) {
  const fill = fillMap[into];
  const id = `brush-${into}-${flip ? "flip" : "std"}`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none -mb-px w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <motion.svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="h-16 w-full sm:h-24"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        <defs>
          <filter id={id} x="-5%" y="-50%" width="110%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.09"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <path
          filter={`url(#${id})`}
          fill={fill}
          d="M0,40 C240,90 480,0 720,35 C960,70 1200,10 1440,45 L1440,100 L0,100 Z"
        />
      </motion.svg>
    </div>
  );
}
