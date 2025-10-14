import { HeroSection } from "@/components/ui/hero-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { SEOHead, organizationStructuredData } from "@/components/seo/SEOHead";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, Fuel, Wrench, BarChart3, 
  Shield, Navigation, Brain, Camera, Zap, 
  FileText, Award, Globe, Cpu, CreditCard
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Sarthi - Fleet Management Software India | GPS Tracking & Analytics"
        description="Complete fleet tracking and management solution for Indian transportation businesses. Real-time GPS tracking, AI-powered analytics, ELD compliance, and cost optimization. Start your free trial today!"
        keywords="fleet management software India, GPS tracking India, vehicle tracking software, fleet analytics, ELD compliance India, fleet optimization, transportation management, logistics software India"
        canonicalUrl={siteConfig.domainUrl}
        structuredData={organizationStructuredData}
      />
      <HeroSection
        title="Sarthi Fleet Management"
        subtitle="Complete fleet tracking and management solution for modern transportation businesses"
        className="hero-section hero-background-image animate-fade-in"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/pricing">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-background text-foreground border-border hover:bg-gray-800 hover:text-foreground" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Key Features */}
      <section className="py-20 px-4 bg-gray-900 truck-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Choose Sarthi?"
            subtitle="Transform your fleet operations with our comprehensive solution"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-up hover-lift animate-delay-100">
              <FeatureCard
                icon={<Truck className="h-8 w-8" />}
                title="Real-time Tracking"
                description="Track your vehicles in real-time with GPS monitoring and location history."
              />
            </div>
            <div className="animate-slide-up hover-lift animate-delay-200">
              <FeatureCard
                icon={<Navigation className="h-8 w-8" />}
                title="Route Optimization"
                description="Optimize delivery routes to reduce fuel costs and improve delivery times."
              />
            </div>
            <div className="animate-slide-up hover-lift animate-delay-300">
              <FeatureCard
                icon={<Fuel className="h-8 w-8" />}
                title="Fuel Management"
                description="Monitor fuel consumption and identify opportunities for cost savings."
              />
            </div>
            <div className="animate-slide-up hover-lift animate-delay-400">
              <FeatureCard
                icon={<Wrench className="h-8 w-8" />}
                title="Maintenance Tracking"
                description="Schedule and track vehicle maintenance to prevent breakdowns and extend vehicle life."
              />
            </div>
            <div className="animate-slide-up hover-lift animate-delay-500">
              <FeatureCard
                icon={<Shield className="h-8 w-8" />}
                title="Driver Safety"
                description="Monitor driver behavior and implement safety protocols to reduce accidents."
              />
            </div>
            <div className="animate-slide-up hover-lift">
              <FeatureCard
                icon={<BarChart3 className="h-8 w-8" />}
                title="Analytics & Reports"
                description="Comprehensive reporting and analytics to optimize fleet performance."
              />
            </div>
            <div className="animate-slide-up hover-lift animate-delay-600">
              <FeatureCard
                icon={<CreditCard className="h-8 w-8" />}
                title="Fastag Solution"
                description="Integrated Fastag management for seamless toll payments and expense tracking across your entire fleet."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced AI Features */}
      <section className="py-20 px-4 bg-background truck-red-bg">
        <div className="container mx-auto">
          <SectionHeading
            title="AI-Powered Fleet Intelligence"
            subtitle="Leverage artificial intelligence and machine learning for smarter fleet management"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-slide-in-left hover-scale animate-delay-100">
              <FeatureCard
                icon={<Brain className="h-8 w-8" />}
                title="Predictive Maintenance"
                description="AI-powered predictive analytics to prevent breakdowns and optimize maintenance schedules."
              />
            </div>
            <div className="animate-slide-in-left hover-scale animate-delay-200">
              <FeatureCard
                icon={<Camera className="h-8 w-8" />}
                title="Video Telematics"
                description="Advanced dashcam integration with AI-powered incident detection and driver coaching."
              />
            </div>
            <div className="animate-slide-in-left hover-scale animate-delay-300">
              <FeatureCard
                icon={<Zap className="h-8 w-8" />}
                title="EV Management"
                description="Complete electric vehicle support with charging optimization and battery health monitoring."
              />
            </div>
            <div className="animate-slide-in-left hover-scale animate-delay-400">
              <FeatureCard
                icon={<Cpu className="h-8 w-8" />}
                title="Smart Analytics"
                description="Machine learning algorithms for route optimization and performance prediction."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Safety Features */}
      <section className="py-20 px-4 bg-gray-900 truck-fleet-bg">
        <div className="container mx-auto">
          <SectionHeading
            title="Compliance & Safety Solutions"
            subtitle="Stay compliant with regulations and ensure maximum safety standards"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-in-right hover-glow animate-delay-100">
              <FeatureCard
                icon={<FileText className="h-8 w-8" />}
                title="ELD Compliance"
                description="Electronic Logging Device integration with automated Hours of Service tracking and DOT compliance."
              />
            </div>
            <div className="animate-slide-in-right hover-glow animate-delay-200">
              <FeatureCard
                icon={<Award className="h-8 w-8" />}
                title="Safety Management"
                description="Comprehensive safety protocols with DVIR management and CSA score monitoring."
              />
            </div>
            <div className="animate-slide-in-right hover-glow animate-delay-300">
              <FeatureCard
                icon={<Globe className="h-8 w-8" />}
                title="Multi-Industry Support"
                description="Specialized modules for construction, delivery, service, and mixed fleet operations."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 bg-background animate-fade-in">
        <div className="container mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-background stats-truck-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-bounce-in animate-delay-100">
              <div className="stats-number text-primary mb-2 animate-pulse-slow">500+</div>
              <div className="stats-label">Fleet Companies</div>
            </div>
            <div className="animate-bounce-in animate-delay-200">
              <div className="stats-number text-primary mb-2 animate-pulse-slow">10,000+</div>
              <div className="stats-label">Vehicles Tracked</div>
            </div>
            <div className="animate-bounce-in animate-delay-300">
              <div className="stats-number text-primary mb-2 animate-pulse-slow">25%</div>
              <div className="stats-label">Cost Reduction</div>
            </div>
            <div className="animate-bounce-in animate-delay-400">
              <div className="stats-number text-primary mb-2 animate-pulse-slow">99.9%</div>
              <div className="stats-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Optimize Your Fleet Operations?"
        description="Join thousands of businesses already using Sarthi to manage their fleets efficiently"
        className="text-center"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" asChild>
            <Link to="/pricing">Start Free Trial</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>
      </CTASection>
    </>
  );
}
