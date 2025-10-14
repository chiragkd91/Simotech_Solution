import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator, TrendingUp, DollarSign, Fuel, Wrench, 
  Shield, BarChart3, Target, CheckCircle
} from "lucide-react";

interface ROICalculatorProps {
  className?: string;
}

export function ROICalculator({ className }: ROICalculatorProps) {
  const [fleetSize, setFleetSize] = useState(25);
  const [monthlyFuel, setMonthlyFuel] = useState(500000);
  const [maintenanceCost, setMaintenanceCost] = useState(150000);
  const [driverCount, setDriverCount] = useState(30);
  const [currentEfficiency, setCurrentEfficiency] = useState(75);

  // Calculate savings
  const fuelSavings = Math.round(monthlyFuel * 0.15); // 15% fuel savings
  const maintenanceSavings = Math.round(maintenanceCost * 0.25); // 25% maintenance savings
  const efficiencyGains = Math.round((fleetSize * 200) * (100 - currentEfficiency) / 100); // Efficiency gains
  const safetySavings = Math.round(driverCount * 500); // Safety-related savings
  const complianceSavings = Math.round(fleetSize * 200); // Compliance savings
  
  const totalMonthlySavings = fuelSavings + maintenanceSavings + efficiencyGains + safetySavings + complianceSavings;
  const totalAnnualSavings = totalMonthlySavings * 12;
  const roiPercentage = Math.round((totalAnnualSavings / 83988) * 100); // Based on Professional plan cost (₹6,999 * 12)

  const savings = [
    {
      icon: <Fuel className="h-6 w-6" />,
      title: "Fuel Savings",
      amount: fuelSavings,
      description: "15% reduction through route optimization"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Maintenance Savings",
      amount: maintenanceSavings,
      description: "25% reduction through predictive maintenance"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Efficiency Gains",
      amount: efficiencyGains,
      description: "Improved fleet utilization and productivity"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Savings",
      amount: safetySavings,
      description: "Reduced accidents and insurance costs"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Compliance Savings",
      amount: complianceSavings,
      description: "Automated compliance and reporting"
    }
  ];

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="h-8 w-8 text-primary mr-3" />
          <h2 className="section-title">ROI Calculator</h2>
        </div>
        <p className="section-subtitle">
          Calculate your potential savings with Sarthi Fleet Management
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-6 w-6 mr-2" />
              Fleet Information
            </CardTitle>
            <CardDescription>
              Enter your current fleet details to see potential savings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="fleet-size" className="form-label">
                Fleet Size: {fleetSize} vehicles
              </Label>
              <Slider
                id="fleet-size"
                min={1}
                max={200}
                step={1}
                value={[fleetSize]}
                onValueChange={(value) => setFleetSize(value[0])}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="monthly-fuel" className="form-label">
                Monthly Fuel Cost: ₹{monthlyFuel.toLocaleString()}
              </Label>
              <Slider
                id="monthly-fuel"
                min={50000}
                max={2000000}
                step={10000}
                value={[monthlyFuel]}
                onValueChange={(value) => setMonthlyFuel(value[0])}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="maintenance" className="form-label">
                Monthly Maintenance: ₹{maintenanceCost.toLocaleString()}
              </Label>
              <Slider
                id="maintenance"
                min={20000}
                max={500000}
                step={5000}
                value={[maintenanceCost]}
                onValueChange={(value) => setMaintenanceCost(value[0])}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="drivers" className="form-label">
                Number of Drivers: {driverCount}
              </Label>
              <Slider
                id="drivers"
                min={5}
                max={100}
                step={1}
                value={[driverCount]}
                onValueChange={(value) => setDriverCount(value[0])}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="efficiency" className="form-label">
                Current Efficiency: {currentEfficiency}%
              </Label>
              <Slider
                id="efficiency"
                min={50}
                max={95}
                step={5}
                value={[currentEfficiency]}
                onValueChange={(value) => setCurrentEfficiency(value[0])}
                className="mt-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-6 w-6 mr-2" />
              Your Potential Savings
            </CardTitle>
            <CardDescription>
              Based on industry averages and customer data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Total Savings Display */}
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">
                  ₹{totalMonthlySavings.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Monthly Savings</div>
                <div className="text-2xl font-semibold text-green-600 mt-2">
                  ₹{totalAnnualSavings.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Annual Savings</div>
              </div>

              {/* ROI Percentage */}
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {roiPercentage}% ROI
                </div>
                <div className="text-sm text-muted-foreground">
                  Return on investment in first year
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Savings Breakdown</h4>
                {savings.map((saving, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-primary mr-3">{saving.icon}</div>
                      <div>
                        <div className="font-medium">{saving.title}</div>
                        <div className="text-sm text-muted-foreground">{saving.description}</div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-green-600">
                      ₹{saving.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button size="lg" className="w-full">
                <DollarSign className="h-5 w-5 mr-2" />
                Start Saving Today
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          * Calculations based on industry averages and customer data. Actual savings may vary.
        </p>
      </div>
    </div>
  );
}
