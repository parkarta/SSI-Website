"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#0c1829] via-[#0f1f35] to-[#0B1120] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0EA5E9 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Start Now. Every Hour of Delay Is a Risk.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Join hundreds of businesses protecting their cold chain with Sensorytics.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold px-8">
              <Phone className="mr-2 h-5 w-5" />
              Speak With an Expert
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
