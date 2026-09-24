"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom-styled dropdown for "which treatment" — the native `<select>` here
 * looked stock/ugly against the brand's rounded, warm inputs, so this swaps
 * in a matching floating panel while still posting a plain `name`/`value`
 * pair (via a hidden input) so the enclosing `<form>`'s FormData works
 * exactly as it would with a real select.
 */
export function TreatmentPicker({
  name,
  options,
  value,
  onChange,
  placeholder = "Which treatment",
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Not `required` — a hidden input can't be focused, so a browser
          validation error here would throw rather than show a bubble.
          Emptiness is guarded in the form's submit handler instead. */}
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-full border border-white/30 bg-white/10 px-5 py-3 text-left text-sm text-white transition-colors focus:border-white/60 focus:outline-none"
      >
        <span className={value ? "" : "text-white/50"}>{value || placeholder}</span>
        <svg
          viewBox="0 0 24 24"
          className={`ml-3 h-4 w-4 shrink-0 text-white/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          aria-hidden
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-2xl border border-earthy-green/10 bg-white p-1.5 shadow-xl shadow-earthy-green/20"
        >
          {options.map((option) => (
            <li key={option} role="option" aria-selected={option === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`block w-full rounded-xl px-4 py-2.5 text-left text-sm transition-colors ${
                  option === value
                    ? "bg-sage/40 text-earthy-green"
                    : "text-earthy-green/80 hover:bg-sage/20"
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
