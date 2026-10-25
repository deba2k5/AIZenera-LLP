import { useState } from "react";
import { Search } from "lucide-react";
import { useReveal, useSeo } from "../lib/hooks";
import { projects, projectCategories } from "../data/projects";
import { PageHero, ProjectCard, CTASection } from "../components/ui";

export default function Work() {
  useSeo("Our Work", "Websites and digital products designed and built by AIZenera.");
  const ref = useReveal<HTMLDivElement>();
  const [cat, setCat] = useState<(typeof projectCategories)[number]>("All");
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const list = projects.filter(
    (p) => (cat === "All" || p.category === cat) && (!query || [p.name, p.industry, p.description, ...p.services].join(" ").toLowerCase().includes(query))
  );

  return (
    <div ref={ref}>
      <PageHero eyebrow="Our Work" title={<>Selected work. <em className="text-accent">Real-world</em> thinking.</>} intro="Websites and digital products we have designed and built for our clients. More case studies are added as projects launch." />
      <section className="section !pt-14">
        <div className="container-site">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
              {projectCategories.map((c) => (
                <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm transition-colors ${cat === c ? "bg-ink text-ivory" : "border border-line bg-white/60 hover:border-ink"}`}>{c}</button>
              ))}
            </div>
            <label className="relative w-full md:w-72">
              <span className="sr-only">Search projects</span>
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className="field !rounded-full !pl-10" />
            </label>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3" key={cat + query}>
            {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
          {list.length === 0 && <p className="py-20 text-center text-muted">{query ? "No projects match your search." : `New ${cat.toLowerCase()} projects coming soon.`}</p>}
        </div>
      </section>
      <CTASection />
    </div>
  );
}
