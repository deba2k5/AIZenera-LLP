import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Award, TrendingUp, MessageCircle, ArrowRight, Linkedin, Instagram, Calendar, Megaphone, ClipboardList } from "lucide-react";

const ambassadors = [
  {
    id: 1,
    name: "Aditya Ghosh",
    college: "IEM Kolkata",
    role: "Campus Ambassador",
    contributions: ["Organized 5+ workshops", "Brought 50+ students", "Led hackathon team"],
    tier: "silver",
  },
  {
    id: 2,
    name: "Arnaab Chatterjee",
    college: "IEM Kolkata",
    role: "Campus Ambassador",
    contributions: ["Social media outreach", "Community management", "Content creation"],
    tier: "silver",
  },
  
];

const benefits = [
  { icon: Award, title: "Certificates", description: "Get official CA certificates and recommendation letters" },
  { icon: TrendingUp, title: "Skill Development", description: "Leadership, communication, and networking skills" },
  { icon: Star, title: "Exclusive Access", description: "Early access to courses, events, and resources" },
  { icon: Users, title: "Network", description: "Connect with industry experts and like-minded peers" },
];

const steps = [
  { icon: Calendar, title: "Apply", description: "Fill in your details to express interest." },
  { icon: Megaphone, title: "Kickoff", description: "Get onboarding guide and assets." },
  { icon: Users, title: "Engage", description: "Host events and grow your club." },
  { icon: Award, title: "Earn", description: "Collect rewards and certificates." },
];

const responsibilities = [
  "Promote AIZenera courses and events on campus",
  "Coordinate workshops and study circles",
  "Build and support community initiatives",
  "Share feedback and help improve programs",
];

const tiers = [
  {
    name: "Bronze",
    color: "bg-orange-700/20 text-orange-700 border-orange-700/30",
    perks: ["Certificate", "Community role", "Event support"],
  },
  {
    name: "Silver",
    color: "bg-slate-400/20 text-slate-400 border-slate-400/30",
    perks: ["Recommendation letter", "Priority access", "Merch drops"],
  },
  {
    name: "Gold",
    color: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
    perks: ["Leadership badge", "Featured spotlight", "Stipend eligibility"],
  },
];

const getTierConfig = (tier: string) => {
  switch (tier) {
    case "gold":
      return { color: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30", label: "Gold" };
    case "silver":
      return { color: "bg-slate-400/20 text-slate-400 border-slate-400/30", label: "Silver" };
    default:
      return { color: "bg-orange-700/20 text-orange-700 border-orange-700/30", label: "Bronze" };
  }
};

const CAPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Campus Ambassadors</h1>
              <p className="text-muted-foreground">Meet the people who help us reach every campus</p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <Card variant="gradient" className="mb-12 overflow-hidden animate-fade-in">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Become a <span className="gradient-text">Campus Ambassador</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Join our elite team of Campus Ambassadors and help spread AI education across India. 
              Earn rewards, certificates, and exclusive benefits while building your leadership skills.
            </p>
            <Button 
              variant="glow" 
              size="lg" 
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdufVtmGbbA8aEky---6U_SE9wLLlfxYmSuxdxqQQUravU4zQ/viewform?usp=sharing&ouid=102578340347928735810", "_blank")}
              className="cursor-pointer"
            >
              
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Why Become a CA?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title} 
                variant="glass" 
                className="group hover-lift animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Our Ambassadors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambassadors.map((ambassador, index) => {
              const tierConfig = getTierConfig(ambassador.tier);
              return (
                <Card 
                  key={ambassador.id} 
                  variant="glass" 
                  className="group hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-primary-foreground">
                        {ambassador.name.charAt(0)}
                      </div>
                      <Badge className={tierConfig.color}>
                        {tierConfig.label}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-4">{ambassador.name}</CardTitle>
                    <CardDescription>
                      {ambassador.role} • {ambassador.college}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-medium mb-2">Contributions:</h4>
                    <ul className="space-y-1">
                      {ambassador.contributions.map((contribution, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {contribution}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 mt-4">
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Card key={i} variant="glass" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card variant="glass" className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-display font-bold mb-4">Responsibilities</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {responsibilities.map((r, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ClipboardList className="w-4 h-4 text-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Rewards & Tiers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Card key={i} variant="glass">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{t.name}</CardTitle>
                    <Badge className={t.color}>{t.name}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {t.perks.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">FAQs</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div>
                <h3 className="font-semibold">Who can apply?</h3>
                <p className="text-sm text-muted-foreground">Any undergraduate or postgraduate student passionate about AI and community building.</p>
              </div>
              <div>
                <h3 className="font-semibold">Is there a selection process?</h3>
                <p className="text-sm text-muted-foreground">Yes, we review applications and conduct a short intro call before onboarding.</p>
              </div>
              <div>
                <h3 className="font-semibold">How are tiers decided?</h3>
                <p className="text-sm text-muted-foreground">Based on impact metrics like events hosted, participation, and community growth.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-0">
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-display font-bold mb-2">Ready to Join the Team?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              If you're passionate about AI and want to make a difference in your campus, 
              we'd love to have you on board!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdufVtmGbbA8aEky---6U_SE9wLLlfxYmSuxdxqQQUravU4zQ/viewform?usp=sharing&ouid=102578340347928735810"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="gradient" size="lg" className="cursor-pointer">
                  Apply as Campus Ambassador
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CAPage;
