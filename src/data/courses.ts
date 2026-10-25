import { Sparkles, MessageSquareText, Code2, Workflow, LineChart, Building2, type LucideIcon } from "lucide-react";

/**
 * AI course tracks. Edit titles, topics, levels and audiences here.
 * Add schedules / fees only when confirmed.
 */
export type Course = {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
  icon: LucideIcon;
  summary: string;
  audience: string;
  topics: string[];
};

export const courses: Course[] = [
  {
    slug: "ai-foundations",
    title: "AI Foundations",
    level: "Beginner",
    icon: Sparkles,
    summary: "Understand what AI is, how modern AI tools work, and where they fit into everyday work and study.",
    audience: "Students, beginners and non-technical professionals",
    topics: ["How AI & machine learning work", "Generative AI explained", "Using AI tools responsibly", "Hands-on with popular AI assistants"],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering & GenAI Tools",
    level: "Beginner",
    icon: MessageSquareText,
    summary: "Get reliable, high-quality results from AI assistants for writing, research, design and productivity.",
    audience: "Professionals, creators and teams",
    topics: ["Prompt patterns & techniques", "AI for writing & research", "AI for images & design", "Building personal AI workflows"],
  },
  {
    slug: "python-for-ai",
    title: "Python & Machine Learning",
    level: "Intermediate",
    icon: LineChart,
    summary: "Learn Python for data and build your first machine-learning models step by step.",
    audience: "Students and aspiring developers",
    topics: ["Python essentials for AI", "Working with data", "Core ML algorithms", "Training & evaluating models"],
  },
  {
    slug: "building-ai-apps",
    title: "Building AI Apps with LLMs",
    level: "Advanced",
    icon: Code2,
    summary: "Build real applications powered by large language models — chatbots, assistants and knowledge tools.",
    audience: "Developers and engineering students",
    topics: ["Working with LLM APIs", "Retrieval-augmented generation (RAG)", "AI agents & tool use", "Deploying AI apps"],
  },
  {
    slug: "ai-automation",
    title: "AI for Workflow Automation",
    level: "Intermediate",
    icon: Workflow,
    summary: "Automate repetitive work by connecting AI with the tools your team already uses.",
    audience: "Operations teams, founders and freelancers",
    topics: ["Finding automation opportunities", "No-code automation tools", "AI-powered document handling", "Measuring time saved"],
  },
  {
    slug: "ai-for-teams",
    title: "AI Training for Teams & Institutions",
    level: "All levels",
    icon: Building2,
    summary: "Custom workshops for companies, colleges and schools — designed around your goals and skill levels.",
    audience: "Companies, colleges and schools",
    topics: ["Tailored curriculum", "Workshops & bootcamps", "Department-specific use cases", "AI adoption guidance"],
  },
];
