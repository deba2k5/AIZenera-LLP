import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Clock, Users, Star, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "LLM Masterclass",
    description: "Deep dive into Large Language Models, prompt engineering, fine-tuning, and building production-ready AI applications.",
    price: 99,
    duration: "3 Days",
    dates: "Dec 12th - 14th, 2024",
    status: "live",
    enrolled: "7+",
    rating: 4.9,
    topics: ["LLM Fundamentals", "Prompt Engineering", "Fine-tuning", "RAG Systems", "Deployment"],
    registrationLink: "https://forms.gle/VFbcm9MHfwWFRYmr7",
  },
  {
    id: 2,
    title: "GenAI Masterclass",
    description: "Comprehensive course on Generative AI covering models, applications, and hands-on projects with real-world use cases.",
    price: 149,
    duration: "30 Days",
    dates: "Oct 1st - 30th, 2024",
    status: "completed",
    enrolled: 8,
    rating: 4.8,
    topics: ["Generative Models", "Image Generation", "Text-to-X", "AI Applications", "Projects"],
  },
  
];

const Courses = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Our Courses</h1>
              <p className="text-muted-foreground">Transform your career with industry-relevant skills</p>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card
              key={course.id}
              variant="glass"
              className={`group hover-lift animate-fade-in overflow-hidden ${course.status === "completed" ? "opacity-75" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Status Bar */}
              <div className={`h-2 ${
                course.status === "live" 
                  ? "bg-gradient-to-r from-green-500 to-emerald-500" 
                  : course.status === "completed"
                  ? "bg-gradient-to-r from-muted to-muted-foreground/30"
                  : "bg-gradient-to-r from-primary to-accent"
              }`} />
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge 
                    variant={course.status === "live" ? "default" : "secondary"}
                    className={`${
                      course.status === "live" 
                        ? "bg-green-500/20 text-green-500 border-green-500/30" 
                        : course.status === "completed"
                        ? "bg-muted text-muted-foreground"
                        : "bg-accent/20 text-accent border-accent/30"
                    }`}
                  >
                    {course.status === "live" ? "🔴 LIVE NOW" : course.status === "completed" ? "COMPLETED" : "COMING SOON"}
                  </Badge>
                  <span className={`text-2xl font-bold ${course.status === "completed" ? "text-muted-foreground" : "gradient-text"}`}>
                    ₹{course.price}
                  </span>
                </div>
                <CardTitle className="text-xl mt-4">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Info */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {course.dates}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  {course.enrolled > 0 && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {course.enrolled} enrolled
                    </div>
                  )}
                  {course.rating > 0 && (
                    <div className="flex items-center gap-2 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      {course.rating}
                    </div>
                  )}
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic) => (
                    <span 
                      key={topic}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant={course.status === "live" ? "gradient" : "outline"} 
                  className="w-full mt-4"
                  disabled={course.status === "completed"}
                  onClick={() => course.registrationLink && window.open(course.registrationLink, "_blank")}
                >
                  {course.status === "live" ? (
                    <>Register Now <ArrowRight className="w-4 h-4" /></>
                  ) : course.status === "completed" ? (
                    "Course Ended"
                  ) : (
                    "Notify Me"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Course Request */}
        <Card variant="gradient" className="mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-2">Want a Custom Course?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer customized training programs for colleges and organizations. 
              Contact us to discuss your requirements.
            </p>
            <Button variant="glow" size="lg">Contact for Custom Training</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
