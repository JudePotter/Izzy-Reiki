import type { ReactNode } from "react";

/**
 * Visible stand-in for copy that's still to come from Izzy. Deliberately
 * obvious (dashed border, italic) so it can never be mistaken for finished
 * content and is easy to grep for / spot when swapping in real copy.
 */
export function PlaceholderCopy({
  children = "This is where your copy will go, Izzy",
  className = "",
  compact = false,
}: {
  children?: ReactNode;
  className?: string;
  /** Smaller padding/text for use inside cards and list rows, not full sections. */
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-dashed border-espresso-light/40 bg-espresso-light/5 italic leading-relaxed text-earthy-green/70 ${
        compact ? "px-4 py-3 text-xs" : "px-6 py-5 text-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}
