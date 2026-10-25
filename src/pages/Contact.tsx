import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { useSeo } from "../lib/hooks";
import { site, budgets, timelines } from "../config/site";
import { services } from "../data/services";
import { industries } from "../data/industries";

type Fields = { name: string; email: string; company: string; phone: string; service: string; industry: string; budget: string; timeline: string; message: string; consent: boolean };
type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  useSeo("Contact", `Start a project with ${site.name}. Tell us what you're planning.`);
  const [params] = useSearchParams();
  const pre = services.find((s) => s.slug === params.get("service"))?.title ?? "";
  const [f, setF] = useState<Fields>({ name: "", email: "", company: "", phone: "", service: pre, industry: "", budget: "", timeline: "", message: "", consent: false });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [botField, setBotField] = useState("");

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value });

  function validate() {
    const e: typeof errors = {};
    if (f.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address.";
    if (f.phone && !/^[+\d\s()-]{7,20}$/.test(f.phone)) e.phone = "Please enter a valid phone number.";
    if (!f.service) e.service = "Please choose a service.";
    if (f.message.trim().length < 20) e.message = "Please describe your project (at least 20 characters).";
    if (!f.consent) e.consent = "Please accept the privacy policy to continue.";
    setErrors(e);
    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      document.getElementById(`f-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    if (botField) return; // spam honeypot
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New project inquiry from ${f.name}`,
          _template: "table",
          _captcha: "false",
          Name: f.name, Email: f.email, Company: f.company || "—", Phone: f.phone || "—",
          Service: f.service, Industry: f.industry || "—", Budget: f.budget || "—", Timeline: f.timeline || "—",
          Message: f.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false || data.success === "false") throw new Error(data.message || "Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Fields) => errors[k] && <p id={`e-${k}`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"><AlertCircle size={14} />{errors[k]}</p>;
  const a11y = (k: keyof Fields) => ({ id: `f-${k}`, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="container-site relative grid gap-14 py-16 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow animate-rise">Contact</p>
          <h1 className="h-display mt-6 animate-rise">Let’s make something <em className="text-accent">meaningful</em>.</h1>
          <p className="lead mt-7 animate-rise">Have a project in mind, or just exploring options? Share a few details and we’ll get back to you with next steps.</p>

          <ul className="mt-10 space-y-4">
            <li><a href={`mailto:${site.email}`} className="group flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ivory"><Mail size={18} /></span><span className="text-lg group-hover:text-accent">{site.email}</span></a></li>
            {site.phone && <li className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ivory"><Phone size={18} /></span><a href={`tel:${site.phone}`} className="text-lg">{site.phone}</a></li>}
            {site.location && <li className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ivory"><MapPin size={18} /></span><span className="text-lg">{site.location}</span></li>}
          </ul>

          <div className="mt-12 rounded-2xl border border-line bg-white/60 p-7">
            <p className="eyebrow">What happens next</p>
            <ol className="mt-5 space-y-4">
              {["We review your inquiry and reply by email.", "We schedule a short discovery call.", "You receive a proposal with scope, timeline and cost."].map((t, i) => (
                <li key={t} className="flex gap-4"><span className="font-serif text-lg italic text-accent">0{i + 1}</span><span className="text-[15px] text-ink/80">{t}</span></li>
              ))}
            </ol>
          </div>
        </div>

        <div id="inquiry" className="scroll-mt-24 lg:col-span-7">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgba(23,23,23,.4)] sm:p-10">
            {status === "success" ? (
              <div className="py-16 text-center" role="status">
                <CheckCircle2 size={56} strokeWidth={1.4} className="mx-auto text-accent" />
                <h2 className="mt-6 text-4xl">Thank you, {f.name.split(" ")[0]}.</h2>
                <p className="mx-auto mt-4 max-w-md text-lg text-muted">Your inquiry has been sent. We’ll reply to <strong className="text-ink">{f.email}</strong> soon.</p>
                <Link to="/" className="btn-outline mt-10">Back to home</Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <h2 className="text-3xl">Project inquiry</h2>
                <input type="text" tabIndex={-1} autoComplete="off" value={botField} onChange={(e) => setBotField(e.target.value)} className="hidden" aria-hidden="true" />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div><label className="field-label" htmlFor="f-name">Full name *</label><input className="field" autoComplete="name" value={f.name} onChange={set("name")} {...a11y("name")} />{err("name")}</div>
                  <div><label className="field-label" htmlFor="f-email">Business email *</label><input className="field" type="email" autoComplete="email" value={f.email} onChange={set("email")} {...a11y("email")} />{err("email")}</div>
                  <div><label className="field-label" htmlFor="f-company">Company / organization</label><input className="field" autoComplete="organization" value={f.company} onChange={set("company")} {...a11y("company")} /></div>
                  <div><label className="field-label" htmlFor="f-phone">Phone <span className="font-normal text-muted">(optional)</span></label><input className="field" type="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} {...a11y("phone")} />{err("phone")}</div>
                  <div><label className="field-label" htmlFor="f-service">Service required *</label>
                    <select className="field" value={f.service} onChange={set("service")} {...a11y("service")}><option value="">Select a service</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}<option>Not sure yet</option></select>{err("service")}</div>
                  <div><label className="field-label" htmlFor="f-industry">Industry</label>
                    <select className="field" value={f.industry} onChange={set("industry")} {...a11y("industry")}><option value="">Select an industry</option>{industries.map((i) => <option key={i.slug}>{i.title}</option>)}<option>Other</option></select></div>
                  <div><label className="field-label" htmlFor="f-budget">Estimated budget</label>
                    <select className="field" value={f.budget} onChange={set("budget")} {...a11y("budget")}><option value="">Select a range</option>{budgets.map((b) => <option key={b}>{b}</option>)}</select></div>
                  <div><label className="field-label" htmlFor="f-timeline">Preferred timeline</label>
                    <select className="field" value={f.timeline} onChange={set("timeline")} {...a11y("timeline")}><option value="">Select a timeline</option>{timelines.map((t) => <option key={t}>{t}</option>)}</select></div>
                </div>
                <div><label className="field-label" htmlFor="f-message">Project description *</label><textarea className="field min-h-[140px] resize-y" value={f.message} onChange={set("message")} placeholder="What are you building, who is it for, and what does success look like?" {...a11y("message")} />{err("message")}</div>
                <div>
                  <label className="flex items-start gap-3 text-[15px] text-ink/80">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-[#365CFF]" checked={f.consent} onChange={set("consent")} {...a11y("consent")} />
                    <span>I agree to the <Link to="/privacy" className="underline hover:text-accent">privacy policy</Link> and consent to being contacted about my inquiry.</span>
                  </label>
                  {err("consent")}
                </div>
                {status === "error" && (
                  <div role="alert" className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>Sorry, your message couldn’t be sent. Please try again, or email us directly at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</span>
                  </div>
                )}
                <button type="submit" disabled={status === "sending"} className="btn-accent w-full !py-4 disabled:opacity-60 sm:w-auto">
                  {status === "sending" ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <>Send Inquiry <ArrowRight size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
