import { HeroSection } from "@/components/ui/hero-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { LiveDemo } from "@/components/ui/live-demo";
import { MobilePreview } from "@/components/ui/mobile-preview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Truck, Fuel, Wrench, BarChart3, 
  Shield, Navigation, Smartphone, Cloud, Database,
  Brain, Camera, Zap, FileText, Award, Globe, CreditCard,
  Building2, FileSpreadsheet, FileCheck2, Boxes,
  Users, Wallet, FileText as FileTextIcon, FolderOpen,
  BadgeDollarSign, Receipt
} from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        title="Products Sarthi & Solutions"
        subtitle="Comprehensive fleet management tools designed for modern transportation businesses"
        backgroundImage="url('/images/backgrounds/fleet-management.jpg')"
      />

      {/* Product Categories */}
      <section className="py-20 px-4 bg-background truck-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Product Suite"
            subtitle="Everything you need to manage your fleet efficiently"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Truck className="h-8 w-8" />}
              title="Fleet Tracking"
              description="Real-time GPS tracking and monitoring for all your vehicles with detailed location history and geofencing capabilities."
            />
            <FeatureCard
              icon={<Navigation className="h-8 w-8" />}
              title="Route Optimization"
              description="AI-powered route optimization to reduce fuel costs, improve delivery times, and maximize efficiency."
            />
            <FeatureCard
              icon={<Fuel className="h-8 w-8" />}
              title="Fuel Management"
              description="Comprehensive fuel tracking and analytics to identify cost-saving opportunities and monitor consumption patterns."
            />
            <FeatureCard
              icon={<Wrench className="h-8 w-8" />}
              title="Maintenance Management"
              description="Automated maintenance scheduling, tracking, and cost management to keep your fleet running smoothly."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Driver Safety"
              description="Advanced driver behavior monitoring and safety protocols to reduce accidents and improve compliance."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Analytics & Reporting"
              description="Comprehensive reporting and analytics dashboard with customizable reports and real-time insights."
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="AI-Powered Intelligence"
              description="Machine learning algorithms for predictive maintenance, smart routing, and performance optimization."
            />
            <FeatureCard
              icon={<Camera className="h-8 w-8" />}
              title="Video Telematics"
              description="Advanced dashcam integration with AI-powered incident detection, driver coaching, and safety analysis."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="EV Management"
              description="Complete electric vehicle support with charging optimization, battery monitoring, and carbon tracking."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8" />}
              title="ELD Compliance"
              description="Electronic Logging Device integration with automated Hours of Service tracking and DOT compliance."
            />
            <FeatureCard
              icon={<Award className="h-8 w-8" />}
              title="Safety Management"
              description="Comprehensive safety protocols with DVIR management, CSA score monitoring, and incident reporting."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Multi-Industry Solutions"
              description="Specialized modules for construction, delivery, service, and mixed fleet operations across industries."
            />
            <FeatureCard
              icon={<CreditCard className="h-8 w-8" />}
              title="Fastag Solution"
              description="Integrated Fastag management for seamless toll payments and expense tracking across your entire fleet."
            />
            {/* New: Transport modules to match primesoft.app coverage */}
            <FeatureCard
              icon={<BadgeDollarSign className="h-8 w-8" />}
              title="Vehicle Loan Management"
              description="Track loans, EMIs, insurance renewals, and due alerts across all vehicles."
            />
            <FeatureCard
              icon={<Building2 className="h-8 w-8" />}
              title="Vendor Management"
              description="Centralize transport vendors, contracts, rates, and service SLAs."
            />
            <FeatureCard
              icon={<FileTextIcon className="h-8 w-8" />}
              title="LR/Bilty Generation"
              description="Create and print LR/Bilty with customizable templates and numbering."
            />
            <FeatureCard
              icon={<FileCheck2 className="h-8 w-8" />}
              title="E‑Way Billing"
              description="Generate and manage e‑way bills with GST compliance integration."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Logistics Management"
              description="Full dispatch-to-delivery tracking with milestones and notifications."
            />
            <FeatureCard
              icon={<Wallet className="h-8 w-8" />}
              title="Vehicle‑wise Expenses"
              description="Track fuel, maintenance, tolls, permits, and miscellaneous per vehicle."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Trip Profit Analysis"
              description="Per-trip revenue vs cost breakdown with margin and variance insights."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Driver Management"
              description="Attendance, advances, payroll, and deductions with automated calculations."
            />
            <FeatureCard
              icon={<Receipt className="h-8 w-8" />}
              title="Transport Accounting"
              description="Transport-focused ledger, receivables/payables, and reconciliations."
            />
            <FeatureCard
              icon={<Boxes className="h-8 w-8" />}
              title="Inventory Management"
              description="Spares/consumables with multi-location stock and low‑stock alerts."
            />
            <FeatureCard
              icon={<FileSpreadsheet className="h-8 w-8" />}
              title="Financial Reports"
              description="P&L and Balance Sheet tailored for transport operations."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Compliance Alerts"
              description="Automated reminders for insurance, PUC, permits, and servicing."
            />
            <FeatureCard
              icon={<FileCheck2 className="h-8 w-8" />}
              title="LR → Billing Conversion"
              description="Convert LR details into invoices with trip charges auto-included."
            />
            <FeatureCard
              icon={<FolderOpen className="h-8 w-8" />}
              title="Document Management"
              description="Centralized RC, insurance, fitness certificates with expiry alerts."
            />
          </div>
        </div>
      </section>


      {/* Detailed Products */}
      <section className="py-20 px-4 bg-gray-900">
        <Tabs defaultValue="tracking" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
            <TabsTrigger value="tracking">Fleet Tracking</TabsTrigger>
            <TabsTrigger value="ai">AI Intelligence</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Solutions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tracking">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Advanced Fleet Tracking</h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Real-time GPS Monitoring</h4>
                      <p className="text-muted-foreground">
                        Track vehicle location, speed, and direction in real-time with detailed maps and comprehensive history.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Geofencing & Alerts</h4>
                      <p className="text-muted-foreground">
                        Set up virtual boundaries and receive instant alerts when vehicles enter or leave designated areas.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Route History & Playback</h4>
                      <p className="text-muted-foreground">
                        View detailed route history and replay vehicle movements for analysis and optimization.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/backgrounds/vehicle-tracking.jpg" 
                  alt="Fleet Tracking Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">AI-Powered Fleet Intelligence</h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Predictive Maintenance</h4>
                      <p className="text-muted-foreground">
                        AI algorithms analyze vehicle data to predict maintenance needs and prevent costly breakdowns.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Smart Route Optimization</h4>
                      <p className="text-muted-foreground">
                        Machine learning algorithms continuously optimize routes based on traffic, weather, and historical data.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Driver Behavior Analysis</h4>
                      <p className="text-muted-foreground">
                        AI-powered analysis of driving patterns to identify safety risks and provide personalized coaching.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Video Telematics</h4>
                      <p className="text-muted-foreground">
                        Advanced dashcam integration with AI-powered incident detection and automated safety alerts.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/backgrounds/fleet-analytics.jpg" 
                  alt="AI Intelligence Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compliance">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Compliance & Safety Management</h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">ELD Compliance</h4>
                      <p className="text-muted-foreground">
                        Electronic Logging Device integration with automated Hours of Service tracking and DOT compliance.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Safety Management</h4>
                      <p className="text-muted-foreground">
                        Comprehensive safety protocols with DVIR management, CSA score monitoring, and incident reporting.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Regulatory Reporting</h4>
                      <p className="text-muted-foreground">
                        Automated compliance reporting for IFTA, DOT, and other regulatory requirements.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Multi-Industry Support</h4>
                      <p className="text-muted-foreground">
                        Specialized compliance modules for construction, delivery, service, and mixed fleet operations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/backgrounds/maintenance-tracking.jpg" 
                  alt="Compliance Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Mobile Solutions</h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Driver Mobile App</h4>
                      <p className="text-muted-foreground">
                        Comprehensive mobile app for drivers with navigation, job management, and communication features.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Manager Dashboard</h4>
                      <p className="text-muted-foreground">
                        Mobile-optimized management dashboard for real-time fleet monitoring and decision making.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Offline Capabilities</h4>
                      <p className="text-muted-foreground">
                        Full offline functionality with automatic data sync when connectivity is restored.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/backgrounds/maintenance-tracking.jpg" 
                  alt="Mobile App Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <LiveDemo />
        </div>
      </section>

      {/* Mobile App Preview */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <MobilePreview />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-background truck-fleet-bg">
        <div className="container mx-auto">
          <SectionHeading
            title="Built with Modern Technology"
            subtitle="Reliable, scalable, and secure infrastructure"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
              <p className="text-muted-foreground">
                Built on AWS with 99.9% uptime guarantee and global data centers for optimal performance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Data Storage</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with encryption, backup, and compliance with industry standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile First</h3>
              <p className="text-muted-foreground">
                Responsive design and native mobile apps for iOS and Android with offline capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Fleet Management?"
        description="Discover how our products can help you optimize your fleet operations"
        className="text-center"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" asChild>
            <Link to="/pricing">View Pricing</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>
      </CTASection>
    </>
  );
}
