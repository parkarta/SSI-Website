import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ValueSection } from "@/components/value-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ProductSection } from "@/components/product-section"
import { IndustriesSection } from "@/components/industries-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTABanner } from "@/components/cta-banner"
import { SustainabilitySection } from "@/components/sustainability-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ValueSection />
      <SolutionsSection />
      <ProductSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTABanner />
      <SustainabilitySection />
      <Footer />
    </main>
  )
}
