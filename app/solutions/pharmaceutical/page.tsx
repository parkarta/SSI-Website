"use client"

import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SolutionCTA } from "@/components/solution-cta"
import { RelatedSolutions } from "@/components/related-solutions"
import { 
  FileCheck, 
  Shield, 
  Syringe, 
  Clock, 
  FileText, 
  Building2,
  Users,
  Bell,
  BarChart3,
  Quote,
  CheckCircle
} from "lucide-react"

const regulatoryCards = [
  {
    icon: FileCheck,
    title: "GDP (Good Distribution Practice)",
    description: "WHO and local health authority requirements mandate continuous temperature records for pharmaceutical storage"
  },
  {
    icon: Shield,
    title: "HACCP Compliance",
    description: "Hazard analysis requires documented, time-stamped temperature data for all storage points"
  },
  {
    icon: Syringe,
    title: "Vaccine Cold Chain",
    description: "WHO recommends 2-8°C for most vaccines; any excursion risks efficacy and patient safety"
  }
]

const helpBlocks = [
  {
    title: "Continuous Monitoring, Zero Gaps",
    text: "Unlike manual checks every 2-4 hours, Sensorytics sensors record temperature every 60 seconds. If your pharmacy refrigerator drifts above 8°C at 2am, your team is alerted within minutes — not at opening time.",
    alignment: "left" as const
  },
  {
    title: "Audit-Ready Reports in One Click",
    text: "Generate GDP-compliant temperature logs as PDF exports. Reports include date, time, sensor ID, temperature readings, and any excursion events — exactly what health authority inspectors require.",
    alignment: "right" as const
  },
  {
    title: "Multi-Location Pharmacy Management",
    text: "Managing a pharmacy chain? Monitor all branches from a single dashboard. Assign store managers to receive alerts only for their location while head office sees everything.",
    alignment: "left" as const
  }
]

const features = [
  { icon: FileText, title: "GDP & HACCP Auto-Reports", description: "One-click compliance documentation" },
  { icon: Syringe, title: "Vaccine Fridge Monitoring", description: "2-8°C precision tracking" },
  { icon: Bell, title: "WhatsApp Instant Alerts", description: "Staff notified within minutes" },
  { icon: Clock, title: "After-Hours Coverage", description: "24/7 monitoring, even weekends" },
  { icon: Building2, title: "Multi-Branch Dashboard", description: "All locations in one view" },
  { icon: Users, title: "Role-Based Access", description: "Permissions by location and user" }
]

const complianceStats = [
  { value: "100%", label: "Compliance rate achieved" },
  { value: "0", label: "Regulatory findings" },
  { value: "60s", label: "Monitoring interval" },
  { value: "3 years", label: "Data retention" }
]

export default function PharmaceuticalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/#solutions" },
            { label: "Pharmaceutical Storage" }
          ]}
          headline="GDP-Compliant Temperature Monitoring for Pharmacies & Healthcare"
          subtext="Vaccines, medications, and biologics require strict temperature control. Sensorytics ensures continuous compliance, automatic audit logs, and instant alerts — so you never face a regulatory failure."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "Download Compliance Overview", href: "/technology" }}
          pattern="dots"
        />

        {/* Regulatory Context */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Compliance Cannot Be Left to Manual Logs
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Healthcare regulations require continuous, documented temperature monitoring
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {regulatoryCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <div 
                    key={i}
                    className="p-6 bg-card border border-border/50 rounded-xl"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How Sensorytics Helps */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How Sensorytics Helps
            </h2>
            
            <div className="space-y-16 max-w-5xl mx-auto">
              {helpBlocks.map((block, i) => (
                <div 
                  key={i}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    block.alignment === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={block.alignment === "right" ? "md:order-2" : ""}>
                    <h3 className="text-2xl font-bold mb-4">{block.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{block.text}</p>
                  </div>
                  <div className={`bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl aspect-video flex items-center justify-center ${
                    block.alignment === "right" ? "md:order-1" : ""
                  }`}>
                    <div className="p-8">
                      {i === 0 && <Clock className="h-20 w-20 text-primary" />}
                      {i === 1 && <FileText className="h-20 w-20 text-primary" />}
                      {i === 2 && <BarChart3 className="h-20 w-20 text-primary" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Features for Healthcare Compliance
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Purpose-built for pharmacies, clinics, and healthcare providers
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

        {/* Compliance Stats */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Compliance Made Simple
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {complianceStats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Example */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Real-World Pharmacy Scenario
              </h2>
              
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Community Pharmacy Chain — Malaysia</h3>
                <p className="text-muted-foreground mb-6">
                  A 12-branch pharmacy network needed to comply with local health authority requirements 
                  for continuous vaccine storage monitoring. Manual logs were inconsistent and audits 
                  were stressful.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Solution Deployed
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 36 sensors across all 12 branches</li>
                      <li>• WhatsApp alerts to branch pharmacists</li>
                      <li>• Head office dashboard for oversight</li>
                      <li>• Monthly compliance reports auto-generated</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Outcome
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Zero regulatory findings in 18 months</li>
                      <li>• 3 cold chain incidents caught and resolved</li>
                      <li>• Audit time reduced from days to minutes</li>
                      <li>• Staff confidence improved significantly</li>
                    </ul>
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
                &ldquo;We used to dread health authority inspections. Now we hand them a PDF report 
                and they&apos;re done in 10 minutes. Sensorytics changed how we think about compliance.&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold">Chief Pharmacist</div>
                <div className="text-muted-foreground">Community Pharmacy Network, Malaysia</div>
              </div>
            </div>
          </div>
        </section>

        <RelatedSolutions currentSlug="pharmaceutical" />
        
        <SolutionCTA 
          headline="Ready for Hassle-Free Compliance?"
          subtext="Get a customised quote for your pharmacy or healthcare facility."
        />
      </main>
      
      <Footer />
    </div>
  )
}
