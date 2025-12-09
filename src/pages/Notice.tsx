import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, AlertCircle, Info, Clock, ArrowRight } from "lucide-react";

const notices = [
  {
    id: 1,
    title: "LLM Masterclass Registration Closing Soon!",
    description: "Don't miss out on our comprehensive 3-day LLM Masterclass. Learn about Large Language Models, prompt engineering, fine-tuning, and building production-ready AI applications. Limited seats available!",
    type: "urgent",
    date: "Dec 7, 2024",
    deadline: "Dec 11, 2024",
  },
  {
    id: 2,
    title: "Early Bird Discount Extended",
    description: "Due to popular demand, we've extended the early bird discount for the LLM Masterclass. Register now at ₹149 before the regular price kicks in.",
    type: "important",
    date: "Dec 5, 2024",
    deadline: "Dec 10, 2024",
  },
  {
    id: 3,
    title: "New Study Materials Available",
    description: "We've uploaded new study materials covering prompt engineering and RAG systems. Check out the Study Material section to access these resources.",
    type: "info",
    date: "Dec 3, 2024",
    deadline: null,
  },
  {
    id: 4,
    title: "Community Discord Channel Launch",
    description: "Join our new Discord community to connect with fellow learners, get help with your projects, and stay updated on all AIZenera activities.",
    type: "info",
    date: "Dec 1, 2024",
    deadline: null,
  },
  {
    id: 5,
    title: "Certificate Download Now Available",
    description: "Participants who completed the GenAI Masterclass can now download their certificates from the profile section. Log in to access your certificate.",
    type: "important",
    date: "Nov 28, 2024",
    deadline: null,
  },
];

const getTypeConfig = (type: string) => {
  switch (type) {
    case "urgent":
      return {
        icon: AlertCircle,
        color: "bg-red-500/20 text-red-500 border-red-500/30",
        iconColor: "text-red-500",
        bgGradient: "from-red-500/10 to-transparent",
      };
    case "important":
      return {
        icon: Bell,
        color: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
        iconColor: "text-yellow-500",
        bgGradient: "from-yellow-500/10 to-transparent",
      };
    default:
      return {
        icon: Info,
        color: "bg-blue-500/20 text-blue-500 border-blue-500/30",
        iconColor: "text-blue-500",
        bgGradient: "from-blue-500/10 to-transparent",
      };
  }
};

const Notice = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Notices</h1>
              <p className="text-muted-foreground">Important announcements and deadlines</p>
            </div>
          </div>
        </div>

        {/* Featured Notice */}
        <Card 
          variant="glass" 
          className="mb-8 overflow-hidden animate-fade-in border-red-500/30"
        >
          <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500" />
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <Badge className="bg-red-500/20 text-red-500 border-red-500/30 animate-pulse">
                URGENT
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-display font-bold">{notices[0].title}</h2>
            <p className="text-muted-foreground">{notices[0].description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                Posted: {notices[0].date}
              </div>
              {notices[0].deadline && (
                <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                  <AlertCircle className="w-4 h-4" />
                  Deadline: {notices[0].deadline}
                </div>
              )}
            </div>
            <Button variant="gradient" className="mt-4">
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Other Notices */}
        <div className="space-y-4">
          {notices.slice(1).map((notice, index) => {
            const config = getTypeConfig(notice.type);
            const IconComponent = config.icon;
            
            return (
              <Card 
                key={notice.id} 
                variant="glass" 
                className="group hover-lift animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${config.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <CardContent className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${config.color.split(' ')[0]}`}>
                      <IconComponent className={`w-5 h-5 ${config.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={config.color}>
                          {notice.type.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{notice.date}</span>
                      </div>
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {notice.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{notice.description}</p>
                      {notice.deadline && (
                        <div className="flex items-center gap-2 mt-3 text-sm text-yellow-500">
                          <Clock className="w-4 h-4" />
                          Deadline: {notice.deadline}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Subscribe */}
        <Card variant="gradient" className="mt-12">
          <CardContent className="p-8 text-center">
            <Bell className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-display font-semibold mb-2">Never Miss an Update</h3>
            <p className="text-muted-foreground mb-4">
              Enable notifications to stay informed about important announcements and deadlines.
            </p>
            <Button variant="glow">Enable Notifications</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notice;
