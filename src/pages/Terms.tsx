import { Card, CardContent } from "@/components/ui/card";
import { FileText, Info } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using AIZenera's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.`
  },
  {
    title: "2. Description of Service",
    content: `AIZenera provides an online educational platform focused on Artificial Intelligence, Machine Learning, and related technologies. Our services include but are not limited to:

• Online courses and masterclasses
• Study materials and resources
• Tools (GPA Calculator, Resume Analyzer, etc.)
• Community features and networking
• Workshops and events

We reserve the right to modify, suspend, or discontinue any aspect of the service at any time without prior notice.`
  },
  {
    title: "3. User Accounts",
    content: `To access certain features of our platform, you may be required to register for an account. When you register:

• You agree to provide accurate, current, and complete information
• You agree to maintain and promptly update your account information
• You are responsible for maintaining the confidentiality of your account credentials
• You are responsible for all activities that occur under your account
• You agree to notify us immediately of any unauthorized use of your account

We reserve the right to suspend or terminate your account if any information provided is found to be inaccurate, incomplete, or in violation of these terms.`
  },
  {
    title: "4. Course Enrollment and Payment",
    content: `When enrolling in paid courses:

• Prices are displayed in Indian Rupees (INR) and are subject to change
• Payment must be made in full at the time of enrollment unless otherwise specified
• All payments are processed through secure third-party payment processors
• Refunds are subject to our refund policy as stated during enrollment
• Course access is granted upon successful payment confirmation

Promotional discounts and early-bird pricing are subject to availability and may be withdrawn at any time.`
  },
  {
    title: "5. Intellectual Property Rights",
    content: `All content on AIZenera, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software, is the property of AIZenera or its content suppliers and is protected by Indian and international copyright laws.

• You may not reproduce, distribute, modify, or create derivative works of our content
• Course materials are for personal use only and may not be shared or redistributed
• You may not use our trademarks or branding without explicit written permission
• Any content you submit to us may be used by us for promotional purposes`
  },
  {
    title: "6. User Conduct",
    content: `When using our services, you agree NOT to:

• Use the service for any unlawful purpose
• Attempt to gain unauthorized access to any portion of the platform
• Interfere with or disrupt the service or servers
• Upload or transmit viruses, malware, or other harmful code
• Impersonate any person or entity
• Harass, abuse, or harm other users
• Share login credentials or course access with others
• Record, copy, or redistribute course content without permission
• Use automated systems or software to extract data from our platform`
  },
  {
    title: "7. Disclaimer of Warranties",
    content: `AIZenera provides its services on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding:

• The accuracy, reliability, or completeness of any content
• The availability or uninterrupted access to our services
• The results or outcomes you may achieve from using our services
• The security of your data or information

While we strive to provide accurate and up-to-date information, we do not guarantee employment outcomes or specific skill levels upon course completion.`
  },
  {
    title: "8. Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, AIZenera shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:

• Your use or inability to use our services
• Any unauthorized access to or use of our servers
• Any interruption or cessation of transmission to or from our services
• Any bugs, viruses, or the like that may be transmitted by third parties
• Any errors or omissions in any content`
  },
  {
    title: "9. Indemnification",
    content: `You agree to defend, indemnify, and hold harmless AIZenera, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:

• Your use of and access to the service
• Your violation of any term of these Terms of Service
• Your violation of any third-party right, including any intellectual property or privacy right
• Any claim that your content caused damage to a third party`
  },
  {
    title: "10. Governing Law",
    content: `These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal, India.`
  },
  {
    title: "11. Changes to Terms",
    content: `We reserve the right to update or change our Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last Updated" date.

Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service. Please review these terms periodically for changes.`
  },
  {
    title: "12. Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us at:

AIZenera
Email: legal@aizenera.com
Website: www.aizenera.com

We will respond to your inquiry as soon as possible.`
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Terms of Service</h1>
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
                Welcome to AIZenera. These Terms of Service ("Terms") govern your access to and use 
                of AIZenera's website, services, and applications. Please read these terms carefully 
                before using our services. By using our services, you agree to be bound by these Terms.
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
              By using AIZenera's services, you acknowledge that you have read, understood, and 
              agree to be bound by these Terms of Service.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
