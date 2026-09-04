import { siteConfig } from "@/content/site-config";

/** Builds a wa.me click-to-chat link, pre-filled with a friendly opening message. */
export function whatsAppUrl(message: string = siteConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
