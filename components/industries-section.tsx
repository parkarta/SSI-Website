"use client"

import { ShoppingCart, Heart, UtensilsCrossed, Package, Anchor, Building2 } from "lucide-react"

const industries = [
  {
    icon: ShoppingCart,
    name: "Grocery & Supermarkets",
    description: "Protect perishables across all refrigerated sections with automated monitoring."
  },
  {
    icon: Heart,
    name: "Pharmacies & Healthcare",
    description: "GDP-compliant cold chain for vaccines, biologics, and temperature-sensitive medications."
  },
  {
    icon: UtensilsCrossed,
    name: "Food Service & Restaurants",
    description: "HACCP compliance made simple for commercial kitchens and food storage."
  },
  {
    icon: Package,
    name: "Cold Storage & Logistics",
    description: "Multi-zone monitoring for warehouses and distribution centers."
  },
  {
    icon: Anchor,
    name: "Maritime & Shipping",
    description: "Remote container monitoring for international cold chain logistics."
  },
  {
    icon: Building2,
    name: "Property & Facilities",
    description: "Building management integration for HVAC and refrigeration systems."
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="w-full py-24 bg-card">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Your Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored solutions for every cold chain challenge.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{industry.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
