"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** A gentle lift + shadow on hover — for cards (services, testimonials, credentials). */
export function HoverLift({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`h-full rounded-3xl transition-shadow duration-300 hover:shadow-xl hover:shadow-earthy-green/10 ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
