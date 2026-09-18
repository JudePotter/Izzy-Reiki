"use client";

import { motion } from "framer-motion";

function Star({ filled, index, animate }: { filled: boolean; index: number; animate: boolean }) {
  const path = (
    <path
      d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5Z"
      fill={filled ? "#7a5f47" : "none"}
      stroke="#7a5f47"
      strokeWidth="1"
    />
  );

  if (!animate) {
    return (
      <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
        {path}
      </svg>
    );
  }

  return (
    <motion.svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      aria-hidden
      initial={{ scale: 0, rotate: -25, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4 + index * 0.08,
      }}
    >
      {path}
    </motion.svg>
  );
}

export function StarRating({
  value,
  animate = false,
}: {
  value: number;
  /** Stars scale in one by one as the rating scrolls into view — use once per page. */
  animate?: boolean;
}) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} index={i} filled={i < Math.round(value)} animate={animate} />
      ))}
    </div>
  );
}
