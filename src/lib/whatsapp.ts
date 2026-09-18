import { siteConfig } from "@/content/site-config";

/** Builds a wa.me click-to-chat link, pre-filled with a friendly opening message. */
export function whatsAppUrl(message: string = siteConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Per-treatment Book button flow — wording fixed by the brief so every "Book"
 * button sitewide opens WhatsApp with the same message shape, just the
 * treatment name swapped in.
 */
export function bookTreatmentUrl(treatmentName: string) {
  return whatsAppUrl(
    `Hi, I'd like to book in for ${treatmentName}. Please send me your availability, thanks!`,
  );
}
