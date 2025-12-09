import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, Target, Heart, Zap, Users, Award, ArrowRight, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/aizenera-logo.png";
import myPic from "@/assets/my pic.jpg";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Making AI education accessible to every aspiring engineer, regardless of their background.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Building a supportive community where learners help each other grow and succeed.",
  },
  {
    icon: Zap,
    title: "Practical Learning",
    description: "Focusing on hands-on projects and real-world applications, not just theory.",
  },
  {
    icon: Award,
    title: "Quality Content",
    description: "Delivering industry-relevant, up-to-date content created by experienced professionals.",
  },
];

const team = [
  { role: "Founders", description: "A group of passionate engineers from top institutions" },
  { role: "Mentors", description: "Industry experts with years of AI/ML experience" },
  { role: "Community", description: "1000+ learners and growing" },
];

const leaders = [
  {
    name: "Debangshu Chatterjee",
    title: "Co-founder",
    bio: "Previously led college student chapters and hackathons.",
    image: myPic,
  },
  {
    name: "Nirmalya Sengupta",
    title: "Co-Founder",
    bio: "Industry professional with 30+ years of experience in AI/ML.",
    image: "#",
  },
];

const story = [
  {
    year: "July 2025",
    label: "Started as a community initiative",
    detail: "Study circles and weekend build sessions across clubs.",
    icon: GraduationCap,
  },
  {
    year: "September 2025",
    label: "Launched our first community partnered hackathon",
    detail: "A hackathon focused on AI solutions with 200+ participants.",
    icon: Calendar,
  },
  {
    year: "November 2025",
    label: "Partnered with student communities",
    detail: "Scaled to 15+ clubs with regular events and mentorship.",
    icon: Briefcase,
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">About Us</h1>
              <p className="text-muted-foreground">Learn more about AIZenera and our mission</p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <Card variant="glass" className="mb-12 overflow-hidden animate-fade-in">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Founded by <span className="gradient-text">Engineers</span>,<br />
                  Built for <span className="gradient-text">Engineers</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  AIZenera was born from a simple belief: every engineering student deserves access to 
                  quality AI education. Founded by a group of passionate engineers who experienced 
                  firsthand the challenges of learning AI/ML, we set out to create a platform that 
                  bridges the gap between academic knowledge and industry requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our journey started in college labs and hackathons, where we realized that 
                  practical, hands-on learning is what truly matters. Today, we're proud to 
                  serve over 1000+ learners across India, helping them unlock their potential 
                  in the field of Artificial Intelligence.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full" />
                  <img 
                    src={logo} 
                    alt="AIZenera Logo" 
                    className="relative w-64 h-64 object-contain animate-float"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                variant="glass" 
                className="group hover-lift animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <Card variant="gradient" className="mb-12 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-2xl font-display font-bold mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((item, index) => (
                <div key={item.role} className="text-center">
                  <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="text-xl font-display font-semibold mb-2">{item.role}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card variant="glass" className="mb-12 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Our Story</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {story.map((s, i) => (
                <div key={i} className="rounded-xl border border-border p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{s.year}</p>
                  <h3 className="text-lg font-semibold mt-1">{s.label}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.detail}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {leaders.map((m, i) => (
              <Card key={i} variant="glass" className="overflow-hidden">
                <CardContent className="p-0">
                  <img src={m.image} alt={m.name} className="h-40 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    <p className="text-sm text-muted-foreground">{m.title}</p>
                    <p className="text-sm text-muted-foreground mt-2">{m.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card variant="gradient" className="mb-12 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-2xl font-display font-bold mb-8 text-center">Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="rounded-xl border border-border p-6 text-center">
                <p className="text-3xl font-bold">1,000+</p>
                <p className="text-xs text-muted-foreground mt-1">Learners</p>
              </div>
              <div className="rounded-xl border border-border p-6 text-center">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs text-muted-foreground mt-1">Partner Clubs</p>
              </div>
              <div className="rounded-xl border border-border p-6 text-center">
                <p className="text-3xl font-bold">4.8/5</p>
                <p className="text-xs text-muted-foreground mt-1">Course Rating</p>
              </div>
              <div className="rounded-xl border border-border p-6 text-center">
                <p className="text-3xl font-bold">300+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-2">Ready to Start Your AI Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of engineers who are already learning with AIZenera.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/courses">
                <Button variant="gradient" size="lg">
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
