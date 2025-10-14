import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, Download, QrCode, 
  Truck, Fuel, Wrench, 
  BarChart3, Settings, Navigation,
  Play, Pause, RotateCcw, Eye
} from "lucide-react";

interface MobilePreviewProps {
  className?: string;
}

export function MobilePreview({ className }: MobilePreviewProps) {
  const [activeApp, setActiveApp] = useState("driver");
  const [isPlaying, setIsPlaying] = useState(true);

  const apps = [
    {
      id: "driver",
      name: "Driver App",
      description: "Mobile app for drivers with real-time navigation and task management",
      features: [
        "Real-time GPS navigation",
        "Task assignments",
        "Fuel tracking",
        "Maintenance alerts",
        "Digital logbook",
        "Emergency contacts"
      ],
      screens: [
        { title: "Dashboard", description: "Overview of daily tasks and routes" },
        { title: "Navigation", description: "Turn-by-turn directions with traffic" },
        { title: "Tasks", description: "Assigned deliveries and pickups" },
        { title: "Fuel Log", description: "Track fuel consumption and costs" },
        { title: "Maintenance", description: "Vehicle health and service alerts" },
        { title: "Profile", description: "Driver information and settings" }
      ]
    },
    {
      id: "manager",
      name: "Manager App",
      description: "Comprehensive fleet management for supervisors and managers",
      features: [
        "Fleet overview dashboard",
        "Driver performance tracking",
        "Route optimization",
        "Maintenance scheduling",
        "Cost analysis",
        "Report generation"
      ],
      screens: [
        { title: "Fleet Overview", description: "Real-time fleet status and location" },
        { title: "Driver Management", description: "Monitor driver performance and behavior" },
        { title: "Route Planning", description: "Optimize routes and schedules" },
        { title: "Maintenance", description: "Track vehicle maintenance and costs" },
        { title: "Analytics", description: "Performance metrics and insights" },
        { title: "Reports", description: "Generate and export reports" }
      ]
    },
    {
      id: "admin",
      name: "Admin App",
      description: "Enterprise-level administration and configuration",
      features: [
        "User management",
        "System configuration",
        "Security settings",
        "Integration management",
        "Billing and subscriptions",
        "Advanced analytics"
      ],
      screens: [
        { title: "User Management", description: "Manage users and permissions" },
        { title: "System Settings", description: "Configure system parameters" },
        { title: "Integrations", description: "Manage third-party integrations" },
        { title: "Security", description: "Security settings and monitoring" },
        { title: "Billing", description: "Subscription and billing management" },
        { title: "Analytics", description: "Advanced reporting and insights" }
      ]
    }
  ];

  // const currentApp = apps.find(app => app.id === activeApp) || apps[0];

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Smartphone className="h-8 w-8 text-primary mr-3" />
          <h2 className="section-title">Mobile Fleet Management</h2>
        </div>
        <p className="section-subtitle">
          Powerful mobile applications for drivers, managers, and administrators
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* App Selection & Features */}
        <div className="space-y-8">
          {/* App Tabs */}
          <Tabs value={activeApp} onValueChange={setActiveApp}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="driver">Driver App</TabsTrigger>
              <TabsTrigger value="manager">Manager App</TabsTrigger>
              <TabsTrigger value="admin">Admin App</TabsTrigger>
            </TabsList>

            {apps.map((app) => (
              <TabsContent key={app.id} value={app.id} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="h-6 w-6 mr-2" />
                      {app.name}
                    </CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {app.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* App Screens */}
                <Card>
                  <CardHeader>
                    <CardTitle>App Screens</CardTitle>
                    <CardDescription>
                      Explore the different screens and functionality
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {app.screens.map((screen, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <h5 className="font-medium text-sm mb-1">{screen.title}</h5>
                          <p className="text-xs text-muted-foreground">{screen.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile Device Preview */}
        <div className="space-y-8">
          {/* Device Frame */}
          <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 py-3 bg-gray-100">
                <div className="text-xs font-medium">9:41</div>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-black rounded-sm"></div>
                  <div className="w-4 h-2 bg-black rounded-sm"></div>
                  <div className="w-4 h-2 bg-black rounded-sm"></div>
                </div>
              </div>

              {/* App Content */}
              <div className="p-4 h-full bg-gradient-to-b from-blue-50 to-white">
                {activeApp === "driver" && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <Truck className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg">Driver Dashboard</h3>
                      <p className="text-sm text-gray-600">Welcome back, John!</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-100 p-3 rounded-lg text-center">
                        <Navigation className="h-6 w-6 text-green-600 mx-auto mb-1" />
                        <div className="text-xs font-medium">Navigation</div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-lg text-center">
                        <BarChart3 className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                        <div className="text-xs font-medium">Tasks</div>
                      </div>
                      <div className="bg-orange-100 p-3 rounded-lg text-center">
                        <Fuel className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                        <div className="text-xs font-medium">Fuel Log</div>
                      </div>
                      <div className="bg-red-100 p-3 rounded-lg text-center">
                        <Wrench className="h-6 w-6 text-red-600 mx-auto mb-1" />
                        <div className="text-xs font-medium">Maintenance</div>
                      </div>
                    </div>

                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Current Route</span>
                        <span className="text-xs text-gray-600">2.3 mi</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeApp === "manager" && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg">Fleet Manager</h3>
                      <p className="text-sm text-gray-600">5 vehicles active</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Active Vehicles</span>
                          <span className="text-lg font-bold text-green-600">5</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Total Distance</span>
                          <span className="text-lg font-bold text-blue-600">247 km</span>
                        </div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Fuel Efficiency</span>
                          <span className="text-lg font-bold text-orange-600">8.2 L/100km</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeApp === "admin" && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Settings className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg">Admin Panel</h3>
                      <p className="text-sm text-gray-600">System Administration</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Active Users</span>
                          <span className="text-lg font-bold text-purple-600">24</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">System Status</span>
                          <span className="text-lg font-bold text-green-600">Online</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">API Calls</span>
                          <span className="text-lg font-bold text-blue-600">1.2K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Full Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Download Our Mobile Apps</CardTitle>
            <CardDescription className="text-center">
              Available for iOS and Android devices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Driver App</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For drivers and field workers
                </p>
                <div className="space-y-2">
                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    iOS App Store
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Google Play
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Manager App</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For fleet managers and supervisors
                </p>
                <div className="space-y-2">
                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    iOS App Store
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Google Play
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Admin App</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For system administrators
                </p>
                <div className="space-y-2">
                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    iOS App Store
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="mt-8 text-center">
              <div className="inline-block p-4 bg-white rounded-lg shadow-lg">
                <QrCode className="h-32 w-32 text-gray-600" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Scan to download the apps
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
