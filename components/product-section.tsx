"use client"

import {
  ArrowRight,
  Bluetooth,
  Clock,
  Code,
  Droplets,
  FileText,
  LayoutDashboard,
  Radio,
  Shield,
  Thermometer,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react"

export function ProductSection() {
  return (
    <section id="product" className="w-full py-24 bg-background">
      <div className="container">
        {/* Sensor Product */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Sensor Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-card rounded-2xl p-12 border border-border">
              <div className="aspect-square max-w-sm mx-auto relative">
                {/* Sensor Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-64 bg-gradient-to-b from-slate-200 to-slate-300 rounded-2xl shadow-2xl relative">
                    {/* Sensor Display */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-20 bg-slate-800 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-primary font-mono text-2xl font-bold">-18.2°C</p>
                        <p className="text-xs text-muted-foreground">65% RH</p>
                      </div>
                    </div>
                    {/* LED Indicator */}
                    <div className="absolute top-32 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                    {/* Sensor Logo */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                      <Wifi className="h-8 w-8 text-slate-600" />
                    </div>
                  </div>
                </div>
                {/* Floating Specs */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur rounded-lg px-3 py-2 border border-border">
                  <p className="text-xs text-muted-foreground">Battery</p>
                  <p className="text-sm font-bold text-primary">10 Years</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur rounded-lg px-3 py-2 border border-border">
                  <p className="text-xs text-muted-foreground">Range</p>
                  <p className="text-sm font-bold text-primary">-40°C</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sensor Content */}
          <div className="order-1 lg:order-2 space-y-6">
  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
    Our Wireless IoT Sensors
  </h2>
  <p className="text-lg text-muted-foreground">
    Three sensor types, one platform. Industrial-grade hardware designed
    for the harshest cold chain environments.
  </p>
  <ul className="space-y-4">
    {[
      { icon: Bluetooth, text: "BLE sensors — 2-year battery, pairs with 4G/LTE gateway (primary)" },
      { icon: Wifi,      text: "WiFi sensors — 1-year battery, connects to existing WiFi networks" },
      { icon: Radio,     text: "LoRaWAN sensors — 10-year battery, long-range fallback for large or remote facilities" },
      { icon: Clock,     text: "Readings every 60 seconds across all sensor types" },
      { icon: Thermometer, text: "Operates from -40°C to +85°C — freezers, chillers, and beyond" },
      { icon: Droplets,  text: "IP67 waterproof and dustproof rated" },
      { icon: Shield,    text: "HTTPS encrypted end-to-end — data secure from sensor to dashboard" },
    ].map((item, index) => (
      <li key={index} className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <item.icon className="h-4 w-4 text-primary" />
        </div>
        <span className="text-foreground">{item.text}</span>
      </li>
    ))}
  </ul>
  <a href="#" className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
    View Technical Specifications <ArrowRight className="ml-1 h-4 w-4" />
  </a>
</div>
        </div>

        {/* Platform */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Platform Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Sensorytics Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              A powerful cloud dashboard that puts you in control.
            </p>
            <ul className="space-y-4">
              {[
                { icon: LayoutDashboard, text: "Live dashboard with real-time sensor data" },
                { icon: TrendingUp, text: "Historical trend graphs and analytics" },
                { icon: Users, text: "Multi-user access with role-based permissions" },
                { icon: Shield, text: "Role-based alerts (SMS, WhatsApp, Email)" },
                { icon: FileText, text: "Auto-generated compliance reports" },
                { icon: Code, text: "REST API for integrations" },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
              See Platform Features <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Platform Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-card rounded-2xl p-6 border border-border shadow-2xl">
              {/* Platform Mockup */}
              <div className="bg-background rounded-lg p-4 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4 h-6 bg-muted rounded-md" />
                </div>
                
                {/* Sidebar + Content */}
                <div className="flex gap-4">
                  {/* Sidebar */}
                  <div className="w-32 space-y-2">
                    <div className="h-8 bg-primary/20 rounded" />
                    <div className="h-6 bg-muted rounded" />
                    <div className="h-6 bg-muted rounded" />
                    <div className="h-6 bg-muted rounded" />
                    <div className="h-6 bg-muted rounded" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-card rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Active</p>
                          <p className="text-lg font-bold text-primary">247</p>
                        </div>
                      </div>
                      <div className="h-16 bg-card rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Alerts</p>
                          <p className="text-lg font-bold text-amber-500">3</p>
                        </div>
                      </div>
                      <div className="h-16 bg-card rounded-lg border border-border flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Offline</p>
                          <p className="text-lg font-bold text-muted-foreground">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-32 bg-card rounded-lg border border-border p-3">
                      <div className="flex items-end gap-1 h-full">
                        {[30, 45, 35, 55, 40, 65, 45, 50, 40, 55, 45, 60].map((h, i) => (
                          <div key={i} className="flex-1 bg-primary/60 rounded-t" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
