"use client"

import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SolutionCTA } from "@/components/solution-cta"
import { RelatedSolutions } from "@/components/related-solutions"
import { 
  Building2, 
  ClipboardList, 
  AlertTriangle,
  Scale,
  MapPin,
  Truck,
  Layers,
  BarChart3,
  Brain,
  FileText,
  Users,
  Code,
  TrendingUp,
  Clock,
  Quote,
  CheckCircle
} from "lucide-react"

const challenges = [
  {
    icon: ClipboardList,
    title: "Manual logs don't scale",
    description: "A 10,000 sqm warehouse cannot be manually checked reliably. Sensorytics automates every zone."
  },
  {
    icon: FileText,
    title: "Compliance documentation burden",
    description: "GDP and food safety audits require continuous records. We generate them automatically."
  },
  {
    icon: AlertTriangle,
    title: "Equipment failure is invisible until it's too late",
    description: "Predictive AI alerts detect compressor and refrigeration degradation weeks before failure."
  }
]

const deploymentBlocks = [
  {
    title: "Scale from 1 to 1,000+ Sensors",
    points: [
      "Single gateway covers up to 2km range indoors",
      "Sensors auto-enrol — no per-device configuration",
      "Deploy in hours, not days"
    ],
    icon: Scale
  },
  {
    title: "Zone-Based Monitoring",
    points: [
      "Map your facility into zones (Receiving, Frozen, Chilled, Ambient, Dispatch)",
      "View each zone independently or in aggregate",
      "Custom alert thresholds per zone"
    ],
    icon: MapPin
  },
  {
    title: "Loading Dock & Transit Monitoring",
    points: [
      "Monitor temperature at dock doors",
      "Track product condition during loading windows",
      "Integrate with WMS for shipment-level reporting"
    ],
    icon: Truck
  }
]

const features = [
  { icon: Layers, title: "Multi-Sensor Mass Deployment", description: "Deploy hundreds of sensors efficiently" },
  { icon: MapPin, title: "Zone Mapping & Custom Thresholds", description: "Organize by area with specific limits" },
  { icon: Brain, title: "AI Predictive Equipment Alerts", description: "Detect failures before they happen" },
  { icon: FileText, title: "Auto-Generated Compliance Reports", description: "PDF exports ready for auditors" },
  { icon: Users, title: "Multi-User Role Management", description: "Permissions by team and location" },
  { icon: Code, title: "REST API & ERP Integration", description: "Connect to your existing systems" },
  { icon: TrendingUp, title: "Historical Data & Trend Analysis", description: "Up to 3 years of data retention" },
  { icon: Clock, title: "99.9% Platform Uptime SLA", description: "Enterprise-grade reliability" }
]

export default function WarehousePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/#solutions" },
            { label: "Warehouse & Distribution" }
          ]}
          headline="Large-Scale Temperature Monitoring for Warehouses and Distribution Centres"
          subtext="Deploy dozens or hundreds of sensors across your facility. Monitor every zone, rack, and loading dock from a single dashboard. Sensorytics scales with your operation."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "See Deployment Case Study", href: "#case-study" }}
          pattern="grid"
        />

        {/* Challenges We Solve */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Challenges We Solve
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Large-scale cold storage demands automated, intelligent monitoring
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, i) => {
                const Icon = challenge.icon
                return (
                  <div 
                    key={i}
                    className="p-6 bg-card border border-border/50 rounded-xl"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Deployment Capabilities */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Deployment Capabilities
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Designed for facilities of any size
            </p>
            
            <div className="space-y-12 max-w-5xl mx-auto">
              {deploymentBlocks.map((block, i) => {
                const Icon = block.icon
                const isEven = i % 2 === 0
                
                return (
                  <div 
                    key={i}
                    className={`grid md:grid-cols-2 gap-8 items-center`}
                  >
                    <div className={isEven ? "" : "md:order-2"}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{block.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {block.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl aspect-video flex items-center justify-center ${isEven ? "" : "md:order-1"}`}>
                      <Icon className="h-20 w-20 text-primary" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Enterprise Features
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Everything you need for warehouse-scale monitoring
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Large Deployment Callout */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proven at Scale — 5,000 Sensors Deployed
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Our largest single deployment spans 31 monitoring points across a major food 
                distribution operation in the Middle East. Sensorytics handled the rollout, 
                configuration, and ongoing support — delivering a fully operational system 
                within weeks.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-sm text-muted-foreground">Sensors deployed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">31</div>
                  <div className="text-sm text-muted-foreground">Monitoring points</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2 weeks</div>
                  <div className="text-sm text-muted-foreground">To full operation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section id="case-study" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Warehouse Deployment Case Study
              </h2>
              
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Food Distribution Center — Middle East</h3>
                <p className="text-muted-foreground mb-6">
                  A regional food distributor with a 50,000 sqm facility needed to transition 
                  from manual temperature logs to continuous automated monitoring. They had 
                  multiple temperature zones and strict compliance requirements.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Solution Deployed
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 240 sensors across 8 temperature zones</li>
                      <li>• Zone mapping with custom thresholds</li>
                      <li>• Integration with existing WMS</li>
                      <li>• Multi-user access for operations teams</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Outcome
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Manual logging eliminated completely</li>
                      <li>• 3 equipment failures predicted and prevented</li>
                      <li>• Audit preparation time reduced by 90%</li>
                      <li>• Zero compliance findings in 2 years</li>
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
                &ldquo;We went from clipboards and stress to a dashboard that tells us exactly 
                what&apos;s happening in every zone. The ROI was obvious within the first quarter.&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold">Warehouse Operations Director</div>
                <div className="text-muted-foreground">Food Distribution Company, Saudi Arabia</div>
              </div>
            </div>
          </div>
        </section>

        <RelatedSolutions currentSlug="warehouse" />
        
        <SolutionCTA 
          headline="Ready to Scale Your Monitoring?"
          subtext="Get a customised quote for your warehouse or distribution facility."
        />
      </main>
      
      <Footer />
    </div>
  )
}
