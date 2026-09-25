import type { CSSProperties } from "react";

/** Filenames available in /public/botanical-pack — monochrome line art only, never generated. */
export type BotanicalFile =
  | "vine-01.svg"
  | "vine-02.svg"
  | "vine-03.svg"
  | "vine-minimal-01.svg"
  | "vine-minimal-02.svg"
  | "vine-minimal-03.svg"
  | "flower-head-01.svg"
  | "flower-head-02.svg"
  | "flower-stem-01.svg"
  | "flower-stem-02.svg"
  | "moon-stars-01.svg"
  | "moon-stars-02.svg"
  | "stars-trail-01.svg";

/** Taken from each file's own viewBox, so the mask never stretches the artwork. */
const ASPECT_RATIO: Record<BotanicalFile, string> = {
  "vine-01.svg": "300 / 1300",
  "vine-02.svg": "300 / 1300",
  "vine-03.svg": "300 / 1300",
  "vine-minimal-01.svg": "300 / 1300",
  "vine-minimal-02.svg": "300 / 1300",
  "vine-minimal-03.svg": "300 / 1300",
  "flower-head-01.svg": "300 / 300",
  "flower-head-02.svg": "300 / 300",
  "flower-stem-01.svg": "300 / 760",
  "flower-stem-02.svg": "300 / 760",
  "moon-stars-01.svg": "300 / 420",
  "moon-stars-02.svg": "300 / 420",
  "stars-trail-01.svg": "220 / 1300",
};

/** Tall trailing pieces need page-edge whitespace a phone doesn't have. */
const TALL_FILES = new Set<BotanicalFile>([
  "vine-01.svg",
  "vine-02.svg",
  "vine-03.svg",
  "vine-minimal-01.svg",
  "vine-minimal-02.svg",
  "vine-minimal-03.svg",
  "stars-trail-01.svg",
]);

const COLOR_VAR: Record<"sage" | "espresso" | "rose" | "green", string> = {
  sage: "var(--color-sage)",
  espresso: "var(--color-espresso)",
  rose: "var(--color-botanical-rose)",
  green: "var(--color-green)",
};

interface FadeOut {
  /**
   * Gradient angle in CSS `deg` terms, applied in the piece's own
   * (pre-rotation) box — since `rotate` turns the whole box including this
   * mask, tune the angle empirically against the rendered page rather than
   * reasoning it out from the screen-space direction.
   */
  angle: number;
  /**
   * Raw `linear-gradient` colour stops after the angle, e.g.
   * `"black 0%, black 30%, transparent 45%, transparent 60%, black 75%, black 100%"`
   * to carve a transparent notch out of an otherwise-opaque piece — most
   * placements only need to fade one end, but a piece that runs close to
   * text mid-way through its own length needs a notch, not a one-way fade.
   */
  stops: string;
}

interface BotanicalProps {
  src: BotanicalFile;
  /**
   * CSS length from the left of the section (can be negative to bleed off
   * the edge, e.g. "-180px"). Percentages don't work for `top`/`bottom` here
   * — every section this renders into is height:auto, and a percentage
   * offset on an absolutely positioned child of an auto-height box resolves
   * to 0 per spec, not a fraction of the rendered height — so `top`/`bottom`
   * must be pixels/rem too.
   */
  left?: string;
  /** CSS length from the right of the section — alternative to `left`. */
  right?: string;
  top?: string;
  /** Takes precedence over `top` if both are set. */
  bottom?: string;
  /** CSS length — height follows automatically from the asset's aspect ratio. */
  width: string;
  /** Rotation in degrees, applied before the flip. */
  rotate?: number;
  /** Mirrors the artwork (scaleX(-1)), applied after the rotation. */
  flip?: boolean;
  /** Site-wide standard is 0.55 — keep every placement at that value unless explicitly asked to vary it. */
  opacity?: number;
  colorToken?: "sage" | "espresso" | "rose" | "green";
  /** Fades the piece to fully transparent along a direction — use where the artwork runs toward body text, so the text stays readable underneath it. */
  fadeOut?: FadeOut;
  /** Defaults to true for the tall vine/stars-trail pieces, false otherwise. */
  hideOnMobile?: boolean;
  className?: string;
}

/**
 * A single piece of line art from /public/botanical-pack, colour-masked to a
 * palette token. Purely decorative — sits behind the content (-z-10),
 * pointer-events: none. The section that renders one needs
 * `relative isolate overflow-x-clip` (see the call sites): `isolate` keeps
 * the -z-10 scoped to that section instead of escaping to compare against
 * unrelated siblings, and `overflow-x-clip` stops an edge bleed from
 * widening the page.
 */
export function Botanical({
  src,
  left,
  right,
  top,
  bottom,
  width,
  rotate = 0,
  flip = false,
  opacity = 0.55,
  colorToken = "espresso",
  fadeOut,
  hideOnMobile,
  className = "",
}: BotanicalProps) {
  const shouldHideOnMobile = hideOnMobile ?? TALL_FILES.has(src);

  const outerStyle = {
    position: "absolute",
    left,
    right,
    top,
    bottom,
    width,
    aspectRatio: ASPECT_RATIO[src],
    transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
    opacity,
    pointerEvents: "none",
    ...(fadeOut && {
      maskImage: `linear-gradient(${fadeOut.angle}deg, ${fadeOut.stops})`,
      WebkitMaskImage: `linear-gradient(${fadeOut.angle}deg, ${fadeOut.stops})`,
    }),
  } as CSSProperties;

  const innerStyle = {
    "--botanical": COLOR_VAR[colorToken],
    "--src": `url(/botanical-pack/${src})`,
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`-z-10 ${shouldHideOnMobile ? "hidden md:block" : "block"} ${className}`}
      style={outerStyle}
    >
      <div className="botanical-shape" style={innerStyle} />
    </div>
  );
}
