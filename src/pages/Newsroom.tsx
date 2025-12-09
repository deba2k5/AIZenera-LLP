import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    title: "Collaborated with IEM Smart Makeathon 2025",
    description: "AIZenera proudly partnered with IEM Kolkata for Smart Makeathon 2025, one of the largest student-driven innovation challenges in Eastern India. Our team provided mentorship and AI workshops to participating teams.",
    date: "September 2024",
    category: "Partnership",
    featured: true,
  },
  {
    id: 2,
    title: "Collaborated with IEM HackOasis 2.0",
    description: "We joined hands with HackOasis 2.0 as a knowledge partner, conducting AI/ML bootcamps and providing resources to over 500 participants. The hackathon saw innovative solutions in healthcare and education tech.",
    date: "September 2024",
    category: "Partnership",
    featured: true,
  },
  {
    id: 3,
    title: "Collaborated with Hackspire 2025",
    description: "AIZenera served as the AI education partner for Hackspire 2025, hosting pre-event workshops on Generative AI and prompt engineering that helped teams build cutting-edge solutions.",
    date: "November 2024",
    category: "Partnership",
    featured: true,
  },
  {
    id: 4,
    title: "Collaborated with Calcutta Hacks",
    description: "Our collaboration with Calcutta Hacks brought AI education to hundreds of aspiring developers. We organized workshops, judged projects, and offered internship opportunities to top performers.",
    date: "December 2024",
    category: "Partnership",
    featured: true,
  },
  {
    id: 5,
    title: "Collaborated with DIVERSION 2026",
    description: "AIZenera is proud to announce our partnership with DIVERSION 2026, the premier tech fest. We'll be conducting AI masterclasses and mentoring student projects throughout the event.",
    date: "Upcoming",
    category: "Partnership",
    featured: true,
  },
  {
    id: 6,
    title: "GenAI Masterclass Success",
    description: "Our first GenAI Masterclass concluded successfully with 8 participants learning cutting-edge AI techniques over 30 days. The course received overwhelmingly positive feedback.",
    date: "October 2024",
    category: "Event",
    featured: false,
  },
  {
    id: 7,
    title: "LLM Masterclass Announced",
    description: "Excited to announce our upcoming LLM Masterclass covering large language models, prompt engineering, and RAG systems. Limited seats available!",
    date: "December 2024",
    category: "Announcement",
    featured: false,
  },
  {
    id: 8,
    title: "AIZenera Community Reaches 1000+ Members",
    description: "Our learning community has crossed 1000 members milestone! Thank you for being part of our journey in democratizing AI education.",
    date: "November 2024",
    category: "Milestone",
    featured: false,
  },
];

const Newsroom = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Newsroom</h1>
              <p className="text-muted-foreground">Latest updates, collaborations, and announcements</p>
            </div>
          </div>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            Collaborations & Partnerships
          </h2>
          <div className="grid gap-6">
            {news.filter(n => n.featured).map((item, index) => (
              <Card 
                key={item.id} 
                variant="glass" 
                className="group hover-lift animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {item.category}
                        </Badge>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other News */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-accent to-secondary rounded-full" />
            Recent Updates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.filter(n => !n.featured).map((item, index) => (
              <Card 
                key={item.id} 
                variant="glass" 
                className="group hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card variant="gradient" className="mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-display font-semibold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Follow us on social media for real-time updates and announcements.
            </p>
            <Button variant="gradient">
              Join Our Community
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Newsroom;
