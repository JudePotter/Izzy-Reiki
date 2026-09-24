import type { ServiceItem } from "@/content/services";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";
import { HoverLift } from "@/components/ui/HoverLift";
import { Button } from "@/components/ui/Button";

/**
 * One treatment or package row — name, duration, real pricing and
 * description from the brief, and a Book button that opens WhatsApp
 * pre-filled with this item's exact booking message.
 */
export function ServiceCard({ item, delay = 0 }: { item: ServiceItem; delay?: number }) {
  return (
    <Reveal delay={delay} className="w-full sm:w-[calc(50%-0.75rem)]">
      <HoverLift className="border border-earthy-green/10 bg-white p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="font-display text-2xl font-light text-earthy-green">{item.name}</p>
          <p className="font-display text-2xl font-light text-espresso">{item.price}</p>
        </div>
        {item.note && <p className="mt-1 text-sm text-earthy-green/70">{item.note}</p>}
        <p className="mt-3 inline-block rounded-full bg-sage/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-earthy-green/80">
          {item.duration}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-earthy-green/80">{item.description}</p>

        <div className="mt-6">
          <Button href={whatsAppUrl(item.whatsappMessage)} icon={false} className="w-full sm:w-auto">
            Book on WhatsApp
          </Button>
        </div>
      </HoverLift>
    </Reveal>
  );
}
