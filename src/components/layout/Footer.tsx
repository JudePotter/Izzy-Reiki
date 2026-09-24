import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { whatsAppUrl } from "@/lib/whatsapp";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M14 8.5h2V5.5h-2c-2 0-3.5 1.5-3.5 3.5v2H8.5v3H10.5v7h3v-7h2l.5-3H13.5v-2c0-.5.5-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
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
  );
}

export function Footer() {
  return (
    <footer className="bg-earthy-green text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="font-display text-2xl">{siteConfig.businessName}</p>
            <p className="mt-3 max-w-xs text-sm text-white/75">
              I&rsquo;m a complementary therapist and reiki master, based in{" "}
              {siteConfig.location.town}, {siteConfig.location.region}.
            </p>
          </div>

          <div>
            <p className="text-sm tracking-wide text-white/60">Find us</p>
            <p className="mt-3 max-w-[16rem] text-sm text-white/85">
              Inside Renume Wellness
              <br />
              {siteConfig.location.addressLine}
              <br />
              {siteConfig.location.town}, {siteConfig.location.postcode}
            </p>
          </div>

          <div>
            <p className="text-sm tracking-wide text-white/60">Opening hours</p>
            <ul className="mt-3 space-y-1 text-sm text-white/85">
              {siteConfig.hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className="text-white/70">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-wide text-white/60">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/85 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/85 hover:text-white">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/85 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/85 hover:text-white">
                  Journal
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-white"
                >
                  Google reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-wide text-white/60">Get in touch</p>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={whatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Divine Align Healing on WhatsApp"
                className="group flex items-center gap-2 text-white/85 hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <WhatsAppIcon />
                </span>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Divine Align Healing on Instagram"
                className="group flex items-center gap-2 text-white/85 hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <InstagramIcon />
                </span>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={siteConfig.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Divine Align Healing on Facebook"
                className="group flex items-center gap-2 text-white/85 hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <FacebookIcon />
                </span>
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
