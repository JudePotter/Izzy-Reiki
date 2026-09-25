/**
 * Corporate Wellness page copy — transcribed verbatim (content, not layout)
 * from the brochure PDF Izzy supplied, at `/public/corporate`.
 */

export const corporateOptions = [
  {
    title: "Reflexology",
    body: "Deeply calming foot or hand treatment for grounding and reset of body systems.",
  },
  {
    title: "Massage",
    body: "Back, neck and shoulder tension release with Swedish massage.",
  },
  {
    title: "Reiki",
    body: "Restorative energy healing for release, clarity boost and deep relaxation.",
  },
];

export type CorporatePackage = {
  name: string;
  employees: string;
  price: string;
};

export const corporatePackages: CorporatePackage[] = [
  { name: "2 Hour Wellness Taster", employees: "4 employees", price: "£150" },
  { name: "Half Day / 4 Hours", employees: "8 employees", price: "£275" },
  { name: "Full Day / 8 Hours", employees: "14 employees", price: "£425" },
];

export const corporateOccasions = [
  "World Mental Health Day (10th Oct 2026)",
  "Employee Wellbeing Days",
  "Staff Appreciation Days",
  "Employee Benefits Programmes",
  "Workplace Wellness Weeks",
  "Employees of the Month (incentive for staff)",
];

export const corporateSteps = [
  "Choose your date",
  "Choose your package",
  "Choose your treatments",
  "Staff pre-fill out medical history + consent",
  "Employees book their slots",
  "I arrive at your workplace",
  "You provide a private room",
  "I take care of the rest",
];

export type CorporateLogistics = {
  treatment: string;
  provides: string;
  timing: string[];
};

export const corporateLogistics: CorporateLogistics[] = [
  {
    treatment: "Massage",
    provides: "I provide the massage table. You provide a private space for treatment.",
    timing: ["5 min consultation & change", "20 mins massage", "5 mins aftercare and change"],
  },
  {
    treatment: "Reiki",
    provides: "I provide the massage table. You provide a private space for treatment.",
    timing: ["5 min consultation", "20 mins Reiki", "5 mins aftercare and oracle card pull"],
  },
  {
    treatment: "Reflexology",
    provides:
      "Feet: you provide 2 chairs. Hands: you provide 2 chairs and a table.",
    timing: ["5 min consultation", "20 mins reflexology", "5 mins aftercare"],
  },
];
