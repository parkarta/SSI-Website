"use client"

import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SolutionCTA } from "@/components/solution-cta"
import { RelatedSolutions } from "@/components/related-solutions"
import { 
  Anchor, 
  Ship, 
  Container, 
  Warehouse,
  Fish,
  Thermometer,
  Fuel,
  HardHat,
  Wifi,
  Shield,
  Battery,
  Globe,
  Quote,
  CheckCircle
} from "lucide-react"

const stats = [
  { value: "ASEAN&apos;s #1", label: "Maritime cold chain use case" },
  { value: "Satellite + LTE", label: "Connectivity options" },
  { value: "IP67 Rated", label: "Built for marine environments" }
]

const useCases = [
  {
    icon: Container,
    title: "Refrigerated Cargo Containers",
    description: "Continuous reefer monitoring during voyages"
  },
  {
    icon: Ship,
    title: "Onboard Food Storage",
    description: "Galley and provision monitoring for crew welfare compliance"
  },
  {
    icon: Warehouse,
    title: "Port Cold Storage Facilities",
    description: "Shore-side warehouses and terminal cold stores"
  },
  {
    icon: Fish,
    title: "Fish & Seafood Export Compliance",
    description: "Temperature logging for export health certificates"
  },
  {
    icon: Fuel,
    title: "Vessel Fuel & Engine Room Monitoring",
    description: "Temperature and humidity for equipment protection"
  },
  {
    icon: HardHat,
    title: "Offshore Platform Provisioning",
    description: "Remote platform food safety compliance"
  }
]

const whySteps = [
  {
    step: "01",
    title: "Rugged Hardware",
    description:
      "IP67 waterproof sensors, salt-spray resistant, -40°C to +85°C operating range. BLE sensors run up to 2 years on battery, WiFi sensors up to 1 year. No onboard wiring or power infrastructure required.",
    icon: Shield,
  },
  {
    step: "02",
    title: "Flexible Connectivity",
    description:
      "BLE sensors paired with 4G/LTE gateways are our primary deployment — simple, fast, and infrastructure-free. WiFi sensors connect to existing onboard networks where available. LoRaWAN is available for large-scale or remote deployments where other connectivity is not viable. LTE/4G gateway requires a power source.",
    icon: Wifi,
  },
  {
    step: "03",
    title: "Shore-Side Visibility",
    description:
      "Operations teams on land see the same live data as officers onboard. Alerts trigger simultaneously to ship and shore via WhatsApp and SMS, enabling faster response regardless of vessel location.",
    icon: Globe,
  },
]

const features = [
  { icon: Battery, title: "10-Year Battery Life", description: "No charging or power source required" },
  { icon: Shield, title: "Salt-Spray Resistant", description: "Marine-grade corrosion protection" },
  { icon: Wifi, title: "Satellite Connectivity", description: "Deep-sea monitoring capability" },
  { icon: Thermometer, title: "-40°C to +85°C Range", description: "Freezer to engine room coverage" },
  { icon: Globe, title: "Multi-Vessel Dashboard", description: "Fleet-wide visibility" },
  { icon: Anchor, title: "Port Integration", description: "Seamless land-sea handoff" }
]

export default function MaritimePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/#solutions" },
            { label: "Maritime & Vessel Monitoring" }
          ]}
          headline="IoT Monitoring for Vessels, Ports, and Marine Cold Chain"
          subtext="From container ships to port cold storage, Sensorytics delivers rugged, wireless IoT monitoring built for the harsh marine environment. Real-time visibility. Satellite-ready. ASEAN-proven."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "Speak With an Expert", href: "/contact" }}
          pattern="wave"
        />

        {/* Market Context */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Maritime Cold Chain Challenges
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    ASEAN is home to some of the world&apos;s busiest maritime trade routes. Cold chain 
                    integrity on vessels — particularly for frozen seafood, pharmaceuticals, and 
                    perishable exports — is critical and heavily regulated.
                  </p>
                  <p>
                    Traditional vessel monitoring relies on manual crew logs, which are unreliable 
                    and provide no real-time visibility to shore-based operations teams.
                  </p>
                  <p>
                    Sensorytics provides continuous, wireless IoT monitoring for marine cold stores, 
                    refrigerated containers, and onboard food storage — with alerts delivered to 
                    ship officers and shore teams simultaneously.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: "ASEAN's #1", label: "Maritime cold chain use case" },
                  { value: "Satellite + LTE", label: "Connectivity options" },
                  { value: "IP67 Rated", label: "Built for marine environments" }
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="bg-card border border-border/50 rounded-xl p-6 flex items-center gap-6"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Maritime Use Cases
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From vessel to port, Sensorytics covers the entire maritime cold chain
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon
                return (
                  <div 
                    key={i}
                    className="p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Sensorytics for Maritime */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Sensorytics for Maritime
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Purpose-built for the unique challenges of maritime environments
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whySteps.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                        {item.step}
                      </div>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Maritime-Grade Features
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Engineered for reliability in the harshest conditions
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

        {/* Case Study */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Maritime Deployment in Action
              </h2>
              
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Seafood Export Fleet — Philippines</h3>
                <p className="text-muted-foreground mb-6">
                  A major seafood exporter needed to provide temperature documentation for frozen 
                  tuna shipments to meet Japanese import requirements. Manual logs were rejected 
                  by inspectors.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Solution Deployed
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 48 sensors across 6 fishing vessels</li>
                      <li>• Satellite connectivity for deep-sea trips</li>
                      <li>• Shore-side dashboard for export compliance</li>
                      <li>• Automatic PDF reports for each shipment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Outcome
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 100% export compliance achieved</li>
                      <li>• Zero shipment rejections in 12 months</li>
                      <li>• Premium pricing unlocked for verified cold chain</li>
                      <li>• New buyers acquired based on documentation</li>
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
                &ldquo;Our Japanese buyers now trust our cold chain documentation completely. 
                Sensorytics turned our export compliance from a liability into a competitive advantage.&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold">Export Operations Manager</div>
                <div className="text-muted-foreground">Seafood Export Company, Philippines</div>
              </div>
            </div>
          </div>
        </section>

        <RelatedSolutions currentSlug="maritime" />
        
        <SolutionCTA 
          headline="Ready for Maritime-Grade Monitoring?"
          subtext="Get a customised quote for your vessels, fleet, or port facilities."
        />
      </main>
      
      <Footer />
    </div>
  )
}
