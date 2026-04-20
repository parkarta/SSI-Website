"use client"

import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SolutionCTA } from "@/components/solution-cta"
import { RelatedSolutions } from "@/components/related-solutions"
import { 
  Thermometer, 
  Bell, 
  Brain, 
  FileText, 
  LayoutDashboard, 
  Code,
  Snowflake,
  Warehouse,
  Truck,
  Building,
  Quote
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Thermometer,
    title: "Real-Time Temperature Tracking",
    description: "Live sensor data, updated every 60 seconds"
  },
  {
    icon: Bell,
    title: "Instant Multi-Channel Alerts",
    description: "WhatsApp, SMS, email notifications"
  },
  {
    icon: Brain,
    title: "AI Predictive Failure Detection",
    description: "Identifies equipment degradation before failure"
  },
  {
    icon: FileText,
    title: "GDP & HACCP Compliance Reports",
    description: "Audit-ready PDF exports, date-stamped"
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Site Dashboard",
    description: "Monitor all locations in a single view"
  },
  {
    icon: Code,
    title: "API Integration Ready",
    description: "Connect to your ERP, WMS, or third-party systems"
  }
]

const useCases = [
  {
    id: "walk-in-freezers",
    title: "Walk-in Freezers",
    description: "Large walk-in freezers require continuous monitoring to prevent costly inventory losses. A single compressor failure can spoil thousands of dollars of frozen goods within hours.",
    benefits: [
      "24/7 monitoring even during off-hours",
      "Early warning of compressor issues",
      "Automatic compliance logging"
    ],
    stat: "Prevented $25,000 in meat loss"
  },
  {
    id: "chiller-rooms",
    title: "Chiller Rooms",
    description: "Fresh produce, dairy, and prepared foods require precise temperature control between 0-5°C. Even minor deviations can accelerate spoilage and create food safety risks.",
    benefits: [
      "Precision monitoring within ±0.3°C",
      "Zone-based threshold alerts",
      "Humidity tracking included"
    ],
    stat: "Reduced produce waste by 40%"
  },
  {
    id: "distribution-warehouses",
    title: "Distribution Warehouses",
    description: "Large distribution facilities need scalable monitoring across multiple temperature zones. Manual checks cannot cover every area reliably.",
    benefits: [
      "Deploy 100+ sensors per facility",
      "Zone mapping and visualization",
      "Integration with WMS systems"
    ],
    stat: "5,000+ sensors in one deployment"
  },
  {
    id: "delivery-vehicles",
    title: "Delivery Vehicles",
    description: "Last-mile delivery is where most cold chain failures occur. Real-time monitoring ensures products arrive within specification.",
    benefits: [
      "GPS + temperature tracking",
      "Door-open alerts",
      "Delivery proof with temperature logs"
    ],
    stat: "99.2% delivery compliance"
  },
  {
    id: "cold-storage",
    title: "Cold Storage Facilities",
    description: "Third-party cold storage providers need to demonstrate continuous compliance to their customers and regulators.",
    benefits: [
      "Multi-tenant reporting",
      "SLA compliance tracking",
      "Customer portal access"
    ],
    stat: "Zero regulatory findings"
  }
]

const specs = [
  { label: "Temperature Range", value: "-40°C to +85°C" },
  { label: "Humidity Range", value: "0% to 100% RH" },
  { label: "Reporting Interval", value: "Every 60 seconds" },
  { label: "Connectivity", value: "LTE/4G / WiFi / BLE/ LoRaWAN / MQTT / HTTPS / TCP/IP" },
  { label: "Battery Life", value: "Up to 10 years (LoRaWAN) or 2 years (WiFi/BLE)" },
  { label: "Protection Rating", value: "IP67 Waterproof" },
  { label: "Installation", value: "Wireless, no power required" },
  { label: "Certification", value: "Industrial certified" }
]

export default function ColdChainMonitoringPage() {
  const [activeTab, setActiveTab] = useState("walk-in-freezers")
  const activeUseCase = useCases.find(uc => uc.id === activeTab)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/#solutions" },
            { label: "Cold Chain Monitoring" }
          ]}
          headline="Cold Chain Monitoring — Automated, Accurate, Always On"
          subtext="Protect perishable goods from warehouse to retail shelf. Sensorytics monitors your entire cold chain 24/7, alerts your team instantly, and generates compliance reports automatically."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "View Technical Specs", href: "/technology" }}
          pattern="lines"
        />

        {/* What is Cold Chain Monitoring */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What is Cold Chain Monitoring?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Cold chain monitoring is the continuous tracking of temperature and humidity 
                    conditions for perishable goods throughout storage and transport.
                  </p>
                  <p>
                    A single temperature excursion — even for a few hours — can spoil entire batches 
                    of food, pharmaceuticals, or vaccines. Manual temperature logs fail because they 
                    are infrequent, error-prone, and impossible to scale.
                  </p>
                  <p>
                    Sensorytics replaces manual checks with wireless IoT sensors that report every 
                    60 seconds, automatically alert your team via WhatsApp and SMS, and generate 
                    tamper-proof compliance logs.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: "Every 60 sec", label: "Sensor reporting frequency" },
                  { value: "< 2 min", label: "Average alert delivery time" },
                  { value: "-40°C to +85°C", label: "Sensor operating range" }
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="bg-card border border-border/50 rounded-xl p-6 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Three simple steps to complete cold chain visibility
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              
              {[
                {
                  step: "01",
                  title: "Install Wireless Sensors",
                  description: "Place sensors in freezers, chillers, walk-ins. No wiring. No WiFi. 10-year battery."
                },
                {
                  step: "02",
                  title: "Monitor from Your Dashboard",
                  description: "Live readings, historical trends, multi-site overview. Accessible from any device."
                },
                {
                  step: "03",
                  title: "Get Alerted & Stay Compliant",
                  description: "Threshold breaches trigger instant WhatsApp/SMS alerts. Compliance reports auto-generated."
                }
              ].map((item, i) => (
                <div key={i} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-6 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Everything you need for complete cold chain control
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={i}
                    className="p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Use Cases</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Sensorytics adapts to your specific cold chain environment
            </p>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {useCases.map((uc) => {
                const icons: Record<string, typeof Snowflake> = {
                  "walk-in-freezers": Snowflake,
                  "chiller-rooms": Thermometer,
                  "distribution-warehouses": Warehouse,
                  "delivery-vehicles": Truck,
                  "cold-storage": Building
                }
                const Icon = icons[uc.id] || Thermometer
                
                return (
                  <button
                    key={uc.id}
                    onClick={() => setActiveTab(uc.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                      activeTab === uc.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border/50 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {uc.title}
                  </button>
                )
              })}
            </div>
            
            {/* Active Tab Content */}
            {activeUseCase && (
              <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{activeUseCase.title}</h3>
                    <p className="text-muted-foreground mb-6">{activeUseCase.description}</p>
                    <ul className="space-y-3">
                      {activeUseCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {activeUseCase.stat}
                      </div>
                      <div className="text-sm text-muted-foreground">Real customer outcome</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sensor Specs */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Hardware Built for Cold Environments
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Industrial-grade sensors designed to perform reliably in the harshest conditions.
                  </p>
                  
                  <div className="space-y-4">
                    {specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium text-primary">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Thermometer className="h-24 w-24 text-primary mx-auto mb-4" />
                      <div className="text-xl font-semibold">TxH-Pro Sensor</div>
                      <div className="text-sm text-muted-foreground">Industrial Grade</div>
                    </div>
                  </div>
                  {/* Floating specs */}
                  <div className="absolute -top-4 -right-4 bg-card border border-border/50 rounded-lg px-4 py-2 text-sm">
                    <span className="text-primary font-medium">IP67</span> Waterproof
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-lg px-4 py-2 text-sm">
                    <span className="text-primary font-medium">10 Year</span> Battery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                &ldquo;A late-night freezer failure triggered our Sensorytics alert. We moved the 
                product immediately and saved over $25,000 in inventory.&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold">Operations Manager</div>
                <div className="text-muted-foreground">Cold Store, Malaysia</div>
              </div>
            </div>
          </div>
        </section>

        <RelatedSolutions currentSlug="cold-chain-monitoring" />
        
        <SolutionCTA />
      </main>
      
      <Footer />
    </div>
  )
}
