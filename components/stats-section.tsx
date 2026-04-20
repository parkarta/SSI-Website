"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, Clock, Zap, Globe } from "lucide-react"

const stats = [
  { icon: Cpu, value: 5000, suffix: "+", label: "Sensors Deployed" },
  { icon: Clock, value: 99.9, suffix: "%", label: "Platform Uptime", decimals: 1 },
  { icon: Zap, value: 1, prefix: "< ", suffix: " Min", label: "Alert Response Time" },
  { icon: Globe, value: 0, label: "ASEAN + Middle East", customText: "Markets Served" },
]

function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0, customText }: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
  customText?: string;
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  if (customText) {
    return (
      <div ref={ref} className="text-3xl md:text-4xl font-bold text-foreground">
        ASEAN + Middle East
      </div>
    )
  }

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-foreground">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="w-full py-16 bg-card border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-2">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <AnimatedCounter 
                value={stat.value} 
                prefix={stat.prefix} 
                suffix={stat.suffix} 
                decimals={stat.decimals}
                customText={stat.customText}
              />
              <p className="text-sm text-muted-foreground">{stat.customText || stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
