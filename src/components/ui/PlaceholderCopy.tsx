import type { ReactNode } from "react";

/**
 * Visible stand-in for copy that's still to come from Izzy. Deliberately
 * obvious (dashed border, italic) so it can never be mistaken for finished
 * content and is easy to grep for / spot when swapping in real copy.
 */
export function PlaceholderCopy({
  children = "This is where your copy will go, Izzy",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-dashed border-terracotta/40 bg-terracotta/5 px-6 py-5 text-sm italic leading-relaxed text-earthy-green/70 ${className}`}
    >
      {children}
    </div>
  );
}
