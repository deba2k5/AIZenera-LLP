import { Link } from "react-router-dom";
import { ArrowRight, Check, GraduationCap, Briefcase, Users, School } from "lucide-react";
import { useReveal, useSeo } from "../lib/hooks";
import { courses } from "../data/courses";
import { PageHero, SectionHeading, CTASection } from "../components/ui";
import { site } from "../config/site";

const audiences = [
  { icon: GraduationCap, t: "Students", d: "Build in-demand AI skills alongside your studies." },
  { icon: Briefcase, t: "Professionals", d: "Use AI to work faster and stay ahead in your career." },
  { icon: Users, t: "Teams", d: "Upskill your whole team with practical, job-focused training." },
  { icon: School, t: "Institutions", d: "Workshops and programs for colleges and schools." },
];

const approach = [
  { n: "01", t: "Learn the concepts", d: "Clear explanations without unnecessary jargon." },
  { n: "02", t: "Build real projects", d: "Hands-on exercises using real tools and real problems." },
  { n: "03", t: "Apply it to your work", d: "Take away workflows and projects you can use right away." },
];

const levelTone: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-rose-50 text-rose-700",
  "All levels": "bg-accent-soft text-accent-dark",
};

export default function Courses() {
  useSeo("AI Courses", `Practical AI courses and training by ${site.name} — for students, professionals, teams and institutions.`);
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="AI Courses"
        title={<>Learn AI by <em className="text-accent">building</em> with it.</>}
        intro="Practical, hands-on AI courses for students, professionals and teams — from your first prompt to shipping AI-powered apps."
      >
        <div className="flex flex-wrap gap-3">
          <a href="#courses" className="btn-primary">Explore Courses <ArrowRight size={16} /></a>
          <Link to="/contact?service=ai-courses" className="btn-outline">Enquire Now</Link>
        </div>
      </PageHero>

      <section className="border-b border-line">
        <div className="container-site grid sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: I, t, d }, i) => (
            <div key={t} className={`reveal py-10 sm:px-8 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${i % 2 ? "sm:border-l sm:border-line lg:border-l" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${i === 2 ? "border-b border-line sm:border-b-0" : ""}`}>
              <I className="text-accent" size={24} strokeWidth={1.5} />
              <h2 className="mt-5 text-2xl">{t}</h2>
              <p className="mt-2 text-[15px] text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="section scroll-mt-20">
        <div className="container-site">
          <SectionHeading eyebrow="Course Tracks" title={<>Pick your <em>path</em>.</>} intro="Each track can be taken on its own or combined into a complete learning journey." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => {
              const I = c.icon;
              return (
                <article key={c.slug} className="reveal group flex flex-col rounded-2xl border border-line bg-white/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(23,23,23,.45)] sm:p-8" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-ivory transition-colors duration-500 group-hover:bg-accent"><I size={22} strokeWidth={1.75} /></span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${levelTone[c.level]}`}>{c.level}</span>
                  </div>
                  <h3 className="mt-7 text-2xl leading-snug">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.summary}</p>
                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                    {c.topics.map((t) => <li key={t} className="flex gap-2.5 text-[15px]"><Check size={16} className="mt-1 shrink-0 text-accent" />{t}</li>)}
                  </ul>
                  <p className="mt-6 text-sm text-muted"><span className="font-semibold text-ink">For:</span> {c.audience}</p>
                  <Link to="/contact?service=ai-courses" className="link-arrow mt-6">Enquire about this course <ArrowRight size={16} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-night text-ivory">
        <div className="container-site">
          <SectionHeading light eyebrow="How you'll learn" title={<>Less theory. More <em>doing</em>.</>} />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {approach.map((s) => (
              <div key={s.n} className="reveal border-t border-white/15 pt-8">
                <span className="font-serif text-4xl italic text-accent">{s.n}</span>
                <h3 className="mt-4 text-2xl">{s.t}</h3>
                <p className="mt-2 text-white/60">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Schedules & fees" title="Batches, dates and fees on request." intro="Tell us which course interests you and whether it's for you, your team or your institution — we'll share upcoming batches, formats and fees." />
          </div>
          <div className="reveal flex flex-wrap gap-3 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Link to="/contact?service=ai-courses" className="btn-accent">Enquire Now <ArrowRight size={16} /></Link>
            <a href={`mailto:${site.email}?subject=AI%20Courses%20enquiry`} className="btn-outline">Email Us</a>
          </div>
        </div>
      </section>

      <CTASection title="Ready to learn AI the practical way?" text="Join a course or bring a custom AI program to your team or institution." />
    </div>
  );
}
