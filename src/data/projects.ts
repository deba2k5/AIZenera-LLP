/**
 * Portfolio projects. Add new projects to the list below.
 * `image` is a screenshot in /public/images/work. Set `sample: true` only for demo concepts.
 */
export type ProjectCategory = "Websites" | "Branding" | "Digital Products";

export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  category: ProjectCategory;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  sample: boolean;
  image?: string;
  url?: string; // live website link, shown on the project page when set
  palette: { bg: string; fg: string; accent: string };
  layout: "hero" | "dashboard" | "brand" | "grid";
};

export const projects: Project[] = [
  {
    slug: "sinhas-group",
    name: "Sinha’s Group",
    client: "Sinha’s GmbH, Switzerland",
    industry: "Real Estate & Rentals",
    category: "Websites",
    services: ["Web design", "Website development", "Property search"],
    description: "A property rental website for a Swiss real estate company offering serviced apartments, short-term rentals and long-term stays.",
    challenge: "Sinha’s Group needed a website where guests and business travellers could quickly find apartments across several Swiss cities — from staycations to long-term stays.",
    solution: "A clean, image-led website with a prominent property search (by city, ZIP, country or region and status), quick links to locations such as Basel, Dübendorf, Glattbrugg, Wallisellen, Zug and Zürich, plus pages for apartments, offerings, blogs, guest reviews and contact.",
    outcome: "The website is live and serves as Sinha’s Group’s main platform for presenting its apartments and receiving enquiries.",
    sample: false,
    image: "/images/work/sinhas-group.png",
    url: "",
    palette: { bg: "#1A1A1A", fg: "#FFFFFF", accent: "#D7261E" },
    layout: "hero",
  },
  {
    slug: "easternode",
    name: "Easternode",
    client: "Easternode Community, Kolkata",
    industry: "Startups & Technology",
    category: "Websites",
    services: ["Web design", "Website development", "Community platform"],
    description: "A website for Easternode, a Kolkata-based startup community of developers — “Build from the East. Ship to the world.”",
    challenge: "Easternode needed a home online where builders from Eastern India could discover hackathons, events and opportunities, and connect with people who are actively shipping.",
    solution: "A calm, illustrated landing experience with a bold editorial headline, clear calls to join the network or explore opportunities, and sections for opportunities, community and updates.",
    outcome: "The website gives Easternode a distinctive public identity and a single place for builders to join the network.",
    sample: false,
    image: "/images/work/easternode.png",
    url: "",
    palette: { bg: "#2A1A5E", fg: "#FFFFFF", accent: "#8E5BFF" },
    layout: "hero",
  },
  {
    slug: "diversion-2026",
    name: "Diversion 2026",
    client: "Diversion 2026 Hackathon",
    industry: "Events & Communities",
    category: "Websites",
    services: ["Event website", "Web design", "Event branding"],
    description: "The official website for Diversion 2026 — billed as Eastern India’s biggest AI hackathon and an MLH Official 2026 Season event.",
    challenge: "The organisers needed a playful, high-energy website that matched the hackathon’s “blueprints of imagination” theme and gave hackers everything they need in one place.",
    solution: "A LEGO-inspired, retro-game visual style with a bold logo, a blueprint grid background and a full event site — about, achievements, hacker guide, lineup, people, FAQ, schedule and contact.",
    outcome: "The website serves as the official hub for Diversion 2026 participants, sponsors and partners.",
    sample: false,
    image: "/images/work/diversion-2026.png",
    url: "",
    palette: { bg: "#1B3FAE", fg: "#FFFFFF", accent: "#F5C400" },
    layout: "hero",
  },
  {
    slug: "cfccf-kolkata-2026",
    name: "CFCCF Kolkata 2026",
    client: "Consortium of Film and Content Creators Festival",
    industry: "Events & Communities",
    category: "Websites",
    services: ["Event website", "Web design", "Film submissions"],
    description: "The website for the Consortium of Film and Content Creators Festival (CFCCF) 2026 — Kolkata Chapter, a festival celebrating filmmaking and digital content creation.",
    challenge: "The festival needed a website that captured Kolkata’s cultural character while giving filmmakers, jury and audiences clear information on rules, selected films and the event.",
    solution: "A rich, Kolkata-inspired design in deep maroon with hand-drawn city illustrations, a teaser video, event details, an artwork film-strip gallery, and pages for rules, jury, gallery, selected films and sign-in.",
    outcome: "The website serves as the festival’s official hub for participants, selected films and event information.",
    sample: false,
    image: "/images/work/cfccf-2026.png",
    url: "",
    palette: { bg: "#5E1518", fg: "#FFFFFF", accent: "#F26A3D" },
    layout: "hero",
  },
  {
    slug: "elevate",
    name: "Elevate",
    client: "IEEE Computer Society, IEM",
    industry: "Events & Communities",
    category: "Websites",
    services: ["Event website", "Web design", "Motion & visuals"],
    description: "The website for Elevate, the annual flagship tech event of IEEE CS IEM.",
    challenge: "The flagship event needed a striking, futuristic web presence that would stand out to students and drive registrations.",
    solution: "A dark, cinematic design with a neon-glow logotype, a full-screen robot hero, outlined display typography, a floating menu and a prominent registration button.",
    outcome: "The website serves as the event’s main destination for information and registrations.",
    sample: false,
    image: "/images/work/elevate.png",
    url: "",
    palette: { bg: "#120B1E", fg: "#FFFFFF", accent: "#C9A2FF" },
    layout: "hero",
  },
];

export const projectCategories = ["All", "Websites", "Branding", "Digital Products"] as const;
export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);
