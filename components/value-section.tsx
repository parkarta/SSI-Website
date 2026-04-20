"use client"

import { Clock, MessageSquare, FileText, Brain, LayoutDashboard, BatteryFull } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "24/7 Automated Monitoring",
    description: "Sensors check every 60 seconds, no manual logs required. Your cold chain is always watched."
  },
  {
    icon: MessageSquare,
    title: "Instant WhatsApp & SMS Alerts",
    description: "Your team is notified the moment a threshold is breached — anywhere, anytime."
  },
  {
    icon: FileText,
    title: "Compliance-Ready Reports",
    description: "GDP, HACCP, and regulatory documentation auto-generated and audit-ready."
  },
  {
    icon: Brain,
    title: "AI Predictive Alerts",
    description: "Detect equipment failure before it causes loss. Machine learning spots anomalies early."
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Site Dashboard",
    description: "Monitor all locations from a single screen. One platform, total visibility."
  },
  {
    icon: BatteryFull,
    title: "10-Year Battery Life",
    description: "No wiring, no WiFi dependency, wireless installation. Deploy anywhere instantly."
  },
]

export function ValueSection() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Prevent Product Loss Before It Happens
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Temperature excursions cost businesses millions annually. Manual checks fail. Sensorytics automates compliance, alerts your team instantly, and provides audit-ready reports — all from one platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
