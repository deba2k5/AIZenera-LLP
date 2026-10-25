import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { useReveal, useSeo } from "../lib/hooks";
import { getProject, projects } from "../data/projects";
import { ProjectCover, ProjectCard, CTASection } from "../components/ui";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug);
  useSeo(p?.name ?? "Not found", p?.description);
  const ref = useReveal<HTMLDivElement>();
  if (!p) return <NotFound />;
  const more = projects.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <div ref={ref}>
      <section className="container-site pb-12 pt-12 sm:pt-16">
        <Link to="/work" className="link-arrow text-muted hover:text-ink"><ArrowLeft size={16} /> All work</Link>
        {p.sample && (
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-2 text-sm text-accent-dark"><Info size={16} /> Sample concept — not a real client project</p>
        )}
        <p className="eyebrow mt-8">{p.industry}</p>
        <h1 className="h-display mt-5 max-w-4xl animate-rise">{p.name}</h1>
        <p className="lead mt-6 max-w-2xl">{p.description}</p>
      </section>
      <div className="container-site">
        <div className="group overflow-hidden rounded-3xl border border-line bg-sand"><ProjectCover p={p} className="aspect-[16/9]" /></div>
      </div>
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <aside className="reveal space-y-6 lg:col-span-3">
            <div><p className="eyebrow">Client</p><p className="mt-2">{p.client}</p></div>
            <div><p className="eyebrow">Industry</p><p className="mt-2">{p.industry}</p></div>
            {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="btn-primary">Visit website</a>}
            <div><p className="eyebrow">Category</p><p className="mt-2">{p.category}</p></div>
            <div><p className="eyebrow">Services</p><div className="mt-3 flex flex-wrap gap-2">{p.services.map((s) => <span key={s} className="tag">{s}</span>)}</div></div>
          </aside>
          <div className="space-y-12 lg:col-span-8 lg:col-start-5">
            {[["The challenge", p.challenge], ["Our solution", p.solution], ["Outcome", p.outcome]].map(([t, d]) => (
              <div key={t} className="reveal border-t border-line pt-8">
                <h2 className="text-3xl">{t}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {more.length > 0 && <section className="section border-t border-line">
        <div className="container-site">
          <p className="eyebrow">More work</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">{more.map((m) => <ProjectCard key={m.slug} p={m} />)}</div>
        </div>
      </section>}
      <CTASection />
    </div>
  );
}
