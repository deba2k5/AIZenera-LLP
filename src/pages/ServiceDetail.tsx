import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useReveal, useSeo } from "../lib/hooks";
import { getService, services } from "../data/services";
import { PageHero, CTASection, ServiceCard } from "../components/ui";
import { steps } from "./Home";
import { List } from "./Services";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = getService(slug);
  useSeo(s?.title ?? "Not found", s?.short);
  const ref = useReveal<HTMLDivElement>();
  if (!s) return <NotFound />;
  const Icon = s.icon;
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <div ref={ref}>
      <PageHero eyebrow="Service" title={s.title} intro={s.intro}>
        <div className="flex flex-wrap gap-3">
          <Link to={`/contact?service=${s.slug}`} className="btn-primary">Start a Project <ArrowRight size={16} /></Link>
          {s.slug === "ai-courses" && <Link to="/courses" className="btn-accent">View Courses <ArrowRight size={16} /></Link>}
          <Link to="/services" className="btn-outline"><ArrowLeft size={16} /> All Services</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <p className="eyebrow">The problem</p>
            <p className="mt-6 font-serif text-3xl leading-snug">{s.problem}</p>
          </div>
          <div className="reveal lg:col-span-6 lg:col-start-7">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white"><Icon size={26} /></span>
            <p className="eyebrow mt-8">What we do</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.capabilities.map((c) => <div key={c} className="card px-5 py-4 text-[15px]">{c}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container-site grid gap-12 md:grid-cols-3">
          <div className="reveal"><List title="Deliverables" items={s.deliverables} /></div>
          <div className="reveal"><List title="Typical projects" items={s.projectTypes} /></div>
          <div className="reveal">
            <List title="Ideal for" items={s.clients} />
            <h3 className="mt-8 font-sans text-[11px] font-semibold uppercase tracking-label text-muted">Platforms we use</h3>
            <div className="mt-4 flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <p className="eyebrow reveal">Workflow</p>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((st) => (
              <div key={st.n} className="reveal border-t-2 border-ink pt-6">
                <span className="font-serif text-sm italic text-accent">{st.n}</span>
                <h3 className="mt-2 text-2xl">{st.t}</h3>
                <p className="mt-2 text-[15px] text-muted">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-4"><p className="eyebrow">FAQs</p><h2 className="h-section mt-5">Questions, answered.</h2></div>
          <div className="lg:col-span-7 lg:col-start-6">
            {s.faqs.map((f) => (
              <details key={f.q} className="reveal group border-b border-line py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}<Plus className="shrink-0 transition-transform duration-300 group-open:rotate-45" size={20} />
                </summary>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container-site">
          <p className="eyebrow reveal">Other services</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{others.map((o) => <ServiceCard key={o.slug} s={o} index={services.indexOf(o)} />)}</div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
