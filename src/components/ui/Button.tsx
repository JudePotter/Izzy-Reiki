"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  // terracotta-deep, not the brand's bright terracotta, so white text clears AA (4.5:1).
  primary:
    "bg-terracotta-deep text-white hover:bg-terracotta focus-visible:outline-terracotta-deep",
  outline:
    "border border-earthy-green/40 text-earthy-green hover:border-earthy-green focus-visible:outline-earthy-green",
  outlineLight:
    "border border-white/50 text-white hover:border-white focus-visible:outline-white",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  // A tiny tactile lift/press on hover and tap — inline-block wrapper so the
  // motion transform doesn't fight the link's own layout.
  const motionProps = {
    whileHover: { scale: 1.035, y: -1 },
    whileTap: { scale: 0.97, y: 0 },
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (isExternal) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div className="inline-block" {...motionProps}>
      <Link href={href} className={classes}>
        {children}
      </Link>
    </motion.div>
  );
}
