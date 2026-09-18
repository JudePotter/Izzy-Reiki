import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { AnimatedLogo } from "@/components/layout/AnimatedLogo";

/**
 * Blog, Reviews, Corporate and Contact are parked to later phases (see the
 * brief), so nav stays to the three pages that exist this pass.
 */
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-earthy-green/10 bg-white/90 backdrop-blur-sm">
      <div
        data-header-row
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <Link href="/" className="shrink-0">
          <AnimatedLogo>
            <Image
              src="/images/logos/divine-align-logo.jpeg"
              alt={siteConfig.businessName}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-lg tracking-wide text-earthy-green">
              {siteConfig.businessName}
            </span>
          </AnimatedLogo>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm tracking-wide text-earthy-green/80 transition-colors hover:text-earthy-green"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-espresso-light transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Button href={whatsAppUrl()} icon={false} className="text-xs sm:text-sm">
          Book now
        </Button>
      </div>

      {/* Mobile nav — simple inline row under the header bar, no menu/JS needed at this size. */}
      <nav className="flex items-center justify-center gap-6 border-t border-earthy-green/10 py-2 sm:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs tracking-wide text-earthy-green/80"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
