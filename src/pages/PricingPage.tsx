import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "₹2,499",
      period: "per month",
      description: "Perfect for small fleets",
      features: [
        "Up to 10 vehicles",
        "Real-time GPS tracking",
        "Basic reporting",
        "Email support",
        "Mobile app access",
        "Basic geofencing",
        "Fuel tracking"
      ],
      limitations: [
        "No AI features",
        "No video telematics",
        "No ELD compliance",
        "Limited analytics",
        "No predictive maintenance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹6,999",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 50 vehicles",
        "Real-time GPS tracking",
        "AI-powered route optimization",
        "Advanced analytics",
        "Predictive maintenance",
        "Driver behavior monitoring",
        "Video telematics",
        "ELD compliance",
        "Priority support",
        "API access",
        "Custom dashboards",
        "Mobile solutions"
      ],
      limitations: [
        "No EV management",
        "Limited video storage",
        "No white-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large enterprise fleets",
      features: [
        "Unlimited vehicles",
        "All Professional features",
        "EV management & charging",
        "Advanced video telematics",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reporting",
        "White-label options",
        "On-premise deployment",
        "Multi-industry modules",
        "Advanced compliance tools",
        "Custom AI models",
        "Unlimited video storage"
      ],
      limitations: [],
      popular: false
    }
  ];

  return (
    <>
      <HeroSection
        title="Simple, Transparent Pricing"
        subtitle="Choose the perfect plan for your fleet management needs"
        className="bg-background"
      />

      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Pricing Plans"
            subtitle="No hidden fees, no surprises. Cancel anytime."
            className="text-center mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="pricing-title">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="pricing-price">{plan.price}</span>
                    <span className="pricing-period ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="text-body text-lg mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Included Features:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 text-red-600">Not Included:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-center">
                              <X className="h-4 w-4 text-red-600 mr-2" />
                              <span className="text-sm text-muted-foreground">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <Button 
                    className={`w-full mt-8 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing"
            className="text-center mb-16"
          />
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="card-title mb-2">Can I change plans anytime?</h3>
              <p className="card-description">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="card-title mb-2">Is there a free trial?</h3>
              <p className="card-description">Yes, we offer a 14-day free trial for all plans. No credit card required.</p>
            </div>
            <div>
              <h3 className="card-title mb-2">What happens if I exceed my vehicle limit?</h3>
              <p className="card-description">We'll notify you when you're approaching your limit. You can upgrade your plan or add additional vehicles for a small fee.</p>
            </div>
            <div>
              <h3 className="card-title mb-2">Do you offer custom pricing?</h3>
              <p className="card-description">Yes, our Enterprise plan offers custom pricing for large organizations with specific needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
