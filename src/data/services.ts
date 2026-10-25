import { Code2, LayoutTemplate, Palette, Sparkles, Store, Network, Bot, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  intro: string;
  problem: string;
  capabilities: string[];
  deliverables: string[];
  tags: string[];
  projectTypes: string[];
  clients: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "full-stack-development",
    title: "Full-Stack Web Development",
    short: "Custom websites, web applications, dashboards, APIs and scalable digital platforms.",
    icon: Code2,
    intro: "Custom-built web products engineered for speed, security and growth — from the interface your customers see to the systems running behind it.",
    problem: "Off-the-shelf tools stop fitting the moment your business does something unique. Teams end up juggling spreadsheets, disconnected apps and slow websites that hold growth back.",
    capabilities: ["Custom web applications", "Admin dashboards & portals", "REST & GraphQL APIs", "Database design", "Authentication & user roles", "Third-party integrations"],
    deliverables: ["Technical scope & architecture", "UI design & responsive build", "Source code & documentation", "Deployment & hosting setup", "Post-launch support window"],
    tags: ["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "REST APIs"],
    projectTypes: ["SaaS products", "Booking & ordering systems", "Client portals", "Internal tools"],
    clients: ["Startups building an MVP", "Businesses replacing manual processes", "Teams needing a custom platform"],
    faqs: [
      { q: "How long does a custom web application take?", a: "It depends on scope. A focused MVP is often a matter of weeks; larger platforms are planned in phases. You get a clear timeline after the discovery call." },
      { q: "Will I own the code?", a: "Yes. On final payment, the source code and project assets are handed over to you." },
      { q: "Can you work on an existing codebase?", a: "Yes. We start with a short technical review so we understand what's there before changing anything." },
    ],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Website Development",
    short: "Business websites, landing pages, CMS solutions, WooCommerce stores and redesigns.",
    icon: LayoutTemplate,
    intro: "Beautiful, fast WordPress websites your team can update without calling a developer.",
    problem: "Many WordPress sites are slow, bloated with plugins and hard to edit. They look dated and quietly lose visitors before anyone reads a word.",
    capabilities: ["Custom theme development", "Page-builder friendly layouts", "WooCommerce stores", "Website redesigns & migrations", "Speed & SEO foundations", "Security hardening"],
    deliverables: ["Sitemap & page wireframes", "Custom designed theme", "Content-editing training", "SEO & analytics setup", "Launch checklist & backups"],
    tags: ["WordPress", "WooCommerce", "Elementor", "Custom themes", "Yoast / Rank Math"],
    projectTypes: ["Company websites", "Landing pages", "Online stores", "Blogs & content sites"],
    clients: ["Small & medium businesses", "Consultants & professionals", "Brands launching online stores"],
    faqs: [
      { q: "Can I edit the website myself?", a: "Yes. Every WordPress project includes an editing walkthrough so your team can update text, images and pages confidently." },
      { q: "Do you redesign existing WordPress sites?", a: "Yes — we can refresh the design, clean up plugins and improve speed while keeping your existing content." },
      { q: "Is hosting included?", a: "We can recommend and set up hosting, or deploy to the hosting you already use." },
    ],
  },
  {
    slug: "creative-design",
    title: "Creative & Graphic Design",
    short: "Brand identities, social creatives, posters, banners, brochures and marketing materials.",
    icon: Palette,
    intro: "Design that makes people stop scrolling — and remember who you are.",
    problem: "Inconsistent visuals make a business look smaller than it is. Without a clear identity, every post and poster starts from zero.",
    capabilities: ["Logo & brand identity", "Brand guidelines", "Social media creatives", "Posters & banners", "Brochures & print collateral", "Presentation design"],
    deliverables: ["Moodboard & creative direction", "Design concepts & revisions", "Print-ready & web-ready files", "Editable source files", "Usage guidelines"],
    tags: ["Figma", "Adobe Illustrator", "Photoshop", "Canva templates", "Print production"],
    projectTypes: ["New brand launches", "Rebrands", "Campaign creatives", "Marketing kits"],
    clients: ["New businesses", "Cafés & retail brands", "Institutions & organisations"],
    faqs: [
      { q: "How many design concepts do I get?", a: "Concept and revision rounds are agreed upfront in your proposal so there are no surprises." },
      { q: "Will I get the source files?", a: "Yes — final artwork is delivered in editable source format alongside export-ready files." },
    ],
  },
  {
    slug: "event-branding",
    title: "Event Branding & Digital Promotion",
    short: "Festivals, hackathons, conferences, event microsites and digital campaigns.",
    icon: Sparkles,
    intro: "A complete visual and digital identity for your event — from the first teaser to the closing ceremony.",
    problem: "Events have hard deadlines and many moving parts. Last-minute, mismatched creatives and clunky registration pages cost attendance and sponsor confidence.",
    capabilities: ["Event identity & theme", "Event microsites", "Registration flows", "Social media campaigns", "Sponsor decks & showcases", "Stage, badge & merch graphics"],
    deliverables: ["Event brand kit", "Launch-ready microsite", "Campaign creative calendar", "Print & venue graphics", "Sponsor-ready assets"],
    tags: ["Microsites", "Registration forms", "Social campaigns", "Motion graphics", "Print"],
    projectTypes: ["College festivals", "Hackathons", "Conferences & summits", "Corporate events"],
    clients: ["Student organisers", "Communities & clubs", "Companies hosting events"],
    faqs: [
      { q: "How early should we start?", a: "Ideally 4–8 weeks before registrations open, but we can work with tighter timelines when scope is focused." },
      { q: "Can you handle both design and the website?", a: "Yes — one team keeps the identity, website and campaign visually consistent." },
    ],
  },
  {
    slug: "industry-websites",
    title: "Industry-Specific Websites",
    short: "Dedicated solutions for cafés, restaurants, schools, coaching institutes and local businesses.",
    icon: Store,
    intro: "Websites shaped around how your industry actually works — not a generic template with your logo on it.",
    problem: "A café needs menus and directions. A school needs notices and admissions. Generic websites miss these details, and customers notice.",
    capabilities: ["Digital menus & reservations", "Admissions & notice boards", "Course & batch listings", "Location & contact integrations", "Online ordering hooks", "Galleries & event pages"],
    deliverables: ["Industry-focused sitemap", "Designed & built website", "Content structure guidance", "Google Maps & analytics setup", "Editing training"],
    tags: ["Menus", "Reservations", "Notice boards", "Maps", "WhatsApp chat"],
    projectTypes: ["Café & restaurant sites", "School websites", "Coaching institute sites", "Local business sites"],
    clients: ["Cafés & restaurants", "Schools & institutes", "Local shops & services"],
    faqs: [
      { q: "Can I update the menu or notices myself?", a: "Yes. The frequently changing parts of the site are built to be edited easily." },
      { q: "Do you integrate with delivery or booking platforms?", a: "Where those platforms allow it, we link or embed them so customers can order or book in a click." },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Digital Transformation",
    short: "Technical consulting, architecture, cloud, automation, integration and technology planning.",
    icon: Network,
    intro: "Clear, practical technology advice — so you invest in the right systems, in the right order.",
    problem: "Technology choices are expensive to reverse. Without a plan, businesses buy overlapping tools, accumulate technical debt and struggle to scale.",
    capabilities: ["Technology audits", "Software architecture", "Cloud planning & migration", "Process automation", "System integration", "Digital roadmaps"],
    deliverables: ["Current-state assessment", "Recommendations report", "Phased technology roadmap", "Architecture diagrams", "Implementation support"],
    tags: ["Cloud", "Automation", "Integrations", "Architecture", "Roadmapping"],
    projectTypes: ["Technology audits", "Migration planning", "Workflow automation", "Vendor evaluation"],
    clients: ["Growing businesses", "Enterprises modernising systems", "Founders planning a product"],
    faqs: [
      { q: "Do you only advise, or also implement?", a: "Both. You can engage us for a roadmap only, or for the full implementation." },
      { q: "Is consulting billed hourly or per project?", a: "Either — we'll suggest whichever fits the engagement best after the first conversation." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    short: "AI-powered applications, chatbots, workflow automation and AI integrations.",
    icon: Bot,
    intro: "Put AI to work on real business problems — answering customers, processing documents and removing repetitive work.",
    problem: "Everyone is talking about AI, but few businesses know where it actually saves time. Poorly planned AI projects become expensive experiments.",
    capabilities: ["Customer support chatbots", "Knowledge-base assistants", "Document processing", "Workflow automation", "LLM API integrations", "AI features in existing apps"],
    deliverables: ["Use-case discovery workshop", "Working prototype", "Production integration", "Guardrails & testing", "Team handover"],
    tags: ["LLM APIs", "Chatbots", "RAG", "Automation", "Python"],
    projectTypes: ["Website chat assistants", "Internal knowledge tools", "Automated reporting", "Smart forms & triage"],
    clients: ["Support-heavy businesses", "Teams with repetitive workflows", "Products adding AI features"],
    faqs: [
      { q: "Is my data safe?", a: "We design around your data policies, choose providers carefully and keep sensitive data out of places it shouldn't go." },
      { q: "Can we start small?", a: "Yes — we recommend starting with one high-value use case and a prototype before scaling." },
    ],
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);
