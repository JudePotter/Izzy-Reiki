"use client";

import { motion } from "framer-motion";
import { whatsAppUrl } from "@/lib/whatsapp";

/**
 * Persistent floating WhatsApp button — per the brief, WhatsApp is the
 * primary booking route, so it stays reachable from anywhere on the site,
 * not just inline CTAs. Sits above the mobile nav bar and safe-area inset.
 */
export function StickyWhatsApp() {
  return (
    <motion.a
      href={whatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Divine Align Healing on WhatsApp"
      className="fixed right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-earthy-green/20"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <path
          d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.65-1.22A9 9 0 1 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M8.5 8.8c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .5.4.2.4.6 1.4.6 1.5.1.1.1.3 0 .4-.1.2-.2.3-.3.4-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.4.2.5.3.1.1.1.7-.2 1.3-.2.6-1.4 1.2-1.9 1.2-.5 0-1.1.1-3.5-1-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3Z"
          fill="currentColor"
        />
      </svg>
    </motion.a>
  );
}
