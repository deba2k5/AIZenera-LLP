import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ExternalLink, FileText, Video, Code } from "lucide-react";

const materials = [
  {
    id: 1,
    title: "COMING SOON",
    description: "XXXXXXX",
    type: "PDF",
    icon: FileText,
    link: "#",
    category: "XXXXXX",
  },
  
];

const categories = ["All", "Machine Learning", "Deep Learning", "NLP", "Generative AI", "Programming", "Career"];

const StudyMaterial = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Study Material</h1>
              <p className="text-muted-foreground">Access curated resources for your learning journey</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-border hover:border-primary hover:text-primary first:bg-primary first:text-primary-foreground first:border-primary"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <Card
              key={material.id}
              variant="glass"
              className="group hover-lift animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <material.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-muted rounded-full text-muted-foreground">
                    {material.type}
                  </span>
                </div>
                <CardTitle className="text-lg mt-4">{material.title}</CardTitle>
                <CardDescription>{material.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">{material.category}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card variant="gradient" className="mt-12">
          <CardContent className="p-8 text-center">
            <Download className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-display font-semibold mb-2">Need More Resources?</h3>
            <p className="text-muted-foreground mb-4">
              Contact us for additional study materials or request specific topics.
            </p>
            <Button variant="gradient">Request Materials</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudyMaterial;
