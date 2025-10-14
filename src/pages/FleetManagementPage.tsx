import { HeroSection } from "@/components/ui/hero-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Truck, Fuel, Wrench, BarChart3, 
  Shield, Navigation, TrendingUp 
} from "lucide-react";

export default function FleetManagementPage() {
  return (
    <>
      <HeroSection
        title="Sarthi Fleet Management"
        subtitle="Complete fleet tracking and management solution for modern transportation businesses"
        backgroundImage="url('/images/backgrounds/background.jpg')"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/register">Start Free Trial</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-background text-foreground border-border hover:bg-gray-800 hover:text-foreground" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Overview */}
      <section className="py-20 px-4 bg-background truck-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Optimize Your Fleet Operations</h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Sarthi Fleet Management is a comprehensive solution that helps you track, monitor, and optimize your entire fleet operations in real-time.
                </p>
                <p>
                  Built for transportation businesses of all sizes, our system provides complete visibility into vehicle location, performance, maintenance, and driver behavior, helping you reduce costs and improve efficiency.
                </p>
                <p>
                  With Sarthi Fleet Management, you can make data-driven decisions to optimize routes, reduce fuel consumption, and ensure vehicle safety.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/backgrounds/fleet-management.jpg" 
                alt="Fleet Management Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <SectionHeading
            title="Key Features"
            subtitle="Everything you need to manage your fleet efficiently"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Truck className="h-8 w-8" />}
              title="Real-time Tracking"
              description="Track your vehicles in real-time with GPS monitoring and location history."
            />
            <FeatureCard
              icon={<Navigation className="h-8 w-8" />}
              title="Route Optimization"
              description="Optimize delivery routes to reduce fuel costs and improve delivery times."
            />
            <FeatureCard
              icon={<Fuel className="h-8 w-8" />}
              title="Fuel Management"
              description="Monitor fuel consumption and identify opportunities for cost savings."
            />
            <FeatureCard
              icon={<Wrench className="h-8 w-8" />}
              title="Maintenance Tracking"
              description="Schedule and track vehicle maintenance to prevent breakdowns and extend vehicle life."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Driver Safety"
              description="Monitor driver behavior and implement safety protocols to reduce accidents."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Analytics & Reports"
              description="Comprehensive reporting and analytics to optimize fleet performance."
            />
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4 bg-background">
        <Tabs defaultValue="tracking" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="tracking">Vehicle Tracking</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tracking">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Vehicle Tracking</h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Real-time GPS Tracking</h4>
                      <p className="text-muted-foreground">
                        Monitor vehicle location, speed, and direction in real-time with detailed maps and history.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Geofencing</h4>
                      <p className="text-muted-foreground">
                        Set up virtual boundaries and receive alerts when vehicles enter or leave designated areas.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Route History</h4>
                      <p className="text-muted-foreground">
                        View detailed route history and analyze driving patterns for optimization.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/backgrounds/vehicle-tracking.jpg" 
                  alt="Vehicle Tracking Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="maintenance">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Maintenance Management</h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Scheduled Maintenance</h4>
                      <p className="text-muted-foreground">
                        Automatically schedule maintenance based on mileage, time, or usage patterns.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Maintenance History</h4>
                      <p className="text-muted-foreground">
                        Keep detailed records of all maintenance activities and repairs for each vehicle.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Cost Tracking</h4>
                      <p className="text-muted-foreground">
                        Track maintenance costs and identify vehicles that require more attention.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/backgrounds/maintenance-tracking.jpg" 
                  alt="Maintenance Management Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Analytics & Reporting</h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Fuel Analytics</h4>
                      <p className="text-muted-foreground">
                        Analyze fuel consumption patterns and identify opportunities for cost savings.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Driver Performance</h4>
                      <p className="text-muted-foreground">
                        Monitor driver behavior including speeding, harsh braking, and idling time.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Fleet Utilization</h4>
                      <p className="text-muted-foreground">
                        Track vehicle utilization rates and optimize fleet size based on actual usage.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/backgrounds/fleet-analytics.jpg" 
                  alt="Fleet Analytics Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Choose Sarthi Fleet Management?"
            subtitle="Transform your fleet operations with our comprehensive solution"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reduce Operating Costs</h3>
              <p className="text-muted-foreground">
                Optimize routes, reduce fuel consumption, and minimize maintenance costs with data-driven insights.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Improve Safety</h3>
              <p className="text-muted-foreground">
                Monitor driver behavior and implement safety protocols to reduce accidents and insurance costs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
              <p className="text-muted-foreground">
                Make informed decisions with comprehensive analytics and real-time fleet insights.
              </p>
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
            <Link to="/register">Start Free Trial</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>
      </CTASection>
    </>
  );
}
