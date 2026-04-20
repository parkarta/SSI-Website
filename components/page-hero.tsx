"use client"

import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[]
  eyebrow?: string
  headline: string
  subtext: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  pattern?: "grid" | "wave" | "dots" | "lines"
}

export function PageHero({ 
  breadcrumbs, 
  eyebrow,
  headline, 
  subtext, 
  primaryCta, 
  secondaryCta,
  pattern = "grid" 
}: PageHeroProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        {pattern === "grid" && (
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        )}
        {pattern === "wave" && (
          <svg className="absolute bottom-0 w-full h-48 text-primary/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,197.3C672,224,768,224,864,202.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        )}
        {pattern === "dots" && (
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />
        )}
        {pattern === "lines" && (
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(14, 165, 233, 0.05) 10px,
                rgba(14, 165, 233, 0.05) 20px
              )`
            }}
          />
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <Breadcrumb items={breadcrumbs} />
          
          {eyebrow && (
            <span className="mt-6 inline-block text-xs font-semibold tracking-widest text-primary uppercase">
              {eyebrow}
            </span>
          )}
          
          <h1 className={`${eyebrow ? 'mt-3' : 'mt-6'} text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance`}>
            {headline}
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
            {subtext}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button asChild variant="outline" size="lg" className="border-border/50 hover:bg-card">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
