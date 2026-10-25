import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal, useSeo } from "../lib/hooks";
import { industries } from "../data/industries";
import { getService } from "../data/services";
import { PageHero, IndustryArt, CTASection } from "../components/ui";
import { List } from "./Services";

export default function Industries() {
  useSeo("Industries", "Digital solutions for cafés, schools, enterprises, events, startups and local businesses.");
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero eyebrow="Industries" title={<>Built around <em className="text-accent">your</em> industry.</>} intro="We tailor every project to the customers, workflows and expectations of your sector.">
        <div className="flex flex-wrap gap-2">{industries.map((i) => <a key={i.slug} href={`#${i.slug}`} className="tag hover:border-ink">{i.title}</a>)}</div>
      </PageHero>
      {industries.map((ind, idx) => (
        <section key={ind.slug} id={ind.slug} className={`scroll-mt-20 py-20 sm:py-24 ${idx % 2 ? "bg-sand" : ""}`}>
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div className={`reveal group ${idx % 2 ? "lg:order-2" : ""}`}>
              <IndustryArt ind={ind} className="aspect-[4/3] rounded-3xl" />
            </div>
            <div className="reveal">
              <span className="font-serif text-sm italic text-muted">0{idx + 1}</span>
              <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">{ind.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{ind.challenge}</p>
              <div className="mt-8"><List title="What you need" items={ind.needs} /></div>
              <h3 className="mt-8 font-sans text-[11px] font-semibold uppercase tracking-label text-muted">Recommended services</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {ind.services.map((sl) => { const s = getService(sl); return s ? <Link key={sl} to={`/services/${sl}`} className="tag hover:border-accent hover:text-accent">{s.title}</Link> : null; })}
              </div>
              <Link to="/contact" className="btn-primary mt-10">Discuss your project <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      ))}
      <CTASection />
    </div>
  );
}
