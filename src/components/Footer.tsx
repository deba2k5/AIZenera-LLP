import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import Logo from "./Logo";
import { site } from "../config/site";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { navLinks } from "./Navbar";

export default function Footer() {
  const socials = site.socials.filter((s) => s.url);
  return (
    <footer className="bg-night text-white/60">
      <div className="container-site pt-20">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
            Let’s build what’s <em className="text-accent">next</em>.
          </h2>
          <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-3 text-lg text-ivory sm:text-2xl">
            <Mail size={22} className="text-accent" />
            <span className="border-b border-white/20 pb-1 transition-colors group-hover:border-accent">{site.email}</span>
            <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed">{site.tagline}</p>
          </div>
          <FooterCol title="Company" className="lg:col-span-2">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-ivory">{l.label}</Link></li>
            ))}
          </FooterCol>
          <FooterCol title="Services" className="lg:col-span-3">
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-ivory">{s.title}</Link></li>
            ))}
          </FooterCol>
          <FooterCol title="Industries" className="lg:col-span-3">
            {industries.map((i) => (
              <li key={i.slug}><Link to={`/industries#${i.slug}`} className="hover:text-ivory">{i.title}</Link></li>
            ))}
            <li className="pt-4 text-[11px] font-semibold uppercase tracking-label text-white/40">Contact</li>
            <li><a href={`mailto:${site.email}`} className="hover:text-ivory">{site.email}</a></li>
            {site.phone && <li><a href={`tel:${site.phone}`} className="hover:text-ivory">{site.phone}</a></li>}
            {site.location && <li>{site.location}</li>}
            {socials.map((s) => (
              <li key={s.label}><a href={s.url} target="_blank" rel="noreferrer" className="hover:text-ivory">{s.label}</a></li>
            ))}
          </FooterCol>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-ivory">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ivory">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-label text-white/40">{title}</h3>
      <ul className="space-y-3 text-[15px]">{children}</ul>
    </div>
  );
}
