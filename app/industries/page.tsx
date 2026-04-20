import { Metadata } from "next"
import Link from "next/link"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { 
  ShoppingCart, 
  Pill, 
  UtensilsCrossed, 
  Warehouse, 
  Truck, 
  Ship,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Industries We Serve | Sensorytics",
  description: "Sensorytics IoT monitoring solutions serve grocery, pharmaceutical, food service, cold storage, logistics, and maritime industries across ASEAN and Middle East.",
}

const industries = [
  {
    title: "Grocery & Supermarkets",
    description: "Protect perishable inventory across your entire store with automated temperature monitoring for freezers, coolers, and display cases.",
    icon: ShoppingCart,
    solution: "/solutions/retail",
    benefits: [
      "Reduce spoilage by up to 30%",
      "Automated HACCP compliance",
      "Multi-store management",
      "Real-time inventory protection"
    ]
  },
  {
    title: "Pharmacies & Healthcare",
    description: "GDP-compliant monitoring for medications, vaccines, blood products, and laboratory specimens with full audit trails.",
    icon: Pill,
    solution: "/solutions/pharmaceutical",
    benefits: [
      "WHO/GDP compliance ready",
      "Vaccine cold chain protection",
      "21 CFR Part 11 compatible",
      "Automated regulatory reporting"
    ]
  },
  {
    title: "Food Service & Restaurants",
    description: "Keep your kitchen compliant with automated walk-in cooler and freezer monitoring. Instant alerts prevent costly spoilage.",
    icon: UtensilsCrossed,
    solution: "/solutions/cold-chain-monitoring",
    benefits: [
      "Health inspection ready",
      "Walk-in monitoring",
      "Multi-location support",
      "Staff accountability"
    ]
  },
  {
    title: "Cold Storage & Warehouses",
    description: "Enterprise-grade monitoring for large-scale cold storage facilities with multi-zone management and ERP integration.",
    icon: Warehouse,
    solution: "/solutions/warehouse",
    benefits: [
      "Unlimited sensor scalability",
      "Zone-based monitoring",
      "WMS/ERP integration",
      "Energy optimization"
    ]
  },
  {
    title: "Logistics & Delivery",
    description: "Track temperature-sensitive shipments in real-time with GPS-enabled sensors and proof-of-delivery documentation.",
    icon: Truck,
    solution: "/solutions/cold-chain-monitoring",
    benefits: [
      "In-transit monitoring",
      "GPS location tracking",
      "Delivery verification",
      "Chain of custody reports"
    ]
  },
  {
    title: "Maritime & Fishing",
    description: "Rugged, satellite-connected sensors for reefer containers, fishing vessels, and port facilities operating in remote locations.",
    icon: Ship,
    solution: "/solutions/maritime",
    benefits: [
      "Satellite connectivity",
      "IP68 waterproof sensors",
      "Vessel fleet management",
      "Port facility monitoring"
    ]
  }
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" }
        ]}
        headline="Industries We Serve"
        subtext="From corner pharmacies to multinational logistics providers, our IoT monitoring solutions adapt to your industry's unique requirements. Trusted by enterprises across ASEAN and Middle East."
        primaryCta={{ label: "Request Assessment", href: "/contact" }}
        secondaryCta={{ label: "View Solutions", href: "/solutions" }}
        pattern="dots"
      />

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <div 
                  key={industry.title}
                  className="group p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3">{industry.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {industry.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={industry.solution}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    View Solution
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Regional Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Headquartered in Malaysia with presence across ASEAN and Middle East
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-background border border-border/50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">ASEAN Markets</h3>
              <p className="text-muted-foreground mb-4">
                Deep expertise in tropical climate challenges, local regulatory requirements, and regional supply chain dynamics.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Malaysia, Singapore, Indonesia</li>
                <li>Thailand, Philippines, Vietnam</li>
                <li>Brunei, Myanmar, Cambodia</li>
              </ul>
            </div>

            <div className="p-8 bg-background border border-border/50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Middle East Expansion</h3>
              <p className="text-muted-foreground mb-4">
                Supporting the region&apos;s growing cold chain infrastructure with solutions designed for extreme temperature environments.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>UAE, Saudi Arabia, Qatar</li>
                <li>Oman, Bahrain, Kuwait</li>
                <li>Regional distribution hubs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to protect your cold chain?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get a customized assessment for your industry and operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Request Industry Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/solutions">Browse All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
