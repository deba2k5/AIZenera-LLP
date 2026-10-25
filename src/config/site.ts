/**
 * Central brand + contact settings.
 * Change values here and they update across the whole site.
 */
export const site = {
  name: "AIZenera",
  tagline: "We build digital experiences that move businesses forward.",
  statement:
    "From high-performing websites to powerful digital systems and creative brand experiences, we help businesses transform ideas into impactful digital products.",
  email: "aizenera2025@gmail.com",
  // Add a real number when available, e.g. "+91 00000 00000". Empty = hidden.
  phone: "",
  // Add a city / address when available. Empty = hidden.
  location: "",
  // Add real profile URLs when available. Empty URLs are hidden automatically.
  socials: [
    { label: "LinkedIn", url: "" },
    { label: "Instagram", url: "" },
    { label: "X / Twitter", url: "" },
    { label: "GitHub", url: "" },
  ],
  /**
   * Contact form delivery.
   * Default: FormSubmit (https://formsubmit.co) sends inquiries to `email` above.
   * The very first submission triggers a one-time activation email to that inbox —
   * click "Activate" in it, and all later submissions are delivered.
   * To use another service (Formspree, Web3Forms, your own API), set
   * VITE_FORM_ENDPOINT in a `.env` file. The endpoint must accept a JSON POST.
   */
  formEndpoint:
    (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ||
    "https://formsubmit.co/ajax/aizenera2025@gmail.com",
} as const;

export const budgets = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

export const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "3+ months",
  "Flexible",
];
