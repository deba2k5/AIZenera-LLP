import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, FileText, Video, Calculator, Brain, Code, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    id: 1,
    title: "Resume Analyzer",
    description: "Get AI-powered feedback on your resume. Analyze ATS compatibility, identify improvements, and optimize for job applications.",
    icon: FileText,
    status: "available",
    features: ["ATS Score Analysis", "Keyword Suggestions", "Format Check", "Industry Tips"],
    link: "#",
  },
  {
    id: 2,
    title: "AI Interview Practice",
    description: "Practice interviews with our AI interviewer. Get real-time feedback, improve your responses, and build confidence.",
    icon: Video,
    status: "available",
    features: ["Mock Interviews", "Response Analysis", "Body Language Tips", "Question Bank"],
    link: "https://recruitix-eight.vercel.app/",
  },
  {
    id: 3,
    title: "GPA Calculator",
    description: "Calculate your semester GPA and CGPA easily. Supports various grading systems used in Indian colleges.",
    icon: Calculator,
    status: "available",
    features: ["Semester GPA", "CGPA Calculation", "Multiple Grade Scales", "Export Results"],
    link: "/gpa-calculator",
  },
  {
    id: 4,
    title: "AI Code Assistant",
    description: "Get help with coding problems, debug your code, and learn best practices with our AI coding assistant.",
    icon: Code,
    status: "coming",
    features: ["Code Review", "Bug Detection", "Best Practices", "Multiple Languages"],
    link: "#",
  },
  {
    id: 5,
    title: "AI Study Planner",
    description: "Create personalized study plans based on your goals, available time, and learning pace.",
    icon: Brain,
    status: "coming",
    features: ["Custom Plans", "Progress Tracking", "Reminders", "Adaptive Learning"],
    link: "#",
  },
  {
    id: 6,
    title: "Project Idea Generator",
    description: "Get AI-generated project ideas based on your skills, interests, and the technologies you want to learn.",
    icon: Sparkles,
    status: "coming",
    features: ["Skill-Based Ideas", "Difficulty Levels", "Resource Links", "Team Matching"],
    link: "#",
  },
];

const Tools = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Tools</h1>
              <p className="text-muted-foreground">AI-powered tools to boost your productivity</p>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card 
              key={tool.id} 
              variant="glass" 
              className={`group hover-lift animate-fade-in overflow-hidden ${tool.status === "coming" ? "opacity-80" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Status Bar */}
              <div className={`h-1 ${
                tool.status === "available" 
                  ? "bg-gradient-to-r from-green-500 to-emerald-500" 
                  : "bg-gradient-to-r from-primary to-accent"
              }`} />
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    className={tool.status === "available" 
                      ? "bg-green-500/20 text-green-500 border-green-500/30"
                      : "bg-primary/20 text-primary border-primary/30"
                    }
                  >
                    {tool.status === "available" ? "Available" : "Coming Soon"}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-4">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {tool.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {tool.status === "available" ? (
                  tool.link.startsWith("/") ? (
                    <Link to={tool.link}>
                      <Button variant="gradient" className="w-full">
                        Launch Tool
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="gradient" className="w-full">
                      Launch Tool
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Request Tool */}
        <Card variant="gradient" className="mt-12">
          <CardContent className="p-8 text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-display font-bold mb-2">Have a Tool Idea?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're constantly building new tools to help students and engineers. 
              If you have an idea for a tool that would be useful, let us know!
            </p>
            <Button variant="glow" size="lg">
              Suggest a Tool
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tools;
