"use client"

import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  // {
  //   quote: "$100,000 in Product Saved — A freezer failure overnight triggered our alert. We called the utility company from 1 hour away and had power restored before any spoilage.",
  //   author: "Operations Manager",
  //   location: "Malaysia",
  //   rating: 5
  // },
  // {
  //   quote: "Compliance Made Easy — GDP audit documentation is now automatic. Our pharmacy passed inspection with zero findings.",
  //   author: "Pharmacy Owner",
  //   location: "Kuala Lumpur",
  //   rating: 5
  // },
  // {
  //   quote: "Predictive Alert Saved Our Condenser — Sensorytics flagged abnormal cooling behavior. A $500 repair prevented a $10,000 compressor replacement.",
  //   author: "Cold Store Manager",
  //   location: "Labuan",
  //   rating: 5
  // },
  {
    quote: "Deployed Across 4000 Sites — The team handled our entire rollout. The platform dashboard gives us full visibility across all locations.",
    author: "Supply Chain Director - Almarai",
    location: "Saudi Arabia",
    rating: 5
  },
]

const isSingleTestimonial = testimonials.length === 1

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-24 bg-background overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exceptional Results, Proven.
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from businesses that trust Sensorytics to protect their cold chain.
          </p>
        </div>

        {/* Testimonials Grid - Scrollable on mobile */}
        <div
          className={cn(
            "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 lg:pb-0 lg:snap-none lg:mx-0 lg:px-0",
            isSingleTestimonial
              ? "justify-center lg:justify-center"
              : "lg:grid lg:grid-cols-4",
          )}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 snap-center bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
                isSingleTestimonial
                  ? "w-[min(100%,42rem)] lg:max-w-2xl"
                  : "w-80 lg:w-auto",
              )}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                <p className="text-foreground leading-relaxed pl-4">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
