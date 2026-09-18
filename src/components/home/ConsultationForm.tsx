"use client";

import { useState } from "react";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

/**
 * TODO(lead-capture): visual only for this pass — there's no backend or email
 * service wired up yet to deliver submissions to Izzy. Submitting shows an
 * inline note instead of sending anything, and always leaves the WhatsApp
 * button as the working fallback. Wire this up to a real destination (an API
 * route + email service, or a form provider) before launch, then swap the
 * stub handler below for a real submit.
 */
export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="flex flex-col gap-3 sm:flex-row sm:gap-2"
      >
        <label className="sr-only" htmlFor="consultation-name">
          Name
        </label>
        <input
          id="consultation-name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
        />
        <label className="sr-only" htmlFor="consultation-number">
          Phone number
        </label>
        <input
          id="consultation-number"
          name="number"
          type="tel"
          required
          placeholder="Your number"
          className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-espresso px-6 py-3 text-sm text-white transition-colors hover:bg-espresso-light"
        >
          Send
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-sm text-white/80">
          This part is still being wired up — for now, tap below to book straight
          through WhatsApp and Izzy will get back to you the same way.
        </p>
      )}

      <div className="mt-6 flex justify-center">
        <Button href={whatsAppUrl()}>Book a free consultation</Button>
      </div>
    </div>
  );
}
