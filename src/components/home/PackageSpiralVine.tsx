"use client";

import { motion } from "framer-motion";

/** A single fine-liner leaf outline with a hairline centre vein — no fill, drawn pointing "up" at the origin. */
function Leaf({ scale = 1 }: { scale?: number }) {
  return (
    <g transform={`scale(${scale})`}>
      <path d="M0,-14 C6,-10 7,-3 0,9 C-7,-3 -6,-10 0,-14 Z" />
      <path d="M0,-11 L0,6" />
    </g>
  );
}

/** A short isolated twig carrying two small leaves, echoing the reference's separate sprig elements. */
function LeafSprig({
  x,
  y,
  rotate = 0,
  flip = false,
}: {
  x: number;
  y: number;
  rotate?: number;
  flip?: boolean;
}) {
  const side = flip ? -1 : 1;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path d={`M0,0 C${6 * side},-4 ${10 * side},-9 ${9 * side},-16`} />
      <g transform={`translate(${5 * side} -7) rotate(${25 * side})`}>
        <Leaf scale={0.7} />
      </g>
      <g transform={`translate(${9 * side} -16) rotate(${10 * side})`}>
        <Leaf scale={0.6} />
      </g>
    </g>
  );
}

/** A delicate five-petal wildflower with a centre stamen; `tinted` gives the petals a soft brand-green wash. */
function Flower({
  x,
  y,
  rotate = 0,
  scale = 1,
  tinted = false,
}: {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
  tinted?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg})`}
          d="M0,0 C-3.5,-4 -3.5,-9.5 0,-12.5 C3.5,-9.5 3.5,-4 0,0 Z"
          fill={tinted ? "var(--color-green)" : "none"}
          fillOpacity={tinted ? 0.3 : 0}
        />
      ))}
      <circle r="1.6" fill={tinted ? "var(--color-green)" : "none"} fillOpacity={tinted ? 0.65 : 0} />
    </g>
  );
}

/** A tiny four-point sparkle accent. */
function Sparkle({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0,-4 L0,4 M-4,0 L4,0" />
    </g>
  );
}

/**
 * Fixes Round 4 — reworked from Round 3's chunky spiral into a genuine
 * fine-liner botanical illustration (uniform hairline stroke throughout,
 * per the reference: delicate wildflowers, slender twigs, isolated
 * elements), still spiralling down the left margin behind the "Signature
 * Packages" heading and first row of cards. The two lower flowers carry a
 * soft brand-green wash so the line art visibly eases into colour right
 * where the vine meets the tiles. Hidden below md — this much vertical
 * detail isn't worth crowding the mobile card stack.
 */
export function PackageSpiralVine() {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 640"
      className="pointer-events-none absolute -top-6 left-0 -z-10 hidden h-[640px] w-44 text-espresso-light/35 md:block lg:w-52"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* curled tendril tip */}
      <path d="M102 40 L102.3 41.4 L101.6 43 L99.8 44.1 L97.3 44.1 L95 42.4 L93.7 39.4 L94.3 35.9 L97 32.9 L101.1 31.6 L105.7 32.9 L109.2 36.5 L110.4 41.9 L108.5 47.4 L103.7 51.4 L97.2 52.4 L90.7 49.7 L86.4 43.8 L85.7 36 L89.2 28.7 L96.4 24.1 L105.3 23.8 L113.3 28.3 L118.1 36.7 L117.9 46.7 L112.4 55.5" />

      {/* winding stem */}
      <path
        d="M112 55
           C 165 88, 165 132, 108 165
           C 45 200, 45 248, 108 282
           C 165 315, 165 362, 108 396
           C 45 430, 45 478, 108 512
           C 148 536, 148 566, 118 592"
      />

      <Sparkle x={128} y={75} scale={0.85} />
      <LeafSprig x={150} y={115} rotate={30} />
      <Flower x={40} y={232} rotate={-15} scale={0.9} />
      <Sparkle x={62} y={272} scale={0.7} />
      <LeafSprig x={150} y={345} rotate={25} />
      <Flower x={40} y={462} rotate={-10} tinted />
      <Flower x={132} y={552} rotate={18} scale={1.3} tinted />
    </motion.svg>
  );
}
