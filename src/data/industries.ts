import { Coffee, GraduationCap, Building2, CalendarDays, Rocket, ShoppingBag, type LucideIcon } from "lucide-react";

export type Industry = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  needs: string[];
  challenge: string;
  services: string[]; // service slugs
  tone: string; // tailwind gradient classes (fallback when no image)
  image?: string;
};

export const industries: Industry[] = [
  {
    slug: "cafes-restaurants",
    image: "/images/industries/cafes.webp",
    title: "Cafés & Restaurants",
    short: "Digital menus, location, reservations and ordering — everything hungry customers look for first.",
    icon: Coffee,
    needs: ["Mobile-first digital menus", "Reservations & table booking", "Maps, hours & directions", "Delivery & ordering links", "Instagram-worthy galleries"],
    challenge: "Most diners decide where to eat on their phone in under a minute. Outdated menus, missing hours or a slow site send them straight to a competitor.",
    services: ["industry-websites", "creative-design", "wordpress-development"],
    tone: "from-[#F26A1B] via-[#F59A3C] to-[#FCD9A8]",
  },
  {
    slug: "schools-education",
    image: "/images/industries/schools.webp",
    title: "Schools & Education",
    short: "Admissions, notices, events, academic resources and clear parent communication.",
    icon: GraduationCap,
    needs: ["Admissions information & enquiries", "Notice boards & circulars", "Events & photo galleries", "Academic resources", "Parent communication"],
    challenge: "Parents, students and staff all need different information, fast. Notices get lost in chat groups and admissions enquiries slip through.",
    services: ["industry-websites", "wordpress-development", "event-branding"],
    tone: "from-[#1F3B8F] via-[#365CFF] to-[#AFC0FF]",
  },
  {
    slug: "enterprises",
    image: "/images/industries/enterprises.webp",
    title: "Enterprises & Corporates",
    short: "Corporate websites, lead generation, integrations and scalable architecture.",
    icon: Building2,
    needs: ["Corporate websites & microsites", "Lead generation funnels", "CRM & ERP integrations", "Scalable, secure architecture", "Internal portals & dashboards"],
    challenge: "Enterprises need a digital presence that reflects their scale, connects to existing systems and meets security expectations.",
    services: ["full-stack-development", "it-consulting", "ai-automation"],
    tone: "from-[#141414] via-[#2B2B2B] to-[#6B6A64]",
  },
  {
    slug: "events-communities",
    image: "/images/industries/events.webp",
    title: "Events & Communities",
    short: "Event landing pages, registrations, schedules, sponsor showcases and creative branding.",
    icon: CalendarDays,
    needs: ["Event landing pages", "Registration & ticketing", "Schedules & speaker lineups", "Sponsor showcases", "Campaign creatives"],
    challenge: "Events live and die on momentum. Teams need a strong identity and a registration flow that works from day one.",
    services: ["event-branding", "creative-design", "full-stack-development"],
    tone: "from-[#5B2BD9] via-[#8E5BFF] to-[#F26A1B]",
  },
  {
    slug: "startups-tech",
    image: "/images/industries/startups.webp",
    title: "Startups & Technology",
    short: "MVPs, product websites, dashboards and AI features built to move at startup speed.",
    icon: Rocket,
    needs: ["MVP development", "Product marketing sites", "Pitch-ready branding", "Dashboards & admin tools", "AI-powered features"],
    challenge: "Startups need to ship quickly without building something they'll have to throw away in six months.",
    services: ["full-stack-development", "ai-automation", "creative-design"],
    tone: "from-[#0E7C66] via-[#22B391] to-[#BDF0DF]",
  },
  {
    slug: "retail-local",
    image: "/images/industries/retail.webp",
    title: "Retail & Local Businesses",
    short: "Online catalogues, stores, local SEO and branding that brings people through the door.",
    icon: ShoppingBag,
    needs: ["Product catalogues & online stores", "Local search visibility", "WhatsApp & call integrations", "Offers & promotions", "Consistent branding"],
    challenge: "Local customers search online before they visit. Without a clear, findable presence, shops lose footfall to bigger brands.",
    services: ["wordpress-development", "industry-websites", "creative-design"],
    tone: "from-[#B23A48] via-[#E0607E] to-[#F8C9D4]",
  },
];
