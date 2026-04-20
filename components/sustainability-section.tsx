"use client"

import { Leaf, Recycle } from "lucide-react"

export function SustainabilitySection() {
  return (
    <section className="w-full py-24 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 text-primary mb-6">
            <Leaf className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Sustainability</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sustainability Matters
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Sensorytics helps businesses reduce food waste, lower carbon footprint, and align with global sustainability goals. We are proud supporters of UN SDG-12: Responsible Consumption and Production.
          </p>

          {/* SDG Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3 px-6 py-4 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SDG</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">UN SDG-12</p>
                <p className="text-sm font-semibold text-foreground">Responsible Consumption</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-4 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Waste Reduction</p>
                <p className="text-sm font-semibold text-foreground">Zero Food Loss Initiative</p>
              </div>
            </div>
          </div>

          <p className="text-primary font-semibold">
            Reducing food waste, one sensor at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
