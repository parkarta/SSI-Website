"use client"

import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopBar() {
  return (
    <div className="w-full bg-[#0B1120] border-b border-border/50 py-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:+60XXXXXXXX" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">+60 11-1430-0120</span>
          </a>
          <a href="mailto:hello@sensorytics.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">hello@sensorytics.com</span>
          </a>
        </div>
        <Button href="https://console.sensorytics.com/" variant="outline" size="sm" className="text-xs border-muted-foreground/30 text-muted-foreground hover:text-foreground hover:border-primary">
          Login to Dashboard
        </Button>
      </div>
    </div>
  )
}
