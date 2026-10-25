import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal, useSeo } from "../lib/hooks";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { projects, projectCategories } from "../data/projects";
import { SectionHeading, ServiceCard, IndustryCard, ProjectCard, CTASection } from "../components/ui";
import { site } from "../config/site";
import { SplitText, Parallax, Marquee } from "../lib/motion";

export const steps = [
  { n: "01", t: "Discover", d: "Understand the client, audience, objectives, requirements, and budget." },
  { n: "02", t: "Strategize & Design", d: "Define the approach, sitemap, user journeys, wireframes, and visual direction." },
  { n: "03", t: "Build & Refine", d: "Develop the solution, test functionality, review feedback, and optimize performance." },
  { n: "04", t: "Launch & Support", d: "Deploy the project, provide handover documentation, and offer ongoing support where agreed." },
];

export default function Home() {
  useSeo("", site.statement);
  const ref = useReveal<HTMLDivElement>();
  const [cat, setCat] = useState<(typeof projectCategories)[number]>("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat).slice(0, 3);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#8E5BFF]/10 blur-3xl animate-[float_16s_ease-in-out_infinite]" />
        <div className="container-site grid items-center gap-12 pb-16 pt-10 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="lg:col-span-6">
            <p className="eyebrow animate-rise [animation-delay:.05s]">Digital Strategy · Design · Technology</p>
            <h1 className="reveal h-display mt-5">
              <SplitText delay={150} step={70}>Your next big idea deserves a <em className="text-accent">better</em> digital home.</SplitText>
            </h1>
            <p className="lead mt-7 max-w-xl animate-rise [animation-delay:.18s]">
              We design and engineer websites, web applications, brand experiences and AI-powered systems — and advise on the technology that ties them together.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:.26s]">
              <Link to="/contact" className="btn-primary">Start a Project <ArrowUpRight size={16} /></Link>
              <a href="#services" className="btn-outline">Discover What We Do</a>
            </div>
          </div>

          <div className="relative animate-rise [animation-delay:.2s] lg:col-span-6">
            <div className="reveal-img relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(23,23,23,.55)] sm:aspect-[16/11]">
              <Parallax speed={0.1}>
                <img src="/images/hero.jpg" alt="A person working on a laptop on a hilltop beneath a vast glowing screen at dusk" className="h-full w-full object-cover" fetchPriority="high" />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-white/90 sm:text-xl">“Where ideas meet the screen.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TICKER */}
      <section aria-label="Services we offer" className="border-y border-line py-5 font-serif text-3xl italic text-ink sm:py-7 sm:text-5xl">
        <Marquee items={services.map((s) => s.title.replace(" & Digital Promotion", "").replace("Website ", ""))} />
      </section>

      {/* CAPABILITIES STRIP */}
      <section id="capabilities" className="bg-night text-ivory">
        <div className="container-site grid grid-cols-2 lg:grid-cols-4">
          {[["01", "Web Development", "Fast, scalable builds"], ["02", "Creative Design", "Identity that stands out"], ["03", "IT Consulting", "Clear technical direction"], ["04", "Digital Innovation", "AI & automation"]].map(([n, t, d], i) => (
            <div key={t} className={`py-8 sm:py-10 ${i % 2 ? "pl-6 sm:pl-10" : "pr-6"} ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-10" : ""} ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""} ${i % 2 ? "border-l border-white/10" : ""}`}>
              <p className="text-[11px] uppercase tracking-label text-white/40">{n}</p>
              <p className="mt-2 font-serif text-xl sm:text-2xl">{t}</p>
              <p className="mt-1 text-sm text-white/50">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="About Us" title={<>Technology meets <em>thoughtful</em> design.</>} />
            <p className="reveal mt-8 max-w-lg font-serif text-2xl leading-snug text-ink/80">
              We believe the best digital products are equal parts engineering and empathy — built for real people, real goals and real budgets.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-16">
            <div className="reveal-img relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-black">
              <Parallax speed={0.14}>
                <img src="/images/about.jpg" alt="Two dotted hands reaching toward a projects folder" loading="lazy" className="h-full w-full object-cover" />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <p className="font-serif text-2xl italic">Engineering × Design × Strategy</p>
              </div>
            </div>
            <p className="reveal text-lg leading-relaxed text-muted">
              {site.name} brings engineering, design, business strategy and technology under one roof. We listen first, simplify complex problems, and deliver solutions that are fast, reliable and easy to grow — whether it’s a café’s first website or an enterprise integration.
            </p>
            <Link to="/about" className="link-arrow reveal mt-8 border-b border-ink pb-1">More About Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section scroll-mt-20 bg-sand">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="What We Do" title={<>One digital partner. <em>Multiple</em> ways to grow.</>} />
            <Link to="/services" className="btn-outline reveal shrink-0">All Services <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
            <Link to="/contact" className="reveal group flex flex-col justify-between rounded-2xl bg-accent p-8 text-white transition-colors hover:bg-accent-dark sm:col-span-2 lg:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-label text-white/70">Not sure where to start?</p>
              <p className="mt-6 max-w-md font-serif text-3xl leading-tight sm:text-4xl">Tell us the problem — we’ll recommend the right solution.</p>
              <span className="mt-8 inline-flex items-center gap-2 font-medium">Book a free consultation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Industries" title={<>Built around your <em>industry</em>.</>} intro="Every sector has its own customers, workflows and expectations. We design for the details that matter in yours." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => <IndustryCard key={ind.slug} ind={ind} />)}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section border-t border-line">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Featured Work" title={<>Selected work. <em>Real-world</em> thinking.</>} intro="A look at websites and digital products we have designed and built for our clients." />
            <div className="reveal flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
              {projectCategories.map((c) => (
                <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm transition-colors ${cat === c ? "bg-ink text-ivory" : "border border-line bg-white/60 hover:border-ink"}`}>{c}</button>
              ))}
            </div>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => <ProjectCard key={p.slug} p={p} />)}
            {shown.length === 0 && <p className="py-12 text-muted md:col-span-2 lg:col-span-3">New {cat.toLowerCase()} projects coming soon.</p>}
          </div>
          <div className="mt-14 text-center"><Link to="/work" className="btn-outline">View All Work <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-sand">
        <div className="container-site">
          <SectionHeading eyebrow="Our Process" title={<>From first conversation to <em>final launch</em>.</>} />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-line lg:block"><div className="reveal h-full origin-left bg-accent transition-transform duration-[2000ms] [&:not(.is-visible)]:scale-x-0" /></div>
            {steps.map((s, i) => (
              <li key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 150}ms` }}>
                <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink bg-ivory text-sm font-semibold">{s.n}</span>
                <h3 className="mt-6 text-2xl">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
