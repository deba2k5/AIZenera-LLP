import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useReveal, useSeo } from "../lib/hooks";
import { services } from "../data/services";
import { PageHero, CTASection } from "../components/ui";

export default function Services() {
  useSeo("Services", "Web development, WordPress, design, event branding, industry websites, IT consulting and AI automation.");
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero eyebrow="Services" title={<>Everything you need to <em className="text-accent">grow</em> online.</>} intro="Seven focused disciplines, one team. Pick a single service or combine them into a complete digital solution.">
        <div className="flex flex-wrap gap-2">
          {services.map((s) => <a key={s.slug} href={`#${s.slug}`} className="tag hover:border-ink">{s.title}</a>)}
        </div>
      </PageHero>

      {services.map((s, i) => {
        const Icon = s.icon;
        return (
          <section key={s.slug} id={s.slug} className={`scroll-mt-20 py-20 sm:py-24 ${i % 2 ? "bg-sand" : ""}`}>
            <div className="container-site grid gap-12 lg:grid-cols-12">
              <div className="reveal lg:col-span-5">
                <span className="font-serif text-sm italic text-muted">0{i + 1} / 0{services.length}</span>
                <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent"><Icon size={26} strokeWidth={1.6} /></span>
                <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{s.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to={`/services/${s.slug}`} className="btn-primary">Explore Service <ArrowRight size={16} /></Link>
                  <Link to={`/contact?service=${s.slug}`} className="btn-outline">Start an Inquiry</Link>
                </div>
              </div>
              <div className="reveal grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
                <List title="Deliverables" items={s.deliverables} />
                <List title="Typical projects" items={s.projectTypes} />
                <List title="Ideal for" items={s.clients} />
                <div>
                  <h3 className="font-sans text-[11px] font-semibold uppercase tracking-label text-muted">Platforms we use</h3>
                  <div className="mt-4 flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <CTASection />
    </div>
  );
}

export function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-sans text-[11px] font-semibold uppercase tracking-label text-muted">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((x) => <li key={x} className="flex gap-2.5 text-[15px]"><Check size={16} className="mt-1 shrink-0 text-accent" />{x}</li>)}
      </ul>
    </div>
  );
}
