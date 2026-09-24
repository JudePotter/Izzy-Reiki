"use client";

import { useEffect, useRef, useState } from "react";
import { serviceTreatments, servicePackages } from "@/content/services";
import { siteConfig } from "@/content/site-config";
import { whatsAppUrl } from "@/lib/whatsapp";

/**
 * The header's "Book now" used to fire off a generic WhatsApp message with
 * no context. Now it asks what you'd like to book first, then opens
 * WhatsApp pre-filled with that specific treatment/package message —
 * matching how every other Book button on the site already behaves.
 */
export function BookNowMenu({ className = "" }: { className?: string }) {
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
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 rounded-full bg-espresso px-7 py-3 text-sm tracking-wide text-white transition-colors hover:bg-espresso-light ${className}`}
      >
        Book now
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
        <div
          role="menu"
          className="absolute right-0 z-30 mt-2 max-h-96 w-72 overflow-auto rounded-2xl border border-earthy-green/10 bg-white p-1.5 text-left shadow-xl shadow-earthy-green/15"
        >
          <a
            href={whatsAppUrl(siteConfig.whatsapp.consultationMessage)}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-sm text-earthy-green transition-colors hover:bg-sage/20"
          >
            Not sure yet — free consultation
          </a>

          <p className="px-4 pb-1 pt-3 text-xs uppercase tracking-wide text-earthy-green/50">
            Treatments
          </p>
          {serviceTreatments.map((item) => (
            <a
              key={item.name}
              href={whatsAppUrl(item.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm text-earthy-green transition-colors hover:bg-sage/20"
            >
              {item.name}
            </a>
          ))}

          <p className="px-4 pb-1 pt-3 text-xs uppercase tracking-wide text-earthy-green/50">
            Packages
          </p>
          {servicePackages.map((item) => (
            <a
              key={item.name}
              href={whatsAppUrl(item.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm text-earthy-green transition-colors hover:bg-sage/20"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
