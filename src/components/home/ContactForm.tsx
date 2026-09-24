"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { TreatmentPicker } from "@/components/ui/TreatmentPicker";

const treatmentOptions = [
  "Not sure yet, I'd like a consultation",
  "Deep Healing Reiki",
  "Reflexology",
  "Head-to-Toe Ritual",
  "Full Body Massage",
  "Back, Neck and Shoulders Massage",
  "Sole to Soul",
  "Breathe and Release",
  "Mind & Body Reset",
  "Exclusive Healing Package",
];

type Status = "idle" | "missingTreatment" | "submitting" | "success" | "error";

/**
 * Fixes Round 1 §10 — the quiet backup route, secondary to the WhatsApp
 * button that leads the closing band above it. Submits via Web3Forms
 * (`siteConfig.contact.web3formsAccessKey`) straight to my inbox; if the key
 * isn't set yet, submitting shows an inline note instead of failing
 * silently against a real endpoint.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [treatment, setTreatment] = useState("");

  return (
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!treatment) {
            setStatus("missingTreatment");
            return;
          }

          if (!siteConfig.contact.web3formsAccessKey) {
            setStatus("error");
            return;
          }

          setStatus("submitting");
          const form = e.currentTarget;
          const data = new FormData(form);

          try {
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { Accept: "application/json" },
              body: (() => {
                data.append("access_key", siteConfig.contact.web3formsAccessKey);
                data.append("subject", `New enquiry from ${siteConfig.businessName} website`);
                return data;
              })(),
            });
            const result = await res.json();
            if (result.success) {
              setStatus("success");
              form.reset();
              setTreatment("");
            } else {
              setStatus("error");
            }
          } catch {
            setStatus("error");
          }
        }}
        className="flex flex-col gap-3 text-left"
      >
        <label className="sr-only" htmlFor="contact-name">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
        />

        <label className="sr-only" htmlFor="contact-number">
          Your number
        </label>
        <input
          id="contact-number"
          name="phone"
          type="tel"
          required
          placeholder="Your number"
          className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
        />

        <TreatmentPicker
          name="treatment"
          options={treatmentOptions}
          value={treatment}
          onChange={(next) => {
            setTreatment(next);
            if (status === "missingTreatment") setStatus("idle");
          }}
        />

        <label className="sr-only" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          placeholder="Tell me a little about what you're looking for"
          className="w-full rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-espresso px-6 py-3 text-sm text-white transition-colors hover:bg-espresso-light disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>
      </form>

      {status === "missingTreatment" && (
        <p className="mt-4 text-sm text-white/80">Please choose a treatment above.</p>
      )}
      {status === "success" && (
        <p className="mt-4 text-sm text-white/80">
          Thank you — I have your message and will be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-white/80">
          This part is still being wired up — for now, tap the WhatsApp
          button above and I&rsquo;ll get back to you the same way.
        </p>
      )}
    </div>
  );
}
