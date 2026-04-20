"use client"

import { Wifi, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"

const solutionLinks = [
  { name: "Cold Chain Monitoring", href: "/solutions/cold-chain-monitoring" },
  { name: "Pharmaceutical Storage", href: "/solutions/pharmaceutical" },
  { name: "Maritime & Vessel", href: "/solutions/maritime" },
  { name: "Warehouse & Distribution", href: "/solutions/warehouse" },
  { name: "Retail Frozen Food", href: "/solutions/retail" },
]

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technology", href: "/technology" },
  { name: "Resellers & Partners", href: "/contact" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#0B1120] border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo & Socials */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2">
              <div className="relative">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Sensorytics</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise-grade IoT temperature monitoring for food, pharma, and logistics — protecting what matters most, 24/7.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/sensorytics" className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a> */}
            </div>
          </div>

          {/* Column 2 - Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Labuan, Malaysia
                </span>
              </li>
              <li>
                <a href="tel:+60XXXXXXXX" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  +60 11-1430-0120
                </a>
              </li>
              <li>
                <a href="mailto:hello@sensorytics.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  hello@sensorytics.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Sensorytics Solutions Inc. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="/privacy#cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
