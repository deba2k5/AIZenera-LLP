import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Service } from "../data/services";
import type { Industry } from "../data/industries";
import type { Project } from "../data/projects";

export function SectionHeading({ eyebrow, title, intro, center = false, light = false }: { eyebrow?: string; title: React.ReactNode; intro?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`reveal max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${light ? "!text-white/50" : ""}`}>{eyebrow}</p>}
      <h2 className={`h-section mt-5 ${light ? "text-ivory" : ""}`}>{title}</h2>
      {intro && <p className={`lead mt-6 ${light ? "!text-white/60" : ""}`}>{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: React.ReactNode; intro?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-accent/15 via-[#8E5BFF]/10 to-transparent blur-3xl" />
      <div className="container-site relative pb-20 pt-16 sm:pb-24 sm:pt-24">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="h-display mt-6 max-w-5xl animate-rise [animation-delay:.08s]">{title}</h1>
        {intro && <p className="lead mt-8 max-w-2xl animate-rise [animation-delay:.16s]">{intro}</p>}
        {children && <div className="mt-10 animate-rise [animation-delay:.24s]">{children}</div>}
      </div>
    </section>
  );
}

export function ServiceCard({ s, index }: { s: Service; index: number }) {
  const Icon = s.icon;
  return (
    <Link
      to={`/services/${s.slug}`}
      className="reveal group relative flex h-full flex-col rounded-2xl border border-line bg-white/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:shadow-[0_30px_60px_-30px_rgba(23,23,23,.5)] sm:p-8"
      style={{ transitionDelay: `${(index % 3) * 60}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
          <Icon size={22} strokeWidth={1.75} />
        </span>
        <span className="font-serif text-sm italic text-muted transition-colors group-hover:text-white/40">0{index + 1}</span>
      </div>
      <h3 className="mt-8 text-2xl leading-snug transition-colors group-hover:text-ivory">{s.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted transition-colors group-hover:text-white/60">{s.short}</p>
      <span className="link-arrow mt-8 transition-colors group-hover:text-ivory">
        Explore Service <ArrowRight size={16} />
      </span>
    </Link>
  );
}

export function IndustryArt({ ind, className = "" }: { ind: Industry; className?: string }) {
  const Icon = ind.icon;
  if (ind.image) {
    return (
      <div className={`relative overflow-hidden bg-night ${className}`}>
        <img src={ind.image} alt={`Example website design for ${ind.title.toLowerCase()}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow backdrop-blur">
          <Icon size={18} strokeWidth={1.75} />
        </span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${ind.tone} ${className}`} role="img" aria-label={`${ind.title} illustration`}>
      <div className="grain absolute inset-0 opacity-20 mix-blend-overlay" />
      <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full border border-white/30" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-white/20" />
      <Icon className="absolute left-6 top-6 text-white/90" size={34} strokeWidth={1.4} />
      <Icon className="absolute -bottom-6 right-6 text-white/15 transition-transform duration-700 group-hover:scale-110" size={150} strokeWidth={1} />
    </div>
  );
}

export function IndustryCard({ ind }: { ind: Industry }) {
  return (
    <Link to={`/industries#${ind.slug}`} className="reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-white/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(23,23,23,.45)]">
      <IndustryArt ind={ind} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl">{ind.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{ind.short}</p>
        <span className="link-arrow mt-6">Learn More <ArrowRight size={16} /></span>
      </div>
    </Link>
  );
}

/** Custom browser-mockup cover so sample projects look designed without stock photos. */
export function ProjectCover({ p, className = "" }: { p: Project; className?: string }) {
  const { bg, fg, accent } = p.palette;
  if (p.image) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, ${accent}26, ${bg}14)` }}>
        <div className="absolute inset-x-[6%] top-[9%] bottom-0 flex flex-col overflow-hidden rounded-t-xl bg-white shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
          <div className="flex shrink-0 items-center gap-1.5 border-b border-line bg-[#F3F2EE] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" /><span className="h-2 w-2 rounded-full bg-[#FEBC2E]" /><span className="h-2 w-2 rounded-full bg-[#28C840]" />
            <span className="ml-3 h-3 flex-1 rounded-full bg-black/5" />
          </div>
          <img src={p.image} alt={`${p.name} website homepage`} loading="lazy" className="min-h-0 w-full flex-1 object-cover object-top" />
        </div>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, ${accent}22, ${bg}10)` }} role="img" aria-label={`${p.name} concept mockup`}>
      <div className="absolute inset-x-[8%] top-[12%] bottom-0 overflow-hidden rounded-t-xl shadow-2xl transition-transform duration-700 group-hover:-translate-y-2" style={{ background: bg, color: fg }}>
        <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: `${fg}12` }}>
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" /><span className="h-2 w-2 rounded-full bg-[#FEBC2E]" /><span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="ml-3 h-3 flex-1 rounded-full" style={{ background: `${fg}14` }} />
        </div>
        <div className="p-[6%]">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest opacity-80">
            <span>{p.name.split(" ")[0]}</span>
            <span className="flex gap-2 opacity-60"><i className="h-1 w-6 rounded" style={{ background: fg }} /><i className="h-1 w-6 rounded" style={{ background: fg }} /><i className="h-1 w-6 rounded" style={{ background: fg }} /></span>
          </div>
          {p.layout === "dashboard" ? (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg p-2" style={{ background: `${fg}0D` }}>
                  <div className="h-1.5 w-8 rounded" style={{ background: `${fg}55` }} />
                  <div className="mt-2 font-serif text-lg">{["2.4k", "86%", "312"][i]}</div>
                </div>
              ))}
              <div className="col-span-3 flex h-20 items-end gap-1.5 rounded-lg p-2" style={{ background: `${fg}0D` }}>
                {[40, 65, 50, 80, 60, 90, 72, 95, 70, 85].map((h, i) => (
                  <span key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i % 3 === 0 ? accent : `${accent}66` }} />
                ))}
              </div>
            </div>
          ) : p.layout === "brand" ? (
            <div className="mt-6 flex items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full font-serif text-3xl italic" style={{ background: accent, color: bg }}>{p.name[0]}</div>
              <div>
                <div className="font-serif text-2xl leading-none">{p.name}</div>
                <div className="mt-3 flex gap-1.5">{[accent, fg, `${accent}88`, `${fg}55`].map((c, i) => <span key={i} className="h-4 w-4 rounded-full" style={{ background: c }} />)}</div>
              </div>
            </div>
          ) : p.layout === "grid" ? (
            <div className="mt-4">
              <div className="font-serif text-xl leading-tight">Shaping curious minds.</div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => <div key={i} className="h-14 rounded-md" style={{ background: i === 1 ? accent : `${fg}14` }} />)}
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <div className="max-w-[70%] font-serif text-2xl leading-tight">Slow mornings, great coffee.</div>
              <div className="mt-4 inline-block rounded-full px-3 py-1 text-[10px] font-semibold" style={{ background: accent, color: "#fff" }}>View menu</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link to={`/work/${p.slug}`} className="reveal group block">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-sand">
        <ProjectCover p={p} className="aspect-[4/3]" />
        {p.sample && <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur">Sample concept</span>}
        <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100"><ArrowUpRight size={18} /></span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-label text-muted">{p.industry}</p>
          <h3 className="mt-2 text-2xl transition-colors group-hover:text-accent">{p.name}</h3>
        </div>
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">{p.services.map((s) => <span key={s} className="tag">{s}</span>)}</div>
      <span className="link-arrow mt-5">View Project <ArrowRight size={16} /></span>
    </Link>
  );
}

export function CTASection({ title = "Have an idea worth building?", text = "Tell us what you’re planning. We’ll help you find the right digital solution." }: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-night text-ivory">
      <img src="/images/hero.jpg" alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom opacity-70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/60 to-night/30" />
      <div className="container-site section reveal text-center">
        <p className="eyebrow justify-center !text-white/60">Start a conversation</p>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-accent">Start Your Project <ArrowRight size={16} /></Link>
          <Link to="/contact#inquiry" className="btn-ghost-light">Discuss Your Requirements</Link>
        </div>
      </div>
    </section>
  );
}
