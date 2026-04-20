"use client"

import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import {
  Wrench,
  CheckCircle,
  Map,
  ShieldCheck,
  GraduationCap,
  Layers,
  Star,
  MessageCircle,
  RefreshCw,
  Award,
  SlidersHorizontal,
  ClipboardCheck,
  Phone,
  ClipboardList,
  Thermometer,
  ShoppingCart,
  Utensils,
  Warehouse,
  Ship,
  Building,
  Check,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const coreServices = [
  {
    icon: Wrench,
    title: "Installation",
    description: "Expert setup tailored to your facility layout. Our engineers conduct a pre-deployment site survey, identify optimal sensor placement for maximum coverage, and complete full commissioning — so your system is live and verified from day one.",
    tags: ["On-Site", "Certified Engineers", "Same-Day Go-Live"],
  },
  {
    icon: SlidersHorizontal,
    title: "Sensor Calibration",
    description: "Factory and field calibration performed by the team that built your sensors. All calibrations are traceable to international standards, with calibration certificates issued for every device — accepted by NPRA, HACCP, and GDP auditors.",
    tags: ["Traceable Certificates", "GDP Compliant", "NPRA Ready"],
  },
  {
    icon: Map,
    title: "Site Mapping & Thermal Survey",
    description: "Comprehensive thermal mapping of your facility — walk-in freezers, chiller rooms, warehouse zones, and display areas. We identify hot spots, dead zones, and optimal sensor positions to ensure complete coverage with no gaps in your monitoring data.",
    tags: ["Thermal Analysis", "Zone Documentation", "Audit-Ready"],
  },
  {
    icon: ClipboardCheck,
    title: "Validation & Documentation",
    description: "IQ/OQ validation protocols executed by compliance specialists. We produce complete audit-ready documentation packages — sensor placement records, alarm threshold justifications, deviation logs, and GDP/HACCP compliance reports — ready for any regulatory inspection.",
    tags: ["IQ/OQ Protocols", "GDP/HACCP", "Inspection-Ready"],
  },
  {
    icon: GraduationCap,
    title: "Team Training",
    description: "Expert-led onboarding sessions for your operations and compliance teams. We cover dashboard navigation, alert response procedures, report generation, and escalation protocols — so your team is confident and self-sufficient from week one.",
    tags: ["On-Site or Remote", "Dashboard Training", "Compliance SOPs"],
  },
]

const managedCareTiers = [
  {
    name: "WhatsApp Care",
    badge: "Essential",
    badgeColor: "bg-muted text-muted-foreground",
    icon: MessageCircle,
    description: "Direct WhatsApp access to Sensorytics support specialists during business hours. Fast response to alerts, sensor questions, and dashboard issues — without raising a ticket or waiting on email.",
    features: [
      "Business hours WhatsApp support",
      "Alert troubleshooting",
      "Sensor health checks (remote)",
      "Monthly system summary report",
    ],
    highlight: false,
  },
  {
    name: "TotalCare",
    badge: "Popular",
    badgeColor: "bg-primary text-primary-foreground",
    icon: RefreshCw,
    description: "Ongoing guidance and scheduled service activities to keep your system fully compliant year-round. Includes quarterly calibration checks, compliance report reviews, and proactive alerts when sensors show anomalous readings.",
    features: [
      "Everything in WhatsApp Care",
      "Quarterly remote calibration review",
      "Proactive equipment health alerts (AI)",
      "Quarterly compliance report review",
      "Annual sensor health audit",
    ],
    highlight: true,
  },
  {
    name: "UltraCare",
    badge: "Premium",
    badgeColor: "bg-amber-500 text-amber-950",
    icon: ShieldCheck,
    description: "White-glove support with dedicated account management, 24/7 WhatsApp and phone access, on-site annual service visits, and unlimited remote assistance. Built for pharmaceutical, GDP-regulated, and multi-site enterprise clients.",
    features: [
      "Everything in TotalCare",
      "24/7 WhatsApp + phone support",
      "Dedicated account manager",
      "Annual on-site service visit",
      "Unlimited remote assistance",
      "Priority hardware replacement SLA",
    ],
    highlight: false,
  },
  {
    name: "UltraCare + Compliance",
    badge: "Enterprise",
    badgeColor: "bg-purple-500 text-white",
    icon: Award,
    description: "The most comprehensive Sensorytics service tier. Combines all UltraCare benefits with annual re-validation, regulatory inspection readiness reviews, and a dedicated compliance specialist assigned to your account — ideal for pharmaceutical chains, hospital networks, and large food distributors.",
    features: [
      "Everything in UltraCare",
      "Annual IQ/OQ re-validation",
      "Regulatory inspection readiness audit",
      "Dedicated compliance specialist",
      "Custom SLA agreement",
      "Executive compliance dashboard",
    ],
    highlight: false,
    premium: true,
  },
]

const comparisonData = {
  support: [
    { feature: "WhatsApp Support", values: ["Business hours", "Business hours", "24/7", "24/7"] },
    { feature: "Phone Support", values: [false, false, true, true] },
    { feature: "Dedicated Account Manager", values: [false, false, true, true] },
    { feature: "Dedicated Compliance Specialist", values: [false, false, false, true] },
  ],
  monitoring: [
    { feature: "Remote Sensor Health Checks", values: [true, true, true, true] },
    { feature: "AI Predictive Equipment Alerts", values: [false, true, true, true] },
    { feature: "Monthly System Summary Report", values: [true, true, true, true] },
  ],
  compliance: [
    { feature: "Quarterly Calibration Review", values: [false, true, true, true] },
    { feature: "Annual On-Site Service Visit", values: [false, false, true, true] },
    { feature: "IQ/OQ Re-Validation (Annual)", values: [false, false, false, true] },
    { feature: "Inspection Readiness Audit", values: [false, false, false, true] },
  ],
  hardware: [
    { feature: "Hardware Replacement SLA", values: ["Standard", "Standard", "Priority", "Priority"] },
    { feature: "Unlimited Remote Assistance", values: [false, false, true, true] },
  ],
}

const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    icon: Phone,
    description: "We understand your facility, regulatory requirements, number of monitoring points, and compliance gaps.",
  },
  {
    step: 2,
    title: "Site Survey & Proposal",
    icon: ClipboardList,
    description: "Our engineers conduct a remote or on-site survey. You receive a detailed proposal with sensor layout, service tier recommendation, and pricing.",
  },
  {
    step: 3,
    title: "Installation & Commissioning",
    icon: Wrench,
    description: "Certified engineers deploy and commission your sensors. System is tested end-to-end before handover.",
  },
  {
    step: 4,
    title: "Training & Go-Live",
    icon: GraduationCap,
    description: "Your team is trained on the dashboard, alert response, and report generation. Go-live confirmed with a commissioning sign-off document.",
  },
  {
    step: 5,
    title: "Ongoing Care",
    icon: RefreshCw,
    description: "Your chosen Managed Care tier activates. Proactive monitoring, scheduled reviews, and expert support keep you compliant — indefinitely.",
  },
]

const industries = [
  { icon: Thermometer, name: "Pharmaceutical & Healthcare" },
  { icon: ShoppingCart, name: "Grocery & Supermarkets" },
  { icon: Utensils, name: "Food Service & Restaurants" },
  { icon: Warehouse, name: "Cold Storage & Logistics" },
  { icon: Ship, name: "Maritime & Vessel" },
  { icon: Building, name: "Property & Facilities" },
]

const faqItems = [
  {
    question: "Do you provide installation, or is it self-install?",
    answer: "Both options are available. Our certified engineers handle full installation for regulated environments. For smaller deployments (mini markets, small stores), self-install kits with video guidance are also available.",
  },
  {
    question: "Are your calibration certificates accepted by Malaysian health authorities?",
    answer: "Yes. Our calibration process follows internationally traceable standards and the certificates are formatted to meet NPRA, GDP, and HACCP audit requirements.",
  },
  {
    question: "Can you service clients outside Malaysia?",
    answer: "Yes. We have delivered installations across Malaysia, Saudi Arabia, and broader ASEAN. Remote services (calibration review, training, support) are available globally.",
  },
  {
    question: "What happens if a sensor fails after installation?",
    answer: "All sensors come with a hardware warranty. TotalCare and above tiers include a hardware replacement SLA. Our team will diagnose remotely and dispatch a replacement unit if needed.",
  },
  {
    question: "Can I upgrade my service tier later?",
    answer: "Absolutely. You can start with Core Services or WhatsApp Care and upgrade to a higher Managed Care tier at any time. No penalty, no new contract required.",
  },
  {
    question: "Do you offer training in Bahasa Malaysia or Arabic?",
    answer: "Yes. Training sessions are available in English, Bahasa Malaysia, and Arabic to support our ASEAN and Middle East clients.",
  },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showComparison, setShowComparison] = useState(false)

  const tierNames = ["WhatsApp Care", "TotalCare", "UltraCare", "UltraCare + Compliance"]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
        eyebrow="END-TO-END SUPPORT"
        headline="From Installation to Compliance — We Handle Everything"
        subtext="Sensorytics services are purpose-built for regulated environments and operational teams. Whether you need a quick deployment or a fully managed compliance program, our experts are with you at every step."
        primaryCta={{ label: "Speak to Our Experts", href: "/contact" }}
        secondaryCta={{ label: "Download Service Brochure", href: "#" }}
        pattern="grid"
      />

      {/* Intro Banner */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-balance">
              Built for Regulated Environments
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8">
              {[
                { icon: Wrench, label: "Installation" },
                { icon: CheckCircle, label: "Calibration" },
                { icon: Map, label: "Site Mapping" },
                { icon: ShieldCheck, label: "Validation" },
                { icon: GraduationCap, label: "Training" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Every Sensorytics deployment is backed by certified professionals who understand the compliance requirements of food safety, pharmaceutical storage, and cold chain logistics across ASEAN and the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Tier Service Structure */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Comprehensive Services Backed by Experts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Core Services Card */}
            <div className="bg-card border border-border rounded-2xl p-8 border-t-4 border-t-primary">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                  Foundation
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Core Services</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                The compliance essentials every cold chain facility requires. Our Core Services cover installation, calibration, site mapping, validation, and team training — delivered by certified Sensorytics engineers who know our hardware inside out.
              </p>
              <a href="#core-services" className="text-primary font-medium hover:underline">
                Explore Core Services ↓
              </a>
            </div>

            {/* Managed Care Card */}
            <div className="bg-card border border-border rounded-2xl p-8 border-t-4 border-t-primary">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                  Premium
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Managed Care Services</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                For operations that demand continuous oversight and zero compliance gaps. Our Managed Care tiers extend core services with proactive monitoring, dedicated account management, 24/7 WhatsApp support, and scheduled compliance reviews — fully tailored to your industry.
              </p>
              <a href="#managed-care" className="text-primary font-medium hover:underline">
                Explore Managed Care ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
              Compliance at the Core
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Experts Ensure Your Systems Are Always Compliant
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core Services form the foundation of every Sensorytics deployment. Designed for food, pharmaceutical, and logistics facilities that need reliable monitoring and audit-ready documentation from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {coreServices.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-primary text-sm font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {coreServices.slice(3).map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-primary text-sm font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          {/* Core Services CTA */}
          <div className="mt-12 bg-primary/10 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Ready to get started with Core Services?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/contact">Speak to an Expert</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#">Download Core Services Brochure</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Care Services Section */}
      <section id="managed-care" className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
              Premium Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ongoing Care for Complete System Confidence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For operations that cannot afford gaps in monitoring or compliance coverage. Sensorytics Managed Care Services extend your core deployment with proactive oversight, dedicated support, and scheduled compliance activities — tailored to your industry and regulatory environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {managedCareTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-card border rounded-xl p-6 relative ${
                  tier.highlight
                    ? "border-primary shadow-lg shadow-primary/10"
                    : tier.premium
                    ? "border-purple-500/50 bg-gradient-to-br from-card to-purple-950/20"
                    : "border-border"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${tier.badgeColor}`}>
                    {tier.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    tier.premium ? "bg-purple-500/20" : "bg-primary/10"
                  }`}>
                    <tier.icon className={`w-6 h-6 ${tier.premium ? "text-purple-400" : "text-primary"}`} />
                  </div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.premium ? "text-purple-400" : "text-primary"}`} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className={`font-medium hover:underline ${tier.premium ? "text-purple-400" : "text-primary"}`}>
                  View Details →
                </a>
              </div>
            ))}
          </div>

          {/* Comparison CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Not sure which tier is right for you?</p>
            <Button
              variant="outline"
              onClick={() => setShowComparison(!showComparison)}
              className="gap-2"
            >
              Compare All Service Tiers
              {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {showComparison && (
        <section className="py-12 bg-card/30">
          <div className="container">
            <h2 className="text-2xl font-bold text-center mb-8">Compare Service Tiers</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">Feature</th>
                    {tierNames.map((name, i) => (
                      <th key={name} className={`text-center py-4 px-4 ${i === 1 ? "bg-primary/5" : ""}`}>
                        <div className="font-bold text-foreground">{name}</div>
                        <Button size="sm" className="mt-2 text-xs" asChild>
                          <a href="/contact">Get Started</a>
                        </Button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Support Section */}
                  <tr className="bg-muted/30">
                    <td colSpan={5} className="py-3 px-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                      Support
                    </td>
                  </tr>
                  {comparisonData.support.map((row) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-3 px-4 text-sm">{row.feature}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className={`text-center py-3 px-4 ${i === 1 ? "bg-primary/5" : ""}`}>
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Monitoring Section */}
                  <tr className="bg-muted/30">
                    <td colSpan={5} className="py-3 px-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                      Monitoring
                    </td>
                  </tr>
                  {comparisonData.monitoring.map((row) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-3 px-4 text-sm">{row.feature}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className={`text-center py-3 px-4 ${i === 1 ? "bg-primary/5" : ""}`}>
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Compliance Section */}
                  <tr className="bg-muted/30">
                    <td colSpan={5} className="py-3 px-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                      Compliance
                    </td>
                  </tr>
                  {comparisonData.compliance.map((row) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-3 px-4 text-sm">{row.feature}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className={`text-center py-3 px-4 ${i === 1 ? "bg-primary/5" : ""}`}>
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Hardware Section */}
                  <tr className="bg-muted/30">
                    <td colSpan={5} className="py-3 px-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                      Hardware
                    </td>
                  </tr>
                  {comparisonData.hardware.map((row) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-3 px-4 text-sm">{row.feature}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className={`text-center py-3 px-4 ${i === 1 ? "bg-primary/5" : ""}`}>
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Expert Team Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">
                Our Team, Your Compliance Partner
              </h2>
              <p className="text-primary font-medium mb-6">
                Environmental Monitoring & Compliance Experts
              </p>
              <p className="text-muted-foreground mb-6">
                Sensorytics&apos; in-house services team combines deep expertise in IoT sensor deployment, cold chain compliance, and regulated industry operations across ASEAN and the Middle East.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>17+ years of IoT and software development experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Deployments across food, pharmaceutical, and maritime industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Familiar with NPRA, HACCP, GDP, WHO cold chain, and JAKIM halal requirements</span>
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Our team has personally overseen deployments of 5,000+ sensors across multi-site operations — including a 31-point GDP-compliant installation for a major Middle East food distributor. We do not just sell sensors. We are your compliance partner.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/contact">Talk to a Specialist</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { value: "5,000+", label: "Sensors deployed" },
                { value: "31-point", label: "Largest single deployment" },
                { value: "2 continents", label: "ASEAN + Middle East" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services Tailored to Your Industry
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
              >
                <industry.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            Each industry has unique regulatory requirements. Our team knows them all.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              From First Call to Full Compliance
            </h2>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-border" style={{ left: "10%", right: "10%" }} />
            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, i) => (
                <div key={step.step} className="relative text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4 relative z-10 bg-background">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-primary">{step.step}</div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl" />
              <div className="relative">
                <div className="text-5xl text-primary/30 mb-4">&quot;</div>
                <blockquote className="text-xl md:text-2xl font-medium mb-6 text-balance">
                  The Sensorytics team handled everything — site survey, sensor placement, commissioning, and staff training. We were live within a day. The compliance documentation was ready for our NPRA inspection within the same week.
                </blockquote>
                <cite className="text-muted-foreground not-italic">
                  — Pharmacy Owner, Kuala Lumpur, Malaysia
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Talk to a Specialist?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team responds within 1 business day. WhatsApp us for faster response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="/contact">Speak to an Expert</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <span>+60 11-1430-0120</span>
            <span className="mx-3">|</span>
            <span>hello@sensorytics.com</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
