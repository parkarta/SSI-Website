import Link from "next/link"
import { ArrowRight, Thermometer, Anchor, ShoppingCart, Building2, Pill, Truck } from "lucide-react"

const allSolutions = [
  {
    slug: "cold-chain-monitoring",
    title: "Cold Chain Monitoring",
    description: "End-to-end temperature tracking from warehouse to retail",
    icon: Thermometer
  },
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical Storage",
    description: "GDP-compliant monitoring for vaccines and medications",
    icon: Pill
  },
  {
    slug: "maritime",
    title: "Maritime & Vessel",
    description: "Rugged IoT monitoring for ships and port facilities",
    icon: Anchor
  },
  {
    slug: "warehouse",
    title: "Warehouse & Distribution",
    description: "Large-scale deployment for distribution centers",
    icon: Building2
  },
  {
    slug: "retail",
    title: "Retail Frozen Food",
    description: "Protect your grocery store freezers and display cases",
    icon: ShoppingCart
  },
  {
    slug: "transport",
    title: "Transport & Logistics",
    description: "In-transit monitoring for delivery vehicles",
    icon: Truck
  }
]

interface RelatedSolutionsProps {
  currentSlug: string
  title?: string
}

export function RelatedSolutions({ currentSlug, title = "Related Solutions" }: RelatedSolutionsProps) {
  const related = allSolutions
    .filter(s => s.slug !== currentSlug)
    .slice(0, 3)

  return (
    <section className="py-16 md:py-24 border-t border-border/50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((solution) => {
            const Icon = solution.icon
            return (
              <Link 
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
