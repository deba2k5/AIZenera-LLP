import { useSeo } from "../lib/hooks";
import { site } from "../config/site";

const content = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      ["Information we collect", "When you submit our contact form we collect the details you provide — such as your name, email, company, phone number and project description."],
      ["How we use it", "We use this information only to respond to your inquiry and discuss your project. We do not sell your personal data."],
      ["Third-party services", "Form submissions are delivered to our inbox through a form-handling service. Fonts are loaded from Google Fonts."],
      ["Your rights", `You can ask us to access, correct or delete your information at any time by emailing ${site.email}.`],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      ["Use of this website", "Content on this website is provided for general information about our services and may change without notice."],
      ["Sample work", "Projects labelled as sample concepts are demonstrations of our approach and do not represent real client engagements."],
      ["Project agreements", "Every client engagement is governed by a separate written proposal or agreement that sets out scope, timelines and fees."],
      ["Contact", `Questions about these terms can be sent to ${site.email}.`],
    ],
  },
};

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const c = content[kind];
  useSeo(c.title);
  return (
    <section className="container-site max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Legal</p>
      <h1 className="h-section mt-5">{c.title}</h1>
      <p className="mt-4 text-sm text-muted">Placeholder text — please review with a legal professional before publishing.</p>
      <div className="mt-12 space-y-10">
        {c.sections.map(([h, p]) => (
          <div key={h}><h2 className="text-2xl">{h}</h2><p className="mt-3 leading-relaxed text-muted">{p}</p></div>
        ))}
      </div>
    </section>
  );
}
