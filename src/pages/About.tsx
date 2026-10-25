import { Eye, Target, Sparkles, ShieldCheck, Users, Code2, Palette, Compass } from "lucide-react";
import { useReveal, useSeo } from "../lib/hooks";
import { PageHero, SectionHeading, CTASection } from "../components/ui";
import { steps } from "./Home";
import { site } from "../config/site";

const principles = [
  { icon: Eye, t: "Clarity", d: "Plain language, transparent scope and no surprises." },
  { icon: Sparkles, t: "Creativity", d: "Ideas that make brands memorable, not generic." },
  { icon: Code2, t: "Engineering quality", d: "Clean, tested, maintainable code built to last." },
  { icon: ShieldCheck, t: "Reliability", d: "We commit to realistic timelines — and meet them." },
  { icon: Users, t: "Collaboration", d: "You're part of the process at every stage." },
];


export default function About() {
  useSeo("About Us", `Learn how ${site.name} combines design, engineering and strategy to build digital products that work.`);
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero eyebrow="About Us" title={<>Good technology solves problems. <em className="text-accent">Great</em> technology creates possibilities.</>} intro={site.statement} />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading eyebrow="Who we are" title="A studio for practical, beautiful technology." /></div>
          <div className="reveal space-y-6 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
            <p>{site.name} is a digital solutions and IT consulting agency. We help businesses, institutions and event teams turn ideas into websites, applications and brand experiences that people enjoy using.</p>
            <p>Our philosophy is simple: understand the problem before writing a line of code, design with the end user in mind, and build things that are easy to maintain and grow.</p>
          </div>
        </div>
      </section>

      <section className="bg-night py-20 text-ivory sm:py-28">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {[{ icon: Target, t: "Our Mission", d: "To make high-quality design and engineering accessible to businesses of every size — from local cafés to growing enterprises." }, { icon: Compass, t: "Our Vision", d: "To be the trusted digital partner that businesses return to whenever they're ready to take the next step." }].map(({ icon: I, t, d }) => (
            <div key={t} className="reveal rounded-2xl border border-white/10 p-8 sm:p-10">
              <I className="text-accent" size={28} strokeWidth={1.5} />
              <h2 className="mt-8 text-3xl sm:text-4xl">{t}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Core principles" title="What guides every project." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {principles.map(({ icon: I, t, d }) => (
              <div key={t} className="reveal bg-ivory p-7">
                <I className="text-accent" size={24} strokeWidth={1.5} />
                <h3 className="mt-6 text-xl">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container-site">
          <SectionHeading eyebrow="Capabilities" title="Design, development and consulting — under one roof." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[{ icon: Palette, t: "Design", l: ["Brand identity", "UI / UX design", "Marketing creatives", "Event branding"] }, { icon: Code2, t: "Development", l: ["Websites & CMS", "Web applications", "APIs & integrations", "AI features"] }, { icon: Compass, t: "Consulting", l: ["Technology audits", "Architecture", "Cloud & automation", "Digital roadmaps"] }].map(({ icon: I, t, l }) => (
              <div key={t} className="reveal card p-8">
                <I className="text-accent" size={26} strokeWidth={1.5} />
                <h3 className="mt-6 text-3xl">{t}</h3>
                <ul className="mt-6 space-y-3 border-t border-line pt-6 text-[15px] text-muted">{l.map((x) => <li key={x}>— {x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="How we work" title="A clear path from idea to launch." />
          <div className="mt-14 space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="reveal grid items-baseline gap-4 border-t border-line pt-8 md:grid-cols-12">
                <span className="font-serif text-5xl italic text-accent md:col-span-2">{s.n}</span>
                <h3 className="text-3xl md:col-span-4">{s.t}</h3>
                <p className="text-lg text-muted md:col-span-6">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="reveal lg:col-span-5">
              <div className="reveal-img relative overflow-hidden rounded-3xl bg-sand shadow-[0_40px_80px_-50px_rgba(23,23,23,.5)]">
                <img src="/images/founder.png" alt="Debangshu Chatterjee, Founder of AIZenera" loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
              </div>
            </div>
            <div className="reveal lg:col-span-6 lg:col-start-7">
              <p className="eyebrow">The Founder</p>
              <h2 className="h-section mt-5">Debangshu Chatterjee</h2>
              <p className="mt-3 text-lg font-medium text-accent">Founder, {site.name}</p>
              <p className="mt-8 font-serif text-2xl leading-snug text-ink/80">
                “Every business deserves a digital presence that works as hard as they do.”
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Debangshu founded {site.name} to bring thoughtful design, solid engineering and practical technology advice together under one roof — helping businesses, institutions and event teams turn ideas into digital products that make a difference.
              </p>
              <a href={`mailto:${site.email}`} className="btn-outline mt-10">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Let's build something together." />
    </div>
  );
}
