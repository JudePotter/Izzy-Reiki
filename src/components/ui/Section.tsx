import type { ReactNode } from "react";

const backgrounds = {
  white: "bg-white text-earthy-green",
  cream: "bg-cream text-earthy-green",
  sage: "bg-sage/30 text-earthy-green",
  dark: "bg-earthy-green text-white",
} as const;

export function Section({
  children,
  bg = "white",
  grain = false,
  className = "",
  innerClassName = "",
  id,
}: {
  children: ReactNode;
  bg?: keyof typeof backgrounds;
  grain?: boolean;
  /** Classes for the outer <section> — background/positioning concerns. */
  className?: string;
  /** Classes for the inner padded container — overrides default vertical padding. */
  innerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${backgrounds[bg]} ${grain ? "grain" : ""} ${className}`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 md:px-10 ${
          innerClassName || "py-20 sm:py-28"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
