/**
 * Runs after `vite build`. Writes one HTML file per page with its own title,
 * description, canonical URL and readable text, so search engines and link
 * previews see real content without running JavaScript. Also writes
 * sitemap.xml and a 404.html.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE = "https://aizenera.com";
const BRAND = "AIZenera";
const dist = "dist";
const template = readFileSync(join(dist, "index.html"), "utf8");
const read = (p) => readFileSync(p, "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Pull page data straight from the source files so this never goes out of date.
const services = [...read("src/data/services.ts").matchAll(/slug: "([^"]+)",\s*title: "([^"]+)",\s*short: "([^"]+)"/g)].map((m) => ({ slug: m[1], title: m[2], text: m[3] }));
const projects = [...read("src/data/projects.ts").matchAll(/slug: "([^"]+)",\s*name: "([^"]+)",[\s\S]*?description: "([^"]+)"/g)].map((m) => ({ slug: m[1], title: m[2], text: m[3] }));
const courses = [...read("src/data/courses.ts").matchAll(/title: "([^"]+)"/g)].map((m) => m[1]);

const homeTitle = `${BRAND} — Web Development, Design, AI & IT Consulting Agency`;
const pages = [
  { path: "/", title: homeTitle, h1: "Your next big idea deserves a better digital home.", desc: "AIZenera is a digital solutions and IT consulting agency building websites, web apps, brand identities, AI solutions and AI courses that move businesses forward.", priority: "1.0" },
  { path: "/about", title: `About Us | ${BRAND}`, h1: "About AIZenera", desc: "Learn how AIZenera, founded by Debangshu Chatterjee, combines design, engineering and strategy to build digital products that work.", priority: "0.8" },
  { path: "/services", title: `Services | ${BRAND}`, h1: "AIZenera Services", desc: "Web development, WordPress, creative design, event branding, industry websites, IT consulting, AI automation and AI courses by AIZenera.", list: services.map((s) => s.title), priority: "0.9" },
  { path: "/industries", title: `Industries | ${BRAND}`, h1: "Industries we serve", desc: "Digital solutions from AIZenera for cafés, restaurants, schools, enterprises, events, startups and local businesses.", priority: "0.7" },
  { path: "/work", title: `Our Work | ${BRAND}`, h1: "Our Work", desc: "Websites and digital products designed and built by AIZenera.", list: projects.map((p) => p.title), priority: "0.8" },
  { path: "/courses", title: `AI Courses | ${BRAND}`, h1: "AI Courses by AIZenera", desc: "Practical AI courses and training by AIZenera — for students, professionals, teams and institutions.", list: courses, priority: "0.9" },
  { path: "/contact", title: `Contact | ${BRAND}`, h1: "Contact AIZenera", desc: "Start a project with AIZenera. Tell us what you're planning — email aizenera2025@gmail.com.", priority: "0.8" },
  { path: "/privacy", title: `Privacy Policy | ${BRAND}`, h1: "Privacy Policy", desc: "How AIZenera handles information submitted through this website.", priority: "0.2" },
  { path: "/terms", title: `Terms & Conditions | ${BRAND}`, h1: "Terms & Conditions", desc: "Terms for using the AIZenera website.", priority: "0.2" },
  ...services.map((s) => ({ path: `/services/${s.slug}`, title: `${s.title} | ${BRAND}`, h1: s.title, desc: s.text, priority: "0.8" })),
  ...projects.map((p) => ({ path: `/work/${p.slug}`, title: `${p.title} | ${BRAND}`, h1: p.title, desc: p.text, priority: "0.6" })),
];

const nav = [["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/industries", "Industries"], ["/work", "Our Work"], ["/courses", "AI Courses"], ["/contact", "Contact"]];

function render(page, { noindex = false } = {}) {
  const url = `${SITE}${page.path}`;
  const t = esc(page.title);
  const d = esc(page.desc);
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  if (noindex) html = html.replace(/(<meta name="robots" content=")[^"]*(")/, `$1noindex, follow$2`);
  const list = page.list ? `<ul>${page.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  const body = `<div class="container-site" style="padding-block:6rem"><nav aria-label="Main"><ul style="display:flex;flex-wrap:wrap;gap:1rem;list-style:none;padding:0">${nav.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></nav><h1 class="h-display" style="margin-top:3rem">${esc(page.h1)}</h1><p class="lead" style="margin-top:1.5rem;max-width:42rem">${d}</p>${list}</div>`;
  return html.replace("<!--app-html-->", body);
}

for (const page of pages) {
  const out = page.path === "/" ? join(dist, "index.html") : join(dist, page.path.slice(1), "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(page));
}

writeFileSync(join(dist, "404.html"), render({ path: "/404", title: `Page not found | ${BRAND}`, h1: "Page not found", desc: "The page you're looking for doesn't exist or has moved." }, { noindex: true }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
console.log(`prerendered ${pages.length} pages + 404.html + sitemap.xml`);
