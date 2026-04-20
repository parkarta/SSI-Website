import { Metadata } from "next"
import Link from "next/link"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { 
  Thermometer, 
  Pill, 
  Anchor, 
  Building2, 
  ShoppingCart, 
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "IoT Monitoring Solutions | Sensorytics",
  description: "Explore our comprehensive range of cold chain IoT monitoring solutions for food, pharma, maritime, warehouse, and retail industries.",
}

const solutions = [
  {
    slug: "cold-chain-monitoring",
    title: "Cold Chain Monitoring",
    description: "End-to-end temperature tracking from warehouse to retail shelf. Monitor walk-in coolers, freezers, chillers, and refrigerated transport in real-time.",
    icon: Thermometer,
    features: ["Real-time alerts", "HACCP compliance", "Multi-zone monitoring"],
    industries: ["Food & Beverage", "Restaurants", "Catering"]
  },
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical & Healthcare",
    description: "GDP and WHO-compliant temperature monitoring for vaccines, medications, blood banks, and laboratory specimens.",
    icon: Pill,
    features: ["21 CFR Part 11", "Audit trails", "Validation support"],
    industries: ["Hospitals", "Pharmacies", "Labs"]
  },
  {
    slug: "maritime",
    title: "Maritime & Vessel IoT",
    description: "Rugged, satellite-enabled monitoring for reefer containers, fishing vessels, and port cold storage facilities.",
    icon: Anchor,
    features: ["Satellite connectivity", "IP68 rated", "Remote monitoring"],
    industries: ["Shipping", "Fishing", "Ports"]
  },
  {
    slug: "warehouse",
    title: "Warehouse & Distribution",
    description: "Large-scale sensor deployments for distribution centers with multi-zone management and integration capabilities.",
    icon: Building2,
    features: ["Multi-zone mapping", "ERP integration", "Scalable architecture"],
    industries: ["3PL", "Cold Storage", "Distribution"]
  },
  {
    slug: "retail",
    title: "Retail Frozen Food & Grocery",
    description: "Protect your store inventory with automated monitoring of display cases, freezers, and back-of-house refrigeration.",
    icon: ShoppingCart,
    features: ["Store-wide coverage", "Energy optimization", "Loss prevention"],
    industries: ["Supermarkets", "Convenience Stores", "Food Service"]
  }
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" }
        ]}
        headline="IoT Monitoring Solutions"
        subtext="From walk-in coolers to reefer containers, our enterprise-grade sensors and cloud platform protect temperature-sensitive products across the entire supply chain."
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Technology", href: "/technology" }}
        pattern="grid"
      />

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={solution.slug}
                  className={`grid md:grid-cols-2 gap-8 items-center p-8 bg-card border border-border/50 rounded-2xl ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`space-y-6 ${!isEven ? 'md:order-2' : ''}`}>
                    <div className="p-4 bg-primary/10 rounded-xl w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-3">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {solution.industries.map((industry) => (
                        <span 
                          key={industry}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>

                    <Button asChild size="lg" className="mt-4">
                      <Link href={`/solutions/${solution.slug}`}>
                        Explore {solution.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={`${!isEven ? 'md:order-1' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-border/50 flex items-center justify-center">
                      <Icon className="h-24 w-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not sure which solution fits your needs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team will assess your requirements and recommend the optimal monitoring configuration for your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/technology">View Technology Specs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
