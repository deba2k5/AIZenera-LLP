import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import StudyMaterial from "./pages/StudyMaterial";
import Courses from "./pages/Courses";
import Newsroom from "./pages/Newsroom";
import Notice from "./pages/Notice";
import GPACalculator from "./pages/GPACalculator";
import AboutUs from "./pages/AboutUs";
import CAPage from "./pages/CAPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { UserProvider } from "@/context/UserContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <UserProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/study-material" element={<StudyMaterial />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/newsroom" element={<Newsroom />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/gpa-calculator" element={<GPACalculator />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/ca-page" element={<CAPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </UserProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
