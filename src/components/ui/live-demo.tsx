import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  BarChart3, Play, Pause, 
  RefreshCw, Eye, Settings, Bell
} from "lucide-react";

interface LiveDemoProps {
  className?: string;
}

export function LiveDemo({ className }: LiveDemoProps) {
  const [isLive, setIsLive] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState("Truck-001");
  const [demoTime, setDemoTime] = useState("14:32");

  // Simulate real-time data updates
  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setDemoTime(new Date().toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        }));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  const vehicles = [
    { id: "Truck-001", name: "Delivery Truck Alpha", status: "active", speed: 45, fuel: 78, location: "Highway 101" },
    { id: "Truck-002", name: "Cargo Van Beta", status: "idle", speed: 0, fuel: 92, location: "Warehouse A" },
    { id: "Truck-003", name: "Service Truck Gamma", status: "maintenance", speed: 0, fuel: 65, location: "Service Center" },
    { id: "Truck-004", name: "Delivery Truck Delta", status: "active", speed: 32, fuel: 58, location: "Downtown District" },
    { id: "Truck-005", name: "Cargo Van Epsilon", status: "active", speed: 28, fuel: 84, location: "Industrial Zone" }
  ];

  const alerts = [
    { id: 1, type: "fuel", message: "Truck-004 low fuel warning", time: "14:28", severity: "warning" },
    { id: 2, type: "maintenance", message: "Truck-003 maintenance due", time: "14:15", severity: "info" },
    { id: 3, type: "speed", message: "Truck-001 speed limit exceeded", time: "14:10", severity: "alert" }
  ];

  const stats = {
    totalVehicles: 5,
    activeVehicles: 3,
    totalDistance: 1247,
    fuelEfficiency: 8.2,
    avgSpeed: 35,
    alerts: 3
  };

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <h2 className="section-title">Live Fleet Dashboard</h2>
          </div>
        </div>
        <p className="section-subtitle">
          Experience our fleet management platform in real-time
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button 
            variant={isLive ? "default" : "outline"} 
            size="sm"
            onClick={() => setIsLive(!isLive)}
          >
            {isLive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isLive ? 'Live' : 'Paused'}
          </Button>
          <div className="text-sm text-muted-foreground">
            Last updated: {demoTime}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fleet Overview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-6 w-6 mr-2" />
                Fleet Overview
              </CardTitle>
              <CardDescription>
                Real-time monitoring of your entire fleet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stats.totalVehicles}</div>
                  <div className="text-sm text-muted-foreground">Total Vehicles</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.activeVehicles}</div>
                  <div className="text-sm text-muted-foreground">Active</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{stats.totalDistance}km</div>
                  <div className="text-sm text-muted-foreground">Distance Today</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{stats.fuelEfficiency}L/100km</div>
                  <div className="text-sm text-muted-foreground">Fuel Efficiency</div>
                </div>
              </div>

              {/* Vehicle List */}
              <div className="space-y-3">
                <h4 className="font-semibold">Vehicle Status</h4>
                {vehicles.map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedVehicle === vehicle.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          vehicle.status === 'active' ? 'bg-green-500' :
                          vehicle.status === 'idle' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}></div>
                        <div>
                          <div className="font-medium">{vehicle.name}</div>
                          <div className="text-sm text-muted-foreground">{vehicle.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{vehicle.speed} km/h</div>
                        <div className="text-sm text-muted-foreground">{vehicle.fuel}% fuel</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts & Analytics */}
        <div className="space-y-6">
          {/* Live Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-6 w-6 mr-2" />
                Live Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start p-3 rounded-lg bg-gray-50">
                    <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                      alert.severity === 'alert' ? 'bg-red-500' :
                      alert.severity === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{alert.message}</div>
                      <div className="text-xs text-muted-foreground">{alert.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                Quick Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Average Speed</span>
                  <span className="font-medium">{stats.avgSpeed} km/h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Alerts</span>
                  <span className="font-medium text-red-600">{stats.alerts}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Fuel Efficiency</span>
                  <span className="font-medium text-green-600">{stats.fuelEfficiency}L/100km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Distance</span>
                  <span className="font-medium">{stats.totalDistance} km</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Demo Controls */}
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Demo Settings
          </Button>
          <Button size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Full Demo
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          This is a live demonstration of our fleet management dashboard
        </p>
      </div>
    </div>
  );
}
