"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const solutions = [
  { name: "Cold Chain Monitoring", href: "/solutions/cold-chain-monitoring", description: "Walk-ins, freezers, chillers" },
  { name: "Warehouse & Storage", href: "/solutions/warehouse", description: "Large-scale multi-sensor deployments" },
  { name: "Pharmaceutical", href: "/solutions/pharmaceutical", description: "GDP-compliant vaccine monitoring" },
  { name: "Maritime & Vessel", href: "/solutions/maritime", description: "Remote shipping container sensors" },
  { name: "Retail Frozen Food", href: "/solutions/retail", description: "Shelf and display case monitoring" },
]

const industries = [
  { name: "Grocery & Supermarkets", href: "/solutions/retail" },
  { name: "Pharmacies", href: "/solutions/pharmaceutical" },
  { name: "Food Service", href: "/solutions/cold-chain-monitoring" },
  { name: "Cold Storage", href: "/solutions/warehouse" },
  { name: "Logistics & Delivery", href: "/solutions/maritime" },
]

const LOGO_ICON_PX = 24

const services = [
  { name: "Core Services", href: "/services#core-services", description: "Installation, calibration, validation" },
  { name: "WhatsApp Care", href: "/services#managed-care", description: "Business hours support" },
  { name: "TotalCare", href: "/services#managed-care", description: "Quarterly reviews & proactive alerts" },
  { name: "UltraCare", href: "/services#managed-care", description: "24/7 support & dedicated manager" },
  { name: "UltraCare + Compliance", href: "/services#managed-care", description: "Full compliance partnership" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B1120]/95 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="relative">
            <svg
              width={LOGO_ICON_PX}
              height={LOGO_ICON_PX}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0"
              aria-hidden
            >
              <path
                d="M24 8L36 16V32L24 40L12 32V16L24 8Z"
                stroke="url(#sensorytics-nav-logo-gradient)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="6"
                fill="url(#sensorytics-nav-logo-gradient)"
                className="opacity-80"
              />
              <line
                x1="24"
                y1="4"
                x2="24"
                y2="12"
                stroke="url(#sensorytics-nav-logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="24"
                y1="36"
                x2="24"
                y2="44"
                stroke="url(#sensorytics-nav-logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="6"
                y1="14"
                x2="13"
                y2="18"
                stroke="url(#sensorytics-nav-logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="35"
                y1="30"
                x2="42"
                y2="34"
                stroke="url(#sensorytics-nav-logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="6"
                y1="34"
                x2="13"
                y2="30"
                stroke="url(#sensorytics-nav-logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="35"
                y1="18"
                x2="42"
                y2="14"
                stroke="url(#sensorytics-nav-logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="sensorytics-nav-logo-gradient"
                  x1="4"
                  y1="4"
                  x2="44"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00D4FF" />
                  <stop offset="1" stopColor="#0091B3" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 bg-primary/20 blur-lg" />
          </div>
          <span className="text-xl font-bold text-foreground">Sensorytics</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu
            viewport={false}
            delayDuration={0}
            className="relative z-50"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4 bg-card border border-border">
                    {solutions.map((solution) => (
                      <li key={solution.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={solution.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted"
                          >
                            <div className="text-sm font-medium text-foreground">{solution.name}</div>
                            <p className="text-xs text-muted-foreground mt-1">{solution.description}</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-1 p-4 bg-card border border-border">
                    {industries.map((industry) => (
                      <li key={industry.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={industry.href}
                            className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted text-foreground"
                          >
                            {industry.name}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4 bg-card border border-border">
                    {services.map((service) => (
                      <li key={service.name}>
                        <NavigationMenuLink asChild>
                          <a
                            href={service.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted"
                          >
                            <div className="text-sm font-medium text-foreground">{service.name}</div>
                            <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="border-t border-border mt-2 pt-2">
                      <NavigationMenuLink asChild>
                        <a
                          href="/services"
                          className="block select-none rounded-md p-3 text-sm font-medium text-primary hover:bg-muted"
                        >
                          View All Services →
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/technology" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Technology
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            <a href="/contact">Request a Demo</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-card border-border">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 mt-8">
              <a href="/" className="text-lg font-medium text-foreground" onClick={() => setMobileOpen(false)}>Home</a>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Solutions</p>
                <div className="flex flex-col gap-2 pl-4">
                  {solutions.map((solution) => (
                    <a key={solution.name} href={solution.href} className="text-sm text-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
                      {solution.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Industries</p>
                <div className="flex flex-col gap-2 pl-4">
                  {industries.map((industry) => (
                    <a key={industry.name} href={industry.href} className="text-sm text-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
                      {industry.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Services</p>
                <div className="flex flex-col gap-2 pl-4">
                  {services.map((service) => (
                    <a key={service.name} href={service.href} className="text-sm text-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/technology" className="text-lg font-medium text-foreground" onClick={() => setMobileOpen(false)}>Technology</a>
              <a href="/industries" className="text-lg font-medium text-foreground" onClick={() => setMobileOpen(false)}>Industries</a>
              <a href="/about" className="text-lg font-medium text-foreground" onClick={() => setMobileOpen(false)}>About</a>
              <a href="/contact" className="text-lg font-medium text-foreground" onClick={() => setMobileOpen(false)}>Contact</a>

              <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Request a Demo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
