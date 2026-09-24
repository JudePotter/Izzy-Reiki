/**
 * Real, priced treatments and packages, verbatim from the Fixes Round 1
 * brief (sections 6 & 7). This is the source of truth for the Services page,
 * the home page treatments/packages teasers, and each card's WhatsApp
 * booking message. `treatments.ts` is a separate, deliberately simpler list
 * of the three broad categories (Reflexology / Massage / Reiki) used for the
 * hero strip.
 */

export type ServiceItem = {
  name: string;
  duration: string;
  price: string;
  /** Extra detail shown under the name, e.g. what a package includes. */
  note?: string;
  /** Full treatment/package description, Izzy's own words from the brief. */
  description: string;
  /** Exact WhatsApp pre-fill text for this item's Book button, per the brief. */
  whatsappMessage: string;
};

export const serviceTreatments: ServiceItem[] = [
  {
    name: "Deep Healing Reiki",
    duration: "60 min",
    price: "£50",
    description:
      "A gentle, hands-off energy treatment that quiets a busy mind and settles the nervous system. Lying fully clothed and comfortable, you're guided into deep rest while I work to release tension and rebalance your energy. Most people leave feeling lighter, calmer and a little more like themselves again.",
    whatsappMessage:
      "Hi, I would like to book a Deep Healing Reiki treatment. Please let me know your availability.",
  },
  {
    name: "Reflexology",
    duration: "60 min",
    price: "£60",
    description:
      "Through carefully applied pressure to the feet, reflexology encourages the whole body to unwind and rebalance. It's deeply relaxing, supports better sleep and helps ease the physical weight that stress leaves behind. A quiet, grounding hour that asks nothing of you but to switch off.",
    whatsappMessage: "Hi, I would like to book Reflexology. Please let me know your availability.",
  },
  {
    name: "Head-to-Toe Ritual",
    duration: "90 min",
    price: "£84",
    note: "Full body massage incl. face & scalp",
    description:
      "My most complete treatment, a slow and thorough full body massage that finishes with the face and scalp. Every area is given time and care, releasing held tension from head to toe. This is the one to book when you want to disappear for an hour and a half and be completely looked after.",
    whatsappMessage:
      "Hi, I would like to book the Head-to-Toe Ritual. Please let me know your availability.",
  },
  {
    name: "Full Body Massage",
    duration: "60 min",
    price: "£70",
    description:
      "A calming full body massage designed to melt away the tension we carry without realising. Working at an unhurried pace, I ease tight muscles and bring your body back to a place of rest. You'll leave feeling loosened, softened and restored.",
    whatsappMessage:
      "Hi, I would like to book a Full Body Massage. Please let me know your availability.",
  },
  {
    name: "Back, Neck & Shoulders Massage",
    duration: "30 min",
    price: "£45",
    description:
      "Focused relief for the areas that hold the most stress, ideal when you're short on time but carrying a lot. This half hour targets the tightness that builds through long days at a desk or on your feet. A quick reset that leaves your shoulders lighter and your head clearer.",
    whatsappMessage:
      "Hi, I would like to book a Back, Neck and Shoulders Massage. Please let me know your availability.",
  },
];

export const servicePackages: ServiceItem[] = [
  {
    name: "Sole to Soul",
    duration: "1.5 hr",
    price: "£95",
    note: "Reflexology + Reiki",
    description:
      "Reflexology and Reiki come together to ground the body and calm the mind in one deeply restorative session. Beginning at the feet and moving into gentle energy work, it's a full reset for anyone running on empty. Ninety minutes to slow right down and reconnect with yourself.",
    whatsappMessage:
      "Hi, I would like to book the Sole to Soul package. Please let me know your availability.",
  },
  {
    name: "Breathe & Release",
    duration: "1.5 hr",
    price: "£89",
    note: "Back, Neck & Shoulders + Reiki",
    description:
      "Physical tension and mental noise, eased in a single unhurried treatment. A focused back, neck and shoulders massage releases the tightness you've been holding, while Reiki settles everything underneath. You'll leave feeling both physically lighter and quietly at peace.",
    whatsappMessage:
      "Hi, I would like to book the Breathe and Release package. Please let me know your availability.",
  },
  {
    name: "Mind & Body Reset",
    duration: "1.5 hr",
    price: "£95",
    note: "Back, Neck & Shoulders + face, scalp + Reiki",
    description:
      "A complete unwind for body and mind, pairing focused massage of the back, neck and shoulders with soothing face and scalp work and a layer of Reiki. Every part of it is built to help you let go and surrender to rest. Perfect when you need to feel properly cared for, inside and out.",
    whatsappMessage:
      "Hi, I would like to book the Mind & Body Reset package. Please let me know your availability.",
  },
  {
    name: "Exclusive Healing Package",
    duration: "2 hr",
    price: "£120",
    note: "90-min Full Body Massage + Reiki",
    description:
      "The full experience, two hours of complete care and my most indulgent offering. A thorough 90 minute full body massage flows into deep Reiki, leaving no tension untouched. This is time carved out entirely for you, to be held, healed and sent back into the world restored.",
    whatsappMessage:
      "Hi, I would like to book the Exclusive Healing Package. Please let me know your availability.",
  },
];
