"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, Mail } from "lucide-react"
import { whatsappUrlForSummary } from "@/lib/lead-whatsapp"

const LOCATION_LABELS: Record<string, string> = {
  "1": "1 location",
  "2-5": "2–5 locations",
  "6-20": "6–20 locations",
  "21-50": "21–50 locations",
  "50+": "50+ locations",
}

function buildQuoteSummary(formData: {
  name: string
  company: string
  email: string
  phone: string
  locations: string
  message: string
}) {
  const loc =
    (formData.locations && LOCATION_LABELS[formData.locations]) ||
    formData.locations ||
    "—"
  return [
    "Hello Sensorytics,",
    "",
    "I would like a quote. Here are my details:",
    "",
    `Name: ${formData.name}`,
    `Company: ${formData.company}`,
    `Email: ${formData.email}`,
    `Phone / WhatsApp: ${formData.phone || "—"}`,
    `Locations: ${loc}`,
    "",
    "Message:",
    formData.message || "—",
  ].join("\n")
}

interface SolutionCTAProps {
  headline?: string
  subtext?: string
}

export function SolutionCTA({ 
  headline = "Ready to Protect Your Cold Chain?",
  subtext = "Get a customised quote based on your number of sensors and locations."
}: SolutionCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    locations: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/solution-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = (await res.json().catch(() => ({}))) as {
        error?: string
      }

      if (!res.ok) {
        toast.error(data.error ?? "Could not send your request. Please try again.")
        window.open(whatsappUrlForSummary(buildQuoteSummary(formData)), "_blank", "noopener,noreferrer")
        toast.message("WhatsApp opened", {
          description: "We could not email automatically — please send the message in WhatsApp.",
        })
        return
      }

      toast.success("Request sent", {
        description: "Opening WhatsApp with your details so you can message us directly.",
      })
      window.open(whatsappUrlForSummary(buildQuoteSummary(formData)), "_blank", "noopener,noreferrer")

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        locations: "",
        message: "",
      })
    } catch {
      toast.error("Network error", {
        description: "Check your connection, or contact us on WhatsApp.",
      })
      window.open(whatsappUrlForSummary(buildQuoteSummary(formData)), "_blank", "noopener,noreferrer")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{headline}</h2>
            <p className="text-muted-foreground mb-8">{subtext}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company *</label>
                  <Input 
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone / WhatsApp</label>
                  <Input 
                    placeholder="+60 12-345-6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Number of Locations</label>
                <Select
                  value={formData.locations || undefined}
                  onValueChange={(value) =>
                    setFormData({ ...formData, locations: value })
                  }
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 location</SelectItem>
                    <SelectItem value="2-5">2-5 locations</SelectItem>
                    <SelectItem value="6-20">6-20 locations</SelectItem>
                    <SelectItem value="21-50">21-50 locations</SelectItem>
                    <SelectItem value="50+">50+ locations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="bg-background"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send My Request"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:sticky lg:top-32">
            <h3 className="text-xl font-semibold mb-6">Prefer to Talk Directly?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp / Phone</p>
                  <p className="text-muted-foreground">+60 11 1430 0120</p>
                  <p className="text-sm text-muted-foreground mt-1">We respond on WhatsApp within hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hello@sensorytics.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Response within 1 business day</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-card border border-border/50 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Office Hours:</span><br />
                Monday – Friday, 9am – 6pm MYT<br /><br />
                <span className="font-medium text-foreground">ASEAN HQ:</span> Labuan, Malaysia<br />
                <span className="font-medium text-foreground">Middle East:</span> asif@sensorytics.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
