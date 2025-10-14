import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calculator, 
  CheckCircle, Star, Target, TrendingUp
} from "lucide-react";

interface LeadFormProps {
  className?: string;
  title?: string;
  description?: string;
  showROI?: boolean;
}

export function LeadForm({ 
  className, 
  title = "Get Your Free Fleet Analysis",
  description = "Discover how much you can save with our fleet management solution",
  showROI = true
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '',
    industry: '',
    currentChallenges: '',
    budget: '',
    timeline: '',
    newsletter: false,
    demo: false,
    consultation: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadScore, setLeadScore] = useState(0);

  // Calculate lead score based on form data
  const calculateLeadScore = (data: typeof formData) => {
    let score = 0;
    
    // Basic info (20 points)
    if (data.firstName && data.lastName) score += 10;
    if (data.email) score += 10;
    
    // Contact info (15 points)
    if (data.phone) score += 10;
    if (data.company) score += 5;
    
    // Fleet size (25 points)
    const fleetSize = parseInt(data.fleetSize) || 0;
    if (fleetSize >= 50) score += 25;
    else if (fleetSize >= 20) score += 20;
    else if (fleetSize >= 10) score += 15;
    else if (fleetSize >= 5) score += 10;
    else if (fleetSize > 0) score += 5;
    
    // Industry (10 points)
    if (data.industry) score += 10;
    
    // Challenges (15 points)
    if (data.currentChallenges) score += 15;
    
    // Budget (10 points)
    if (data.budget === 'enterprise') score += 10;
    else if (data.budget === 'professional') score += 8;
    else if (data.budget === 'starter') score += 5;
    
    // Timeline (5 points)
    if (data.timeline === 'immediate') score += 5;
    else if (data.timeline === '1-3months') score += 3;
    else if (data.timeline === '3-6months') score += 1;
    
    return Math.min(score, 100);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    setLeadScore(calculateLeadScore(newData));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company) newErrors.company = 'Company name is required';
    if (!formData.fleetSize) newErrors.fleetSize = 'Fleet size is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    
    // Show success message or redirect
    alert('Thank you! We\'ll contact you within 24 hours.');
  };

  const getLeadScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getLeadScoreLabel = (score: number) => {
    if (score >= 80) return 'Hot Lead';
    if (score >= 60) return 'Warm Lead';
    if (score >= 40) return 'Cold Lead';
    return 'New Lead';
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="text-center mb-8">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lead Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Fleet Analysis Request
              </CardTitle>
              <CardDescription>
                Get a personalized analysis of your fleet management needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="form-label">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="form-error mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="form-label">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="form-error mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="form-label">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="form-error mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="form-label">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="form-label">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`form-input ${errors.company ? 'border-red-500' : ''}`}
                    placeholder="Your Company Inc."
                  />
                  {errors.company && (
                    <p className="form-error mt-1">{errors.company}</p>
                  )}
                </div>

                {/* Fleet Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fleetSize" className="form-label">
                      Fleet Size *
                    </Label>
                    <select
                      id="fleetSize"
                      value={formData.fleetSize}
                      onChange={(e) => handleInputChange('fleetSize', e.target.value)}
                      className={`w-full px-3 py-2 border border-input bg-background rounded-md form-input ${errors.fleetSize ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select fleet size</option>
                      <option value="1-5">1-5 vehicles</option>
                      <option value="6-10">6-10 vehicles</option>
                      <option value="11-20">11-20 vehicles</option>
                      <option value="21-50">21-50 vehicles</option>
                      <option value="51-100">51-100 vehicles</option>
                      <option value="100+">100+ vehicles</option>
                    </select>
                    {errors.fleetSize && (
                      <p className="form-error mt-1">{errors.fleetSize}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="industry" className="form-label">
                      Industry
                    </Label>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md form-input"
                    >
                      <option value="">Select industry</option>
                      <option value="logistics">Logistics & Transportation</option>
                      <option value="construction">Construction</option>
                      <option value="delivery">Delivery & Courier</option>
                      <option value="service">Service & Maintenance</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="challenges" className="form-label">
                    Current Fleet Challenges
                  </Label>
                  <Textarea
                    id="challenges"
                    value={formData.currentChallenges}
                    onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                    className="form-input"
                    placeholder="Describe your current fleet management challenges..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget" className="form-label">
                      Budget Range
                    </Label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md form-input"
                    >
                      <option value="">Select budget range</option>
                      <option value="starter">₹2,499-6,999/month</option>
                      <option value="professional">₹6,999-17,999/month</option>
                      <option value="enterprise">₹17,999+/month</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="form-label">
                      Implementation Timeline
                    </Label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md form-input"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                    </select>
                  </div>
                </div>

                {/* Preferences */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for fleet management tips
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="demo"
                      checked={formData.demo}
                      onCheckedChange={(checked) => handleInputChange('demo', checked as boolean)}
                    />
                    <Label htmlFor="demo" className="text-sm">
                      Schedule a live demo
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consultation"
                      checked={formData.consultation}
                      onCheckedChange={(checked) => handleInputChange('consultation', checked as boolean)}
                    />
                    <Label htmlFor="consultation" className="text-sm">
                      Request a free consultation
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Get My Free Analysis
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Lead Score & Benefits */}
        <div className="space-y-6">
          {/* Lead Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-6 w-6 mr-2" />
                Lead Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${getLeadScoreColor(leadScore)}`}>
                  {leadScore}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {getLeadScoreLabel(leadScore)}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      leadScore >= 80 ? 'bg-green-500' :
                      leadScore >= 60 ? 'bg-yellow-500' :
                      leadScore >= 40 ? 'bg-orange-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${leadScore}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                What You'll Get
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-sm">Free ROI Analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-sm">Custom Fleet Report</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-sm">Implementation Plan</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-sm">Expert Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-sm">No Obligation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROI Preview */}
          {showROI && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-6 w-6 mr-2" />
                  Potential Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    ₹{(parseInt(formData.fleetSize) || 0) * 15000}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Monthly savings estimate
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
