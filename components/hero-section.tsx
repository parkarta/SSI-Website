"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Thermometer, Bell, TrendingUp, AlertTriangle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[#0B1120]">
        <div 
          className="absolute inset-0 animate-grid-pulse"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0EA5E9 1px, transparent 1px),
              linear-gradient(to bottom, #0EA5E9 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/50 to-[#0B1120]" />
      </div>

      <div className="container relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Cold Chain Intelligence.{" "}
              <span className="text-primary">Real-Time.</span>{" "}
              <span className="text-primary">Automated.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Sensorytics delivers enterprise-grade IoT temperature monitoring for food, pharma, and logistics — protecting what matters most, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold px-8">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative bg-card/80 backdrop-blur border border-border rounded-xl p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-foreground">Live Temperature Dashboard</h3>
                  <p className="text-xs text-muted-foreground">All zones • Last updated: Just now</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-500">Online</span>
                </div>
              </div>

              {/* Temperature Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Walk-in Freezer</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">-18.2°C</p>
                  <p className="text-xs text-green-500">✓ Normal</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Chiller Unit A</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">4.1°C</p>
                  <p className="text-xs text-green-500">✓ Normal</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 border border-amber-500/50">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <span className="text-xs text-muted-foreground">Pharmacy Cold</span>
                  </div>
                  <p className="text-2xl font-bold text-amber-500">6.8°C</p>
                  <p className="text-xs text-amber-500">⚠ Warning</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Display Case</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">2.3°C</p>
                  <p className="text-xs text-green-500">✓ Normal</p>
                </div>
              </div>

              {/* Mini Graph */}
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">24h Temperature Trend</span>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div className="h-16 flex items-end gap-1">
                  {[40, 35, 45, 30, 50, 40, 35, 45, 55, 40, 35, 30, 45, 40, 35, 50, 45, 40, 35, 45, 40, 35, 45, 40].map((height, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-primary/60 rounded-t transition-all hover:bg-primary"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Alert Badge */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Bell className="h-3 w-3" />
                2 Alerts
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logo Ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-8 bg-gradient-to-t from-[#0B1120] to-transparent">
        <p className="text-center text-xs text-muted-foreground mb-4 tracking-wide uppercase">Trusted Across ASEAN and the Middle East</p>
        <div className="overflow-hidden">
          <div className="flex animate-ticker">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 px-8">
                {["Almarai", "Shahini Warehouse", "Cold Storage"].map((client, i) => (
                  <span key={i} className="text-muted-foreground/50 text-lg font-semibold whitespace-nowrap">{client}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
