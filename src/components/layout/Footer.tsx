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
    <svg viewBox="0 0 48 48" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M38.9,8.1A20.9,20.9,0,0,0,3.2,22.8,19.8,19.8,0,0,0,6,33.2L3,44l11.1-2.9a20.3,20.3,0,0,0,10,2.5A20.8,20.8,0,0,0,38.9,8.1Zm-14.8,32a17.1,17.1,0,0,1-9.5-2.8L8,39.1l1.8-6.4a17.9,17.9,0,0,1-3.1-9.9A17.4,17.4,0,1,1,24.1,40.1Z" />
      <path d="M33.6,27.2A29.2,29.2,0,0,0,30,25.5c-.4-.2-.8-.3-1.1.2s-1.4,1.7-1.7,2.1a.8.8,0,0,1-1.1.1,15.2,15.2,0,0,1-4.2-2.6A15,15,0,0,1,19,21.7a.7.7,0,0,1,.2-1l.8-1a3.5,3.5,0,0,0,.5-.8.9.9,0,0,0,0-.9c-.2-.3-1.2-2.8-1.6-3.9s-.9-.9-1.2-.9h-1a1.7,1.7,0,0,0-1.4.7,5.5,5.5,0,0,0-1.8,4.3,10.4,10.4,0,0,0,2.1,5.4c.3.3,3.7,5.6,8.9,7.8a16.4,16.4,0,0,0,3,1.1,6.4,6.4,0,0,0,3.3.2c1-.1,3.1-1.2,3.5-2.4s.5-2.3.3-2.5A2.1,2.1,0,0,0,33.6,27.2Z" />
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
                <Link href="/corporate" className="text-white/85 hover:text-white">
                  Corporate Wellness
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/85 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/85 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/85 hover:text-white">
                  Contact
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
