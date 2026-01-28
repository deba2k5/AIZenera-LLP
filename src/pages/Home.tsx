import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Instagram, Linkedin, Youtube, ExternalLink, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useUser } from "@/context/UserContext";
import { useRef } from "react";
import type { PointerEvent } from "react";
import heroImg from "@/assets/1.png";
import courseImg1 from "@/assets/3.png";
import courseImg2 from "@/assets/2.png";
import logo4 from "@/assets/4.png";
import logo5 from "@/assets/5.png";
import logo6 from "@/assets/6.png";
import logo7 from "@/assets/7.png";
import logo8 from "@/assets/8.png";
import logo9 from "@/assets/9.png";
import logo10 from "@/assets/10.png";
import logo11 from "@/assets/11.png";
const socialLinks = [{
  icon: MessageCircle,
  label: "WhatsApp",
  href: "https://chat.whatsapp.com/IxavpJ0dP5O2DboZCNFtnk",
  color: "hover:text-green-500"
}, {
  icon: Instagram,
  label: "Instagram",
  href: "https://www.instagram.com/aizenera_official?utm_source=qr&igsh=Z3k5eWNwbG95eG55",
  color: "hover:text-pink-500"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  href: "https://www.linkedin.com/company/aizenera/",
  color: "hover:text-blue-500"
}, {
  icon: Youtube,
  label: "YouTube",
  href: "https://youtube.com/@aizenera2025?si=kFuFhukEZ8Zf5OdD",
  color: "hover:text-red-500"
}];
const partnerLogos = [logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];
const testimonials = [
  {
    quote: "The LLM masterclass helped me build a real project I could showcase.",
    name: "Ananya Sen",
    role: "CSE Undergraduate",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&auto=format",
  },
  {
    quote: "Clear roadmap and practical sessions. Landed an internship after the course.",
    name: "Rahul Mehta",
    role: "ECE Student",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=128&h=128&fit=crop&auto=format",
  },
  {
    quote: "Best value. Strong community and mentors who actually help.",
    name: "Priya Sharma",
    role: "AI Enthusiast",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=128&h=128&fit=crop&auto=format",
  },
];
const featuredCourses = [
  {
    title: "Figma & Framer Masterclass",
    price: "₹99",
    status: "LIVE",
    date: "Jan 29th - 30th, 2026",
    image: courseImg1,
    href: "/courses",
  },
  {
    title: "GenAI Masterclass",
    price: "₹149",
    status: "COMPLETED",
    date: "DEC 13st - 17th, 2025",
    image: courseImg2,
    href: "/courses",
  },
  
  {
    title: "LLMs Masterclass",
    price: "₹99",
    status: "COMPLETED",
    date: "DEC 1st - 30th, 2025",
    image: courseImg2,
    href: "/courses",
  },
];
const Home = () => {
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const { user } = useUser();
  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    const rotateX = -((y - rect.height / 2) / rect.height) * 12;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };
  const handlePointerLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "";
  };
  const handlePointerDown = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = (el.style.transform || "") + " rotateZ(0.5deg)";
  };
  const handlePointerUp = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = (el.style.transform || "").replace(/ rotateZ\([^)]*\)/, "");
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Learn AI skills that get results
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-body">
              Practical courses, community support, and mentors who help you build portfolio-ready projects.
            </p>
            {user?.firstName && (
              <div className="mb-6 rounded-lg border border-border bg-card/60 p-3">
                <p className="text-sm">
                  Welcome, <span className="font-semibold">{user.firstName} {user.lastName}</span>!
                </p>
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button variant="gradient" size="lg">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border p-4 text-center">
                <p className="text-2xl font-bold">1,000+</p>
                <p className="text-xs text-muted-foreground">Learners</p>
              </div>
              <div className="rounded-xl border border-border p-4 text-center">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-xs text-muted-foreground">Partner Clubs</p>
              </div>
              <div className="rounded-xl border border-border p-4 text-center">
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="text-xs text-muted-foreground">Course Rating</p>
              </div>
            </div>
          </div>
          <div
            className="relative group md:cursor-pointer"
            style={{ perspective: "1000px" }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <div
              ref={tiltRef}
              className="relative rounded-2xl border border-border shadow-xl transition-transform duration-200 will-change-transform"
            >
              <img
                src={heroImg}
                alt="Learning dashboard"
                className="w-full rounded-2xl"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Channel */}
      <section className="px-6 py-12 lg:px-12">
        <Card variant="gradient" className="max-w-2xl mx-auto hover-lift">
          <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-display font-semibold mb-2">Join Our WhatsApp Channel</h3>
              <p className="text-muted-foreground mb-4">Get instant updates on courses, events, and opportunities!</p>
            </div>
            <a href="https://chat.whatsapp.com/IxavpJ0dP5O2DboZCNFtnk" target="_blank" rel="noopener noreferrer">
              <Button variant="glow" className="bg-green-600 hover:bg-green-700 shadow-green-600/40 hover:shadow-green-600/60">
                Join Now
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>

      {/* Social Links */}
      <section className="px-6 py-12 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map(social => <a key={social.label} href={social.href} className={`flex flex-col items-center gap-2 p-6 rounded-xl bg-card border border-border hover-lift ${social.color} transition-colors`}>
                <social.icon className="w-8 h-8" />
                <span className="text-sm font-medium">{social.label}</span>
              </a>)}
          </div>
        </div>
      </section>

      {/* Current Courses */}
      <section className="px-6 py-12 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground">Learn by building real projects</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredCourses.map((c, i) => (
              <Card key={i} variant="glass" className="hover-lift overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                  <span className={`absolute left-4 top-4 px-3 py-1 text-xs font-semibold rounded-full ${c.status === "LIVE" ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>{c.status}</span>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${c.status === 'LIVE' ? 'text-primary' : 'text-muted-foreground'}`}>{c.price}</span>
                  </div>
                  <CardTitle className="mt-4">{c.title}</CardTitle>
                  <CardDescription>{c.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  {c.status === "LIVE" ? (
                    <Link to={c.href}>
                      <Button variant="gradient" className="w-full">Register Now</Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>Course Ended</Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Counter */}
      <section className="px-6 py-12 lg:px-12">
        <Card className="max-w-md mx-auto text-center hover-lift">
          <CardContent className="p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-2">Total Visitors</h3>
            <p className="text-4xl font-bold gradient-text">100+</p>
            <p className="text-muted-foreground mt-2">and counting...</p>
          </CardContent>
        </Card>
      </section>

      <section className="px-6 py-16 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">Our Partners</h2>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={28}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 8 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={1200}
            loop
            grabCursor
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="h-32 md:h-40 rounded-xl bg-card border border-border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img src={logo} alt="Partner logo" className="h-24 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">What learners say</h2>
          <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3500, disableOnInteraction: false }} pagination={{ clickable: true }} loop>
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <Card className="max-w-3xl mx-auto">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-border" />
                      <div>
                        <p className="font-medium">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-lg text-muted-foreground">“{t.quote}”</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-display font-semibold">Get updates on new courses</h3>
              <p className="text-muted-foreground text-sm mt-1">No spam. Just useful content and openings.</p>
            </div>
            <div className="flex w-full md:w-auto items-center gap-3">
              <Input placeholder="Enter your email" className="w-full md:w-80" type="email" />
              <Button variant="gradient" onClick={() => alert('Thank you for subscribing! Check your email for updates.')}>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display font-bold text-xl gradient-text mb-4">AIZENERA</h3>
              <p className="text-muted-foreground text-sm">
                Empowering engineers with AI-driven education and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
                <li><Link to="/study-material" className="hover:text-primary transition-colors">Study Material</Link></li>
                <li><Link to="/tools" className="hover:text-primary transition-colors">Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/newsroom" className="hover:text-primary transition-colors">Newsroom</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 AIZENERA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Home;
