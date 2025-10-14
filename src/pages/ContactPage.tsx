import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones,
  BookOpen, Video, Users, Download, FileText, Award,
} from "lucide-react";
import { useState } from "react";
import { trackContactForm } from "@/components/analytics/GoogleAnalytics";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      // Replace with your backend endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData as any)),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      setSubmitMessage("Thanks! We received your message and will get back shortly.");
      trackContactForm("contact_page");
      form.reset();
    } catch (err) {
      setSubmitMessage("Sorry, something went wrong. Please try again later or email us.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="We're here to help you optimize your fleet operations"
        className="bg-background"
      />

      {/* Contact Information */}
      <section className="py-20 px-4 bg-background truck-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Contact Information"
            subtitle="Multiple ways to reach us"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 98789 11178</p>
                <p className="text-muted-foreground">+91 91570 67587</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM IST</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">support@SimotechSolution.com</p>
                <p className="text-muted-foreground">Shivam@SimotechSolution.com</p>
                <p className="text-sm text-muted-foreground">24/7 Support</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-muted-foreground">123 Fleet Street</p>
                <p className="text-sm text-muted-foreground">Mumbai, Maharashtra 400001</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-6">Send us a Message</h2>
              <p className="section-subtitle mb-8">
                Have questions about our fleet management solutions? We'd love to hear from you. 
                Send us a message and we'll respond within 24 hours.
              </p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="form-label">First Name</Label>
                    <Input id="firstName" placeholder="John" className="form-input" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="form-label">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="form-input" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="form-label">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="form-input" />
                </div>
                
                <div>
                  <Label htmlFor="company" className="form-label">Company</Label>
                  <Input id="company" placeholder="Your Company Name" className="form-input" />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="form-label">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" className="form-input" />
                </div>
                
                <div>
                  <Label htmlFor="fleetSize" className="form-label">Fleet Size</Label>
                  <select 
                    id="fleetSize" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md form-input"
                  >
                    <option value="">Select fleet size</option>
                    <option value="1-10">1-10 vehicles</option>
                    <option value="11-50">11-50 vehicles</option>
                    <option value="51-100">51-100 vehicles</option>
                    <option value="100+">100+ vehicles</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="inquiryType" className="form-label">Inquiry Type</Label>
                  <select 
                    id="inquiryType" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md form-input"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="form-label">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your fleet management needs..."
                    className="min-h-[120px] form-input"
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitMessage && (
                  <p className="text-sm text-muted-foreground text-center">{submitMessage}</p>
                )}
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Sarthi?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Support</h4>
                    <p className="text-muted-foreground">
                      Our team of fleet management experts is here to help you succeed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-lg mr-4">
                    <Headphones className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">24/7 Support</h4>
                    <p className="text-muted-foreground">
                      Round-the-clock technical support to keep your fleet running smoothly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quick Response</h4>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24 hours, often much sooner.
                    </p>
                  </div>
                </div>
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                  <CardDescription>
                    For urgent technical issues or immediate assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Emergency Support Line:</p>
                    <p className="text-primary">+91 98765 91100</p>
                    <p className="text-sm text-muted-foreground">
                      Available 24/7 for critical fleet issues
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training Resources */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Training & Resources"
            subtitle="Everything you need to succeed with Sarthi"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guides and API documentation
                </p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  View Docs
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <Video className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step video guides for all features
                </p>
                <Button variant="outline" size="sm">
                  <Video className="h-4 w-4 mr-2" />
                  Watch Now
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Training</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive webinars and live training sessions
                </p>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                <p className="text-muted-foreground mb-4">
                  Industry best practices and optimization tips
                </p>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <SectionHeading
            title="Support Options"
            subtitle="Choose the support level that fits your needs"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Basic Support
                </CardTitle>
                <CardDescription>Email support for all customers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    Email support
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    Knowledge base access
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    Video tutorials
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    48-hour response time
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-6 w-6 mr-2" />
                  Priority Support
                </CardTitle>
                <CardDescription>Enhanced support for Professional plans</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    Phone & email support
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    Priority ticket handling
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    Live training sessions
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    24-hour response time
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="h-6 w-6 mr-2" />
                  Enterprise Support
                </CardTitle>
                <CardDescription>Dedicated support for Enterprise customers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    On-site training
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    Custom integrations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
            className="text-center mb-16"
          />
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="card-title mb-2">How quickly can I get started?</h3>
              <p className="card-description">
                You can start your free trial immediately after signing up. Full implementation typically takes 1-2 weeks depending on your fleet size.
              </p>
            </div>
            <div>
              <h3 className="card-title mb-2">Do you offer training for my team?</h3>
              <p className="card-description">
                Yes, we provide comprehensive training sessions for your team, including online tutorials, webinars, and on-site training if needed.
              </p>
            </div>
            <div>
              <h3 className="card-title mb-2">Can I integrate with my existing systems?</h3>
              <p className="card-description">
                Absolutely! Sarthi integrates with most ERP, accounting, and maintenance systems through our robust API and pre-built connectors.
              </p>
            </div>
            <div>
              <h3 className="card-title mb-2">What kind of support do you provide?</h3>
              <p className="card-description">
                We offer 24/7 technical support via phone, email, and chat, plus dedicated account managers for enterprise customers.
              </p>
            </div>
            <div>
              <h3 className="card-title mb-2">Do you offer API access?</h3>
              <p className="card-description">
                Yes, we provide comprehensive API documentation and developer resources for custom integrations and third-party applications.
              </p>
            </div>
            <div>
              <h3 className="card-title mb-2">Is my data secure?</h3>
              <p className="card-description">
                Absolutely. We use enterprise-grade security with encryption, secure data centers, and compliance with industry standards including SOC 2 and GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
