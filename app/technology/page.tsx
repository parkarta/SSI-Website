"use client"

import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SolutionCTA } from "@/components/solution-cta"
import {
  Bluetooth,
  Cpu,
  Cloud,
  Smartphone,
  Radio,
  Wifi,
  Satellite,
  Shield,
  Lock,
  Server,
  BarChart3,
  Bell,
  Users,
  FileText,
  Code,
  Globe,
  Clock,
  CheckCircle
} from "lucide-react"

const architectureLayers = [
  {
    layer: "Edge",
    title: "IoT Sensors",
    items: [
      "Temperature & Humidity Sensors",
      "BLE Sensors — 2-Year Battery",
      "WiFi Sensors — 1-Year Battery",
      "LoRaWAN Sensors — Long Range Fallback",
    ],
    icon: Cpu,
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    layer: "Connectivity",
    title: "Data Transmission",
    items: [
      "BLE + 4G/LTE Gateway (Primary)",
      "WiFi Network Integration (Secondary)",
      "LoRaWAN Gateway (Fallback)",
      "HTTPS Encrypted End-to-End",
      "Offline Buffering — Syncs on Reconnect",
    ],
    icon: Cloud,
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    layer: "Application",
    title: "Platform",
    items: [
      "Web Dashboard (PWA)",
      "REST API for Integrations",
      "Alert Engine — WhatsApp / SMS / Email",
    ],
    icon: Smartphone,
    color: "from-primary/20 to-primary/5",
  },
]

const sensorSpecs = [
  { label: "Model", value: "Sensorytics TxH-Pro" },
  { label: "Temperature Range", value: "-40°C to +85°C (±0.3°C accuracy)" },
  { label: "Humidity Range", value: "0-100% RH (±2% accuracy)" },
  { label: "Reporting Interval", value: "Configurable — every 30, 60, or 120 seconds" },
  { label: "Connectivity Protocol", value: "BLE/ WiFi/ LoRaWAN Class A / MQTT over HTTPS / TCP/IP / HTTPS" },
  { label: "Battery Life", value: "Up to 2-10 years (replaceable)" },
  { label: "Protection Rating", value: "IP67 (waterproof and dustproof)" },
  { label: "Operating Environment", value: "Freezers, chillers, walk-ins, outdoor" },
  { label: "Dimensions", value: "85mm x 55mm x 25mm" },
  { label: "Installation", value: "Magnetic mount or adhesive, wireless" },
  { label: "Certification", value: "Industrial certified" }
]

const platformFeaturesLeft = [
  { icon: BarChart3, title: "Live sensor dashboard", description: "PWA — works on any browser" },
  { icon: Clock, title: "Historical data graphs", description: "Up to 3 years retention" },
  { icon: Bell, title: "Custom alert threshold configuration", description: "Per sensor settings" },
  { icon: Users, title: "Multi-user accounts", description: "Role-based access" },
  { icon: FileText, title: "Automated compliance report generation", description: "PDF exports" }
]

const platformFeaturesRight = [
  { icon: Smartphone, title: "WhatsApp, SMS, and email alerts", description: "Multi-channel delivery" },
  { icon: Code, title: "REST API", description: "Third-party integration" },
  { icon: Globe, title: "Multi-site and multi-organisation", description: "Enterprise support" },
  { icon: Server, title: "99.9% uptime SLA", description: "Enterprise-grade reliability" },
  { icon: Lock, title: "End-to-end TLS 1.2+ encryption", description: "GDPR and data residency compliant" }
]

const connectivityOptions = [
  {
    icon: Bluetooth,
    title: "BLE + 4G/LTE Gateway",
    badge: "Primary",
    badgeColor: "bg-blue-500",
    description:
      "BLE sensors transmit to a plug-and-play 4G/LTE gateway — no WiFi passwords, no network configuration, no wiring. The gateway handles all cloud connectivity over cellular. Fastest to deploy, works anywhere with mobile coverage.",
    best: "Best for most deployments — retail, pharmacies, cold stores, vessels",
    battery: "Sensor battery: up to 2 years",
  },
  {
    icon: Wifi,
    title: "WiFi Sensors",
    badge: "Secondary",
    badgeColor: "bg-cyan-500",
    description:
      "WiFi-enabled sensors connect directly to an existing WiFi network on site. Ideal where stable WiFi infrastructure is already in place and IT teams are comfortable managing network access.",
    best: "Best for offices, hospitals, and facilities with managed WiFi",
    battery: "Sensor battery: up to 1 year",
  },
  {
    icon: Radio,
    title: "LoRaWAN",
    badge: "Fallback",
    badgeColor: "bg-slate-500",
    description:
      "Long-range, low-power protocol for large-scale or remote deployments where BLE and WiFi are not viable. A single LoRaWAN gateway covers up to 2km indoors and several kilometres in open environments.",
    best: "Best for large warehouses, remote facilities, or wide-area deployments",
    battery: "Sensor battery: up to 10 years",
  },
  {
    icon: Satellite,
    title: "Satellite (Maritime)",
    badge: "Specialist",
    badgeColor: "bg-violet-500",
    description:
      "For vessels and offshore platforms beyond cellular coverage. BLE sensors pair with a satellite-enabled gateway. Data syncs to the cloud when connectivity is available — no gaps in local logging.",
    best: "Best for deep-sea vessels, offshore platforms, and remote maritime ops",
    battery: "Sensor battery: up to 2 years (BLE)",
  },
]

const securityFeatures = [
  { icon: Lock, title: "TLS 1.2+ Encryption", description: "All data encrypted in transit" },
  { icon: Shield, title: "AWS Infrastructure", description: "Hosted on enterprise-grade cloud" },
  { icon: Server, title: "Data Residency Options", description: "ASEAN and Middle East regions" },
  { icon: CheckCircle, title: "GDPR Compliant", description: "Full data protection compliance" }
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Technology" }
          ]}
          headline="Purpose-Built IoT Technology for Cold Chain Intelligence"
          subtext="Every component of the Sensorytics platform — from the sensor hardware to the cloud infrastructure — is engineered for reliability, security, and scale."
          primaryCta={{ label: "Request a Demo", href: "/contact" }}
          secondaryCta={{ label: "Download Specs PDF", href: "#specs" }}
          pattern="grid"
        />

        {/* Architecture Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              System Architecture
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A complete IoT stack from edge to cloud
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connection lines */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-primary/50 -translate-x-1/2 z-0" />
                
                <div className="space-y-8 relative z-10">
                  {architectureLayers.map((layer, i) => {
                    const Icon = layer.icon
                    return (
                      <div 
                        key={i}
                        className={`bg-gradient-to-r ${layer.color} border border-border/50 rounded-2xl p-8`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                          <div className="flex items-center gap-4">
                            <div className="p-4 bg-card border border-border/50 rounded-xl">
                              <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-primary uppercase tracking-wide">
                                Layer {i + 1} — {layer.layer}
                              </div>
                              <div className="text-xl font-bold">{layer.title}</div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-wrap gap-3 md:justify-end">
                            {layer.items.map((item, j) => (
                              <span 
                                key={j}
                                className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sensor Hardware Specs */}
        <section id="specs" className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Sensor Hardware Specifications
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Industrial-grade hardware built for extreme environments
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="bg-card border border-border/50 rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/10 to-transparent">
                    <h3 className="text-xl font-bold">Full Specification Table</h3>
                  </div>
                  <div className="divide-y divide-border/50">
                    {sensorSpecs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-start p-4 hover:bg-card/50">
                        <span className="text-muted-foreground text-sm">{spec.label}</span>
                        <span className="text-sm font-medium text-right max-w-[200px]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:sticky lg:top-32">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 aspect-square flex flex-col items-center justify-center relative">
                    <Cpu className="h-32 w-32 text-primary mb-6" />
                    <div className="text-2xl font-bold mb-2">TxH-Pro Sensor</div>
                    <div className="text-muted-foreground">Industrial Grade IoT</div>
                    
                    {/* Floating badges */}
                    <div className="absolute top-4 right-4 bg-card border border-border/50 rounded-lg px-3 py-1.5 text-sm">
                      <span className="text-primary font-medium">IP67</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-card border border-border/50 rounded-lg px-3 py-1.5 text-sm">
                      <span className="text-primary font-medium">10 Year</span> Battery
                    </div>
                    <div className="absolute top-4 left-4 bg-card border border-border/50 rounded-lg px-3 py-1.5 text-sm">
                      <span className="text-primary font-medium">±0.3°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Platform Features
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A complete software platform for cold chain management
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                {platformFeaturesLeft.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="space-y-6">
                {platformFeaturesRight.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Connectivity Options */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Connectivity Options
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Flexible connectivity for any environment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {connectivityOptions.map((option, i) => {
                const Icon = option.icon
                return (
                  <div 
                    key={i}
                    className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                    <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block">
                      {option.best}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Security & Compliance
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Enterprise-grade security at every layer
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {securityFeatures.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={i}
                    className="p-6 bg-card border border-border/50 rounded-xl text-center"
                  >
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      REST API for Integration
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Connect Sensorytics to your existing systems with our comprehensive REST API. 
                      Export data to your ERP, WMS, or build custom integrations.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Full data export endpoints</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Webhook support for real-time events</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Comprehensive API documentation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Sample code and SDKs available</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border/50 rounded-xl p-6 font-mono text-sm">
                    <div className="text-muted-foreground mb-2"># Get sensor readings</div>
                    <div className="text-primary">GET /api/v1/sensors/readings</div>
                    <div className="mt-4 text-muted-foreground mb-2"># Response</div>
                    <pre className="text-xs overflow-x-auto">
{`{
  "sensor_id": "TxH-001",
  "temperature": -18.2,
  "humidity": 45,
  "timestamp": "2024-01-15T14:30:00Z"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <SolutionCTA 
          headline="Ready to See the Technology in Action?"
          subtext="Request a demo and see how Sensorytics works for your use case."
        />
      </main>
      
      <Footer />
    </div>
  )
}
