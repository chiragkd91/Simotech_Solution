import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, Target, Award, Globe, Heart, Lightbulb, 
  Star, CheckCircle, Quote
} from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Shivam Choudhary",
      role: "CEO & Founder",
      description: "10+ years in fleet management technology",
      image: "/images/team/Shivam.jpg"
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge solutions that keep our clients ahead of the competition."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Success",
      description: "Our success is measured by our customers' success. We're committed to helping you achieve your goals."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from product development to customer support."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Serving fleets worldwide with localized support and compliance with international standards."
    }
  ];

  const caseStudies = [
    {
      company: "LogiTrans Solutions",
      industry: "Logistics",
      fleetSize: "150 vehicles",
      results: [
        "30% reduction in fuel costs",
        "25% improvement in delivery times",
        "40% reduction in maintenance costs"
      ],
      testimonial: "Sarthi transformed our entire operation. The AI-powered route optimization alone saved us $50,000 monthly.",
      author: "John Martinez, Operations Director"
    },
    {
      company: "City Delivery Services",
      industry: "Last-Mile Delivery",
      fleetSize: "75 vehicles",
      results: [
        "35% increase in delivery efficiency",
        "50% reduction in driver accidents",
        "20% improvement in customer satisfaction"
      ],
      testimonial: "The video telematics feature helped us reduce accidents by 50% and improve driver safety significantly.",
      author: "Sarah Chen, Fleet Manager"
    },
    {
      company: "Construction Fleet Co.",
      industry: "Construction",
      fleetSize: "200 vehicles",
      results: [
        "45% reduction in equipment downtime",
        "30% improvement in project completion times",
        "60% reduction in compliance violations"
      ],
      testimonial: "The predictive maintenance feature prevented 15 major breakdowns in the first quarter, saving us over $200,000.",
      author: "Mike Thompson, Fleet Director"
    }
  ];

  const testimonials = [
    {
      quote: "Sarthi's AI-powered analytics helped us identify cost-saving opportunities we never knew existed. Our ROI was 300% in the first year.",
      author: "Jennifer Lee",
      role: "CEO, Metro Transport",
      rating: 5
    },
    {
      quote: "The ELD compliance features saved us from potential DOT violations. The automated reporting is a game-changer for our business.",
      author: "Robert Garcia",
      role: "Fleet Manager, Interstate Logistics",
      rating: 5
    },
    {
      quote: "The mobile app is incredibly intuitive. Our drivers love the real-time navigation and job management features.",
      author: "Amanda Wilson",
      role: "Operations Director, Quick Delivery",
      rating: 5
    }
  ];

  return (
    <>
      <HeroSection
        title="Sarthi"
        subtitle="Empowering transportation businesses with innovative fleet management solutions"
        backgroundImage="url('/images/backgrounds/background.jpg')"
      />

      {/* Company Story */}
      <section className="py-20 px-4 bg-background truck-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground">
                <p className="text-body">
                  Founded in 2018, Sarthi Fleet Management was born from a simple observation: 
                  transportation businesses were struggling with outdated, fragmented systems 
                  that couldn't keep up with modern demands.
                </p>
                <p className="text-body">
                  Our founders, having worked in the fleet management industry for over two decades, 
                  recognized the need for a comprehensive, user-friendly solution that could integrate 
                  all aspects of fleet operations into a single platform.
                </p>
                <p className="text-body">
                  Today, we serve over 500 companies worldwide, managing more than 10,000 vehicles 
                  and helping our clients reduce operational costs by an average of 25% while 
                  improving safety and efficiency.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/backgrounds/fleet-management.jpg" 
                alt="Sarthi Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  To revolutionize fleet management by providing innovative, user-friendly solutions 
                  that help transportation businesses optimize their operations, reduce costs, and 
                  improve safety while contributing to a more sustainable future.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  To become the global leader in fleet management technology, empowering every 
                  transportation business to operate more efficiently, safely, and sustainably 
                  through cutting-edge digital solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-background truck-red-bg">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The experts behind Sarthi Fleet Management"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Success Stories"
            subtitle="Real results from our customers"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                    <p className="text-muted-foreground mb-1">{study.industry}</p>
                    <p className="text-sm text-muted-foreground">{study.fleetSize}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-green-600">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <Quote className="h-6 w-6 text-primary mb-2" />
                    <p className="testimonial-text mb-2">"{study.testimonial}"</p>
                    <p className="testimonial-role">- {study.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Hear from the fleet managers who trust us"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <p className="testimonial-text mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="testimonial-author">{testimonial.author}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Impact"
            subtitle="Numbers that speak for themselves"
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stats-number text-primary mb-2">500+</div>
              <div className="stats-label">Happy Customers</div>
            </div>
            <div>
              <div className="stats-number text-primary mb-2">10,000+</div>
              <div className="stats-label">Vehicles Managed</div>
            </div>
            <div>
              <div className="stats-number text-primary mb-2">25%</div>
              <div className="stats-label">Average Cost Reduction</div>
            </div>
            <div>
              <div className="stats-number text-primary mb-2">99.9%</div>
              <div className="stats-label">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Success Story?"
        description="Become part of the Sarthi family and transform your fleet operations"
        className="text-center"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/pricing">View Our Plans</Link>
          </Button>
        </div>
      </CTASection>
    </>
  );
}
