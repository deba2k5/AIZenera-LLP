import { Card, CardContent } from "@/components/ui/card";
import { Shield, Info } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, enroll in a course, participate in interactive features, fill out a form, or communicate with us. This information may include:

• Personal identification information (name, email address, phone number)
• Educational information (college name, course, year of study)
• Payment information (processed securely through third-party providers)
• Profile information (bio, profile picture)
• Communications you send to us`
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send you technical notices, updates, security alerts, and support messages
• Respond to your comments, questions, and requests
• Communicate with you about products, services, offers, and events
• Monitor and analyze trends, usage, and activities
• Personalize and improve your experience
• Detect, investigate, and prevent fraudulent transactions and abuse`
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.

We may share information:
• With vendors and service providers who need access to perform services for us
• In response to legal process or government requests
• To protect the rights, privacy, safety, or property of AIZenera, you, or others
• In connection with any merger, sale of company assets, or acquisition`
  },
  {
    title: "4. Data Security",
    content: `We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our platform.

Sensitive and private data exchange between the platform and its users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.`
  },
  {
    title: "5. Cookies and Tracking",
    content: `Our platform may use "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about you. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent.

We also use analytics services to help understand how our services are used. These tools collect information sent by your browser, including the pages you visit and other information that assists us in improving our services.`
  },
  {
    title: "6. Third-Party Services",
    content: `Our platform may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices or content of these third parties. We encourage you to read the privacy policies of any third-party services before providing them with your personal information.

We may use third-party services for:
• Payment processing (Razorpay, etc.)
• Analytics (Google Analytics)
• Communication (WhatsApp, Email services)
• Hosting and infrastructure`
  },
  {
    title: "7. Your Rights",
    content: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information
• Object to processing of your personal information
• Request restriction of processing your personal information
• Request transfer of your personal information
• Withdraw consent at any time

To exercise these rights, please contact us at privacy@aizenera.com`
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers.`
  },
  {
    title: "9. Changes to This Policy",
    content: `AIZenera has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.

You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.`
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions about this Privacy Policy, the practices of this platform, or your dealings with us, please contact us at:

AIZenera
Email: info@aizenera.com
Website: www.aizenera.com`
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card variant="glass" className="mb-8 animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary mt-1 shrink-0" />
              <p className="text-muted-foreground">
                This Privacy Policy describes how AIZenera ("we", "us", or "our") collects, uses, 
                and shares information about you when you use our websites, mobile applications, 
                and other online products and services (collectively, "Services") or when you 
                otherwise interact with us. Your privacy is critically important to us.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card 
              key={section.title} 
              variant="glass" 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <h2 className="text-xl font-display font-semibold mb-4 text-primary">
                  {section.title}
                </h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <Card variant="gradient" className="mt-8">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              By using AIZenera's services, you acknowledge that you have read and understood this 
              Privacy Policy and agree to its terms.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
