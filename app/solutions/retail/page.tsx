"use client"

import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SolutionCTA } from "@/components/solution-cta"
import { RelatedSolutions } from "@/components/related-solutions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { 
  ShoppingCart, 
  DollarSign, 
  Percent,
  Moon,
  Wifi,
  Monitor,
  FileCheck,
  Wrench,
  Package,
  CreditCard,
  Quote,
  Calculator
} from "lucide-react"

const costStats = [
  { icon: DollarSign, value: "$100,000+", label: "Average grocery store inventory loss from a single major freezer failure" },
  { icon: Percent, value: "30-40%", label: "Food waste attributable to cold chain failures globally" },
  { icon: Moon, value: "Overnight", label: "Most catastrophic failures occur outside business hours" }
]

const howWeProtect = [
  {
    step: "01",
    title: "Sensors on every unit",
    description: "Install wireless sensors on display cases, walk-ins, and freezers in under an hour"
  },
  {
    step: "02",
    title: "24/7 automated monitoring",
    description: "Readings every 60 seconds, even when the store is closed"
  },
  {
    step: "03",
    title: "Instant alerts to your team",
    description: "WhatsApp and SMS to store manager and owner the moment a threshold is breached"
  }
]

const features = [
  { icon: Moon, title: "After-Hours Monitoring", description: "Most failures happen overnight or on weekends" },
  { icon: Monitor, title: "Multi-Unit Store Overview", description: "See all display cases on one screen" },
  { icon: FileCheck, title: "Food Safety Compliance Logs", description: "Ready for health authority inspections" },
  { icon: Wrench, title: "Equipment Health Alerts", description: "Predict compressor failure before product is lost" },
  { icon: Package, title: "Easy Self-Installation", description: "Peel-and-stick sensors, no electrician required" },
  { icon: CreditCard, title: "Affordable Monthly SaaS", description: "ROI achieved within months" }
]

const testimonials = [
  {
    quote: "Saved a $25,000 Meat Loss — Our system flagged a late night freezer failure. We moved the product to our backup unit and saved everything.",
    author: "Store Owner",
    company: "Independent Grocer, Malaysia"
  },
  {
    quote: "Health inspections used to be stressful. Now I just print the Sensorytics report and hand it over. Zero findings in 2 years.",
    author: "Store Manager",
    company: "Supermarket Chain, Philippines"
  }
]

export default function RetailPage() {
  const [units, setUnits] = useState([10])
  const [inventoryValue, setInventoryValue] = useState(5000)
  
  const annualRisk = units[0] * inventoryValue * 0.15 // 15% annual risk factor
  const monthsToROI = Math.max(1, Math.round(3 / (annualRisk / (units[0] * 50 * 12)))) // Simplified ROI calculation

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/#solutions" },
            { label: "Retail Frozen Food" }
          ]}
          headline="Protect Your Frozen Food Aisle — Automatically"
          subtext="From display cases to walk-in freezers, Sensorytics monitors every unit in your grocery or convenience store 24/7. Stop food waste. Pass every inspection. Protect your reputation."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "Calculate Your ROI", href: "#roi-calculator" }}
          pattern="dots"
        />

        {/* Cost of Temperature Failures */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The Cost of Temperature Failures
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A single failure can wipe out months of profit
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {costStats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={i}
                    className="p-8 bg-card border border-border/50 rounded-xl text-center"
                  >
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How We Protect Your Store */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              How We Protect Your Store
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Three simple steps to 24/7 protection
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              
              {howWeProtect.map((item, i) => (
                <div key={i} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-6 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Features for Retail
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Built specifically for grocery stores and convenience retailers
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

        {/* ROI Calculator */}
        <section id="roi-calculator" className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Calculate Your Payback Period
                </h2>
                <p className="text-muted-foreground">
                  See how quickly Sensorytics pays for itself
                </p>
              </div>
              
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <div className="space-y-8">
                  {/* Units Slider */}
                  <div>
                    <label className="block text-sm font-medium mb-4">
                      Number of freezer/chiller units: <span className="text-primary font-bold">{units[0]}</span>
                    </label>
                    <Slider
                      value={units}
                      onValueChange={setUnits}
                      min={1}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>1</span>
                      <span>50</span>
                    </div>
                  </div>
                  
                  {/* Inventory Value */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Average inventory value per unit (USD)
                    </label>
                    <Input
                      type="number"
                      value={inventoryValue}
                      onChange={(e) => setInventoryValue(Number(e.target.value) || 0)}
                      min={0}
                      className="bg-background"
                    />
                  </div>
                  
                  {/* Results */}
                  <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border/50">
                    <div className="text-center p-6 bg-background rounded-xl">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ${annualRisk.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Estimated annual risk exposure
                      </div>
                    </div>
                    <div className="text-center p-6 bg-background rounded-xl">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {monthsToROI} months
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Estimated time to ROI
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Most stores achieve full ROI within 3-6 months.
                  </p>
                  
                  <Button asChild className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <a href="/contact">Get Your Custom Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Retailers Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-xl p-8">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedSolutions currentSlug="retail" />
        
        <SolutionCTA 
          headline="Ready to Protect Your Store?"
          subtext="Get a customised quote for your retail location."
        />
      </main>
      
      <Footer />
    </div>
  )
}
