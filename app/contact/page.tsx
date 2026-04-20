"use client"

import { useState } from "react"
import { toast } from "sonner"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Linkedin,
  Twitter,
} from "lucide-react"
import { whatsappUrlForSummary } from "@/lib/lead-whatsapp"

const countries = [
  "Malaysia",
  "Saudi Arabia", 
  "Indonesia",
  "Philippines",
  "Singapore",
  "Other"
]

const industries = [
  "Grocery",
  "Pharmacy",
  "Cold Storage",
  "Restaurant",
  "Maritime",
  "Warehouse",
  "Other"
]

const sensorRanges = [
  "1-5",
  "6-20",
  "21-50",
  "51-200",
  "200+"
]

const faqs = [
  {
    question: "How long does installation take?",
    answer: "Most deployments are completed in 1-4 hours depending on site size. Our team handles everything from sensor placement to dashboard configuration."
  },
  {
    question: "Do I need WiFi or power for the sensors?",
    answer: "Depends. Our sensors are fully wireless. LoRaWAN sensors have 10-year battery with no power required or 2-year battery with WiFi sensor and no electrical work required. For LTE/4G gateway, we need a power source."
  },
  {
    question: "What happens if the internet goes down?",
    answer: "Sensors continue logging locally. Data syncs to the cloud when connectivity is restored — no gaps in compliance records."
  },
  {
    question: "Can I monitor multiple locations?",
    answer: "Yes. The Sensorytics dashboard supports unlimited sites and locations under a single account with role-based access controls."
  },
  {
    question: "Is there a contract or can I pay monthly?",
    answer: "We offer both monthly and annual subscription options. Annual plans include a discount. Contact us for pricing details."
  },
  {
    question: "Do you support WhatsApp alerts?",
    answer: "Yes. WhatsApp is our primary alert channel — ideal for fast response with high open rates. We also support SMS and email alerts."
  },
  {
    question: "How accurate are the temperature readings?",
    answer: "Our TxH-Pro sensors have ±0.3°C temperature accuracy and ±2% humidity accuracy, meeting industrial and compliance standards."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide local support in every market we serve. Response times are typically within hours via WhatsApp or email. Enterprise clients receive dedicated support contacts."
  }
]

function humanizeSelectValue(s: string) {
  if (!s.trim()) return "—"
  return s
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ")
}

function buildContactSummary(formData: {
  name: string
  company: string
  email: string
  phone: string
  country: string
  industry: string
  sensors: string
  message: string
}) {
  const sensorsLine = formData.sensors
    ? `${formData.sensors} sensors`
    : "—"
  return [
    "Hello Sensorytics,",
    "",
    "I submitted the contact form on your website:",
    "",
    `Name: ${formData.name}`,
    `Company: ${formData.company}`,
    `Email: ${formData.email}`,
    `Phone / WhatsApp: ${formData.phone || "—"}`,
    `Country / region: ${humanizeSelectValue(formData.country)}`,
    `Industry: ${humanizeSelectValue(formData.industry)}`,
    `Sensors needed: ${sensorsLine}`,
    "",
    "Message / requirements:",
    formData.message || "—",
  ].join("\n")
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    sensors: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = (await res.json().catch(() => ({}))) as {
        error?: string
      }

      if (!res.ok) {
        toast.error(data.error ?? "Could not send your request. Please try again.")
        window.open(
          whatsappUrlForSummary(buildContactSummary(formData)),
          "_blank",
          "noopener,noreferrer",
        )
        toast.message("WhatsApp opened", {
          description:
            "We could not email automatically — please send the message in WhatsApp.",
        })
        return
      }

      toast.success("Request sent", {
        description:
          "Opening WhatsApp with your details so you can message us directly.",
      })
      window.open(
        whatsappUrlForSummary(buildContactSummary(formData)),
        "_blank",
        "noopener,noreferrer",
      )

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        industry: "",
        sensors: "",
        message: "",
      })
    } catch {
      toast.error("Network error", {
        description: "Check your connection, or contact us on WhatsApp.",
      })
      window.open(
        whatsappUrlForSummary(buildContactSummary(formData)),
        "_blank",
        "noopener,noreferrer",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" }
          ]}
          headline="Let's Talk About Your Cold Chain"
          subtext="Whether you need a quote, a demo, or just want to ask a question — our team responds within 1 business day."
          primaryCta={{ label: "Call Us Now", href: "tel:+601114300120" }}
          pattern="dots"
        />

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-2">Request a Quote or Demo</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we&apos;ll get back to you within 1 business day.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <Input 
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Company Name <span className="text-primary">*</span>
                        </label>
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
                        <label className="block text-sm font-medium mb-2">
                          Email Address <span className="text-primary">*</span>
                        </label>
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
                        <label className="block text-sm font-medium mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <Input 
                          placeholder="+60 12-345-6789"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-background"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Country / Region
                        </label>
                        <Select
                          value={formData.country || undefined}
                          onValueChange={(value) =>
                            setFormData({ ...formData, country: value })
                          }
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country.toLowerCase()}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Industry
                        </label>
                        <Select
                          value={formData.industry || undefined}
                          onValueChange={(value) =>
                            setFormData({ ...formData, industry: value })
                          }
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry.toLowerCase()}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Number of Sensors Needed
                      </label>
                      <Select
                        value={formData.sensors || undefined}
                        onValueChange={(value) =>
                          setFormData({ ...formData, sensors: value })
                        }
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          {sensorRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range} sensors
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message / Additional Requirements
                      </label>
                      <Textarea 
                        placeholder="Tell us about your requirements, questions, or anything else..."
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
              
              {/* Contact Details */}
              <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">WhatsApp / Phone</p>
                        <p className="text-muted-foreground">+60 11 1430 0120</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">hello@sensorytics.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-muted-foreground">Labuan, Malaysia (ASEAN HQ)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-muted-foreground">Mon – Fri, 9am – 6pm MYT</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-card border border-border/50 rounded-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">We respond via WhatsApp</p>
                      <p className="text-sm text-muted-foreground">
                        Message us anytime — we typically respond within hours
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                    </a>
                  </Button>
                </div>
                
                <div className="p-6 bg-card border border-border/50 rounded-xl">
                  <p className="font-medium mb-2">Middle East Inquiries</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    For Saudi Arabia and GCC region
                  </p>
                  <a 
                    href="mailto:hello@sensorytics.com" 
                    className="text-primary hover:underline"
                  >
                    middleeast@sensorytics.com
                  </a>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/sensorytics" 
                    className="p-3 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                  </a>
                  {/* <a 
                    href="#" 
                    className="p-3 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-muted-foreground" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`faq-${i}`}
                    className="bg-card border border-border/50 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Map / Location Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Serving ASEAN and the Middle East
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  With headquarters in Malaysia and operations across the region, Sensorytics 
                  provides local support wherever you operate. Our team can visit your facility 
                  for deployment and training.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Malaysia", "Saudi Arabia", "Philippines", "Indonesia", "Singapore"].map((location, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
