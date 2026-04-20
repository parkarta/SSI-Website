"use client"

import { Snowflake, Pill, Ship, Warehouse, Store, ArrowRight } from "lucide-react"

const solutions = [
  {
    icon: Snowflake,
    title: "Cold Chain Monitoring",
    description: "Comprehensive monitoring for walk-ins, freezers, and chillers with real-time alerts.",
    link: "/solutions/cold-chain-monitoring"
  },
  {
    icon: Pill,
    title: "Pharmaceutical Storage",
    description: "GDP-compliant vaccine and drug monitoring with complete audit trails.",
    link: "/solutions/pharmaceutical"
  },
  {
    icon: Ship,
    title: "Maritime & Vessel",
    description: "Remote sensor monitoring for shipping containers across global routes.",
    link: "/solutions/maritime"
  },
  {
    icon: Warehouse,
    title: "Warehouse & Distribution",
    description: "Large-scale multi-sensor deployments for distribution centers.",
    link: "/solutions/warehouse"
  },
  {
    icon: Store,
    title: "Retail Frozen Food",
    description: "Shelf and display case monitoring to ensure product quality at point of sale.",
    link: "/solutions/retail"
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="w-full py-24 bg-card">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Temperature and humidity monitored every 60 seconds. Peace of mind plus proven ROI.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {solutions.map((solution, index) => (
            <a
              key={index}
              href={solution.link}
              className="group flex flex-col p-6 bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <solution.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">{solution.description}</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
